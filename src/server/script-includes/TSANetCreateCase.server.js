/**
 * TSANetCreateCase - the server side of the Create TSANet Case page.
 *
 * The page calls it through the "Create TSANet Case" REST API. It finds partners,
 * loads a partner's form, and submits an outbound collaboration request for a
 * case, storing the TSANet Case only once TSANet has accepted the request.
 * The case number and the engineer's details are read here, not taken from the browser.
 */
var TSANetCreateCase = Class.create();
TSANetCreateCase.prototype = {
    HOST_TABLE: 'sn_customerservice_case',
    PRIORITIES: ['LOW', 'MEDIUM', 'HIGH'],
    // The API's own form keys the page never sends back (the Connect web app doesn't either).
    READ_ONLY_KEYS: ['adminNote', 'escalationInstructions'],

    initialize: function(client) {
        this.client = client || new TSANetClient();
    },

    /** Partners whose company or department name matches the term. */
    searchPartners: function(term) {
        term = String(term || '').trim();
        return term ? this.client.searchPartners(term) : [];
    },

    /** The partner's submission form: a department's when the partner has one, else the company's. */
    getForm: function(companyId, departmentId) {
        // REST query parameters arrive as arrays; String() of a one-value array is its value.
        companyId = String(companyId || '');
        departmentId = String(departmentId || '');
        if (departmentId)
            return this.client.getFormByDepartment(departmentId);
        if (companyId)
            return this.client.getFormByCompany(companyId);
        throw this._inputError('Choose a partner first.');
    },

    /**
     * Submits the request and stores the outbound TSANet Case.
     * input: caseSysId, companyId, departmentId, summary, description, priority,
     *        fields (the partner's field values, by fieldId)
     */
    create: function(input) {
        input = input || {};
        var hostCase = this._hostCase(input.caseSysId);
        var summary = String(input.summary || '').trim();
        var description = String(input.description || '').trim();
        var priority = String(input.priority || '');
        var missing = [];
        if (!summary)
            missing.push('Summary');
        if (!description)
            missing.push('Description');
        if (this.PRIORITIES.indexOf(priority) < 0)
            missing.push('Priority');

        // The form comes from TSANet again, so only its own fields are sent, with the page's values.
        var request = this.getForm(input.companyId, input.departmentId);
        var values = input.fields || {};
        (request.customFields || []).forEach(function(field) {
            var key = String(field.fieldId);
            // A HIDDEN field keeps TSANet's value whatever the browser sends.
            if (field.type != 'HIDDEN' && values.hasOwnProperty(key) && values[key] !== null)
                field.value = String(values[key]);
            if (field.required && field.type != 'HIDDEN' && !String(field.value || '').trim())
                missing.push(field.label);
        });
        if (missing.length)
            throw this._inputError('Fill in: ' + missing.join(', '));

        this.READ_ONLY_KEYS.forEach(function(k) {
            delete request[k];
        });
        request.internalCaseNumber = hostCase.getValue('number');
        request.receiverInternalCaseNumber = '';
        request.problemSummary = summary;
        request.problemDescription = description;
        request.priority = priority;
        request.submitterContactDetails = this._engineer();

        // Resolve the connection first, so a setup error can't be mistaken for a lost answer below.
        this.client._connection();
        var started = new GlideDateTime();
        var created;
        try {
            created = this.client.createRequest(request);
        } catch (e) {
            // TSANet answered with a 4xx: it refused the request and created nothing.
            if (e.status >= 400 && e.status < 500)
                throw e;
            // No answer, or a 5xx: TSANet may still have created it. Look before inviting a resubmit.
            created = this._findSubmitted(request, started);
            if (!created)
                throw this.client._error(e.message.replace(/^TSANet: /, '') +
                    '. TSANet may still have received the request: check the case\'s TSANet Cases before submitting again.', 0);
        }
        if (!created || !created.token)
            throw this.client._error('TSANet accepted the request but returned no token', 0);
        return this._store(hostCase.getUniqueValue(), created);
    },

    /**
     * The outbound request TSANet created from this submit, if any: same case number and summary,
     * created since the submit started (less a minute for clock drift). Null when none is found or
     * TSANet can't be asked; the lookup never replaces the submit's own error.
     */
    _findSubmitted: function(request, started) {
        var since = new GlideDateTime(started);
        since.addSeconds(-60);
        try {
            var found = this.client.listRequests({
                internalCaseNumber: request.internalCaseNumber,
                type: 'OUTBOUND',
                createdAfter: since.getValue().replace(' ', 'T') + 'Z',
            }).filter(function(r) {
                return r.summary == request.problemSummary;
            });
            return found.length ? found[found.length - 1] : null;
        } catch (ignore) {
            return null;
        }
    },

    /** The case, read as the signed-in user, so an agent can only start from a case they can see. */
    _hostCase: function(sysId) {
        var gr = new GlideRecordSecure(this.HOST_TABLE);
        if (!/^[0-9a-f]{32}$/.test(String(sysId || '')) || !gr.get(sysId))
            throw this._inputError('The case could not be read.');
        return gr;
    },

    _engineer: function() {
        var user = new GlideRecord('sys_user');
        user.get(gs.getUserID());
        return {
            name: user.getValue('name') || '',
            email: user.getValue('email') || '',
            phone: user.getValue('phone') || user.getValue('mobile_phone') || '',
        };
    },

    /** Stores TSANet's answer as the outbound TSANet Case. The table's create ACL is admin-only, so this writes as the system. */
    _store: function(hostSysId, dto) {
        var contact = dto.submitterContactDetails || {};
        var gr = new GlideRecord('x_2256809_connect_case');
        gr.initialize();
        gr.setValue('host_record', hostSysId);
        gr.setValue('direction', 'OUTBOUND');
        gr.setValue('token', dto.token);
        gr.setValue('tsanet_case_id', dto.id);
        gr.setValue('status', dto.status);
        gr.setValue('priority', dto.priority);
        gr.setValue('summary', dto.summary);
        gr.setValue('description', dto.description);
        gr.setValue('partner', dto.receiveCompanyName);
        gr.setValue('received_company_id', dto.receiveCompanyId);
        gr.setValue('received_company_name', dto.receiveCompanyName);
        gr.setValue('submitted_company_id', dto.submitCompanyId);
        gr.setValue('submitted_company_name', dto.submitCompanyName);
        gr.setValue('submitter_case_number', dto.submitterCaseNumber);
        gr.setValue('submitter_name', contact.name);
        gr.setValue('submitter_email', contact.email);
        gr.setValue('submitter_phone', contact.phone);
        gr.setValue('document_id', dto.contactDocumentId);
        gr.setValue('document_name', dto.contactDocumentName);
        gr.setValue('priority_note', dto.priorityNote);
        gr.setValue('escalation_instructions', dto.escalationInstructions);
        gr.setValue('custom_fields', JSON.stringify(dto.customFields || []));
        gr.setValue('responded', !!dto.responded);
        this._setDate(gr, 'request_date', dto.createdAt);
        this._setDate(gr, 'response_sla', dto.respondBy);
        this._setDate(gr, 'tsanet_updated', dto.updatedAt);
        var sysId = gr.insert();
        if (!sysId) {
            // TSANet has the request; the sync finds it by its token. Say so rather than invite a resubmit.
            gs.error('[TSANet] Outbound request ' + dto.token + ' was created in TSANet but could not be stored');
            throw this.client._error('TSANet accepted the request (' + dto.token + '), but it could not be stored here. Do not submit it again.', 0);
        }
        return { sysId: sysId, number: gr.getValue('number'), token: dto.token, partner: dto.receiveCompanyName };
    },

    /** API timestamps are ISO 8601 in UTC, e.g. 2026-11-11T17:28:53.123Z. */
    _setDate: function(gr, field, iso) {
        if (!iso)
            return;
        var gdt = new GlideDateTime();
        gdt.setValueUTC(String(iso).replace('T', ' ').substring(0, 19), 'yyyy-MM-dd HH:mm:ss');
        gr.setValue(field, gdt);
    },

    _inputError: function(message) {
        var e = new Error(message);
        e.inputError = true;
        return e;
    },

    type: 'TSANetCreateCase'
};

/** Runs one REST route: the result as the body, or the error as a message the page shows. */
TSANetCreateCase.respond = function(response, fn) {
    try {
        response.setStatus(200);
        response.setBody(fn(new TSANetCreateCase()));
    } catch (e) {
        // 400: the page's input; 422: TSANet refused it; 502: TSANet unreachable or failed, or our
        // connection to it is broken (TSANet's 401/403 mean the app's credentials, not the request).
        var refused = e.status >= 400 && e.status < 500 && e.status != 401 && e.status != 403;
        var status = e.inputError ? 400 : (refused ? 422 : 502);
        var err = new sn_ws_err.ServiceError();
        err.setStatus(status);
        err.setMessage(String(e.message || e));
        throw err;
    }
};
