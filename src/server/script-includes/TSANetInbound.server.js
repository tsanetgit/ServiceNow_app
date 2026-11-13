/**
 * TSANetInbound - the server side of Accept and Reject on an inbound TSANet Case.
 *
 * The TSANet Case's Accept and Reject actions call it through GlideAjax. It checks the
 * request on the server, sends the answer to TSANet, and stores TSANet's reply through
 * TSANetCaseStore, which also links the case on accept when the TSANet Case has none.
 * The case number and the engineer's details are read here, not taken from the browser.
 */
var TSANetInbound = Class.create();
TSANetInbound.prototype = Object.extendsObject(global.AbstractAjaxProcessor, {
    SCOPE: 'x_2256809_connect',
    // The statuses TSANet lets the receiving company accept or reject in.
    ANSWERABLE: ['OPEN', 'INFORMATION'],

    /** GlideAjax: accept. Parameters sysparm_case_id, sysparm_host_number, sysparm_next_steps. */
    ajaxAccept: function() {
        var self = this;
        return this._answer(function() {
            return self.accept(self.getParameter('sysparm_case_id'), self.getParameter('sysparm_host_number'),
                self.getParameter('sysparm_next_steps'));
        });
    },

    /** GlideAjax: reject. Parameters sysparm_case_id, sysparm_reason. */
    ajaxReject: function() {
        var self = this;
        return this._answer(function() {
            return self.reject(self.getParameter('sysparm_case_id'), self.getParameter('sysparm_reason'));
        });
    },

    /** Accepts the inbound request, linked to the case numbered hostNumber when the TSANet Case has no case yet. */
    accept: function(caseSysId, hostNumber, nextSteps) {
        var tsanetCase = this._answerable(caseSysId);
        var host = this._host(tsanetCase.getValue('host_record'), hostNumber);
        nextSteps = String(nextSteps || '').trim();
        if (!nextSteps)
            throw this._inputError('Fill in: Next steps');
        var engineer = this._engineer();
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
        var engineer = this._engineer();
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
     * The case in the host table, read as the signed-in user: its number is what TSANet gets.
     * The case already linked when there is one, otherwise the one numbered hostNumber.
     */
    _host: function(linkedSysId, hostNumber) {
        var gr = new GlideRecordSecure(gs.getProperty(this.SCOPE + '.host.table', 'sn_customerservice_case'));
        if (linkedSysId) {
            if (!gr.get(linkedSysId))
                throw this._inputError('The linked case could not be read.');
            return gr;
        }
        hostNumber = String(hostNumber || '').trim().toUpperCase();
        if (!hostNumber)
            throw this._inputError('Fill in the case number to link before accepting.');
        if (!gr.get('number', hostNumber))
            throw this._inputError('No case ' + hostNumber + ' was found.');
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
