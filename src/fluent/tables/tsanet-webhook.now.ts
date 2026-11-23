import { BooleanColumn, ChoiceColumn, Password2Column, Record, StringColumn, Table } from '@servicenow/sdk/core'

// This instance's subscription to TSANet's webhooks. The "Register with TSANet" button fills it
// in (TSANetWebhook.register); TSANet shows the secret only once, so it is kept here, encrypted.
export const x_2256809_connect_webhook = Table({
    name: 'x_2256809_connect_webhook',
    label: 'TSANet Webhook',
    display: 'subscription_id',
    schema: {
        callback_url: StringColumn({ label: 'Callback URL', maxLength: 500 }),
        subscription_id: StringColumn({ label: 'Subscription ID', maxLength: 40, readOnly: true }),
        secret: Password2Column({ label: 'Secret', maxLength: 255, readOnly: true }),
        active: BooleanColumn({ label: 'Active', default: true }),
    },
})

// One row per webhook delivery TSANet sent with a valid signature, once per CloudEvent id
// (TSANet delivers at least once). Written by TSANetWebhook.receive; TSANetWebhook.process sets
// Processed or Failed.
export const x_2256809_connect_webhook_delivery = Table({
    name: 'x_2256809_connect_webhook_delivery',
    label: 'TSANet Webhook Delivery',
    display: 'event_id',
    schema: {
        event_id: StringColumn({ label: 'Event ID', maxLength: 64 }),
        event_type: StringColumn({ label: 'Event type', maxLength: 80 }),
        request_token: StringColumn({ label: 'Request token', maxLength: 100 }),
        note_token: StringColumn({ label: 'Note token', maxLength: 100 }),
        subscription_id: StringColumn({ label: 'Subscription ID', maxLength: 40 }),
        state: ChoiceColumn({
            label: 'State',
            dropdown: 'dropdown_with_none',
            choices: {
                RECEIVED: { label: 'Received', sequence: 10 },
                PROCESSED: { label: 'Processed', sequence: 20 },
                FAILED: { label: 'Failed', sequence: 30 },
            },
        }),
        // What processing did, or why it failed (TSANetWebhook.process).
        message: StringColumn({ label: 'Message', maxLength: 4000 }),
    },
    index: [{ name: 'idx_webhook_event_id', unique: true, element: 'event_id' }],
})

// The platform's table cleanup removes deliveries older than 30 days, like the transaction log.
Record({
    $id: Now.ID['webhook_delivery_cleanup'],
    table: 'sys_auto_flush',
    data: {
        tablename: 'x_2256809_connect_webhook_delivery',
        matchfield: 'sys_created_on',
        age: 2592000,
        active: true,
    },
})
