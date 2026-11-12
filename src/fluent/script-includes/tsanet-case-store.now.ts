import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['tsanet_case_store'],
    name: 'TSANetCaseStore',
    active: true,
    accessibleFrom: 'package_private',
    description: 'Stores a TSANet request as a TSANet Case, by its token. Used by Create TSANet Case and the sync.',
    script: Now.include('../../server/script-includes/TSANetCaseStore.server.js'),
})
