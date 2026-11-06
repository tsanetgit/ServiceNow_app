import { ApplicationMenu, Record } from '@servicenow/sdk/core'
import { userRole } from './roles.now'

export const tsanetMenu = ApplicationMenu({
    $id: Now.ID['tsanet_menu'],
    title: 'TSANet Connect',
    description: 'TSANet Connect collaboration requests',
    roles: [userRole],
    order: 100,
    active: true,
})

// Orders follow the prototype; the request, note and response modules (phase 2)
// and the poll job module (phase 3) fill the gaps.
Record({
    $id: Now.ID['module_cases_inbound_open'],
    table: 'sys_app_module',
    data: {
        title: 'Inbound - Open',
        application: tsanetMenu,
        link_type: 'LIST',
        name: 'x_2256809_connect_case',
        filter: 'direction=INBOUND^status=OPEN^ORDERBYDESCrequest_date',
        roles: ['x_2256809_connect.user'],
        active: true,
        order: 100,
    },
})

Record({
    $id: Now.ID['module_cases_outbound'],
    table: 'sys_app_module',
    data: {
        title: 'Outbound',
        application: tsanetMenu,
        link_type: 'LIST',
        name: 'x_2256809_connect_case',
        filter: 'direction=OUTBOUND^ORDERBYDESCrequest_date',
        roles: ['x_2256809_connect.user'],
        active: true,
        order: 200,
    },
})

Record({
    $id: Now.ID['module_cases_all'],
    table: 'sys_app_module',
    data: {
        title: 'All',
        application: tsanetMenu,
        link_type: 'LIST',
        name: 'x_2256809_connect_case',
        filter: 'ORDERBYDESCrequest_date',
        roles: ['x_2256809_connect.user'],
        active: true,
        order: 300,
    },
})

Record({
    $id: Now.ID['module_setup'],
    table: 'sys_app_module',
    data: {
        title: 'Setup',
        application: tsanetMenu,
        link_type: 'DIRECT',
        query: 'system_properties_ui.do?sysparm_category=TSANet%20Connect&sysparm_title=TSANet%20Connect%20setup',
        roles: ['x_2256809_connect.admin'],
        active: true,
        order: 700,
    },
})

Record({
    $id: Now.ID['module_credential'],
    table: 'sys_app_module',
    data: {
        title: 'Credential',
        application: tsanetMenu,
        link_type: 'DIRECT',
        // Credentials tagged with the "TSANet Connect API" alias (key tsanet_api_alias in generated/keys.ts).
        query: 'basic_auth_credentials_list.do?sysparm_query=tag=33bcb81f89e6424ab7b700383d41d033',
        roles: ['x_2256809_connect.admin'],
        active: true,
        order: 800,
    },
})
