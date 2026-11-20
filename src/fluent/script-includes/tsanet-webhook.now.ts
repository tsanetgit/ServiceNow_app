import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['tsanet_webhook'],
    name: 'TSANetWebhook',
    active: true,
    accessibleFrom: 'package_private',
    description: 'Receives signed TSANet webhook deliveries, and registers this instance for them at TSANet.',
    script: Now.include('../../server/script-includes/TSANetWebhook.server.js'),
})
