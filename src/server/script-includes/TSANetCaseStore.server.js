/**
 * TSANetCaseStore - the one place a TSANet request (the API's CollaborationRequestStatusDTO)
 * becomes a TSANet Case record, with its notes and responses. Create TSANet Case, Accept and Reject,
 * and the sync all store through it, so a request is mapped the same way whichever path brought it in.
 *
 * Writes as the system: the table's create ACL is admin-only.
 */
var TSANetCaseStore = Class.create();
TSANetCaseStore.prototype = {
    TABLE: 'x_2256809_connect_case',

    initialize: function() {},

    NOTE_TABLE: 'x_2256809_connect_note',
    RESPONSE_TABLE: 'x_2256809_connect_response',
    ENCRYPTED_TEXT: 'Encrypted. Open it in TSANet to read it.',

    /**
     * Creates or updates the TSANet Case for dto.token, with its notes and responses.
     * hostSysId links a TSANet Case that has no case yet; an existing link is never changed.
     * direction is used when the DTO doesn't carry one.
     * Returns { sysId, number, inserted, updated, childFailed }, or null if the TSANet Case couldn't be
     * written. updated is also true when only a note or response changed. childFailed means a note or
     * response couldn't be stored; the TSANet Case itself was.
     */
    upsert: function(dto, hostSysId, direction) {
        var result = this._upsertCase(dto, hostSysId, direction);
        if (!result)
            return null;
        // On every path, also when the request itself is unchanged: a new note doesn't always change it.
        var children = this._storeChildren(result.sysId, dto);
        if (children.changed && !result.inserted)
            result.updated = true;
        result.childFailed = children.failed;
        return result;
    },

    _upsertCase: function(dto, hostSysId, direction) {
        var gr = this._find(dto.token);
        if (!gr) {
            gr = new GlideRecord(this.TABLE);
            gr.initialize();
            gr.setValue('token', dto.token);
            this._apply(gr, dto, hostSysId, direction);
            if (gr.insert())
                return this._result(gr, true, false);
            // Another run may have stored the same token first (unique index): update that one.
            gr = this._find(dto.token);
            if (!gr)
                return null;
        }
        // Write only what changed, so a sync that re-reads an unchanged request leaves it alone.
        // (GlideRecord.changes() isn't available to scoped apps, so compare the values.)
        var before = this._values(gr);
        this._apply(gr, dto, hostSysId, direction);
        if (this._values(gr) == before)
            return this._result(gr, false, false);
        return gr.update() ? this._result(gr, false, true) : null;
    },

    _apply: function(gr, dto, hostSysId, direction) {
        this._map(gr, dto, dto.direction || direction);
        if (hostSysId && !gr.getValue('host_record'))
            gr.setValue('host_record', hostSysId);
    },

    /** The record's own field values, for telling whether a mapping changed anything. */
    _values: function(gr) {
        var values = {};
        var elements = gr.getElements();
        for (var i = 0; i < elements.length; i++) {
            var name = elements[i].getName();
            // An empty field reads as null once saved but as '' right after _set, so both count as empty.
            if (name.indexOf('sys_') != 0)
                values[name] = String(gr.getValue(name) || '');
        }
        return JSON.stringify(values);
    },

    /** Notes by token and responses by id, linked to the TSANet Case. Returns { changed, failed }. */
    _storeChildren: function(caseSysId, dto) {
        var outcome = { changed: false, failed: false };
        var count = function(state) {
            outcome.changed = outcome.changed || state == 'changed';
            outcome.failed = outcome.failed || state == 'failed';
        };
        (dto.caseNotes || []).forEach(function(note) {
            if (!note || !note.token)
                return;
            // A removed note is never created; one already stored stays and shows it was removed.
            // A note missing from the answer isn't a deletion, so nothing is deleted.
            if (note.status == 'REMOVED')
                count(this._markRemoved(note.token));
            else {
                var pendingId = this._unknownOutboundNote(caseSysId, note);
                if (pendingId)
                    count(this.storeSentNote(pendingId, caseSysId, note) ? 'changed' : 'failed');
                else
                    count(this._upsertChild(this.NOTE_TABLE, 'token', note.token, function(gr) { this._mapNote(gr, caseSysId, note); }));
            }
        }, this);
        (dto.caseResponses || []).forEach(function(response) {
            if (response && response.id != null)
                count(this._upsertChild(this.RESPONSE_TABLE, 'response_id', String(response.id), function(gr) { this._mapResponse(gr, caseSysId, response); }));
        }, this);
        return outcome;
    },

    /** Finds the unique ambiguous outbound note represented by a note TSANet returned. */
    _unknownOutboundNote: function(caseSysId, note) {
        if (note.direction != 'OUTBOUND')
            return null;
        var type = note.type && note.type.code || '';
        var creatorName = String(note.creatorName || '').trim();
        var description = this._plain(note.description);
        var pending = new GlideRecord(this.NOTE_TABLE);
        pending.addQuery('tsanet_case', caseSysId);
        pending.addQuery('direction', 'OUTBOUND');
        pending.addQuery('send_state', 'UNKNOWN');
        pending.addQuery('summary', String(note.summary || ''));
        pending.addQuery('type', type);
        pending.addQuery('priority', String(note.priority || ''));
        pending.addQuery('creator_name', creatorName);
        pending.query();
        var match = null;
        while (pending.next()) {
            if (this._plain(pending.getValue('description')) != description)
                continue;
            if (match)
                return null;
            match = pending.getUniqueValue();
        }
        return match;
    },

    /** Inserts or updates one row by its unique key, writing only what changed. Returns 'changed', 'unchanged' or 'failed'. */
    _upsertChild: function(table, keyField, key, map) {
        var gr = new GlideRecord(table);
        if (!gr.get(keyField, key)) {
            gr.initialize();
            gr.setValue(keyField, key);
            map.call(this, gr);
            if (gr.insert())
                return 'changed';
            // Another run may have stored the same key first (unique index): update that one.
            gr = new GlideRecord(table);
            if (!gr.get(keyField, key))
                return 'failed';
        }
        var before = this._values(gr);
        map.call(this, gr);
        if (this._values(gr) == before)
            return 'unchanged';
        return gr.update() ? 'changed' : 'failed';
    },

    /** Sets an already-stored note's status to REMOVED. Returns 'changed', 'unchanged' or 'failed'. */
    _markRemoved: function(token) {
        var gr = new GlideRecord(this.NOTE_TABLE);
        if (!gr.get('token', token) || gr.getValue('status') == 'REMOVED')
            return 'unchanged';
        gr.setValue('status', 'REMOVED');
        return gr.update() ? 'changed' : 'failed';
    },

    /** The note's text without tags, with the common HTML entities decoded (&amp; last, so "&amp;lt;" stays "&lt;"). */
    _plain: function(html) {
        if (html == null)
            return '';
        return String(html).replace(/<[^>]*>/g, ' ').replace(/&nbsp;|&#160;/g, ' ').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
            .replace(/&quot;|&#34;/g, '"').replace(/&#39;|&apos;/g, "'").replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();
    },

    /** A CaseNoteDTO. The type code is kept as sent (an open set); an encrypted note's text is never stored. */
    _mapNote: function(gr, caseSysId, note) {
        var encrypted = note.encrypted === true;
        var html = encrypted ? this.ENCRYPTED_TEXT : note.description;
        this._set(gr, 'tsanet_case', caseSysId);
        this._set(gr, 'direction', note.direction);
        this._set(gr, 'type', note.type && note.type.code);
        this._set(gr, 'priority', note.priority);
        this._set(gr, 'status', note.status);
        this._set(gr, 'encrypted', encrypted ? 'true' : 'false');
        this._set(gr, 'summary', encrypted ? 'Encrypted note' : note.summary);
        this._set(gr, 'description', html);
        this._set(gr, 'description_plain', this._plain(html));
        // A note sent from here keeps the agent who sent it, whatever sender TSANet reports.
        if (!gr.getValue('send_state')) {
            this._set(gr, 'creator_name', note.creatorName);
            this._set(gr, 'creator_email', note.creatorEmail);
        }
        this._set(gr, 'creator_username', note.creatorUsername);
        this._set(gr, 'company_id', note.companyId);
        this._set(gr, 'company_name', note.companyName);
        this._setDate(gr, 'tsanet_created', note.createdAt);
        this._setDate(gr, 'tsanet_updated', note.updatedAt);
    },

    /**
     * Stores TSANet's answer to a note we sent (a CaseNoteDTO) on the pending note noteSysId, now Sent.
     * TSANet's webhook may have stored the same note first, by its token: then that row is kept, takes
     * our sender and Sent, and the pending row is deleted, so the note shows once. Returns true when stored.
     */
    storeSentNote: function(noteSysId, caseSysId, dto) {
        var pending = new GlideRecord(this.NOTE_TABLE);
        if (!dto || !dto.token || !pending.get(noteSysId))
            return false;
        var note = new GlideRecord(this.NOTE_TABLE);
        if (!note.get('token', dto.token))
            note = pending;
        note.setValue('token', dto.token);
        note.setValue('send_state', 'SENT');
        note.setValue('send_error', '');
        note.setValue('creator_name', pending.getValue('creator_name'));
        note.setValue('creator_email', pending.getValue('creator_email'));
        this._mapNote(note, caseSysId, dto);
        if (!note.update())
            return false;
        if (note.getUniqueValue() != pending.getUniqueValue())
            pending.deleteRecord();
        return true;
    },

    /** A CaseResponseDTO: the partner's accept, request for information, information or reject. */
    _mapResponse: function(gr, caseSysId, response) {
        this._set(gr, 'tsanet_case', caseSysId);
        this._set(gr, 'type', response.type);
        this._set(gr, 'engineer_name', response.engineerName);
        this._set(gr, 'engineer_email', response.engineerEmail);
        this._set(gr, 'engineer_phone', response.engineerPhone);
        this._set(gr, 'case_number', response.caseNumber);
        this._set(gr, 'next_steps', response.nextSteps);
        this._setDate(gr, 'tsanet_created', response.createdAt);
    },

    _find: function(token) {
        var gr = new GlideRecord(this.TABLE);
        return token && gr.get('token', token) ? gr : null;
    },

    _map: function(gr, dto, direction) {
        var submitter = dto.submitterContactDetails || {};
        var receiver = dto.receiverContactDetails || {};
        // The partner is the other company: the receiver of our outbound request, the submitter of an inbound one.
        var partner = direction == 'INBOUND' ? dto.submitCompanyName : dto.receiveCompanyName;
        this._set(gr, 'direction', direction);
        this._set(gr, 'tsanet_case_id', dto.id);
        this._set(gr, 'status', dto.status);
        this._set(gr, 'priority', dto.priority);
        this._set(gr, 'summary', dto.summary);
        this._set(gr, 'description', dto.description);
        this._set(gr, 'partner', partner);
        this._set(gr, 'received_company_id', dto.receiveCompanyId);
        this._set(gr, 'received_company_name', dto.receiveCompanyName);
        this._set(gr, 'submitted_company_id', dto.submitCompanyId);
        this._set(gr, 'submitted_company_name', dto.submitCompanyName);
        this._set(gr, 'submitter_case_number', dto.submitterCaseNumber);
        this._set(gr, 'submitter_name', submitter.name);
        this._set(gr, 'submitter_email', submitter.email);
        this._set(gr, 'submitter_phone', submitter.phone);
        this._set(gr, 'receiver_case_number', dto.receiverCaseNumber);
        this._set(gr, 'receiver_name', receiver.name);
        this._set(gr, 'receiver_email', receiver.email);
        this._set(gr, 'receiver_phone', receiver.phone);
        this._set(gr, 'document_id', dto.contactDocumentId);
        this._set(gr, 'document_name', dto.contactDocumentName);
        this._set(gr, 'priority_note', dto.priorityNote);
        this._set(gr, 'escalation_instructions', dto.escalationInstructions);
        var fields = this._sortFields(dto.customFields || []);
        this._set(gr, 'custom_fields', JSON.stringify(fields));
        this._set(gr, 'custom_fields_text', this._fieldsText(fields));
        this._set(gr, 'responded', dto.responded ? 'true' : 'false');
        this._setDate(gr, 'request_date', dto.createdAt);
        this._setDate(gr, 'response_sla', dto.respondBy);
        this._setDate(gr, 'tsanet_updated', dto.updatedAt);
    },

    /** TSANet leaves out fields it has no value for; store those as empty, not as the text "undefined". */
    _set: function(gr, field, value) {
        gr.setValue(field, value == null ? '' : value);
    },

    /**
     * The partner form's answers as "Question: value" lines, for the form. HIDDEN fields and empty answers are left out.
     * The fields are the request's CaseCustomFieldStatusDTO items, which name the question fieldName
     * (label is only on the form's FieldMetadataDTO).
     */
    _fieldsText: function(fields) {
        return fields.filter(function(f) {
            return f.type != 'HIDDEN' && f.value != null && String(f.value) !== '';
        }).map(function(f) {
            return f.fieldName + ': ' + f.value;
        }).join('\n');
    },

    /**
     * TSANet returns a request's custom fields in a different order from one answer to the next,
     * so they're stored in a fixed order: by section as the form shows them, then display order.
     */
    _sortFields: function(fields) {
        var sections = { CONTACT_SECTION: 0, COMMON_CUSTOMER_SECTION: 1, PROBLEM_SECTION: 2 };
        return fields.slice().sort(function(a, b) {
            var sa = sections.hasOwnProperty(a.section) ? sections[a.section] : 9;
            var sb = sections.hasOwnProperty(b.section) ? sections[b.section] : 9;
            return sa - sb || (a.displayOrder || 0) - (b.displayOrder || 0) || (a.id || 0) - (b.id || 0);
        });
    },

    /** API timestamps are ISO 8601 in UTC, e.g. 2026-11-11T17:28:53.123Z. */
    _setDate: function(gr, field, iso) {
        if (!iso)
            return;
        var gdt = new GlideDateTime();
        gdt.setValueUTC(String(iso).replace('T', ' ').substring(0, 19), 'yyyy-MM-dd HH:mm:ss');
        gr.setValue(field, gdt);
    },

    _result: function(gr, inserted, updated) {
        return { sysId: gr.getUniqueValue(), number: gr.getValue('number'), inserted: inserted, updated: updated };
    },

    type: 'TSANetCaseStore'
};
