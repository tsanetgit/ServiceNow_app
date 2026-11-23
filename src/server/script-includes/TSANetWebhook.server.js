/**
 * TSANetWebhook - receives TSANet's webhook deliveries, and signs this instance up for them.
 *
 * TSANet POSTs a signed CloudEvent to the "TSANet Webhook" REST API for every request, note and
 * response it creates or changes. receive() checks the HMAC signature over the raw body, records
 * the delivery once per CloudEvent id, queues the event x_2256809_connect.webhook.received and
 * answers straight away. process(), run by the Script Action for that event, fetches the request
 * and stores it with its notes and responses. The poll stays as the safety net for missed deliveries.
 *
 * The endpoint takes no ServiceNow sign-in, because TSANet has no ServiceNow account: the
 * signature is what keeps everyone else out, and no delivery is stored before it is checked.
 */
var TSANetWebhook = Class.create();
TSANetWebhook.prototype = {
    SUBSCRIPTION_TABLE: 'x_2256809_connect_webhook',
    DELIVERY_TABLE: 'x_2256809_connect_webhook_delivery',
    // The route in webhook-api.now.ts, under the instance URL.
    PATH: 'api/x_2256809_connect/v1/webhook/events',
    EVENT_PREFIX: 'org.tsanet.connect.collaboration-request.',
    EVENT_TYPES: ['created', 'closed', 'note.created', 'response.created', 'response.updated'],
    // TSANet's events name a token and little else; anything larger is refused before it is hashed.
    MAX_BODY: 65536,
    // Registered in tsanet-webhook-event.now.ts.
    EVENT: 'x_2256809_connect.webhook.received',

    initialize: function(client) {
        this.client = client || null;
    },

    /** Scripted REST handler: 413 for an oversized body, 401 for a bad signature, 400 for a malformed or unsupported event, 500 to make TSANet retry, else 200. */
    receive: function(request, response) {
        var started = new Date().getTime();
        var result;
        try {
            var body = request.body ? String(request.body.dataString || '') : '';
            result = this._receive(body, String(request.getHeader('X-Hub-Signature-256') || ''));
        } catch (e) {
            result = { status: 500, message: 'Could not record the delivery: ' + e.message };
        }
        // Every delivery gets a row, a refused one too; never the body, the signature or the secret.
        new TSANetLog().write({ operation: 'Webhook ' + (result.type || 'delivery'), result: result.status < 300 ? 'SUCCESS' : 'FAILED',
            status: result.status, message: result.message, durationMs: new Date().getTime() - started, token: result.token });
        response.setStatus(result.status);
        response.setBody({ message: result.message });
    },

    _receive: function(body, signature) {
        if (body.length > this.MAX_BODY)
            return { status: 413, message: 'Refused: the body is larger than ' + this.MAX_BODY + ' characters' };
        var sub = this._subscription();
        if (!sub)
            return { status: 401, message: 'Refused: this instance has no active webhook subscription' };
        var hmac = new TSANetHmac();
        var expected = 'sha256=' + hmac.hmacSha256Hex(sub.secret.getDecryptedValue(), body);
        if (!hmac.equals(signature, expected))
            return { status: 401, message: 'Refused: missing or wrong signature' };

        var event;
        try {
            event = JSON.parse(body);
        } catch (e) {
            return { status: 400, message: 'Refused: the body is not JSON' };
        }
        var token = event && event.data && event.data.requestToken;
        if (!event || !event.id || !event.type || !token)
            return { status: 400, message: 'Refused: the CloudEvent has no id, type or data.requestToken' };
        // Only the five types this instance subscribed to are stored, so processing can rely on them.
        var type = String(event.type).substring(this.EVENT_PREFIX.length);
        if (String(event.type).indexOf(this.EVENT_PREFIX) !== 0 || this.EVENT_TYPES.indexOf(type) < 0)
            return { status: 400, message: 'Refused: unsupported event type ' + event.type };
        if (String(event.subscriptionid) != sub.getValue('subscription_id'))
            return { status: 401, type: type, message: 'Refused: the event is for subscription ' + event.subscriptionid + ', not this instance\'s' };

        // At-least-once delivery: a CloudEvent id we already have is answered 200 and not stored again.
        var found = new GlideRecord(this.DELIVERY_TABLE);
        if (found.get('event_id', event.id))
            return { status: 200, type: type, token: token, message: 'Already received ' + event.id };
        var delivery = new GlideRecord(this.DELIVERY_TABLE);
        delivery.initialize();
        delivery.setValue('event_id', event.id);
        delivery.setValue('event_type', type);
        delivery.setValue('request_token', token);
        delivery.setValue('note_token', event.data.noteToken || '');
        delivery.setValue('subscription_id', event.subscriptionid);
        delivery.setValue('state', 'RECEIVED');
        if (!delivery.insert())
            return { status: 500, type: type, token: token, message: 'Could not store delivery ' + event.id };
        // Processed in the background, so TSANet gets its answer now (it waits 30 seconds at most).
        gs.eventQueue(this.EVENT, delivery, delivery.getUniqueValue(), token);
        return { status: 200, type: type, token: token, message: 'Received ' + event.id };
    },

    /**
     * Run by the Script Action for x_2256809_connect.webhook.received: fetches the delivery's request
     * from TSANet and stores it. Only a Received delivery is processed, so each one is processed once;
     * a failed one stays Failed (no automatic retry) and the next poll brings the request in.
     */
    process: function(deliverySysId) {
        var delivery = new GlideRecord(this.DELIVERY_TABLE);
        if (!delivery.get(deliverySysId) || delivery.getValue('state') != 'RECEIVED')
            return;
        var started = new Date().getTime();
        var token = delivery.getValue('request_token');
        var result = 'SUCCESS', message, caseSysId = null;
        try {
            var request = (this.client || new TSANetClient()).getRequest(token);
            if (!request || request.token != token)
                throw new Error('TSANet did not return request ' + token);
            var stored = new TSANetSync().storeOne(request);
            caseSysId = stored.sysId;
            message = stored.inserted ? 'Stored a new TSANet Case' : stored.updated ? 'Updated the TSANet Case' : 'No change';
        } catch (e) {
            result = 'FAILED';
            message = String(e.message).replace(/^TSANet: /, '');
        }
        delivery.setValue('state', result == 'SUCCESS' ? 'PROCESSED' : 'FAILED');
        delivery.setValue('message', message);
        if (!delivery.update())
            throw new Error('Could not update webhook delivery ' + deliverySysId);
        new TSANetLog().write({ operation: 'Webhook ' + delivery.getValue('event_type') + ' processed', result: result,
            message: message, durationMs: new Date().getTime() - started, caseSysId: caseSysId, token: token });
    },

    /**
     * Signs this instance up at TSANet for all five event types and keeps the secret, encrypted, on gr
     * (a TSANet Webhook record, new or saved). Returns TSANet's subscription id. Run by the
     * "Register with TSANet" button; throws with a message for the admin.
     */
    register: function(gr) {
        if (gr.getValue('subscription_id'))
            throw new Error('This subscription is already registered with TSANet (id ' + gr.getValue('subscription_id') + ')');
        var other = this._subscription();
        if (other && other.getUniqueValue() != gr.getUniqueValue())
            throw new Error('Subscription ' + other.getValue('subscription_id') + ' is already active. Deactivate it before registering another.');

        var url = gr.getValue('callback_url') || (gs.getProperty('glide.servlet.uri') + this.PATH);
        var types = this.EVENT_TYPES.map(function(t) { return this.EVENT_PREFIX + t; }, this);
        var client = this.client || new TSANetClient();
        var answer = client.request('POST', '/v2/webhooks', null, { callbackUrl: url, eventTypes: types, callbackAuth: { type: 'NONE' } });
        if (!answer || !answer.id || !answer.secret)
            throw new Error('TSANet did not return a subscription id and secret');

        gr.setValue('callback_url', url);
        gr.setValue('subscription_id', answer.id);
        gr.setValue('active', true);
        gr.secret.setDisplayValue(answer.secret);
        var saved = gr.isNewRecord() ? gr.insert() : gr.update();
        // The secret is shown only once: a subscription we can't verify deliveries for is removed again.
        var check = new GlideRecord(this.SUBSCRIPTION_TABLE);
        if (!saved || !check.get(saved) || check.secret.getDecryptedValue() != answer.secret) {
            try {
                client.request('DELETE', '/v1/webhooks/' + answer.id);
            } catch (e) {
                gs.error('[TSANet] Could not remove webhook subscription ' + answer.id + ' at TSANet: ' + e.message);
            }
            // Leave the record unregistered, so its button shows again and the admin can retry.
            if (saved && check.get(saved)) {
                check.setValue('subscription_id', '');
                check.setValue('active', false);
                check.secret.setDisplayValue('');
                check.update();
            }
            throw new Error('Could not keep the subscription\'s secret, so subscription ' + answer.id + ' was removed at TSANet again');
        }
        return answer.id;
    },

    /** The active, registered subscription, if any. */
    _subscription: function() {
        var sub = new GlideRecord(this.SUBSCRIPTION_TABLE);
        sub.addActiveQuery();
        sub.addNotNullQuery('subscription_id');
        sub.setLimit(1);
        sub.query();
        return sub.next() ? sub : null;
    },

    type: 'TSANetWebhook'
};
