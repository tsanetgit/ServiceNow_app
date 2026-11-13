/**
 * TSANetSync - brings TSANet's collaboration requests into ServiceNow.
 *
 * The scheduled job "TSANet Connect - sync requests" runs it. Each run reads every request
 * updated since the last successful run (less x_2256809_connect.sync.overlap_minutes; the first
 * run goes back x_2256809_connect.sync.lookback_days) and stores each one through
 * TSANetCaseStore. A TSANet Case with no case yet is linked to the case in the host table whose
 * number matches our case number on the request. The sync never changes the case itself.
 */
var TSANetSync = Class.create();
TSANetSync.prototype = {
    SCOPE: 'x_2256809_connect',
    LAST_SUCCESS: 'sync.last_success',

    initialize: function(client, store) {
        this.client = client || new TSANetClient();
        this.store = store || new TSANetCaseStore();
    },

    /** One sync run. Returns its counts, or { error } when TSANet couldn't be read. */
    run: function() {
        var started = new GlideDateTime();
        var requests;
        try {
            // The raw answer, not listRequests(), which turns an empty body into []: an empty answer must
            // not read as "nothing new", or the window would move past requests TSANet never sent.
            requests = this.client.request('GET', '/v2/collaboration-requests/list', { updatedAfter: this._since() });
        } catch (e) {
            // Nothing stored, the last-success time doesn't move: the next run reads the same window again.
            gs.error('[TSANet] Sync could not read requests from TSANet: ' + e.message);
            return { error: e.message };
        }
        if (!Array.isArray(requests)) {
            gs.error('[TSANet] Sync got an empty answer or one that is not a list of requests; nothing was stored');
            return { error: 'unexpected answer' };
        }

        var hostTable = this._hostTable();
        var counts = { read: requests.length, inserted: 0, updated: 0, unchanged: 0, failed: 0 };
        requests.forEach(function(request) {
            // One bad request is skipped; the rest of the run goes on.
            try {
                // The token is what makes a request one record; without it the request can't be stored safely.
                if (!request || !request.token)
                    throw new Error('it has no token');
                var stored = this.store.upsert(request, this._hostFor(request, hostTable));
                if (!stored)
                    throw new Error('it could not be stored');
                counts[stored.inserted ? 'inserted' : stored.updated ? 'updated' : 'unchanged']++;
            } catch (e) {
                counts.failed++;
                gs.error('[TSANet] Sync skipped request ' + (request && request.token) + ': ' + e.message);
            }
        }, this);

        // A skipped request is read again on the next run, so the window only moves when none failed.
        if (!counts.failed)
            gs.setProperty(this.SCOPE + '.' + this.LAST_SUCCESS, started.getValue());
        if (counts.inserted || counts.updated || counts.failed)
            gs.info('[TSANet] Sync: ' + JSON.stringify(counts));
        return counts;
    },

    /** updatedAfter for this run, as the API wants it: YYYY-MM-DDTHH:MM:SSZ in UTC. */
    _since: function() {
        var since;
        var last = this._prop(this.LAST_SUCCESS, '');
        if (last) {
            since = new GlideDateTime(last);
            since.addSeconds(-60 * parseInt(this._prop('sync.overlap_minutes', '10'), 10));
        } else {
            since = new GlideDateTime();
            since.addDaysUTC(-parseInt(this._prop('sync.lookback_days', '30'), 10));
        }
        return since.getValue().replace(' ', 'T') + 'Z';
    },

    /** The host table, if it exists on this instance; otherwise TSANet Cases are stored unlinked. */
    _hostTable: function() {
        var table = this._prop('host.table', '');
        if (table && new GlideRecord(table).isValid())
            return table;
        gs.error('[TSANet] Sync: host table "' + table + '" does not exist on this instance; TSANet Cases are stored without a case');
        return null;
    },

    /** The case our case number on the request names: submitter for outbound, receiver for inbound. */
    _hostFor: function(request, hostTable) {
        var number = request.direction == 'INBOUND' ? request.receiverCaseNumber : request.submitterCaseNumber;
        if (!hostTable || !number)
            return null;
        var host = new GlideRecord(hostTable);
        return host.get('number', number) ? host.getUniqueValue() : null;
    },

    _prop: function(name, dflt) {
        return gs.getProperty(this.SCOPE + '.' + name, dflt);
    },

    type: 'TSANetSync'
};
