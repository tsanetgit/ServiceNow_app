import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['tsanet_sync'],
    name: 'TSANetSync',
    active: true,
    accessibleFrom: 'package_private',
    description: 'Brings TSANet collaboration requests into TSANet Cases. Run by the sync job.',
    script: Now.include('../../server/script-includes/TSANetSync.server.js'),
})
