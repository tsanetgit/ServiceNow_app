/**
 * TSANetCaseUpdates - tells TSANet when a TSANet Case's linked case changes, or that case's owner does.
 *
 * Two things queue an update: the business rule "TSANet - case owner changed" (queueOwner(), for every
 * TSANet Case linked to the reassigned case) and Change case (TSANetChangeCase, through queue()). Each
 * TSANet Case is marked Update: Sending and the event x_2256809_connect.case.update is queued. _send(), run
 * by its Script Action, reads the TSANet Case's state at that moment (so a later change wins over an
 * earlier one) and sends it to TSANet: the linked case's number, plus that case's owner when it has one,
 * as the engineer of a request we received and accepted, or as the submitter contact of one we sent.
 */
var TSANetCaseUpdates = Class.create();
TSANetCaseUpdates.prototype = {
    CASE_TABLE: 'x_2256809_connect_case',
    EVENT: 'x_2256809_connect.case.update',
    // Statuses an update is sent in. A received request has an approval to update only once accepted.
    UPDATABLE: { INBOUND: ['ACCEPTED', 'INFORMATION'], OUTBOUND: ['OPEN', 'ACCEPTED', 'INFORMATION'] },

    initialize: function() {},

    /** Queues an update for each TSANet Case linked to the case that TSANet still takes updates on. */
    queueOwner: function(hostCase) {
        if (!hostCase.getValue('assigned_to'))
            return;
        var gr = new GlideRecord(this.CASE_TABLE);
        gr.addQuery('host_record', hostCase.getUniqueValue());
        gr.addNotNullQuery('token');
        gr.query();
        while (gr.next()) {
            if (this.updatable(gr))
                this.queue(gr);
        }
    },

    /** Marks the TSANet Case Sending and queues its update. */
    queue: function(gr) {
        gr.setValue('update_state', 'SENDING');
        gr.setValue('update_error', '');
        gr.update();
        gs.eventQueue(this.EVENT, gr, gr.getUniqueValue(), '');
    },

    /** Whether TSANet takes updates on the TSANet Case in its direction and status. */
    updatable: function(gr) {
        return (this.UPDATABLE[gr.getValue('direction')] || []).indexOf(gr.getValue('status')) >= 0;
    },

    /** Run by the Script Action: sends the TSANet Case's current case and owner to TSANet (Sent), or keeps the reason (Failed). */
    _send: function(tsanetCaseSysId) {
        var gr = new GlideRecord(this.CASE_TABLE);
        if (!gr.get(tsanetCaseSysId) || gr.getValue('update_state') != 'SENDING')
            return;
        var state = 'SENT', error = '', sent;
        try {
            if (!this.updatable(gr) || !gr.getValue('host_record'))
                throw new Error('This request is ' + gr.getDisplayValue('status') + ' or has no case, so TSANet was not updated.');
            sent = this._state(gr);
            var number = gr.host_record.number.toString();
            var engineer = sent.assignee ? new TSANetEngineer().forUser(sent.assignee) : null;
            var client = this._client(), token = gr.getValue('token'), dto, body;
            if (gr.getValue('direction') == 'INBOUND') {
                body = { caseNumber: number };
                if (engineer) {
                    body.engineerName = engineer.name;
                    body.engineerEmail = engineer.email;
                    body.engineerPhone = engineer.phone;
                }
                dto = client.updateApproval(token, body);
            } else {
                body = { internalCaseNumber: number };
                if (engineer)
                    body.submitterContactDetails = engineer;
                dto = client.updateRequest(token, body);
            }
            if (!dto || !dto.token || !new TSANetCaseStore().upsert(dto, null, gr.getValue('direction')))
                error = 'TSANet has the update, but its answer could not be stored here. It will show after the next sync.';
        } catch (e) {
            state = 'FAILED';
            error = String(e.message || e).replace(/^TSANet: /, '');
        }
        gr = new GlideRecord(this.CASE_TABLE);
        if (gr.get(tsanetCaseSysId) && gr.getValue('update_state') == 'SENDING') {
            // The case or its owner changed while this was sending: stay Sending and send the new state too.
            var now = this._state(gr);
            if (sent && (now.host != sent.host || now.assignee != sent.assignee)) {
                gs.eventQueue(this.EVENT, gr, gr.getUniqueValue(), '');
                return;
            }
            gr.setValue('update_state', state);
            gr.setValue('update_error', error.substring(0, 4000));
            gr.update();
        }
    },

    /** The linked case and its owner, as sys_ids ('' when none). */
    _state: function(gr) {
        var host = gr.getValue('host_record') || '';
        return { host: host, assignee: host ? gr.host_record.assigned_to.toString() : '' };
    },

    _client: function() {
        if (!this.client)
            this.client = new TSANetClient();
        return this.client;
    },

    type: 'TSANetCaseUpdates'
};
