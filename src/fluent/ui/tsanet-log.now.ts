import { Form, List, default_view } from '@servicenow/sdk/core'

Form({
    table: 'x_2256809_connect_log',
    view: default_view,
    sections: [
        {
            caption: 'Transaction',
            content: [
                {
                    layout: 'two-column',
                    leftElements: [
                        { field: 'operation', type: 'table_field' },
                        { field: 'result', type: 'table_field' },
                        { field: 'http_status', type: 'table_field' },
                    ],
                    rightElements: [
                        { field: 'tsanet_case', type: 'table_field' },
                        { field: 'duration_ms', type: 'table_field' },
                        { field: 'sys_created_on', type: 'table_field' },
                    ],
                },
                {
                    layout: 'one-column',
                    elements: [{ field: 'message', type: 'table_field' }],
                },
            ],
        },
    ],
})

List({
    table: 'x_2256809_connect_log',
    view: default_view,
    columns: ['sys_created_on', 'operation', 'result', 'http_status', 'tsanet_case', 'message'],
})
