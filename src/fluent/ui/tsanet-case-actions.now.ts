import { Record, UiAction } from '@servicenow/sdk/core'
import { userRole } from '../roles.now'

// Accept and Reject on an inbound TSANet Case in the CSM/FSM Configurable Workspace. Each
// opens a dialog for what TSANet needs, then sends it through TSANetInbound (GlideAjax);
// the server checks everything again and stores TSANet's reply on the TSANet Case.
const ANSWERABLE = "current.direction == 'INBOUND' && (current.status == 'OPEN' || current.status == 'INFORMATION')"

// Shared by both dialogs, placed inside onClick so each action's script is self-contained.
// Any failure shows on the form instead of failing silently.
const SEND = `function send(method, params, done) {
        try {
            var ga = new GlideAjax('x_2256809_connect.TSANetInbound');
            ga.addParam('sysparm_name', method);
            ga.addParam('sysparm_case_id', g_form.getUniqueValue());
            for (var name in params)
                ga.addParam(name, params[name]);
            ga.getXMLAnswer(function(answer) {
                var result = {};
                try {
                    result = JSON.parse(answer || '{}');
                } catch (e) {
                    result = { error: 'Unexpected answer from the server: ' + answer };
                }
                if (result.error)
                    g_form.addErrorMessage(result.error);
                else
                    g_form.addInfoMessage(done);
            });
        } catch (e) {
            g_form.addErrorMessage('Could not send the answer: ' + e.message);
        }
    }
    function value(result, name) {
        var fields = (result && result.updatedFields) || [];
        for (var i = 0; i < fields.length; i++)
            if (fields[i].name == name)
                return fields[i].value;
        return '';
    }`

const acceptAction = UiAction({
    $id: Now.ID['action_tsanet_accept'],
    table: 'x_2256809_connect_case',
    actionName: 'x_2256809_connect_accept',
    name: 'Accept',
    hint: 'Accept this request from the partner, linked to one of our cases',
    roles: [userRole],
    condition: ANSWERABLE,
    showInsert: false,
    showUpdate: true,
    order: 100,
    client: { isClient: true },
    workspace: {
        isConfigurableWorkspace: true,
        showFormButtonV2: true,
        clientScriptV2: `function onClick(g_form) {
    ${SEND}
    var fields = [];
    // TSANet gets our case number, so a request that has no case yet needs one first.
    if (!g_form.getValue('host_record'))
        fields.push({ type: 'string', name: 'host', label: 'Case number (for example CS0001005)', mandatory: true });
    fields.push({ type: 'textarea', name: 'next_steps', label: 'Next steps', mandatory: true });
    g_modal.showFields({ title: 'Accept TSANet Case', fields: fields, size: 'md' }).then(function(result) {
        send('ajaxAccept', {
            sysparm_host_number: value(result, 'host'),
            sysparm_next_steps: value(result, 'next_steps')
        }, 'Accepted. TSANet has your answer.');
    });
}`,
    },
})

const rejectAction = UiAction({
    $id: Now.ID['action_tsanet_reject'],
    table: 'x_2256809_connect_case',
    actionName: 'x_2256809_connect_reject',
    name: 'Reject',
    hint: 'Decline this request; the reason goes back to the partner',
    roles: [userRole],
    condition: ANSWERABLE,
    showInsert: false,
    showUpdate: true,
    order: 110,
    client: { isClient: true },
    workspace: {
        isConfigurableWorkspace: true,
        showFormButtonV2: true,
        clientScriptV2: `function onClick(g_form) {
    ${SEND}
    g_modal.showFields({
        title: 'Reject TSANet Case',
        fields: [{ type: 'textarea', name: 'reason', label: 'Reason', mandatory: true }],
        size: 'md'
    }).then(function(result) {
        send('ajaxReject', { sysparm_reason: value(result, 'reason') }, 'Rejected. TSANet has your answer.');
    });
}`,
    },
})

// The workspace builds a record's action bar from form action layouts, and the TSANet Case
// table has none of its own (it isn't a task), so without these the buttons never show.
// The layout is ours, on the CSM/FSM workspace's action config, which is only referenced.
const CSM_WORKSPACE_ACTION_CONFIG = '46e658c35322101043d7ddeeff7b12b4'
const BUTTON = 0

const caseActionLayout = Record({
    $id: Now.ID['form_action_layout_tsanet_case'],
    table: 'sys_ux_form_action_layout',
    data: {
        name: 'TSANet Case Actions',
        table: 'x_2256809_connect_case',
        action_config: CSM_WORKSPACE_ACTION_CONFIG,
        specificity: 10,
        active: true,
    },
})

// For each action: a form action, its layout item, and the item's link into the layout.
const acceptFormAction = Record({
    $id: Now.ID['form_action_tsanet_accept'],
    table: 'sys_ux_form_action',
    data: { name: 'Accept', table: 'x_2256809_connect_case', action_type: 'ui_action', ui_action: acceptAction, active: true },
})

const acceptItem = Record({
    $id: Now.ID['form_action_item_tsanet_accept'],
    table: 'sys_ux_form_action_layout_item',
    data: {
        name: 'Accept',
        label: 'Accept',
        table: 'x_2256809_connect_case',
        item_type: 'action',
        action: acceptFormAction,
        overflow: false,
        color: 'primary',
        order: 100,
        active: true,
    },
})

Record({
    $id: Now.ID['form_action_item_link_tsanet_accept'],
    table: 'sys_ux_m2m_action_layout_item',
    data: {
        ux_form_action_layout: caseActionLayout,
        ux_form_action_layout_item: acceptItem,
        table: 'x_2256809_connect_case',
        display_type: BUTTON,
        variant: 'primary',
        order: 100,
        active: true,
    },
})

const rejectFormAction = Record({
    $id: Now.ID['form_action_tsanet_reject'],
    table: 'sys_ux_form_action',
    data: { name: 'Reject', table: 'x_2256809_connect_case', action_type: 'ui_action', ui_action: rejectAction, active: true },
})

const rejectItem = Record({
    $id: Now.ID['form_action_item_tsanet_reject'],
    table: 'sys_ux_form_action_layout_item',
    data: {
        name: 'Reject',
        label: 'Reject',
        table: 'x_2256809_connect_case',
        item_type: 'action',
        action: rejectFormAction,
        overflow: false,
        color: 'secondary',
        order: 110,
        active: true,
    },
})

Record({
    $id: Now.ID['form_action_item_link_tsanet_reject'],
    table: 'sys_ux_m2m_action_layout_item',
    data: {
        ux_form_action_layout: caseActionLayout,
        ux_form_action_layout_item: rejectItem,
        table: 'x_2256809_connect_case',
        display_type: BUTTON,
        variant: 'secondary',
        order: 110,
        active: true,
    },
})
