import { Property, Record } from '@servicenow/sdk/core'
import { adminRole, userRole } from './roles.now'

const baseUrl = Property({
    $id: Now.ID['prop_api_base_url'],
    name: 'x_2256809_connect.api.base_url',
    type: 'choicelist',
    choices: [
        'Dev=https://connect2.tahoelab.us',
        'Beta=https://connect2.tsanet.net',
        'Production=https://connect2.tsanet.org',
    ],
    value: 'https://connect2.tahoelab.us',
    description:
        'TSANet API base URL. Dev https://connect2.tahoelab.us, Beta https://connect2.tsanet.net, Production https://connect2.tsanet.org',
    roles: { read: [userRole], write: [adminRole] },
})

const credentialAlias = Property({
    $id: Now.ID['prop_api_credential_alias'],
    name: 'x_2256809_connect.api.credential_alias',
    type: 'string',
    // sys_id of the "TSANet Connect API" alias (key tsanet_api_alias in generated/keys.ts).
    value: '33bcb81f89e6424ab7b700383d41d033',
    description:
        'Credential alias sys_id. sys_id of the Connection & Credential alias that holds the TSANet API username and password',
    roles: { read: [userRole], write: [adminRole] },
})

const timeoutMs = Property({
    $id: Now.ID['prop_api_timeout_ms'],
    name: 'x_2256809_connect.api.timeout_ms',
    type: 'integer',
    value: '60000',
    description: 'HTTP timeout (ms). Timeout for each TSANet API call',
    roles: { read: [userRole], write: [adminRole] },
})

const hostTable = Property({
    $id: Now.ID['prop_host_table'],
    name: 'x_2256809_connect.host.table',
    type: 'string',
    value: 'incident',
    description: 'Host table. Table whose number links to a TSANet request (incident, or sn_customerservice_case)',
    roles: { read: [userRole], write: [adminRole] },
})

const inboundCreateHost = Property({
    $id: Now.ID['prop_inbound_create_host'],
    name: 'x_2256809_connect.inbound.create_host',
    type: 'boolean',
    value: 'true',
    description: 'Create host records for inbound requests. Create an Incident for an inbound request that matches none',
    roles: { read: [userRole], write: [adminRole] },
})

const notesToWorkNotes = Property({
    $id: Now.ID['prop_notes_to_work_notes'],
    name: 'x_2256809_connect.notes.to_work_notes',
    type: 'boolean',
    value: 'true',
    description:
        "Copy notes and responses to host work notes. Copy each new TSANet note and response to the linked host record's work notes once",
    roles: { read: [userRole], write: [adminRole] },
})

const lookbackDays = Property({
    $id: Now.ID['prop_sync_lookback_days'],
    name: 'x_2256809_connect.sync.lookback_days',
    type: 'integer',
    value: '30',
    description: 'First sync lookback (days). How far back the first sync reads',
    roles: { read: [userRole], write: [adminRole] },
})

const overlapMinutes = Property({
    $id: Now.ID['prop_sync_overlap_minutes'],
    name: 'x_2256809_connect.sync.overlap_minutes',
    type: 'integer',
    value: '10',
    description: 'Sync overlap (minutes). Each sync re-reads this many minutes before the newest stored update',
    roles: { read: [userRole], write: [adminRole] },
})

const debug = Property({
    $id: Now.ID['prop_debug'],
    name: 'x_2256809_connect.debug',
    type: 'boolean',
    value: 'false',
    description: 'Debug logging. Log every TSANet API call to the system log',
    roles: { read: [userRole], write: [adminRole] },
})

// The Setup module opens system_properties_ui.do for this category by name.
export const setupCategory = Record({
    $id: Now.ID['setup_category'],
    table: 'sys_properties_category',
    data: {
        name: 'TSANet Connect',
        title: 'TSANet Connect setup',
    },
})

// Setup page entries, in the prototype's order.
Record({
    $id: Now.ID['setup_api_base_url'],
    table: 'sys_properties_category_m2m',
    data: { category: setupCategory, property: baseUrl, order: 10 },
})
Record({
    $id: Now.ID['setup_api_credential_alias'],
    table: 'sys_properties_category_m2m',
    data: { category: setupCategory, property: credentialAlias, order: 20 },
})
Record({
    $id: Now.ID['setup_api_timeout_ms'],
    table: 'sys_properties_category_m2m',
    data: { category: setupCategory, property: timeoutMs, order: 30 },
})
Record({
    $id: Now.ID['setup_host_table'],
    table: 'sys_properties_category_m2m',
    data: { category: setupCategory, property: hostTable, order: 40 },
})
Record({
    $id: Now.ID['setup_inbound_create_host'],
    table: 'sys_properties_category_m2m',
    data: { category: setupCategory, property: inboundCreateHost, order: 50 },
})
Record({
    $id: Now.ID['setup_notes_to_work_notes'],
    table: 'sys_properties_category_m2m',
    data: { category: setupCategory, property: notesToWorkNotes, order: 60 },
})
Record({
    $id: Now.ID['setup_sync_lookback_days'],
    table: 'sys_properties_category_m2m',
    data: { category: setupCategory, property: lookbackDays, order: 70 },
})
Record({
    $id: Now.ID['setup_sync_overlap_minutes'],
    table: 'sys_properties_category_m2m',
    data: { category: setupCategory, property: overlapMinutes, order: 80 },
})
Record({
    $id: Now.ID['setup_debug'],
    table: 'sys_properties_category_m2m',
    data: { category: setupCategory, property: debug, order: 90 },
})
