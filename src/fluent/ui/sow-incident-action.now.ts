import { Record, UiAction } from '@servicenow/sdk/core'
import { userRole } from '../roles.now'

// ⋯ TSANet Request on an incident in the Service Operations Workspace: opens the Create TSANet Case
// page in a modal, for the incident it was started from, as the case's ⋯ Create TSANet Case does in
// the CSM workspace. Shown only while incidents are allowed host records (TSANetHostRecords).
const tsanetRequest = UiAction({
    $id: Now.ID['action_sow_incident_tsanet_request'],
    table: 'incident',
    actionName: 'x_2256809_connect_tsanet_request',
    name: 'TSANet Request',
    hint: 'Start a TSANet collaboration with a partner for this incident',
    roles: [userRole],
    condition: "!current.isNewRecord() && new TSANetHostRecords().allows('incident')",
    showInsert: false,
    showUpdate: true,
    order: 1100,
    client: { isClient: true },
    workspace: {
        isConfigurableWorkspace: true,
        showFormMenuButtonV2: true,
        clientScriptV2: `function onClick(g_form) {
    g_modal.showFrame({
        title: 'TSANet Request',
        url: '/x_2256809_connect_create_case.do?sysparm_case=' + g_form.getUniqueValue(),
        size: 'lg',
        height: '36rem'
    });
}`,
    },
})

// The workspace's incident action bar shows only actions linked into its action layout, which belongs
// to the workspace app; the action gets its own form action, layout item and link, in the ⋯ overflow
// menu after Copy URL (order 1000). Where the workspace isn't installed the link points at nothing.
const SOW_INCIDENT_ACTIONS_LAYOUT = 'e28e161b534130108b91ddeeff7b1229'
const OVERFLOW_MENU = 1

const tsanetRequestFormAction = Record({
    $id: Now.ID['form_action_sow_incident_tsanet_request'],
    table: 'sys_ux_form_action',
    data: { name: 'TSANet Request', table: 'incident', action_type: 'ui_action', ui_action: tsanetRequest, active: true },
})

const tsanetRequestItem = Record({
    $id: Now.ID['form_action_item_sow_incident_tsanet_request'],
    table: 'sys_ux_form_action_layout_item',
    data: {
        name: 'TSANet Request',
        label: 'TSANet Request',
        table: 'incident',
        item_type: 'action',
        action: tsanetRequestFormAction,
        overflow: true,
        color: 'secondary',
        order: 1100,
        active: true,
    },
})

Record({
    $id: Now.ID['form_action_item_link_sow_incident_tsanet_request'],
    table: 'sys_ux_m2m_action_layout_item',
    data: {
        ux_form_action_layout: SOW_INCIDENT_ACTIONS_LAYOUT,
        ux_form_action_layout_item: tsanetRequestItem,
        table: 'incident',
        display_type: OVERFLOW_MENU,
        variant: 'secondary',
        order: 1100,
        active: true,
    },
})
