import { Record, UiAction } from '@servicenow/sdk/core'
import { userRole } from '../roles.now'

// Send again: on a note of ours that failed to send. TSANetNotes checks it again on the server,
// marks it Sending and queues it, the same way as a new note (GlideAjax).
const sendAgainAction = UiAction({
    $id: Now.ID['action_tsanet_note_send_again'],
    table: 'x_2256809_connect_note',
    actionName: 'x_2256809_connect_note_send_again',
    name: 'Send again',
    hint: 'Send this note to TSANet again',
    roles: [userRole],
    condition: "current.direction == 'OUTBOUND' && current.send_state == 'FAILED' && current.token.nil()",
    showInsert: false,
    showUpdate: true,
    order: 100,
    client: { isClient: true },
    workspace: {
        isConfigurableWorkspace: true,
        showFormButtonV2: true,
        clientScriptV2: `function onClick(g_form) {
    try {
        var ga = new GlideAjax('x_2256809_connect.TSANetNotes');
        ga.addParam('sysparm_name', 'ajaxResend');
        ga.addParam('sysparm_note_id', g_form.getUniqueValue());
        ga.getXMLAnswer(function(answer) {
            var result = { error: 'No answer from the server. Reload the form to check the note.' };
            if (answer) {
                try {
                    result = JSON.parse(answer);
                } catch (e) {
                    result = { error: 'Unexpected answer from the server: ' + answer };
                }
            }
            if (result.error) {
                g_form.addErrorMessage(result.error);
            } else {
                g_form.reload();
                g_form.addInfoMessage('Sending the note to TSANet again.');
            }
        });
    } catch (e) {
        g_form.addErrorMessage('Could not send the note again: ' + e.message);
    }
}`,
    },
})

// The workspace builds the action bar from form action layouts, and the note table has none of
// its own: the same CSM/FSM workspace action config as the TSANet Case's layout (tsanet-case-actions.now.ts).
const CSM_WORKSPACE_ACTION_CONFIG = '46e658c35322101043d7ddeeff7b12b4'
const BUTTON = 0

const noteActionLayout = Record({
    $id: Now.ID['form_action_layout_tsanet_note'],
    table: 'sys_ux_form_action_layout',
    data: {
        name: 'TSANet Note Actions',
        table: 'x_2256809_connect_note',
        action_config: CSM_WORKSPACE_ACTION_CONFIG,
        specificity: 10,
        active: true,
    },
})

const sendAgainFormAction = Record({
    $id: Now.ID['form_action_tsanet_note_send_again'],
    table: 'sys_ux_form_action',
    data: { name: 'Send again', table: 'x_2256809_connect_note', action_type: 'ui_action', ui_action: sendAgainAction, active: true },
})

const sendAgainItem = Record({
    $id: Now.ID['form_action_item_tsanet_note_send_again'],
    table: 'sys_ux_form_action_layout_item',
    data: {
        name: 'Send again',
        label: 'Send again',
        table: 'x_2256809_connect_note',
        item_type: 'action',
        action: sendAgainFormAction,
        overflow: false,
        color: 'primary',
        order: 100,
        active: true,
    },
})

Record({
    $id: Now.ID['form_action_item_link_tsanet_note_send_again'],
    table: 'sys_ux_m2m_action_layout_item',
    data: {
        ux_form_action_layout: noteActionLayout,
        ux_form_action_layout_item: sendAgainItem,
        table: 'x_2256809_connect_note',
        display_type: BUTTON,
        variant: 'primary',
        order: 100,
        active: true,
    },
})
