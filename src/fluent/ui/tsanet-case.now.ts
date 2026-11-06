import { Form, List, Record, default_view } from '@servicenow/sdk/core'

Form({
    table: 'x_2256809_connect_case',
    view: default_view,
    sections: [
        {
            caption: 'Request',
            content: [
                {
                    layout: 'two-column',
                    leftElements: [
                        { field: 'number', type: 'table_field' },
                        { field: 'host_record', type: 'table_field' },
                        { field: 'direction', type: 'table_field' },
                        { field: 'status', type: 'table_field' },
                        { field: 'priority', type: 'table_field' },
                    ],
                    rightElements: [
                        { field: 'partner', type: 'table_field' },
                        { field: 'request_date', type: 'table_field' },
                        { field: 'response_sla', type: 'table_field' },
                        { field: 'responded', type: 'table_field' },
                        { field: 'tsanet_updated', type: 'table_field' },
                    ],
                },
                {
                    layout: 'one-column',
                    elements: [
                        { field: 'summary', type: 'table_field' },
                        { field: 'description', type: 'table_field' },
                        { field: 'priority_note', type: 'table_field' },
                    ],
                },
            ],
        },
        {
            caption: 'Submitter',
            content: [
                {
                    layout: 'two-column',
                    leftElements: [
                        { field: 'submitter_name', type: 'table_field' },
                        { field: 'submitter_first_name', type: 'table_field' },
                        { field: 'submitter_last_name', type: 'table_field' },
                        { field: 'submitter_email', type: 'table_field' },
                    ],
                    rightElements: [
                        { field: 'submitter_phone', type: 'table_field' },
                        { field: 'submitter_case_number', type: 'table_field' },
                        { field: 'submitted_company_name', type: 'table_field' },
                        { field: 'submitted_company_id', type: 'table_field' },
                    ],
                },
            ],
        },
        {
            caption: 'Receiver',
            content: [
                {
                    layout: 'two-column',
                    leftElements: [
                        { field: 'receiver_name', type: 'table_field' },
                        { field: 'receiver_email', type: 'table_field' },
                        { field: 'receiver_phone', type: 'table_field' },
                    ],
                    rightElements: [
                        { field: 'receiver_case_number', type: 'table_field' },
                        { field: 'received_company_name', type: 'table_field' },
                        { field: 'received_company_id', type: 'table_field' },
                    ],
                },
                {
                    layout: 'one-column',
                    elements: [{ field: 'escalation_instructions', type: 'table_field' }],
                },
            ],
        },
        {
            caption: 'Details',
            content: [
                {
                    layout: 'two-column',
                    leftElements: [
                        { field: 'token', type: 'table_field' },
                        { field: 'tsanet_case_id', type: 'table_field' },
                        { field: 'document_name', type: 'table_field' },
                        { field: 'document_id', type: 'table_field' },
                    ],
                    rightElements: [
                        { field: 'tsanet_contact', type: 'table_field' },
                        { field: 'tsanet_email', type: 'table_field' },
                        { field: 'reminder_sent', type: 'table_field' },
                        { field: 'feedback_requested', type: 'table_field' },
                    ],
                },
                {
                    layout: 'one-column',
                    elements: [
                        { field: 'admin_note', type: 'table_field' },
                        { field: 'custom_fields', type: 'table_field' },
                    ],
                },
            ],
        },
    ],
})

List({
    table: 'x_2256809_connect_case',
    view: default_view,
    columns: [
        'number',
        'host_record',
        'direction',
        'status',
        'priority',
        'partner',
        'summary',
        'request_date',
        'response_sla',
    ],
})

// Notes and responses under the TSANet Case form, through their reference to it.
const caseRelatedLists = Record({
    $id: Now.ID['case_related_lists'],
    table: 'sys_ui_related_list',
    data: {
        name: 'x_2256809_connect_case',
        view: 'Default view',
    },
})

Record({
    $id: Now.ID['case_related_list_notes'],
    table: 'sys_ui_related_list_entry',
    data: {
        list_id: caseRelatedLists,
        position: 0,
        related_list: 'x_2256809_connect_note.tsanet_case',
    },
})

Record({
    $id: Now.ID['case_related_list_responses'],
    table: 'sys_ui_related_list_entry',
    data: {
        list_id: caseRelatedLists,
        position: 1,
        related_list: 'x_2256809_connect_response.tsanet_case',
    },
})
