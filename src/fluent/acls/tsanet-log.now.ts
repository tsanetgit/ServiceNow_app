import { Acl } from '@servicenow/sdk/core'
import { adminRole, userRole } from '../roles.now'

// Users read, so agents see a TSANet Case's transactions; admins change by hand; the app writes as the system.

Acl({
    $id: Now.ID['acl_log_read'],
    type: 'record',
    table: 'x_2256809_connect_log',
    operation: 'read',
    roles: [userRole],
})

Acl({
    $id: Now.ID['acl_log_create'],
    type: 'record',
    table: 'x_2256809_connect_log',
    operation: 'create',
    roles: [adminRole],
})

Acl({
    $id: Now.ID['acl_log_write'],
    type: 'record',
    table: 'x_2256809_connect_log',
    operation: 'write',
    roles: [adminRole],
})

Acl({
    $id: Now.ID['acl_log_delete'],
    type: 'record',
    table: 'x_2256809_connect_log',
    operation: 'delete',
    roles: [adminRole],
})
