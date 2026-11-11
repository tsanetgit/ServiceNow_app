import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['tsanet_create_case'],
    name: 'TSANetCreateCase',
    active: true,
    accessibleFrom: 'package_private',
    description: 'Server side of the Create TSANet Case page: partner search, partner form, submit.',
    script: Now.include('../../server/script-includes/TSANetCreateCase.server.js'),
})
