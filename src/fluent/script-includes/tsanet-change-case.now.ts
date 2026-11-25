import { Acl, ScriptInclude } from '@servicenow/sdk/core'
import { userRole } from '../roles.now'

ScriptInclude({
    $id: Now.ID['tsanet_change_case'],
    name: 'TSANetChangeCase',
    apiName: 'x_2256809_connect.TSANetChangeCase',
    active: true,
    // Called from the workspace through GlideAjax, like TSANetInbound: the execute ACL below
    // limits it to the app's user role.
    accessibleFrom: 'public',
    clientCallable: true,
    description: 'Change case on a TSANet Case, called through GlideAjax; links the picked case and queues the update to TSANet.',
    script: Now.include('../../server/script-includes/TSANetChangeCase.server.js'),
})

// The same users as the Change case action.
Acl({
    $id: Now.ID['acl_tsanet_change_case_execute'],
    type: 'client_callable_script_include',
    name: 'x_2256809_connect.TSANetChangeCase',
    operation: 'execute',
    roles: [userRole],
})
