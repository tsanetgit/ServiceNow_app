/**
 * TSANetChangeCase - the server side of Change case on a TSANet Case.
 *
 * The TSANet Case's Change case action calls it through GlideAjax. It checks the TSANet Case and the
 * picked case as the signed-in agent, moves the link (TSANetCaseStore.changeHost) and queues the update
 * that tells TSANet the new case number (TSANetCaseUpdates). Nothing from the browser is trusted.
 */
var TSANetChangeCase = Class.create();
TSANetChangeCase.prototype = Object.extendsObject(global.AbstractAjaxProcessor, {
    SCOPE: 'x_2256809_connect',
    CASE_TABLE: 'x_2256809_connect_case',

    /** GlideAjax: what the dialog needs. Parameter sysparm_case_id. Returns { table, label }. */
    ajaxChangeCaseForm: function() {
        var self = this;
        return this._answer(function() {
            self._changeable(self.getParameter('sysparm_case_id'));
            var table = self._hostTable();
            return { table: table, label: new GlideRecord(table).getClassDisplayValue() };
        });
    },

    /** GlideAjax: link the picked case. Parameters sysparm_case_id, sysparm_host_id. Returns { number }. */
    ajaxChangeCase: function() {
        var self = this;
        return this._answer(function() {
            return self.changeCase(self.getParameter('sysparm_case_id'), self.getParameter('sysparm_host_id'));
        });
    },

    /** Links the TSANet Case to the picked case and queues the update to TSANet. */
    changeCase: function(caseSysId, hostSysId) {
        var tsanetCase = this._changeable(caseSysId);
        if (!/^[0-9a-f]{32}$/.test(String(hostSysId || '')))
            throw this._inputError('Pick the case to link.');
        var host = new GlideRecordSecure(this._hostTable());
        if (!host.get(hostSysId))
            throw this._inputError('The case you picked could not be read.');
        if (host.getUniqueValue() == tsanetCase.getValue('host_record'))
            throw this._inputError('This TSANet Case is already linked to ' + host.getValue('number') + '.');
        var store = new TSANetCaseStore();
        if (!store.changeHost(tsanetCase.getUniqueValue(), host.getUniqueValue()))
            throw this._inputError('The TSANet Case could not be linked to ' + host.getValue('number') + '. Nothing was sent to TSANet.');
        var gr = new GlideRecord(this.CASE_TABLE);
        gr.get(tsanetCase.getUniqueValue());
        new TSANetCaseUpdates().queue(gr);
        return { number: host.getValue('number') };
    },

    /** The TSANet Case, read as the signed-in user, if its case can be changed now. */
    _changeable: function(sysId) {
        var gr = new GlideRecordSecure(this.CASE_TABLE);
        if (!/^[0-9a-f]{32}$/.test(String(sysId || '')) || !gr.get(sysId))
            throw this._inputError('The TSANet Case could not be read.');
        if (!gr.getValue('token'))
            throw this._inputError('This TSANet Case has no TSANet request yet.');
        if (!gr.getValue('host_record'))
            throw this._inputError('This TSANet Case has no case yet. Accept links one.');
        if (!new TSANetCaseUpdates().updatable(gr))
            throw this._inputError('This request is ' + gr.getDisplayValue('status') + ', so its case can\'t be changed in TSANet now.');
        return gr;
    },

    _hostTable: function() {
        return gs.getProperty(this.SCOPE + '.host.table', 'sn_customerservice_case');
    },

    /** Runs one action for GlideAjax: the result, or the message the agent sees, as JSON. */
    _answer: function(fn) {
        try {
            return JSON.stringify(fn());
        } catch (e) {
            return JSON.stringify({ error: String(e.message || e).replace(/^TSANet: /, '') });
        }
    },

    _inputError: function(message) {
        var e = new Error(message);
        e.inputError = true;
        return e;
    },

    type: 'TSANetChangeCase'
});
