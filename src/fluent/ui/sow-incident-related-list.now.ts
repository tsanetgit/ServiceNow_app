import { Record } from '@servicenow/sdk/core'

// "TSANet Request" in the Related records of an incident in the Service Operations Workspace.
// The workspace reads them from the "Service Operations Workspace" (sow) view's related list of
// incident, which belongs to the workspace app, so this adds our own entry to that list and leaves
// the list itself alone, as the CSM case's related list does. A related list entry has no label of
// its own, so the entry points at a relationship named "TSANet Request": the case's list, which
// points at the Case field, keeps the table's name, "TSANet Cases". Where the workspace isn't
// installed the entry points at nothing and doesn't show.
const SOW_INCIDENT_RELATED_LIST = 'fa3f3ac143e9d2108c5fa32d68b8f24b'
// A related list entry names a relationship as "REL:<sys_id>": the relationship below, with the sys_id
// keys.ts fixed for it (rel_tsanet_request_incident), which --frozenKeys keeps from changing.
const TSANET_REQUEST_RELATED_LIST = 'REL:e716a28ff0fd4280808b8d2c5f36fbf0'

Record({
    $id: Now.ID['rel_tsanet_request_incident'],
    table: 'sys_relationship',
    data: {
        name: 'TSANet Request',
        basic_apply_to: 'incident',
        basic_query_from: 'x_2256809_connect_case',
        query_with: `(function refineQuery(current, parent) {
    current.addQuery('host_record', parent.getUniqueValue());
})(current, parent);`,
    },
})

Record({
    $id: Now.ID['sow_incident_related_list_tsanet'],
    table: 'sys_ui_related_list_entry',
    data: {
        list_id: SOW_INCIDENT_RELATED_LIST,
        position: 16,
        related_list: TSANET_REQUEST_RELATED_LIST,
    },
})
