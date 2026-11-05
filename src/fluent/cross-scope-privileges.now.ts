import { CrossScopePrivilege } from '@servicenow/sdk/core'

// Global APIs TSANetClient calls. Shipped as allowed so the client works on an
// instance that enforces runtime access tracking, instead of each instance
// granting them on first use.

CrossScopePrivilege({
    $id: Now.ID['csp_glide_properties'],
    targetName: 'Glide API: properties',
    targetScope: 'global',
    targetType: 'scriptable',
    operation: 'execute',
    status: 'allowed',
})

CrossScopePrivilege({
    $id: Now.ID['csp_credentials_get_by_alias'],
    targetName: 'ScriptableStandardCredentialsProvider.getCredentialByAliasID',
    targetScope: 'global',
    targetType: 'scriptable',
    operation: 'execute',
    status: 'allowed',
})

CrossScopePrivilege({
    $id: Now.ID['csp_credential_get_attribute'],
    targetName: 'ScriptableStandardCredential.getAttribute',
    targetScope: 'global',
    targetType: 'scriptable',
    operation: 'execute',
    status: 'allowed',
})

CrossScopePrivilege({
    $id: Now.ID['csp_rest_set_http_method'],
    targetName: 'ScriptableRESTMessageClient.setHttpMethod',
    targetScope: 'global',
    targetType: 'scriptable',
    operation: 'execute',
    status: 'allowed',
})

CrossScopePrivilege({
    $id: Now.ID['csp_rest_set_endpoint'],
    targetName: 'ScriptableRESTMessageClient.setEndpoint',
    targetScope: 'global',
    targetType: 'scriptable',
    operation: 'execute',
    status: 'allowed',
})

CrossScopePrivilege({
    $id: Now.ID['csp_rest_set_http_timeout'],
    targetName: 'ScriptableRESTMessageClient.setHttpTimeout',
    targetScope: 'global',
    targetType: 'scriptable',
    operation: 'execute',
    status: 'allowed',
})

CrossScopePrivilege({
    $id: Now.ID['csp_rest_set_request_header'],
    targetName: 'ScriptableRESTMessageClient.setRequestHeader',
    targetScope: 'global',
    targetType: 'scriptable',
    operation: 'execute',
    status: 'allowed',
})

CrossScopePrivilege({
    $id: Now.ID['csp_rest_set_request_body'],
    targetName: 'ScriptableRESTMessageClient.setRequestBody',
    targetScope: 'global',
    targetType: 'scriptable',
    operation: 'execute',
    status: 'allowed',
})

CrossScopePrivilege({
    $id: Now.ID['csp_rest_execute'],
    targetName: 'ScriptableRESTMessageClient.execute',
    targetScope: 'global',
    targetType: 'scriptable',
    operation: 'execute',
    status: 'allowed',
})

CrossScopePrivilege({
    $id: Now.ID['csp_rest_get_status_code'],
    targetName: 'ScriptableRESTResponse.getStatusCode',
    targetScope: 'global',
    targetType: 'scriptable',
    operation: 'execute',
    status: 'allowed',
})

CrossScopePrivilege({
    $id: Now.ID['csp_rest_get_body'],
    targetName: 'ScriptableRESTResponse.getBody',
    targetScope: 'global',
    targetType: 'scriptable',
    operation: 'execute',
    status: 'allowed',
})

CrossScopePrivilege({
    $id: Now.ID['csp_rest_get_error_message'],
    targetName: 'ScriptableRESTResponse.getErrorMessage',
    targetScope: 'global',
    targetType: 'scriptable',
    operation: 'execute',
    status: 'allowed',
})

CrossScopePrivilege({
    $id: Now.ID['csp_rest_have_error'],
    targetName: 'ScriptableRESTResponse.haveError',
    targetScope: 'global',
    targetType: 'scriptable',
    operation: 'execute',
    status: 'allowed',
})
