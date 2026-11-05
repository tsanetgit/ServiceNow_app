import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: '4487cc33ad644a75860d83db24a15e35'
                    }
                    csp_credential_get_attribute: {
                        table: 'sys_scope_privilege'
                        id: '76b79d012e834fbb98cbc026280d8a01'
                    }
                    csp_credentials_get_by_alias: {
                        table: 'sys_scope_privilege'
                        id: '6050304ed46b4dc2bfd0e6f9c5d36074'
                    }
                    csp_glide_properties: {
                        table: 'sys_scope_privilege'
                        id: 'a5e7c90afb4f484facc897552688d7d0'
                    }
                    csp_rest_execute: {
                        table: 'sys_scope_privilege'
                        id: '067c345de116496e9c678f4f3a71f199'
                    }
                    csp_rest_get_body: {
                        table: 'sys_scope_privilege'
                        id: '58a31c0389fa457789ebdf7e301c8ae2'
                    }
                    csp_rest_get_error_message: {
                        table: 'sys_scope_privilege'
                        id: '9182ca22d34b4ed780a8d6b611f3fe10'
                    }
                    csp_rest_get_status_code: {
                        table: 'sys_scope_privilege'
                        id: 'c9f8e8e5f0fe43969cae1008fe4e4ff2'
                    }
                    csp_rest_have_error: {
                        table: 'sys_scope_privilege'
                        id: 'f4c9056206a24dcf868bd74179cd5b19'
                    }
                    csp_rest_set_endpoint: {
                        table: 'sys_scope_privilege'
                        id: '0c1c1d28a3454c0b9f3c664e7e9ba283'
                    }
                    csp_rest_set_http_method: {
                        table: 'sys_scope_privilege'
                        id: '7ce4015e615a4702bc8ace680b5d9275'
                    }
                    csp_rest_set_http_timeout: {
                        table: 'sys_scope_privilege'
                        id: 'b8ebe0921c3f46e5a75f3edc11e56813'
                    }
                    csp_rest_set_request_body: {
                        table: 'sys_scope_privilege'
                        id: 'f21b1e6d147b41aab55a79fc62c6f30f'
                    }
                    csp_rest_set_request_header: {
                        table: 'sys_scope_privilege'
                        id: 'b24d68f7456742e2a9d46b46eb48c70b'
                    }
                    module_credential: {
                        table: 'sys_app_module'
                        id: '1d049e3fdc9b40a7a4bfd990b5094dc7'
                    }
                    module_setup: {
                        table: 'sys_app_module'
                        id: '649006f2f1734eed80ae67e7d5a2a947'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: 'c5b5e9db667047d7a08ec04020d81d96'
                    }
                    prop_api_base_url: {
                        table: 'sys_properties'
                        id: 'f8a5e1d2ffa4486a893390a384180225'
                    }
                    prop_api_credential_alias: {
                        table: 'sys_properties'
                        id: 'f2c9b2aa6c4e4b539120a989375fffde'
                    }
                    prop_api_timeout_ms: {
                        table: 'sys_properties'
                        id: '475a751130e44fe9be9493ad89cb0c39'
                    }
                    prop_debug: {
                        table: 'sys_properties'
                        id: '5d5818262ce6432a8a56db51bddffb00'
                    }
                    prop_host_table: {
                        table: 'sys_properties'
                        id: 'b4a236a87e5044b5a565f7935bcc00d0'
                    }
                    prop_inbound_create_host: {
                        table: 'sys_properties'
                        id: 'f180b9ab60d347139fb0096bcd15345c'
                    }
                    prop_notes_to_work_notes: {
                        table: 'sys_properties'
                        id: '5fac477cde6e451dab004e882d7a0e80'
                    }
                    prop_sync_lookback_days: {
                        table: 'sys_properties'
                        id: 'ed468947e0ab4341993967d5f020e541'
                    }
                    prop_sync_overlap_minutes: {
                        table: 'sys_properties'
                        id: 'f90bf43f8afb4b4db23923d272662bc4'
                    }
                    setup_api_base_url: {
                        table: 'sys_properties_category_m2m'
                        id: '310c12115e014275a4f24574412688d3'
                    }
                    setup_api_credential_alias: {
                        table: 'sys_properties_category_m2m'
                        id: '2fb3ff3c91fa473cb7b81b78dd3ced34'
                    }
                    setup_api_timeout_ms: {
                        table: 'sys_properties_category_m2m'
                        id: '84bf09557d8b4de6b3517625fdd1f9eb'
                    }
                    setup_category: {
                        table: 'sys_properties_category'
                        id: 'edf4beac282d415b879a4cbe5a95cdd7'
                    }
                    setup_debug: {
                        table: 'sys_properties_category_m2m'
                        id: '636f266246a54314af220f45eba9d6d3'
                    }
                    setup_host_table: {
                        table: 'sys_properties_category_m2m'
                        id: '84a7f48d6ec5432eaea392185175dddf'
                    }
                    setup_inbound_create_host: {
                        table: 'sys_properties_category_m2m'
                        id: 'ff1669ef0e024e4281a038f56d160580'
                    }
                    setup_notes_to_work_notes: {
                        table: 'sys_properties_category_m2m'
                        id: '46c9ae5298e64614b35e9b18e36dea16'
                    }
                    setup_sync_lookback_days: {
                        table: 'sys_properties_category_m2m'
                        id: '36196d60bee74c20970e2114ca062829'
                    }
                    setup_sync_overlap_minutes: {
                        table: 'sys_properties_category_m2m'
                        id: '9f115ded55744d04b7c58e2f7f5349ba'
                    }
                    tsanet_api_alias: {
                        table: 'sys_alias'
                        id: '33bcb81f89e6424ab7b700383d41d033'
                    }
                    tsanet_client: {
                        table: 'sys_script_include'
                        id: 'c38a84a6cfea43f1a0f150b67b6e1d33'
                    }
                    tsanet_menu: {
                        table: 'sys_app_application'
                        id: '63f7f870c83b4b27ad97c086245792e7'
                    }
                }
                composite: [
                    {
                        table: 'sys_user_role_contains'
                        id: '04d189d3d00f488e8a9c9f22a748c9b4'
                        key: {
                            role: {
                                id: '1245d50a3da44472a24ee30c22886d53'
                                key: {
                                    name: 'x_2256809_connect.admin'
                                }
                            }
                            contains: {
                                id: '13c64c9ef7b54505a80e6f46530c6f51'
                                key: {
                                    name: 'x_2256809_connect.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '1245d50a3da44472a24ee30c22886d53'
                        key: {
                            name: 'x_2256809_connect.admin'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '13c64c9ef7b54505a80e6f46530c6f51'
                        key: {
                            name: 'x_2256809_connect.user'
                        }
                    },
                ]
            }
        }
    }
}
