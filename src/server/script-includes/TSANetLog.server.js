/**
 * TSANetLog - writes the TSANet transaction log (x_2256809_connect_log).
 *
 * TSANetClient logs every call that changes something at TSANet and every failed call;
 * TSANetSync logs each run that stored something or failed. Writing the log is incidental:
 * it never throws, so a log problem can't fail the call it records.
 */
var TSANetLog = Class.create();
TSANetLog.prototype = {
    TABLE: 'x_2256809_connect_log',

    initialize: function() {},

    /** entry: { operation, result ('SUCCESS' or 'FAILED'), status, message, durationMs, token or caseSysId }. */
    write: function(entry) {
        try {
            var gr = new GlideRecord(this.TABLE);
            gr.initialize();
            var caseSysId = entry.caseSysId || this._caseFor(entry.token);
            if (caseSysId)
                gr.setValue('tsanet_case', caseSysId);
            gr.setValue('operation', String(entry.operation || '').substring(0, 255));
            gr.setValue('result', entry.result);
            if (entry.status != null)
                gr.setValue('http_status', entry.status);
            if (entry.message)
                gr.setValue('message', String(entry.message).replace(/^TSANet: /, '').substring(0, 4000));
            if (entry.durationMs != null)
                gr.setValue('duration_ms', entry.durationMs);
            gr.insert();
        } catch (e) {
            gs.warn('[TSANet] Could not write the transaction log: ' + e.message);
        }
    },

    /** The TSANet Case stored for a request token, if there is one. */
    _caseFor: function(token) {
        if (!token)
            return null;
        var c = new GlideRecord('x_2256809_connect_case');
        return c.get('token', token) ? c.getUniqueValue() : null;
    },

    type: 'TSANetLog'
};
