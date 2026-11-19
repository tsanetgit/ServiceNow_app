import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['tsanet_log'],
    name: 'TSANetLog',
    active: true,
    accessibleFrom: 'package_private',
    description: 'Writes the TSANet transaction log: calls that changed something at TSANet, failed calls, and sync runs. Never fails the caller.',
    script: Now.include('../../server/script-includes/TSANetLog.server.js'),
})
