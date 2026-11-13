import { UiAction } from '@servicenow/sdk/core'
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

UiAction({
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

UiAction({
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
