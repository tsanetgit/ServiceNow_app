import { Acl } from '@servicenow/sdk/core'
import { adminRole } from '../roles.now'

// Both webhook tables are admins' only: the subscription holds the signing secret. The app reads
// and writes them as the system (the delivery endpoint has no signed-in user).

Acl({ $id: Now.ID['acl_webhook_read'], type: 'record', table: 'x_2256809_connect_webhook', operation: 'read', roles: [adminRole] })
Acl({ $id: Now.ID['acl_webhook_create'], type: 'record', table: 'x_2256809_connect_webhook', operation: 'create', roles: [adminRole] })
Acl({ $id: Now.ID['acl_webhook_write'], type: 'record', table: 'x_2256809_connect_webhook', operation: 'write', roles: [adminRole] })
Acl({ $id: Now.ID['acl_webhook_delete'], type: 'record', table: 'x_2256809_connect_webhook', operation: 'delete', roles: [adminRole] })

Acl({ $id: Now.ID['acl_webhook_delivery_read'], type: 'record', table: 'x_2256809_connect_webhook_delivery', operation: 'read', roles: [adminRole] })
Acl({ $id: Now.ID['acl_webhook_delivery_create'], type: 'record', table: 'x_2256809_connect_webhook_delivery', operation: 'create', roles: [adminRole] })
Acl({ $id: Now.ID['acl_webhook_delivery_write'], type: 'record', table: 'x_2256809_connect_webhook_delivery', operation: 'write', roles: [adminRole] })
Acl({ $id: Now.ID['acl_webhook_delivery_delete'], type: 'record', table: 'x_2256809_connect_webhook_delivery', operation: 'delete', roles: [adminRole] })
