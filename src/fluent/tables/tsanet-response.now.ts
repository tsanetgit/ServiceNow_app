import { ChoiceColumn, DateTimeColumn, HtmlColumn, ReferenceColumn, StringColumn, Table } from '@servicenow/sdk/core'

// The partner's answer on a TSANet Case. Choice values are the Connect API's own (CaseResponseDTO).
export const x_2256809_connect_response = Table({
    name: 'x_2256809_connect_response',
    label: 'TSANet Response',
    display: 'type',
    index: [{ name: 'response_id', unique: true, element: 'response_id' }],
    schema: {
        tsanet_case: ReferenceColumn({
            label: 'TSANet Case',
            referenceTable: 'x_2256809_connect_case',
            cascadeRule: 'delete',
        }),
        response_id: StringColumn({ label: 'TSANet response ID', maxLength: 255 }),
        type: ChoiceColumn({
            label: 'Type',
            dropdown: 'dropdown_with_none',
            choices: {
                APPROVAL: { label: 'Approval', sequence: 10 },
                INFORMATION_REQUEST: { label: 'Information request', sequence: 20 },
                INFORMATION_RESPONSE: { label: 'Information response', sequence: 30 },
                REJECTION: { label: 'Rejection', sequence: 40 },
            },
        }),
        engineer_name: StringColumn({ label: 'Engineer name', maxLength: 255 }),
        engineer_email: StringColumn({ label: 'Engineer email', maxLength: 255 }),
        engineer_phone: StringColumn({ label: 'Engineer phone', maxLength: 40 }),
        case_number: StringColumn({ label: 'Case number', maxLength: 255 }),
        next_steps: HtmlColumn({ label: 'Next steps', maxLength: 65000 }),
        tsanet_created: DateTimeColumn({ label: 'Created in TSANet' }),
    },
})
