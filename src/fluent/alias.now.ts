import { Alias } from '@servicenow/sdk/core'

// Holds the TSANet API username and password. The credential record is created
// on each instance by its admin and is never shipped with the app.
export const tsanetApiAlias = Alias({
    $id: Now.ID['tsanet_api_alias'],
    name: 'TSANet Connect API',
    type: 'credential',
    description: 'TSANet Connect API user. Attach a basic auth credential with the API username and password.',
})
