import {
    BooleanColumn,
    ChoiceColumn,
    DateTimeColumn,
    HtmlColumn,
    ReferenceColumn,
    StringColumn,
    Table,
} from '@servicenow/sdk/core'

// A note exchanged with the partner on a TSANet Case, in either direction.
// Choice values are the Connect API's own (CaseNoteDTO).
export const x_2256809_connect_note = Table({
    name: 'x_2256809_connect_note',
    label: 'TSANet Note',
    display: 'summary',
    index: [{ name: 'note_token', unique: true, element: 'token' }],
    schema: {
        tsanet_case: ReferenceColumn({
            label: 'TSANet Case',
            referenceTable: 'x_2256809_connect_case',
            cascadeRule: 'delete',
        }),
        token: StringColumn({ label: 'TSANet token', maxLength: 255 }),
        direction: ChoiceColumn({
            label: 'Direction',
            dropdown: 'dropdown_with_none',
            choices: {
                INBOUND: { label: 'Inbound', sequence: 10 },
                OUTBOUND: { label: 'Outbound', sequence: 20 },
            },
        }),
        type: ChoiceColumn({
            label: 'Type',
            dropdown: 'dropdown_with_none',
            choices: {
                public: { label: 'Public', sequence: 10 },
                partner: { label: 'Partner', sequence: 20 },
                system: { label: 'System', sequence: 30 },
                escalation: { label: 'Escalation', sequence: 40 },
                status: { label: 'Status', sequence: 50 },
            },
        }),
        priority: ChoiceColumn({
            label: 'Priority',
            dropdown: 'dropdown_with_none',
            choices: {
                LOW: { label: 'Low', sequence: 10 },
                MEDIUM: { label: 'Medium', sequence: 20 },
                HIGH: { label: 'High', sequence: 30 },
            },
        }),
        status: ChoiceColumn({
            label: 'Status',
            dropdown: 'dropdown_with_none',
            choices: {
                ENTERED: { label: 'Entered', sequence: 10 },
                READ: { label: 'Read', sequence: 20 },
                RESPONDED: { label: 'Responded', sequence: 30 },
                REMOVED: { label: 'Removed', sequence: 40 },
            },
        }),
        summary: StringColumn({ label: 'Summary', maxLength: 4000 }),
        description: HtmlColumn({ label: 'Description', maxLength: 65000 }),
        description_plain: StringColumn({ label: 'Description (plain text)', maxLength: 65000 }),
        creator_name: StringColumn({ label: 'Creator name', maxLength: 255 }),
        creator_email: StringColumn({ label: 'Creator email', maxLength: 255 }),
        creator_username: StringColumn({ label: 'Creator username', maxLength: 255 }),
        company_id: StringColumn({ label: 'Company ID', maxLength: 255 }),
        company_name: StringColumn({ label: 'Company name', maxLength: 255 }),
        tsanet_created: DateTimeColumn({ label: 'Created in TSANet' }),
        tsanet_updated: DateTimeColumn({ label: 'Updated in TSANet' }),
        copied_to_case: BooleanColumn({ label: 'Copied to case', default: false }),
        // An encrypted note's text is never stored; the description says to open it in TSANet.
        encrypted: BooleanColumn({ label: 'Encrypted', default: false }),
        // A note sent from here (TSANetNotes): where its sending stands. Empty on a note TSANet brought in.
        send_state: ChoiceColumn({
            label: 'Sending',
            dropdown: 'dropdown_with_none',
            choices: {
                SENDING: { label: 'Sending', sequence: 10 },
                SENT: { label: 'Sent', sequence: 20 },
                FAILED: { label: 'Failed', sequence: 30 },
                UNKNOWN: { label: 'Outcome unknown', sequence: 40 },
            },
        }),
        send_error: StringColumn({ label: 'Sending error', maxLength: 4000 }),
    },
})
