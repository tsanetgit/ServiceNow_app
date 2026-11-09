import { Acl } from '@servicenow/sdk/core'
import { userRole } from '../roles.now'

// The Create TSANet Case page is for the same users as the ⋯ action that opens it,
// also when its URL is opened directly.
Acl({
    $id: Now.ID['acl_page_create_case_read'],
    type: 'ui_page',
    name: 'x_2256809_connect_create_case',
    operation: 'read',
    roles: [userRole],
})
