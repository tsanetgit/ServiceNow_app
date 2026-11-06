import { Form, List, default_view } from '@servicenow/sdk/core'

Form({
    table: 'x_2256809_connect_response',
    view: default_view,
    sections: [
        {
            caption: 'Response',
            content: [
                {
                    layout: 'two-column',
                    leftElements: [
                        { field: 'tsanet_case', type: 'table_field' },
                        { field: 'type', type: 'table_field' },
                        { field: 'case_number', type: 'table_field' },
                        { field: 'tsanet_created', type: 'table_field' },
                    ],
                    rightElements: [
                        { field: 'engineer_name', type: 'table_field' },
                        { field: 'engineer_email', type: 'table_field' },
                        { field: 'engineer_phone', type: 'table_field' },
                        { field: 'response_id', type: 'table_field' },
                    ],
                },
                {
                    layout: 'one-column',
                    elements: [{ field: 'next_steps', type: 'table_field' }],
                },
            ],
        },
    ],
})

List({
    table: 'x_2256809_connect_response',
    view: default_view,
    columns: ['tsanet_case', 'type', 'engineer_name', 'engineer_email', 'case_number', 'tsanet_created'],
})
