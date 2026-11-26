import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['tsanet_host_records'],
    name: 'TSANetHostRecords',
    apiName: 'x_2256809_connect.TSANetHostRecords',
    active: true,
    // Server only: the app's own server code, and the Case field's reference qualifier.
    accessibleFrom: 'package_private',
    description: 'The records a TSANet Case links to (cases, incidents or both): reads the host table setting, checks and finds them.',
    script: Now.include('../../server/script-includes/TSANetHostRecords.server.js'),
})
