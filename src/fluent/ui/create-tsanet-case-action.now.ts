import { Record, UiAction } from '@servicenow/sdk/core'
import { userRole } from '../roles.now'

// ⋯ Create TSANet Case on a case in the CSM/FSM Configurable Workspace: opens the
// Create TSANet Case page in a modal, for the case it was started from. Starting from
// the case is how an outbound TSANet Case begins, so it is linked to that case.
const createTsanetCase = UiAction({
    $id: Now.ID['action_create_tsanet_case'],
    table: 'sn_customerservice_case',
    actionName: 'x_2256809_connect_create_tsanet_case',
    name: 'Create TSANet Case',
    hint: 'Start a TSANet collaboration with a partner for this case',
    roles: [userRole],
    condition: '!current.isNewRecord()',
    showInsert: false,
    showUpdate: true,
    order: 900,
    // Client-side, like the case's other ⋯ items, since it only opens the modal.
    client: { isClient: true },
    workspace: {
        isConfigurableWorkspace: true,
        showFormMenuButtonV2: true,
        clientScriptV2: `function onClick(g_form) {
    g_modal.showFrame({
        title: 'Create TSANet Case',
        url: '/x_2256809_connect_create_case.do?sysparm_case=' + g_form.getUniqueValue(),
        size: 'lg',
        height: '36rem'
    });
}`,
    },
})

// The workspace's case action bar shows only actions that have a form action and a
// layout item linked to its action layouts (the front-line layout uses its linked
// items only). The layouts belong to the workspace apps, so the action gets its own
// form action, layout item and links into both, in the ⋯ overflow menu, as the
// case's other ⋯ items have. Where the workspace isn't installed the links point
// at nothing.
const FRONT_LINE_CASE_ACTIONS_LAYOUT = '2f53d7d9396bfd10f87765b51afcb506'
const CASE_ACTIONS_LAYOUT = '3482a5cc532310108ce6ddeeff7b1263'
const OVERFLOW_MENU = 1
const createTsanetCaseFormAction = Record({
    $id: Now.ID['form_action_create_tsanet_case'],
    table: 'sys_ux_form_action',
    data: {
        name: 'Create TSANet Case',
        table: 'sn_customerservice_case',
        action_type: 'ui_action',
        ui_action: createTsanetCase,
        active: true,
    },
})

const createTsanetCaseItem = Record({
    $id: Now.ID['form_action_item_create_tsanet_case'],
    table: 'sys_ux_form_action_layout_item',
    data: {
        name: 'Create TSANet Case',
        label: 'Create TSANet Case',
        table: 'sn_customerservice_case',
        item_type: 'action',
        action: createTsanetCaseFormAction,
        overflow: true,
        color: 'secondary',
        order: 900,
        active: true,
    },
})

Record({
    $id: Now.ID['form_action_item_link_front_line'],
    table: 'sys_ux_m2m_action_layout_item',
    data: {
        ux_form_action_layout: FRONT_LINE_CASE_ACTIONS_LAYOUT,
        ux_form_action_layout_item: createTsanetCaseItem,
        table: 'sn_customerservice_case',
        display_type: OVERFLOW_MENU,
        variant: 'secondary',
        order: 900,
        active: true,
    },
})

Record({
    $id: Now.ID['form_action_item_link_case'],
    table: 'sys_ux_m2m_action_layout_item',
    data: {
        ux_form_action_layout: CASE_ACTIONS_LAYOUT,
        ux_form_action_layout_item: createTsanetCaseItem,
        table: 'sn_customerservice_case',
        display_type: OVERFLOW_MENU,
        variant: 'secondary',
        order: 900,
        active: true,
    },
})
