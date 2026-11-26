/**
 * TSANetCreateCase - the server side of the Create TSANet Case page.
 *
 * The page calls it through the "Create TSANet Case" REST API. It reads the case or incident the page
 * starts from, finds partners, loads a partner's form, and submits an outbound collaboration request for
 * that case or incident, storing the TSANet Case only once TSANet has accepted the request.
 * The record's number is read here and the engineer's details through TSANetEngineer, not taken from the browser.
 */
var TSANetCreateCase = Class.create();
TSANetCreateCase.prototype = {
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
     * The case or incident the page starts from, read as the signed-in user, in one shape for both: a case
     * gives its account and contact, an incident its company and caller. A field the agent can't read is empty.
     */
    host: function(sysId) {
        // REST query parameters arrive as arrays; String() of a one-value array is its value.
        var gr = this._hostCase(String(sysId || ''));
        var incident = gr.isValidField('caller_id');
        var org = incident ? 'company' : 'account', person = incident ? 'caller_id' : 'contact';
        var read = function(path) {
            var el = gr.getElement(path);
            return el && el.canRead() ? String(el.getDisplayValue() || '') : '';
        };
        return {
            number: read('number'),
            type: gr.getClassDisplayValue(),
            shortDescription: read('short_description'),
            description: read('description'),
            priority: read('priority') ? String(gr.getValue('priority') || '') : '',
            organizationLabel: incident ? 'Company' : 'Account',
            organization: read(org),
            contactName: read(person + '.name'),
            contactEmail: read(person + '.email'),
            contactPhone: read(person + '.phone'),
        };
    },

    /**
     * Submits the request and stores the outbound TSANet Case.
     * input: caseSysId, companyId, departmentId, summary, description, priority,
     *        fields (the partner's field values, by fieldId)
     */
    create: function(input) {
        input = input || {};
        var hostCase = this._hostCase(input.caseSysId);
        // Resolve the engineer before fetching the form, so an incomplete profile cannot submit to TSANet.
        var engineer = new TSANetEngineer().current();
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
        request.submitterContactDetails = engineer;

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
            created = this._findSubmitted(request, input.companyId, started);
            if (!created)
                throw this.client._error(e.message.replace(/^TSANet: /, '') +
                    '. TSANet may still have received the request: check the case\'s TSANet Cases before submitting again.', 0);
        }
        if (!created || !created.token)
            throw this.client._error('TSANet accepted the request but returned no token', 0);
        return this._store(hostCase.getUniqueValue(), created);
    },

    /**
     * The outbound request TSANet created from this submit, if any: same case number, partner and
     * summary, created since the submit started (less a minute for clock drift), and not already
     * stored here, so an earlier request from the same case is never taken for this one. The newest
     * wins. Null when none is found or TSANet can't be asked; the lookup never replaces the submit's
     * own error.
     */
    _findSubmitted: function(request, companyId, started) {
        var since = new GlideDateTime(started);
        since.addSeconds(-60);
        try {
            var found = this.client.listRequests({
                internalCaseNumber: request.internalCaseNumber,
                type: 'OUTBOUND',
                createdAfter: since.getValue().replace(' ', 'T') + 'Z',
            }).filter(function(r) {
                return r.token && String(r.receiveCompanyId) == String(companyId) &&
                    r.summary == request.problemSummary && !this._isStored(r.token);
            }, this);
            found.sort(function(a, b) {
                return String(a.createdAt || '').localeCompare(String(b.createdAt || ''));
            });
            return found.length ? found[found.length - 1] : null;
        } catch (ignore) {
            return null;
        }
    },

    _isStored: function(token) {
        var gr = new GlideRecord('x_2256809_connect_case');
        gr.addQuery('token', token);
        gr.setLimit(1);
        gr.query();
        return gr.hasNext();
    },

    /** The case or incident (an allowed host record), read as the signed-in user, so an agent can only start from one they can see. */
    _hostCase: function(sysId) {
        var hosts = new TSANetHostRecords();
        var gr = hosts.read(sysId, true);
        if (!gr)
            throw this._inputError('The ' + hosts.label() + ' could not be read.');
        return gr;
    },

    /** Stores TSANet's answer as the outbound TSANet Case, through the store the sync uses too. */
    _store: function(hostSysId, dto) {
        var stored = new TSANetCaseStore().upsert(dto, hostSysId, 'OUTBOUND');
        if (!stored) {
            // TSANet has the request; the sync finds it by its token. Say so rather than invite a resubmit.
            gs.error('[TSANet] Outbound request ' + dto.token + ' was created in TSANet but could not be stored');
            throw this.client._error('TSANet accepted the request (' + dto.token + '), but it could not be stored here. Do not submit it again.', 0);
        }
        return { sysId: stored.sysId, number: stored.number, token: dto.token, partner: dto.receiveCompanyName };
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
