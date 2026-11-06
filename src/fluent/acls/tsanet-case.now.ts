import { Acl } from '@servicenow/sdk/core'
import { adminRole, userRole } from '../roles.now'

// Users read; only admins change records by hand. The sync job writes as the system.

Acl({
    $id: Now.ID['acl_case_read'],
    type: 'record',
    table: 'x_2256809_connect_case',
    operation: 'read',
    roles: [userRole],
})

Acl({
    $id: Now.ID['acl_case_create'],
    type: 'record',
    table: 'x_2256809_connect_case',
    operation: 'create',
    roles: [adminRole],
})

Acl({
    $id: Now.ID['acl_case_write'],
    type: 'record',
    table: 'x_2256809_connect_case',
    operation: 'write',
    roles: [adminRole],
})

Acl({
    $id: Now.ID['acl_case_delete'],
    type: 'record',
    table: 'x_2256809_connect_case',
    operation: 'delete',
    roles: [adminRole],
})
