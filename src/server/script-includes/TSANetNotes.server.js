/**
 * TSANetNotes - sends an agent's note on a TSANet Case to TSANet.
 *
 * The TSANet Case's "Create note" action and a failed note's "Send again" call it through GlideAjax.
 * A note is stored at once as an outbound TSANet Note marked Sending, with the agent as its sender,
 * and the event x_2256809_connect.note.send is queued; _send(), run by its Script Action, posts it to
 * TSANet and stores TSANet's answer through TSANetCaseStore (Sent), or keeps TSANet's reason (Failed, or
 * Outcome unknown when TSANet has or may have the note).
 * The agent's input and the request's status are checked here on the server, not taken from the browser.
 */
var TSANetNotes = Class.create();
TSANetNotes.prototype = Object.extendsObject(global.AbstractAjaxProcessor, {
    SCOPE: 'x_2256809_connect',
    CASE_TABLE: 'x_2256809_connect_case',
    NOTE_TABLE: 'x_2256809_connect_note',
    EVENT: 'x_2256809_connect.note.send',
    // TSANet takes notes only while the request is accepted or waiting for information.
    NOTABLE: ['ACCEPTED', 'INFORMATION'],
    PRIORITIES: ['LOW', 'MEDIUM', 'HIGH'],
    // Limits from CaseNoteTemplateDTO.
    MAX_SUMMARY: 500,
    MAX_DESCRIPTION: 5000,

    /** GlideAjax: what the Create note form needs. Parameter sysparm_case_id. */
    ajaxNoteForm: function() {
        var self = this;
        return this._answer(function() {
            return self.noteForm(self.getParameter('sysparm_case_id'));
        });
    },

    /** GlideAjax: create and send a note. Parameters sysparm_case_id, sysparm_summary, sysparm_description, sysparm_priority, sysparm_type. */
    ajaxCreateNote: function() {
        var self = this;
        return this._answer(function() {
            return self.createNote(self.getParameter('sysparm_case_id'), self.getParameter('sysparm_summary'),
                self.getParameter('sysparm_description'), self.getParameter('sysparm_priority'), self.getParameter('sysparm_type'));
        });
    },

    /** GlideAjax: send a failed note again. Parameter sysparm_note_id. */
    ajaxResend: function() {
        var self = this;
        return this._answer(function() {
            return self.resend(self.getParameter('sysparm_note_id'));
        });
    },

    /**
     * { summary, types: [{ value, label }], warning }: the default summary (the linked case's short
     * description, else the request's summary) and TSANet's note types without "system". When the
     * types can't be read, only "None" is offered, so a note can still be sent without one.
     */
    noteForm: function(caseSysId) {
        var tsanetCase = this._notable(caseSysId);
        var summary = tsanetCase.getValue('host_record') ? tsanetCase.host_record.short_description.toString() : '';
        var result = { summary: (summary || tsanetCase.getValue('summary') || '').substring(0, this.MAX_SUMMARY), types: [], warning: '' };
        try {
            (this._client().noteTypes() || []).forEach(function(t) {
                if (t && t.code && String(t.code).toLowerCase() != 'system')
                    result.types.push({ value: String(t.code), label: String(t.displayName || t.code) });
            });
        } catch (e) {
            result.warning = 'The note types could not be loaded from TSANet, so the note is sent without one.';
        }
        return result;
    },

    /** Stores the agent's note as Sending and queues it to be sent. Returns { noteId }. */
    createNote: function(caseSysId, summary, description, priority, type) {
        var tsanetCase = this._notable(caseSysId);
        summary = String(summary || '').trim();
        description = String(description || '').trim();
        priority = String(priority || 'MEDIUM').toUpperCase();
        type = String(type || '').trim();
        if (!summary || !description)
            throw this._inputError('Fill in: ' + (!summary ? 'Summary' : 'Description'));
        if (summary.length > this.MAX_SUMMARY || description.length > this.MAX_DESCRIPTION)
            throw this._inputError('The summary can be up to ' + this.MAX_SUMMARY + ' characters and the description up to ' + this.MAX_DESCRIPTION + '.');
        if (this.PRIORITIES.indexOf(priority) < 0)
            throw this._inputError('Priority must be Low, Medium or High.');
        // Type codes are an open TSANet-defined set; let TSANet validate the selected code.
        var engineer = new TSANetEngineer().current();

        var note = new GlideRecord(this.NOTE_TABLE);
        note.initialize();
        note.setValue('tsanet_case', tsanetCase.getUniqueValue());
        note.setValue('direction', 'OUTBOUND');
        note.setValue('summary', summary);
        note.setValue('description', this._html(description));
        note.setValue('description_plain', description);
        note.setValue('priority', priority);
        note.setValue('type', type);
        note.setValue('creator_name', engineer.name);
        note.setValue('creator_email', engineer.email);
        note.setValue('send_state', 'SENDING');
        if (!note.insert())
            throw this._inputError('The note could not be saved. Nothing was sent to TSANet.');
        gs.eventQueue(this.EVENT, note, note.getUniqueValue(), tsanetCase.getValue('token'));
        return { noteId: note.getUniqueValue() };
    },

    /** Queues a Failed note of ours to be sent again. Returns { noteId }. */
    resend: function(noteSysId) {
        var check = new GlideRecordSecure(this.NOTE_TABLE);
        if (!/^[0-9a-f]{32}$/.test(String(noteSysId || '')) || !check.get(noteSysId))
            throw this._inputError('The note could not be read.');
        if (check.getValue('direction') != 'OUTBOUND' || check.getValue('send_state') != 'FAILED' || check.getValue('token'))
            throw this._inputError('Only a note of ours that failed to send can be sent again.');
        this._notable(check.getValue('tsanet_case'));
        var claim = gs.generateGUID();
        var transition = new GlideRecord(this.NOTE_TABLE);
        transition.addQuery('sys_id', noteSysId);
        transition.addQuery('direction', 'OUTBOUND');
        transition.addQuery('send_state', 'FAILED');
        transition.setValue('send_state', 'SENDING');
        transition.setValue('send_error', claim);
        transition.updateMultiple();
        var note = new GlideRecord(this.NOTE_TABLE);
        if (!note.get(noteSysId) || note.getValue('send_state') != 'SENDING' || note.getValue('send_error') != claim)
            throw this._inputError('This note is already being sent.');
        note.setValue('send_error', '');
        if (!note.update())
            throw this._inputError('The note could not be saved. Nothing was sent to TSANet.');
        gs.eventQueue(this.EVENT, note, note.getUniqueValue(), '');
        return { noteId: note.getUniqueValue() };
    },

    /**
     * Run by the Script Action for x_2256809_connect.note.send: posts a Sending note to TSANet and
     * stores TSANet's answer (Sent), or keeps the reason (Failed, or Outcome unknown when TSANet has or may
     * have the note). Only a Sending note is sent.
     */
    _send: function(noteSysId) {
        var note = new GlideRecord(this.NOTE_TABLE);
        if (!note.get(noteSysId) || note.getValue('send_state') != 'SENDING')
            return;
        var tsanetCase = new GlideRecord(this.CASE_TABLE);
        try {
            if (!tsanetCase.get(note.getValue('tsanet_case')) || !tsanetCase.getValue('token'))
                throw new Error('The TSANet Case could not be read.');
            if (this.NOTABLE.indexOf(tsanetCase.getValue('status')) < 0)
                throw new Error('This request is ' + tsanetCase.getDisplayValue('status') + ', and TSANet takes notes only while it is Accepted or Information.');
            var name = String(note.getValue('creator_name') || '').trim();
            var space = name.indexOf(' ');
            var answer = this._client().createNote(tsanetCase.getValue('token'), {
                summary: note.getValue('summary'),
                description: note.getValue('description_plain'),
                priority: note.getValue('priority') || 'MEDIUM',
                type: note.getValue('type') ? { code: note.getValue('type') } : null,
                submittedBy: { firstName: space > 0 ? name.substring(0, space) : name, lastName: space > 0 ? name.substring(space + 1) : '' },
            });
            if (!new TSANetCaseStore().storeSentNote(noteSysId, tsanetCase.getUniqueValue(), answer)) {
                var stored = new Error('TSANet has the note, but its answer could not be stored here. It will show after the next sync.');
                stored.delivered = true;
                throw stored;
            }
        } catch (e) {
            var message = String(e.message || e).replace(/^TSANet: /, '');
            // TSANet has the note, or may have it (no answer at all): sending it again could make a second
            // copy, so it is Outcome unknown, which offers no Send again and is matched when TSANet's copy arrives.
            var outcomeUnknown = e.delivered === true || (e.status === 0 && /reach TSANet/.test(message));
            if (outcomeUnknown && e.delivered !== true)
                message += ' The note may have reached TSANet: check the request in TSANet before sending it again.';
            note = new GlideRecord(this.NOTE_TABLE);
            if (note.get(noteSysId) && note.getValue('send_state') == 'SENDING') {
                note.setValue('send_state', outcomeUnknown ? 'UNKNOWN' : 'FAILED');
                note.setValue('send_error', message.substring(0, 4000));
                note.update();
            }
        }
    },

    /** The TSANet Case, read as the signed-in user, if TSANet takes notes on it now. */
    _notable: function(sysId) {
        var gr = new GlideRecordSecure(this.CASE_TABLE);
        if (!/^[0-9a-f]{32}$/.test(String(sysId || '')) || !gr.get(sysId))
            throw this._inputError('The TSANet Case could not be read.');
        if (!gr.getValue('token'))
            throw this._inputError('This TSANet Case has no TSANet request yet.');
        if (this.NOTABLE.indexOf(gr.getValue('status')) < 0)
            throw this._inputError('This request is ' + gr.getDisplayValue('status') + '. Notes can be sent only while it is Accepted or Information.');
        return gr;
    },

    /** The agent's plain text as HTML for the note's description field: escaped, line breaks kept. */
    _html: function(text) {
        return String(text).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\n/g, '<br>');
    },

    /** Runs one action for GlideAjax: the result, or the message the agent sees, as JSON. */
    _answer: function(fn) {
        try {
            return JSON.stringify(fn());
        } catch (e) {
            return JSON.stringify({ error: String(e.message || e).replace(/^TSANet: /, '') });
        }
    },

    _client: function() {
        if (!this.client)
            this.client = new TSANetClient();
        return this.client;
    },

    _inputError: function(message) {
        var e = new Error(message);
        e.inputError = true;
        return e;
    },

    type: 'TSANetNotes'
});
