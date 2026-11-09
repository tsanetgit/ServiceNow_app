import { Record } from '@servicenow/sdk/core'

// "TSANet Cases" in the Related lists of a case in the CSM/FSM Configurable Workspace.
// The workspace reads them from the Workspace view's related list of
// sn_customerservice_case, which belongs to the CSM workspace app, so this adds our
// own entry to that list and leaves the list itself alone. Where CSM isn't installed
// the entry points at nothing and doesn't show.
const CSM_CASE_WORKSPACE_RELATED_LIST = '2e442080532230105b51ddeeff7b1225'

Record({
    $id: Now.ID['csm_case_related_list_tsanet'],
    table: 'sys_ui_related_list_entry',
    data: {
        list_id: CSM_CASE_WORKSPACE_RELATED_LIST,
        position: 19,
        related_list: 'x_2256809_connect_case.host_record',
    },
})
