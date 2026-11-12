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
            if (name.indexOf('sys_') != 0)
                values[name] = String(gr.getValue(name));
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
        gr.setValue('direction', direction);
        gr.setValue('tsanet_case_id', dto.id);
        gr.setValue('status', dto.status);
        gr.setValue('priority', dto.priority);
        gr.setValue('summary', dto.summary);
        gr.setValue('description', dto.description);
        gr.setValue('partner', partner);
        gr.setValue('received_company_id', dto.receiveCompanyId);
        gr.setValue('received_company_name', dto.receiveCompanyName);
        gr.setValue('submitted_company_id', dto.submitCompanyId);
        gr.setValue('submitted_company_name', dto.submitCompanyName);
        gr.setValue('submitter_case_number', dto.submitterCaseNumber);
        gr.setValue('submitter_name', submitter.name);
        gr.setValue('submitter_email', submitter.email);
        gr.setValue('submitter_phone', submitter.phone);
        gr.setValue('receiver_case_number', dto.receiverCaseNumber);
        gr.setValue('receiver_name', receiver.name);
        gr.setValue('receiver_email', receiver.email);
        gr.setValue('receiver_phone', receiver.phone);
        gr.setValue('document_id', dto.contactDocumentId);
        gr.setValue('document_name', dto.contactDocumentName);
        gr.setValue('priority_note', dto.priorityNote);
        gr.setValue('escalation_instructions', dto.escalationInstructions);
        gr.setValue('custom_fields', JSON.stringify(this._sortFields(dto.customFields || [])));
        gr.setValue('responded', dto.responded ? 'true' : 'false');
        this._setDate(gr, 'request_date', dto.createdAt);
        this._setDate(gr, 'response_sla', dto.respondBy);
        this._setDate(gr, 'tsanet_updated', dto.updatedAt);
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
