import { Record } from '@servicenow/sdk/core'
import { ALL, COLUMNS, INBOUND_OPEN, OUTBOUND, tsanetAudience } from './workspace-lists.now'

// A TSANet category in the Service Operations Workspace's Lists menu, after Incidents (2000), with the
// same lists and audience as in the CSM workspace (workspace-lists.now.ts). The menu config belongs to
// the workspace app, so the category and its lists are our own records. Where the workspace isn't
// installed the category points at a config that doesn't exist and simply doesn't show.
const SOW_LIST_MENU = '48c6565ec3013010965e070e9140dd39'

const sowCategory = Record({
    $id: Now.ID['sow_category_tsanet'],
    table: 'sys_ux_list_category',
    data: { configuration: SOW_LIST_MENU, title: 'TSANet', active: true, order: 2100 },
})

const sowInboundOpen = Record({
    $id: Now.ID['sow_list_inbound_open'],
    table: 'sys_ux_list',
    data: {
        configuration: SOW_LIST_MENU,
        category: sowCategory,
        title: 'Inbound - Open',
        table: 'x_2256809_connect_case',
        condition: INBOUND_OPEN,
        columns: COLUMNS,
        roles: 'x_2256809_connect.user',
        active: true,
        order: 10,
    },
})

const sowOutbound = Record({
    $id: Now.ID['sow_list_outbound'],
    table: 'sys_ux_list',
    data: {
        configuration: SOW_LIST_MENU,
        category: sowCategory,
        title: 'Outbound',
        table: 'x_2256809_connect_case',
        condition: OUTBOUND,
        columns: COLUMNS,
        roles: 'x_2256809_connect.user',
        active: true,
        order: 20,
    },
})

const sowAll = Record({
    $id: Now.ID['sow_list_all'],
    table: 'sys_ux_list',
    data: {
        configuration: SOW_LIST_MENU,
        category: sowCategory,
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
    $id: Now.ID['sow_list_inbound_open_audience'],
    table: 'sys_ux_applicability_m2m_list',
    data: { list: sowInboundOpen, applicability: tsanetAudience, active: true, order: 0 },
})

Record({
    $id: Now.ID['sow_list_outbound_audience'],
    table: 'sys_ux_applicability_m2m_list',
    data: { list: sowOutbound, applicability: tsanetAudience, active: true, order: 0 },
})

Record({
    $id: Now.ID['sow_list_all_audience'],
    table: 'sys_ux_applicability_m2m_list',
    data: { list: sowAll, applicability: tsanetAudience, active: true, order: 0 },
})
