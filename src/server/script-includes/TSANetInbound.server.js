/**
 * TSANetInbound - the server side of Accept and Reject on an inbound TSANet Case.
 *
 * The TSANet Case's Accept and Reject actions call it through GlideAjax. It checks the
 * request on the server, sends the answer to TSANet, and stores TSANet's reply through
 * TSANetCaseStore, which also links the case on accept when the TSANet Case has none. A TSANet Case
 * with no case gets one at Accept: a case the agent picks, or a new case created from the request.
 * The case number is read here and the engineer's details through TSANetEngineer, not taken from the browser.
 */
var TSANetInbound = Class.create();
TSANetInbound.prototype = Object.extendsObject(global.AbstractAjaxProcessor, {
    SCOPE: 'x_2256809_connect',
    // The statuses TSANet lets the receiving company accept or reject in.
    ANSWERABLE: ['OPEN', 'INFORMATION'],

    // TSANet's request priority as the new case's priority (2 - High, 3 - Moderate, 4 - Low).
    CASE_PRIORITY: { HIGH: '2', MEDIUM: '3', LOW: '4' },

    /** GlideAjax: what the Accept dialog needs. Parameter sysparm_case_id. Returns { linked, table, label }. */
    ajaxAcceptForm: function() {
        var self = this;
        return this._answer(function() {
            var tsanetCase = self._answerable(self.getParameter('sysparm_case_id'));
            var table = self._hostTable();
            return { linked: !!tsanetCase.getValue('host_record'), table: table, label: new GlideRecord(table).getClassDisplayValue() };
        });
    },

    /**
     * GlideAjax: accept. Parameters sysparm_case_id, sysparm_next_steps, and for a TSANet Case with no
     * case yet sysparm_host_choice ('existing' or 'new') and, for 'existing', sysparm_host_id.
     */
    ajaxAccept: function() {
        var self = this;
        return this._answer(function() {
            return self.accept(self.getParameter('sysparm_case_id'), self.getParameter('sysparm_host_choice'),
                self.getParameter('sysparm_host_id'), self.getParameter('sysparm_next_steps'));
        });
    },

    /** GlideAjax: reject. Parameters sysparm_case_id, sysparm_reason. */
    ajaxReject: function() {
        var self = this;
        return this._answer(function() {
            return self.reject(self.getParameter('sysparm_case_id'), self.getParameter('sysparm_reason'));
        });
    },

    /**
     * Accepts the inbound request. A TSANet Case with no case yet is linked first: to the case the agent
     * picked (hostChoice 'existing', hostSysId), or to a new case created from the request ('new').
     */
    accept: function(caseSysId, hostChoice, hostSysId, nextSteps) {
        var tsanetCase = this._answerable(caseSysId);
        nextSteps = String(nextSteps || '').trim();
        if (!nextSteps)
            throw this._inputError('Fill in: Next steps');
        // Everything is checked before a new case is created.
        var engineer = new TSANetEngineer().current();
        var host = this._host(tsanetCase, hostChoice, hostSysId);
        var dto = this._client().approve(tsanetCase.getValue('token'), {
            caseNumber: host.getValue('number'),
            engineerName: engineer.name,
            engineerEmail: engineer.email,
            engineerPhone: engineer.phone,
            nextSteps: nextSteps,
        });
        return this._store(dto, host.getUniqueValue());
    },

    /** Rejects the inbound request with a reason that goes back to the submitting partner. */
    reject: function(caseSysId, reason) {
        var tsanetCase = this._answerable(caseSysId);
        reason = String(reason || '').trim();
        if (!reason)
            throw this._inputError('Fill in: Reason');
        var engineer = new TSANetEngineer().current();
        var dto = this._client().reject(tsanetCase.getValue('token'), {
            engineerName: engineer.name,
            engineerEmail: engineer.email,
            engineerPhone: engineer.phone,
            reason: reason,
        });
        return this._store(dto, null);
    },

    /** The TSANet Case, read as the signed-in user, if it is an inbound request that can still be answered. */
    _answerable: function(sysId) {
        var gr = new GlideRecordSecure('x_2256809_connect_case');
        if (!/^[0-9a-f]{32}$/.test(String(sysId || '')) || !gr.get(sysId))
            throw this._inputError('The TSANet Case could not be read.');
        if (gr.getValue('direction') != 'INBOUND' || !gr.getValue('token'))
            throw this._inputError('Only an inbound request from a partner can be accepted or rejected.');
        if (this.ANSWERABLE.indexOf(gr.getValue('status')) < 0)
            throw this._inputError('This request is ' + gr.getDisplayValue('status') + ' and can no longer be accepted or rejected.');
        return gr;
    },

    /**
     * The case in the host table, read as the signed-in user: its number is what TSANet gets. The case
     * already linked when there is one; otherwise the one the agent picked, or a new one ('new').
     */
    _host: function(tsanetCase, hostChoice, hostSysId) {
        var gr = new GlideRecordSecure(this._hostTable());
        var linked = tsanetCase.getValue('host_record');
        if (linked) {
            if (!gr.get(linked))
                throw this._inputError('The linked case could not be read.');
            return gr;
        }
        if (hostChoice == 'new')
            return this._newHost(tsanetCase);
        if (hostChoice != 'existing')
            throw this._inputError('Choose an existing case or a new case for this request.');
        if (!/^[0-9a-f]{32}$/.test(String(hostSysId || '')))
            throw this._inputError('Pick the case to link before accepting.');
        if (!gr.get(hostSysId))
            throw this._inputError('The case you picked could not be read.');
        return gr;
    },

    /**
     * A new case for the request, created as the agent: its summary, description and priority. It is
     * linked to the TSANet Case at once, so if TSANet then refuses the answer, trying again reuses it.
     */
    _newHost: function(tsanetCase) {
        var table = this._hostTable();
        if (table != 'sn_customerservice_case')
            throw this._inputError('A new record can be created only for a Customer Service case. Pick an existing ' + table + ' instead.');
        var gr = new GlideRecordSecure(table);
        gr.initialize();
        if (!gr.canCreate())
            throw this._inputError('You can\'t create cases. Pick an existing case instead.');
        gr.setValue('short_description', String(tsanetCase.getValue('summary') || 'TSANet request').substring(0, 160));
        gr.setValue('description', tsanetCase.getValue('description') || '');
        var priority = this.CASE_PRIORITY[tsanetCase.getValue('priority')];
        if (priority)
            gr.setValue('priority', priority);
        var sysId = gr.insert();
        if (!sysId)
            throw this._inputError('The case could not be created. Pick an existing case instead.');
        new TSANetCaseStore().linkHost(tsanetCase.getUniqueValue(), sysId);
        var created = new GlideRecordSecure(table);
        if (!created.get(sysId))
            throw this._inputError('The new case could not be read.');
        return created;
    },

    _hostTable: function() {
        return gs.getProperty(this.SCOPE + '.host.table', 'sn_customerservice_case');
    },

    /** Stores TSANet's reply, so the TSANet Case shows the new status straight away. */
    _store: function(dto, hostSysId) {
        if (!dto || !dto.token)
            throw this._client()._error('TSANet answered without the request', 0);
        var stored = new TSANetCaseStore().upsert(dto, hostSysId, 'INBOUND');
        if (!stored) {
            // TSANet has the answer; the next sync run stores it.
            gs.error('[TSANet] Answer to ' + dto.token + ' was sent to TSANet but could not be stored');
            throw this._client()._error('TSANet has your answer, but it could not be stored here yet. It will show after the next sync.', 0);
        }
        return { number: stored.number, status: dto.status };
    },

    /** Runs one action for GlideAjax: the result, or the message the agent sees, as JSON. */
    _answer: function(fn) {
        try {
            return JSON.stringify(fn());
        } catch (e) {
            return JSON.stringify({ error: String(e.message || e).replace(/^TSANet: /, '') });
        }
    },

    _client: function() {
        if (!this.client)
            this.client = new TSANetClient();
        return this.client;
    },

    _inputError: function(message) {
        var e = new Error(message);
        e.inputError = true;
        return e;
    },

    type: 'TSANetInbound'
});
