import { Record, ScriptAction } from '@servicenow/sdk/core'

// Queued by TSANetCaseUpdates for each TSANet Case whose linked case or its owner changed, so the
// agent isn't kept waiting on TSANet. parm1 is the TSANet Case's sys_id.
Record({
    $id: Now.ID['event_case_update'],
    table: 'sysevent_register',
    data: {
        suffix: 'case.update',
        event_name: 'x_2256809_connect.case.update',
        table: 'x_2256809_connect_case',
        description: 'A TSANet Case has an update waiting to be sent to TSANet',
        fired_by: 'TSANetCaseUpdates.queueOwner (case owner changed) and TSANetChangeCase (Change case)',
    },
})

ScriptAction({
    $id: Now.ID['action_case_update'],
    name: 'TSANet - send case update',
    eventName: 'x_2256809_connect.case.update',
    active: true,
    description: 'Sends a TSANet Case\'s update to TSANet and stores the answer (TSANetCaseUpdates._send).',
    script: `new TSANetCaseUpdates()._send(event.parm1);`,
})
