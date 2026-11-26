/**
 * TSANetHostRecords - the member's records a TSANet Case links to (its "host" records): cases, incidents
 * or both. The one place that reads the setting x_2256809_connect.host.table, a comma-separated list.
 *
 * Only sn_customerservice_case and incident are supported, with any table that extends them. A listed
 * table that isn't supported or doesn't exist on this instance is skipped and logged, never allowed.
 * One instance reads the setting once, so a sync run logs a bad entry once.
 */
var TSANetHostRecords = Class.create();
TSANetHostRecords.prototype = {
    PROPERTY: 'x_2256809_connect.host.table',
    DEFAULT: 'sn_customerservice_case',
    CASE_TABLE: 'sn_customerservice_case',
    SUPPORTED: ['sn_customerservice_case', 'incident'],

    initialize: function() {
        var seen = {}, list = [], supported = this.SUPPORTED;
        String(gs.getProperty(this.PROPERTY, this.DEFAULT) || '').split(',').forEach(function(table) {
            table = table.trim();
            if (!table || seen[table])
                return;
            seen[table] = true;
            if (supported.indexOf(table) < 0)
                gs.error('[TSANet] Host tables: "' + table + '" is not supported (only sn_customerservice_case and incident), so it is ignored');
            else if (!new GlideRecord(table).isValid())
                gs.error('[TSANet] Host tables: "' + table + '" does not exist on this instance, so it is ignored');
            else
                list.push(table);
        });
        this.list = list;
    },

    /** The allowed tables, in the setting's order. */
    tables: function() {
        return this.list.slice();
    },

    allows: function(table) {
        return this.list.indexOf(table) >= 0;
    },

    /** The record, if it's in an allowed table (or one extending it); read as the signed-in user when secure. */
    read: function(sysId, secure) {
        if (!/^[0-9a-f]{32}$/.test(String(sysId || '')))
            return null;
        for (var i = 0; i < this.list.length; i++) {
            var gr = secure ? new GlideRecordSecure(this.list[i]) : new GlideRecord(this.list[i]);
            if (gr.get(sysId))
                return gr;
        }
        return null;
    },

    /** The one allowed record with this number, read as the system; none when no record or several match. */
    findByNumber: function(number) {
        if (!number)
            return null;
        var found = [];
        for (var i = 0; i < this.list.length; i++) {
            var gr = new GlideRecord(this.list[i]);
            gr.addQuery('number', number);
            gr.setLimit(2);
            gr.query();
            while (gr.next())
                found.push(gr.getUniqueValue());
        }
        if (found.length > 1)
            gs.warn('[TSANet] Host tables: more than one record has number ' + number + ', so the TSANet Case is left unlinked');
        return found.length == 1 ? found[0] : null;
    },

    /** The reference qualifier for pickers: records of the allowed tables only (none when none is allowed). */
    qualifier: function() {
        var parts = this.list.map(function(table) {
            return 'sys_class_nameINSTANCEOF' + table;
        });
        return parts.length ? parts.join('^OR') : 'sys_id=-1';
    },

    /** What the agent calls the allowed records: "case", "incident" or "case or incident". */
    label: function() {
        return this.list.map(function(table) {
            return new GlideRecord(table).getClassDisplayValue().toLowerCase();
        }).join(' or ') || 'case';
    },

    type: 'TSANetHostRecords'
};
