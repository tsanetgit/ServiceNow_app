import { Form, List, default_view } from '@servicenow/sdk/core'

Form({
    table: 'x_2256809_connect_note',
    view: default_view,
    sections: [
        {
            caption: 'Note',
            content: [
                {
                    layout: 'two-column',
                    leftElements: [
                        { field: 'tsanet_case', type: 'table_field' },
                        { field: 'direction', type: 'table_field' },
                        { field: 'type', type: 'table_field' },
                        { field: 'priority', type: 'table_field' },
                        { field: 'status', type: 'table_field' },
                    ],
                    rightElements: [
                        { field: 'creator_name', type: 'table_field' },
                        { field: 'creator_email', type: 'table_field' },
                        { field: 'company_name', type: 'table_field' },
                        { field: 'tsanet_created', type: 'table_field' },
                        { field: 'copied_to_case', type: 'table_field' },
                    ],
                },
                {
                    layout: 'one-column',
                    elements: [
                        { field: 'summary', type: 'table_field' },
                        { field: 'description', type: 'table_field' },
                    ],
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
                        { field: 'creator_username', type: 'table_field' },
                        { field: 'company_id', type: 'table_field' },
                    ],
                    rightElements: [{ field: 'tsanet_updated', type: 'table_field' }],
                },
                {
                    layout: 'one-column',
                    elements: [{ field: 'description_plain', type: 'table_field' }],
                },
            ],
        },
    ],
})

List({
    table: 'x_2256809_connect_note',
    view: default_view,
    columns: ['tsanet_case', 'direction', 'type', 'summary', 'creator_name', 'company_name', 'status', 'tsanet_created'],
})
