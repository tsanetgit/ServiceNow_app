import { Alias, AliasTemplate } from '@servicenow/sdk/core'

// PROVISIONAL(tsanetgit/ServiceNow_app#21): TSANet's Dev values, until the wizard offers an
// environment choice with the Beta and Production values. None of them is a secret.
const DEV_API_URL = 'https://connect2.tahoelab.us'
const DEV_TOKEN_URL = 'https://login.microsoftonline.com/5ab65033-c200-4f85-9af7-b7db123e8ea8/oauth2/v2.0/token'
const DEV_SCOPE = '44fb6809-8014-4d5c-80a8-f7f977f1e882/.default'

// The Connection & Credential wizard for the alias. The member's admin enters the client id
// and secret TSANet issued them; the platform stores the secret and gets and renews the token.
// Nothing secret ships with the app.
const tsanetOAuthTemplate = AliasTemplate({
    $id: Now.ID['tsanet_api_oauth_template'],
    name: 'TSANet Connect API - OAuth Client Credentials',
    dynamicDataSchema: {
        connectionFields: [
            {
                name: 'connection.name',
                label: 'Connection Name',
                type: 'text',
                defaultValue: 'TSANet Connect API',
                mandatory: true,
            },
            {
                name: 'connection.connection_url',
                label: 'TSANet API URL',
                type: 'text',
                defaultValue: DEV_API_URL,
                hint: 'Dev https://connect2.tahoelab.us, Beta https://connect2.tsanet.net, Production https://connect2.tsanet.org',
                mandatory: true,
            },
        ],
        credentialFields: [
            {
                name: 'credential.oauth_entity.client_id',
                label: 'Client ID',
                type: 'text',
                hint: 'The client id TSANet issued to your company',
                mandatory: true,
            },
            {
                name: 'credential.oauth_entity.client_secret',
                label: 'Client Secret',
                type: 'password',
                hint: 'The client secret TSANet issued to your company',
                mandatory: true,
            },
            {
                name: 'credential.oauth_entity.token_url',
                label: 'Token URL',
                type: 'text',
                defaultValue: DEV_TOKEN_URL,
                hint: 'The Azure AD token URL TSANet gave you',
                mandatory: true,
            },
        ],
    },
    defaultDataTemplate: {
        connection: {
            table: 'http_connection',
            name: '',
            connectionUrl: '',
        },
        credential: {
            table: 'oauth_2_0_credentials',
            name: 'TSANet Connect API',
            oauth_entity: {
                name: 'TSANet Connect API',
                type: 'consumer',
                default_grant_type: 'client_credentials',
                client_id: '',
                client_secret: '',
                token_url: DEV_TOKEN_URL,
                public_client: false,
                use_mutual_auth: false,
                oauth_api_script: '3e3a3a11c333210016194ffe5bba8f70',
                oauth_entity_scope: [{ name: 'TSANet Connect API', oauth_entity_scope: DEV_SCOPE }],
                oauth_entity_profile: [
                    {
                        name: 'TSANet Connect API',
                        grant_type: 'client_credentials',
                        default: true,
                        oauth_entity_profile_scope: [DEV_SCOPE],
                    },
                ],
            },
        },
    },
})

// The TSANet API connection: its URL and the OAuth client-credentials credential TSANetClient
// calls with. Each instance's admin creates them with the template's wizard.
export const tsanetApiAlias = Alias({
    $id: Now.ID['tsanet_api_alias'],
    name: 'TSANet Connect API',
    type: 'connection',
    connectionType: 'httpConnection',
    configurationTemplate: tsanetOAuthTemplate,
    description:
        'TSANet Connect API connection. Create it with "Create New Connection & Credential", using the client id and secret TSANet issued.',
})
