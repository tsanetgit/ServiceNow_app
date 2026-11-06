import { Acl } from '@servicenow/sdk/core'
import { adminRole, userRole } from '../roles.now'

// Same split as TSANet Case: users read, admins change by hand, the sync writes as the system.

Acl({
    $id: Now.ID['acl_response_read'],
    type: 'record',
    table: 'x_2256809_connect_response',
    operation: 'read',
    roles: [userRole],
})

Acl({
    $id: Now.ID['acl_response_create'],
    type: 'record',
    table: 'x_2256809_connect_response',
    operation: 'create',
    roles: [adminRole],
})

Acl({
    $id: Now.ID['acl_response_write'],
    type: 'record',
    table: 'x_2256809_connect_response',
    operation: 'write',
    roles: [adminRole],
})

Acl({
    $id: Now.ID['acl_response_delete'],
    type: 'record',
    table: 'x_2256809_connect_response',
    operation: 'delete',
    roles: [adminRole],
})
