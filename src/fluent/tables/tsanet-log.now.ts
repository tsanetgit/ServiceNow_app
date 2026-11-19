import { ChoiceColumn, IntegerColumn, Record, ReferenceColumn, StringColumn, Table } from '@servicenow/sdk/core'

// One row per call that changed something at TSANet, per failed call, and per sync run that stored
// something or failed. Written by TSANetLog; the time is sys_created_on.
export const x_2256809_connect_log = Table({
    name: 'x_2256809_connect_log',
    label: 'TSANet Transaction',
    display: 'operation',
    schema: {
        // Cleared, not deleted, with the TSANet Case: the log outlives the record it was about.
        tsanet_case: ReferenceColumn({
            label: 'TSANet Case',
            referenceTable: 'x_2256809_connect_case',
            cascadeRule: 'clear',
        }),
        operation: StringColumn({ label: 'Operation', maxLength: 255 }),
        result: ChoiceColumn({
            label: 'Result',
            dropdown: 'dropdown_with_none',
            choices: {
                SUCCESS: { label: 'Success', sequence: 10 },
                FAILED: { label: 'Failed', sequence: 20 },
            },
        }),
        http_status: IntegerColumn({ label: 'HTTP status' }),
        message: StringColumn({ label: 'Message', maxLength: 4000 }),
        duration_ms: IntegerColumn({ label: 'Duration (ms)' }),
    },
})

// The platform's table cleanup removes rows older than 30 days.
Record({
    $id: Now.ID['log_cleanup'],
    table: 'sys_auto_flush',
    data: {
        tablename: 'x_2256809_connect_log',
        matchfield: 'sys_created_on',
        age: 2592000,
        active: true,
    },
})
