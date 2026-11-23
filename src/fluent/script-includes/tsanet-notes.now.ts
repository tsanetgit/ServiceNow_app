import { Acl, ScriptInclude } from '@servicenow/sdk/core'
import { userRole } from '../roles.now'

ScriptInclude({
    $id: Now.ID['tsanet_notes'],
    name: 'TSANetNotes',
    apiName: 'x_2256809_connect.TSANetNotes',
    active: true,
    // Called from the workspace through GlideAjax, like TSANetInbound: the execute ACL below
    // limits it to the app's user role.
    accessibleFrom: 'public',
    clientCallable: true,
    description: 'Create note and Send again on a TSANet Case, called through GlideAjax; sends the note to TSANet in the background.',
    script: Now.include('../../server/script-includes/TSANetNotes.server.js'),
})

// The same users as the Create note action: every user of the app.
Acl({
    $id: Now.ID['acl_tsanet_notes_execute'],
    type: 'client_callable_script_include',
    name: 'x_2256809_connect.TSANetNotes',
    operation: 'execute',
    roles: [userRole],
})
