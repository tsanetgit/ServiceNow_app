import { Acl, ScriptInclude } from '@servicenow/sdk/core'
import { userRole } from '../roles.now'

ScriptInclude({
    $id: Now.ID['tsanet_inbound'],
    name: 'TSANetInbound',
    apiName: 'x_2256809_connect.TSANetInbound',
    active: true,
    // GlideAjax calls from the workspace don't run in the app's scope, so a scope-only include
    // answers 404 there. The execute ACL below still limits it to the app's user role.
    accessibleFrom: 'public',
    clientCallable: true,
    description: 'Accept and Reject on an inbound TSANet Case, called from their actions through GlideAjax.',
    script: Now.include('../../server/script-includes/TSANetInbound.server.js'),
})

// The same users as the Accept and Reject actions.
Acl({
    $id: Now.ID['acl_tsanet_inbound_execute'],
    type: 'client_callable_script_include',
    name: 'x_2256809_connect.TSANetInbound',
    operation: 'execute',
    roles: [userRole],
})
