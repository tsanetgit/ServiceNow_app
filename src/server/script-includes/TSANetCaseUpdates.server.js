/**
 * TSANetCaseUpdates - tells TSANet when a linked case changes owner.
 *
 * The business rule "TSANet - case owner changed" calls queueOwner() when a case's Assigned to changes:
 * every TSANet Case linked to it that TSANet still takes updates on is marked Update: Sending, and the
 * event x_2256809_connect.case.update is queued. _send(), run by its Script Action, reads the case's
 * assignee at that moment (so a later reassignment wins over an earlier one) and sends them to TSANet:
 * as the engineer of a request we received and accepted, or as the submitter contact of one we sent.
 */
var TSANetCaseUpdates = Class.create();
TSANetCaseUpdates.prototype = {
    CASE_TABLE: 'x_2256809_connect_case',
    EVENT: 'x_2256809_connect.case.update',
    // Statuses an update is sent in. A received request has an approval to update only once accepted.
    UPDATABLE: { INBOUND: ['ACCEPTED', 'INFORMATION'], OUTBOUND: ['OPEN', 'ACCEPTED', 'INFORMATION'] },

    initialize: function() {},

    /** Marks each TSANet Case linked to the case as Sending and queues its update. */
    queueOwner: function(hostCase) {
        if (!hostCase.getValue('assigned_to'))
            return;
        var gr = new GlideRecord(this.CASE_TABLE);
        gr.addQuery('host_record', hostCase.getUniqueValue());
        gr.addNotNullQuery('token');
        gr.query();
        while (gr.next()) {
            if (!this._updatable(gr))
                continue;
            gr.setValue('update_state', 'SENDING');
            gr.setValue('update_error', '');
            gr.update();
            gs.eventQueue(this.EVENT, gr, gr.getUniqueValue(), '');
        }
    },

    /** Run by the Script Action: sends the linked case's current assignee to TSANet (Sent), or keeps the reason (Failed). */
    _send: function(tsanetCaseSysId) {
        var gr = new GlideRecord(this.CASE_TABLE);
        if (!gr.get(tsanetCaseSysId) || gr.getValue('update_state') != 'SENDING')
            return;
        var state = 'SENT', error = '';
        try {
            if (!this._updatable(gr) || !gr.getValue('host_record'))
                throw new Error('This request is ' + gr.getDisplayValue('status') + ' or has no case, so TSANet was not updated.');
            var assignee = gr.host_record.assigned_to.toString();
            if (!assignee)
                throw new Error('The case has no one assigned, so TSANet was not updated.');
            var engineer = new TSANetEngineer().forUser(assignee);
            var client = this._client(), token = gr.getValue('token'), dto;
            if (gr.getValue('direction') == 'INBOUND')
                dto = client.updateApproval(token, { engineerName: engineer.name, engineerEmail: engineer.email, engineerPhone: engineer.phone });
            else
                dto = client.updateRequest(token, { submitterContactDetails: engineer });
            if (!dto || !dto.token || !new TSANetCaseStore().upsert(dto, null, gr.getValue('direction')))
                error = 'TSANet has the update, but its answer could not be stored here. It will show after the next sync.';
        } catch (e) {
            state = 'FAILED';
            error = String(e.message || e).replace(/^TSANet: /, '');
        }
        gr = new GlideRecord(this.CASE_TABLE);
        if (gr.get(tsanetCaseSysId) && gr.getValue('update_state') == 'SENDING') {
            // Reassigned again while this was sending: stay Sending and send the new assignee too.
            var now = gr.getValue('host_record') ? gr.host_record.assigned_to.toString() : '';
            if (assignee && now && now != assignee) {
                gs.eventQueue(this.EVENT, gr, gr.getUniqueValue(), '');
                return;
            }
            gr.setValue('update_state', state);
            gr.setValue('update_error', error.substring(0, 4000));
            gr.update();
        }
    },

    _client: function() {
        if (!this.client)
            this.client = new TSANetClient();
        return this.client;
    },

    _updatable: function(gr) {
        return (this.UPDATABLE[gr.getValue('direction')] || []).indexOf(gr.getValue('status')) >= 0;
    },

    type: 'TSANetCaseUpdates'
};
