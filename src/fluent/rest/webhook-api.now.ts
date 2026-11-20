import { RestApi } from '@servicenow/sdk/core'

// Where TSANet delivers its webhooks: POST /api/x_2256809_connect/v1/webhook/events.
// No ServiceNow sign-in (TSANet has no account here): TSANetWebhook.receive refuses any delivery
// whose HMAC signature doesn't match the subscription's secret, before it stores the delivery.
RestApi({
    $id: Now.ID['rest_webhook'],
    name: 'TSANet Webhook',
    serviceId: 'webhook',
    consumes: 'application/json,application/cloudevents+json',
    produces: 'application/json',
    versions: [{ $id: Now.ID['rest_webhook_v1'], version: 1, isDefault: true }],
    routes: [
        {
            $id: Now.ID['rest_webhook_events'],
            name: 'Receive event',
            method: 'POST',
            path: '/events',
            version: 1,
            authentication: false,
            authorization: false,
            internalRole: false,
            consumes: 'application/json,application/cloudevents+json',
            script: `(function process(request, response) {
    new TSANetWebhook().receive(request, response);
})(request, response);`,
        },
    ],
})
