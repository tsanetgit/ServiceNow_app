import { UiAction } from '@servicenow/sdk/core'
import { userRole } from '../roles.now'

// ⋯ Create TSANet Case on a case in the CSM/FSM Configurable Workspace: opens the
// Create TSANet Case page in a modal, for the case it was started from. Starting from
// the case is how an outbound TSANet Case begins, so it is linked to that case.
UiAction({
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
