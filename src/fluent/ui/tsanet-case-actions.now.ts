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
                // No answer means the call never got through (an expired session, say), not success.
                var result = { error: 'No answer from the server. Your answer may not have reached TSANet; reload the form to check its status.' };
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
                    // The server changed the status and the link: show them, and hide Accept and Reject.
                    g_form.reload();
                    g_form.addInfoMessage(done);
                }
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
    // TSANet gets our case number, so a request with no case yet gets one here: a case the agent
    // picks, or a new one created from the request. The server says which table the cases are in.
    var ga = new GlideAjax('x_2256809_connect.TSANetInbound');
    ga.addParam('sysparm_name', 'ajaxAcceptForm');
    ga.addParam('sysparm_case_id', g_form.getUniqueValue());
    ga.getXMLAnswer(function(answer) {
        var form;
        try {
            form = JSON.parse(answer);
        } catch (e) {
            form = { error: answer ? 'Unexpected answer from the server: ' + answer : 'No answer from the server. Reload the form and try again.' };
        }
        if (form.error) {
            g_form.addErrorMessage(form.error);
            return;
        }
        var fields = [];
        if (!form.linked) {
            fields.push({ type: 'choice', name: 'host_choice', label: 'Case for this request', value: 'existing', mandatory: true, choices: [
                { displayValue: 'An existing case (pick it below)', value: 'existing' },
                { displayValue: 'A new case, created from this request', value: 'new' }] });
            // A real field of the TSANet Case (host_record), so the workspace can look up the cases.
            fields.push({ type: 'reference', name: 'host_record', label: 'Existing ' + form.label, reference: form.table,
                referringTable: 'x_2256809_connect_case', referringRecordId: g_form.getUniqueValue(), value: '', displayValue: '' });
        }
        fields.push({ type: 'textarea', name: 'next_steps', label: 'Next steps', mandatory: true });
        g_modal.showFields({ title: 'Accept TSANet Case', fields: fields, size: 'md' }).then(function(result) {
            send('ajaxAccept', {
                sysparm_host_choice: value(result, 'host_choice'),
                sysparm_host_id: value(result, 'host_record'),
                sysparm_next_steps: value(result, 'next_steps')
            }, 'Accepted. TSANet has your answer.');
        });
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

// Create note: on a request TSANet takes notes on (accepted, or waiting for information), in either
// direction. Loads the default summary and TSANet's note types, asks for the note, and hands it to
// TSANetNotes, which stores it as Sending and sends it in the background (GlideAjax).
const createNoteAction = UiAction({
    $id: Now.ID['action_tsanet_create_note'],
    table: 'x_2256809_connect_case',
    actionName: 'x_2256809_connect_create_note',
    name: 'Create note',
    hint: 'Send a note to the partner on this TSANet request',
    roles: [userRole],
    condition: "current.status == 'ACCEPTED' || current.status == 'INFORMATION'",
    showInsert: false,
    showUpdate: true,
    order: 120,
    client: { isClient: true },
    workspace: {
        isConfigurableWorkspace: true,
        showFormButtonV2: true,
        clientScriptV2: `function onClick(g_form) {
    function call(method, params, done) {
        try {
            var ga = new GlideAjax('x_2256809_connect.TSANetNotes');
            ga.addParam('sysparm_name', method);
            ga.addParam('sysparm_case_id', g_form.getUniqueValue());
            for (var name in params)
                ga.addParam(name, params[name]);
            ga.getXMLAnswer(function(answer) {
                var result = { error: 'No answer from the server. Reload the form to check whether the note was saved.' };
                if (answer) {
                    try {
                        result = JSON.parse(answer);
                    } catch (e) {
                        result = { error: 'Unexpected answer from the server: ' + answer };
                    }
                }
                if (result.error)
                    g_form.addErrorMessage(result.error);
                else
                    done(result);
            });
        } catch (e) {
            g_form.addErrorMessage('Could not create the note: ' + e.message);
        }
    }
    function value(result, name) {
        var fields = (result && result.updatedFields) || [];
        for (var i = 0; i < fields.length; i++)
            if (fields[i].name == name)
                return fields[i].value;
        return '';
    }
    call('ajaxNoteForm', {}, function(form) {
        var types = [{ displayValue: 'None', value: '' }];
        for (var i = 0; i < form.types.length; i++)
            types.push({ displayValue: form.types[i].label, value: form.types[i].value });
        if (form.warning)
            g_form.addInfoMessage(form.warning);
        g_modal.showFields({
            title: 'Create note',
            fields: [
                { type: 'string', name: 'summary', label: 'Summary', value: form.summary, mandatory: true },
                { type: 'textarea', name: 'description', label: 'Description', mandatory: true },
                { type: 'choice', name: 'priority', label: 'Priority', value: 'MEDIUM', mandatory: true, choices: [
                    { displayValue: 'Low', value: 'LOW' }, { displayValue: 'Medium', value: 'MEDIUM' }, { displayValue: 'High', value: 'HIGH' }] },
                { type: 'choice', name: 'type', label: 'Type', value: '', choices: types }
            ],
            size: 'md'
        }).then(function(result) {
            call('ajaxCreateNote', {
                sysparm_summary: value(result, 'summary'),
                sysparm_description: value(result, 'description'),
                sysparm_priority: value(result, 'priority'),
                sysparm_type: value(result, 'type')
            }, function() {
                g_form.reload();
                g_form.addInfoMessage('Sending your note to TSANet. It shows as Sent in the Notes list once TSANet has it.');
            });
        });
    });
}`,
    },
})

const createNoteFormAction = Record({
    $id: Now.ID['form_action_tsanet_create_note'],
    table: 'sys_ux_form_action',
    data: { name: 'Create note', table: 'x_2256809_connect_case', action_type: 'ui_action', ui_action: createNoteAction, active: true },
})

const createNoteItem = Record({
    $id: Now.ID['form_action_item_tsanet_create_note'],
    table: 'sys_ux_form_action_layout_item',
    data: {
        name: 'Create note',
        label: 'Create note',
        table: 'x_2256809_connect_case',
        item_type: 'action',
        action: createNoteFormAction,
        overflow: false,
        color: 'secondary',
        order: 120,
        active: true,
    },
})

Record({
    $id: Now.ID['form_action_item_link_tsanet_create_note'],
    table: 'sys_ux_m2m_action_layout_item',
    data: {
        ux_form_action_layout: caseActionLayout,
        ux_form_action_layout_item: createNoteItem,
        table: 'x_2256809_connect_case',
        display_type: BUTTON,
        variant: 'secondary',
        order: 120,
        active: true,
    },
})

// Change case: on a linked TSANet Case that TSANet takes updates on (TSANetCaseUpdates.updatable), in
// either direction. Picks another case with the same picker as Accept and hands it to TSANetChangeCase,
// which links it and sends the new case number to TSANet in the background (GlideAjax).
const changeCaseAction = UiAction({
    $id: Now.ID['action_tsanet_change_case'],
    table: 'x_2256809_connect_case',
    actionName: 'x_2256809_connect_change_case',
    name: 'Change case',
    hint: 'Link this TSANet request to another of our cases and tell TSANet',
    roles: [userRole],
    // The platform keeps only 254 characters of a condition, so the status rule is called, not written out.
    condition: '!current.host_record.nil() && !current.token.nil() && new TSANetCaseUpdates().updatable(current)',
    showInsert: false,
    showUpdate: true,
    order: 130,
    client: { isClient: true },
    workspace: {
        isConfigurableWorkspace: true,
        showFormButtonV2: true,
        clientScriptV2: `function onClick(g_form) {
    function call(method, params, done) {
        try {
            var ga = new GlideAjax('x_2256809_connect.TSANetChangeCase');
            ga.addParam('sysparm_name', method);
            ga.addParam('sysparm_case_id', g_form.getUniqueValue());
            for (var name in params)
                ga.addParam(name, params[name]);
            ga.getXMLAnswer(function(answer) {
                var result = { error: 'No answer from the server. Reload the form to check which case is linked.' };
                if (answer) {
                    try {
                        result = JSON.parse(answer);
                    } catch (e) {
                        result = { error: 'Unexpected answer from the server: ' + answer };
                    }
                }
                if (result.error)
                    g_form.addErrorMessage(result.error);
                else
                    done(result);
            });
        } catch (e) {
            g_form.addErrorMessage('Could not change the case: ' + e.message);
        }
    }
    function value(result, name) {
        var fields = (result && result.updatedFields) || [];
        for (var i = 0; i < fields.length; i++)
            if (fields[i].name == name)
                return fields[i].value;
        return '';
    }
    call('ajaxChangeCaseForm', {}, function(form) {
        g_modal.showFields({
            title: 'Change case',
            fields: [
                // A real field of the TSANet Case (host_record), so the workspace can look up the cases.
                { type: 'reference', name: 'host_record', label: form.label, reference: form.table, mandatory: true,
                    referringTable: 'x_2256809_connect_case', referringRecordId: g_form.getUniqueValue(), value: '', displayValue: '' }
            ],
            size: 'md'
        }).then(function(result) {
            call('ajaxChangeCase', { sysparm_host_id: value(result, 'host_record') }, function(done) {
                g_form.reload();
                g_form.addInfoMessage('Linked to ' + done.number + '. Sending the new case number to TSANet.');
            });
        });
    });
}`,
    },
})

const changeCaseFormAction = Record({
    $id: Now.ID['form_action_tsanet_change_case'],
    table: 'sys_ux_form_action',
    data: { name: 'Change case', table: 'x_2256809_connect_case', action_type: 'ui_action', ui_action: changeCaseAction, active: true },
})

const changeCaseItem = Record({
    $id: Now.ID['form_action_item_tsanet_change_case'],
    table: 'sys_ux_form_action_layout_item',
    data: {
        name: 'Change case',
        label: 'Change case',
        table: 'x_2256809_connect_case',
        item_type: 'action',
        action: changeCaseFormAction,
        overflow: false,
        color: 'secondary',
        order: 130,
        active: true,
    },
})

Record({
    $id: Now.ID['form_action_item_link_tsanet_change_case'],
    table: 'sys_ux_m2m_action_layout_item',
    data: {
        ux_form_action_layout: caseActionLayout,
        ux_form_action_layout_item: changeCaseItem,
        table: 'x_2256809_connect_case',
        display_type: BUTTON,
        variant: 'secondary',
        order: 130,
        active: true,
    },
})
