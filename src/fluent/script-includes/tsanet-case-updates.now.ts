import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['tsanet_case_updates'],
    name: 'TSANetCaseUpdates',
    apiName: 'x_2256809_connect.TSANetCaseUpdates',
    active: true,
    // Server only: called by the case owner business rule, TSANetChangeCase, the Change case condition and the case.update Script Action.
    accessibleFrom: 'package_private',
    description: 'Sends a TSANet Case\'s linked case number and owner to TSANet in the background, after an owner change or Change case.',
    script: Now.include('../../server/script-includes/TSANetCaseUpdates.server.js'),
})
