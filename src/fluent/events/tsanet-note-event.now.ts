import { Record, ScriptAction } from '@servicenow/sdk/core'

// Queued by TSANetNotes for each note to send, so the agent isn't kept waiting on TSANet.
// parm1 is the note's sys_id.
Record({
    $id: Now.ID['event_note_send'],
    table: 'sysevent_register',
    data: {
        suffix: 'note.send',
        event_name: 'x_2256809_connect.note.send',
        table: 'x_2256809_connect_note',
        description: 'A note from an agent is waiting to be sent to TSANet',
        fired_by: 'TSANetNotes.createNote and TSANetNotes.resend',
    },
})

ScriptAction({
    $id: Now.ID['action_note_send'],
    name: 'TSANet - send note',
    eventName: 'x_2256809_connect.note.send',
    active: true,
    description: 'Sends a Sending note to TSANet and stores the answer (TSANetNotes._send).',
    script: `new TSANetNotes()._send(event.parm1);`,
})
