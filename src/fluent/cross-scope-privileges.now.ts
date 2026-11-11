import { CrossScopePrivilege } from '@servicenow/sdk/core'

// Global APIs and tables the app's server code uses (TSANetClient, TSANetCreateCase
// and the Create TSANet Case REST API). Shipped as allowed so the app works on an
// instance that enforces runtime access tracking, instead of each instance
// granting them on first use.

// Create TSANet Case: the case (read as the agent), the engineer's user record, and the
// connection and its OAuth credential (read on the server; agents can't read them).
CrossScopePrivilege({
    $id: Now.ID['csp_table_customerservice_case_read'],
    targetName: 'sn_customerservice_case',
    // target_scope references sys_scope by sys_id; 'global' is its own sys_id, a plugin scope isn't.
    // This is the Customer Service plugin's sn_customerservice scope, shipped with the plugin.
    targetScope: '51d811fad7223100b7490ee60e61034f',
    targetType: 'sys_db_object',
    operation: 'read',
    status: 'allowed',
})

CrossScopePrivilege({
    $id: Now.ID['csp_table_sys_user_read'],
    targetName: 'sys_user',
    targetScope: 'global',
    targetType: 'sys_db_object',
    operation: 'read',
    status: 'allowed',
})

CrossScopePrivilege({
    $id: Now.ID['csp_table_http_connection_read'],
    targetName: 'http_connection',
    targetScope: 'global',
    targetType: 'sys_db_object',
    operation: 'read',
    status: 'allowed',
})

CrossScopePrivilege({
    $id: Now.ID['csp_table_oauth_credentials_read'],
    targetName: 'oauth_2_0_credentials',
    targetScope: 'global',
    targetType: 'sys_db_object',
    operation: 'read',
    status: 'allowed',
})

CrossScopePrivilege({
    $id: Now.ID['csp_glide_record_secure_get_value'],
    targetName: 'GlideRecordSecure.getValue',
    targetScope: 'global',
    targetType: 'scriptable',
    operation: 'execute',
    status: 'allowed',
})

CrossScopePrivilege({
    $id: Now.ID['csp_glide_record_set_value'],
    targetName: 'GlideRecord.setValue',
    targetScope: 'global',
    targetType: 'scriptable',
    operation: 'execute',
    status: 'allowed',
})

CrossScopePrivilege({
    $id: Now.ID['csp_glide_record_insert'],
    targetName: 'GlideRecord.insert',
    targetScope: 'global',
    targetType: 'scriptable',
    operation: 'execute',
    status: 'allowed',
})

// The Create TSANet Case REST API's request, response and errors.
CrossScopePrivilege({
    $id: Now.ID['csp_rest_api_request'],
    targetName: 'RESTAPIRequest',
    targetScope: 'global',
    targetType: 'scriptable',
    operation: 'execute',
    status: 'allowed',
})

CrossScopePrivilege({
    $id: Now.ID['csp_rest_api_request_body'],
    targetName: 'RESTAPIRequestBody',
    targetScope: 'global',
    targetType: 'scriptable',
    operation: 'execute',
    status: 'allowed',
})

CrossScopePrivilege({
    $id: Now.ID['csp_service_result_set_status'],
    targetName: 'ScriptableServiceResultBuilder.setStatus',
    targetScope: 'global',
    targetType: 'scriptable',
    operation: 'execute',
    status: 'allowed',
})

CrossScopePrivilege({
    $id: Now.ID['csp_service_result_set_body'],
    targetName: 'ScriptableServiceResultBuilder.setBody',
    targetScope: 'global',
    targetType: 'scriptable',
    operation: 'execute',
    status: 'allowed',
})

CrossScopePrivilege({
    $id: Now.ID['csp_service_error_set_status'],
    targetName: 'ScriptableServiceError.setStatus',
    targetScope: 'global',
    targetType: 'scriptable',
    operation: 'execute',
    status: 'allowed',
})

CrossScopePrivilege({
    $id: Now.ID['csp_service_error_set_message'],
    targetName: 'ScriptableServiceError.setMessage',
    targetScope: 'global',
    targetType: 'scriptable',
    operation: 'execute',
    status: 'allowed',
})

CrossScopePrivilege({
    $id: Now.ID['csp_glide_properties'],
    targetName: 'Glide API: properties',
    targetScope: 'global',
    targetType: 'scriptable',
    operation: 'execute',
    status: 'allowed',
})

CrossScopePrivilege({
    $id: Now.ID['csp_rest_set_authentication_profile'],
    targetName: 'ScriptableRESTMessageClient.setAuthenticationProfile',
    targetScope: 'global',
    targetType: 'scriptable',
    operation: 'execute',
    status: 'allowed',
})

CrossScopePrivilege({
    $id: Now.ID['csp_rest_set_requestor_profile'],
    targetName: 'ScriptableRESTMessageClient.setRequestorProfile',
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
