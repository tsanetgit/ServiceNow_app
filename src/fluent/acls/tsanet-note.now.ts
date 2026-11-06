import { Acl } from '@servicenow/sdk/core'
import { adminRole, userRole } from '../roles.now'

// Same split as TSANet Case: users read, admins change by hand, the sync writes as the system.

Acl({
    $id: Now.ID['acl_note_read'],
    type: 'record',
    table: 'x_2256809_connect_note',
    operation: 'read',
    roles: [userRole],
})

Acl({
    $id: Now.ID['acl_note_create'],
    type: 'record',
    table: 'x_2256809_connect_note',
    operation: 'create',
    roles: [adminRole],
})

Acl({
    $id: Now.ID['acl_note_write'],
    type: 'record',
    table: 'x_2256809_connect_note',
    operation: 'write',
    roles: [adminRole],
})

Acl({
    $id: Now.ID['acl_note_delete'],
    type: 'record',
    table: 'x_2256809_connect_note',
    operation: 'delete',
    roles: [adminRole],
})
