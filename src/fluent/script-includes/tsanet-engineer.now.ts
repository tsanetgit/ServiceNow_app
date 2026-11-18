import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['tsanet_engineer'],
    name: 'TSANetEngineer',
    active: true,
    accessibleFrom: 'package_private',
    description: 'The signed-in agent as the engineer TSANet requires, refusing a blank name or email. Used by Create TSANet Case, Accept and Reject.',
    script: Now.include('../../server/script-includes/TSANetEngineer.server.js'),
})
