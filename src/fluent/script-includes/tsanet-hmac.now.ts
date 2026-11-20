import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['tsanet_hmac'],
    name: 'TSANetHmac',
    active: true,
    accessibleFrom: 'package_private',
    description: 'HMAC-SHA256 for checking the signature on TSANet webhook deliveries (the platform HMAC is not available in scoped apps).',
    script: Now.include('../../server/script-includes/TSANetHmac.server.js'),
})
