import { Applicability, Record } from '@servicenow/sdk/core'
import { userRole } from '../roles.now'

// A TSANet category in the CSM/FSM Configurable Workspace's Lists menu. The menu
// config belongs to the workspace app, so the category, its lists and their audience
// are our own records, as other apps add theirs. Where the workspace isn't installed
// the category points at a config that doesn't exist and simply doesn't show.
const CSM_WORKSPACE_LIST_MENU = '0b62b8ba77d650102c30945caa106138'

// Shared with the Service Operations Workspace's TSANet lists (sow-workspace-lists.now.ts).
export const COLUMNS = 'number,host_record,direction,status,priority,partner,summary,request_date,response_sla'
export const INBOUND_OPEN = 'direction=INBOUND^status=OPEN^ORDERBYDESCrequest_date'
export const OUTBOUND = 'direction=OUTBOUND^ORDERBYDESCrequest_date'
export const ALL = 'ORDERBYDESCrequest_date'

// The lists' roles are the role name as text: Record() data can't take a Role object
// (it renders as [object Object]), unlike Applicability's roles.

export const tsanetAudience = Applicability({
    $id: Now.ID['ws_audience_user'],
    name: 'TSANet Connect - User',
    description: 'Agents with the TSANet Connect user role',
    roles: [userRole],
})

const tsanetCategory = Record({
    $id: Now.ID['ws_category_tsanet'],
    table: 'sys_ux_list_category',
    data: {
        configuration: CSM_WORKSPACE_LIST_MENU,
        title: 'TSANet',
        active: true,
        order: 15,
    },
})

const inboundOpenList = Record({
    $id: Now.ID['ws_list_inbound_open'],
    table: 'sys_ux_list',
    data: {
        configuration: CSM_WORKSPACE_LIST_MENU,
        category: tsanetCategory,
        title: 'Inbound - Open',
        table: 'x_2256809_connect_case',
        condition: INBOUND_OPEN,
        columns: COLUMNS,
        roles: 'x_2256809_connect.user',
        active: true,
        order: 10,
    },
})

const outboundList = Record({
    $id: Now.ID['ws_list_outbound'],
    table: 'sys_ux_list',
    data: {
        configuration: CSM_WORKSPACE_LIST_MENU,
        category: tsanetCategory,
        title: 'Outbound',
        table: 'x_2256809_connect_case',
        condition: OUTBOUND,
        columns: COLUMNS,
        roles: 'x_2256809_connect.user',
        active: true,
        order: 20,
    },
})

const allList = Record({
    $id: Now.ID['ws_list_all'],
    table: 'sys_ux_list',
    data: {
        configuration: CSM_WORKSPACE_LIST_MENU,
        category: tsanetCategory,
        title: 'All TSANet Cases',
        table: 'x_2256809_connect_case',
        condition: ALL,
        columns: COLUMNS,
        roles: 'x_2256809_connect.user',
        active: true,
        order: 30,
    },
})

// Each list shows only to the TSANet Connect audience.
Record({
    $id: Now.ID['ws_list_inbound_open_audience'],
    table: 'sys_ux_applicability_m2m_list',
    data: { list: inboundOpenList, applicability: tsanetAudience, active: true, order: 0 },
})

Record({
    $id: Now.ID['ws_list_outbound_audience'],
    table: 'sys_ux_applicability_m2m_list',
    data: { list: outboundList, applicability: tsanetAudience, active: true, order: 0 },
})

Record({
    $id: Now.ID['ws_list_all_audience'],
    table: 'sys_ux_applicability_m2m_list',
    data: { list: allList, applicability: tsanetAudience, active: true, order: 0 },
})
