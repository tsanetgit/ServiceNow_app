import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['tsanet_client'],
    name: 'TSANetClient',
    active: true,
    accessibleFrom: 'package_private',
    description: 'Client for the TSANet Connect REST API. All outbound calls go through it.',
    script: Now.include('../../server/script-includes/TSANetClient.server.js'),
})
