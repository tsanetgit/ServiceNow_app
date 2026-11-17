/**
 * TSANetCaseStore - the one place a TSANet request (the API's CollaborationRequestStatusDTO)
 * becomes a TSANet Case record. Create TSANet Case and the sync both store through it, so a
 * request is mapped the same way whichever path brought it in.
 *
 * Writes as the system: the table's create ACL is admin-only.
 */
var TSANetCaseStore = Class.create();
TSANetCaseStore.prototype = {
    TABLE: 'x_2256809_connect_case',

    initialize: function() {},

    /**
     * Creates or updates the TSANet Case for dto.token.
     * hostSysId links a TSANet Case that has no case yet; an existing link is never changed.
     * direction is used when the DTO doesn't carry one.
     * Returns { sysId, number, inserted, updated }, or null if the record couldn't be written.
     */
    upsert: function(dto, hostSysId, direction) {
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

    /** The partner form's answers as "Label: value" lines, for the form. HIDDEN fields and empty answers are left out. */
    _fieldsText: function(fields) {
        return fields.filter(function(f) {
            return f.type != 'HIDDEN' && f.value != null && String(f.value) !== '';
        }).map(function(f) {
            return f.label + ': ' + f.value;
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
