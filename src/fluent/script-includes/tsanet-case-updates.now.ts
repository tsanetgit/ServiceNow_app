import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['tsanet_case_updates'],
    name: 'TSANetCaseUpdates',
    apiName: 'x_2256809_connect.TSANetCaseUpdates',
    active: true,
    // Server only: called by the case owner business rule and the case.update Script Action.
    accessibleFrom: 'package_private',
    description: 'Sends a linked case\'s new owner to TSANet in the background, for each open TSANet Case on it.',
    script: Now.include('../../server/script-includes/TSANetCaseUpdates.server.js'),
})
