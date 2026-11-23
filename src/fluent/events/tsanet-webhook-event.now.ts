import { Record, ScriptAction } from '@servicenow/sdk/core'

// Queued by TSANetWebhook.receive for each new delivery, so TSANet gets its answer at once and the
// request is fetched and stored in the background. parm1 is the delivery's sys_id, parm2 the token.
Record({
    $id: Now.ID['event_webhook_received'],
    table: 'sysevent_register',
    data: {
        suffix: 'webhook.received',
        event_name: 'x_2256809_connect.webhook.received',
        table: 'x_2256809_connect_webhook_delivery',
        description: 'A TSANet webhook delivery was received and is waiting to be processed',
        fired_by: 'TSANetWebhook.receive',
    },
})

ScriptAction({
    $id: Now.ID['action_webhook_process'],
    name: 'TSANet - process webhook delivery',
    eventName: 'x_2256809_connect.webhook.received',
    active: true,
    description: 'Fetches the request a TSANet webhook delivery names and stores it (TSANetWebhook.process).',
    script: `new TSANetWebhook().process(event.parm1);`,
})
