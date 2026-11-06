import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    acl_case_create: {
                        table: 'sys_security_acl'
                        id: 'c1ed2ea01b414a47bd460ea40b5b8c94'
                    }
                    acl_case_delete: {
                        table: 'sys_security_acl'
                        id: '044e38307fd9415ebbe88263bbeedf88'
                    }
                    acl_case_read: {
                        table: 'sys_security_acl'
                        id: '600a948e179f4b67a66630cb1447c36e'
                    }
                    acl_case_write: {
                        table: 'sys_security_acl'
                        id: 'e3eb8734cd0046c7a19db070017445b5'
                    }
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
                    module_cases_all: {
                        table: 'sys_app_module'
                        id: '7193a88d530c491f80fe302df20d1933'
                    }
                    module_cases_inbound_open: {
                        table: 'sys_app_module'
                        id: 'b6b1ea4c3ee54dda992de3a0a3e135fd'
                    }
                    module_cases_outbound: {
                        table: 'sys_app_module'
                        id: '661ca1317747450ba775f5a100385c81'
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
                        table: 'sys_dictionary'
                        id: '02b80e6252424a59ba5e5a8d104083e8'
                        key: {
                            name: 'x_2256809_connect_case'
                            element: 'receiver_name'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '03f84fbb25d84efbb71f1365314a37d6'
                        key: {
                            name: 'x_2256809_connect_case'
                            element: 'status'
                            value: 'ACCEPTED'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0424bf6ddc4a44f3968111bd9098f528'
                        key: {
                            name: 'x_2256809_connect_case'
                            element: 'tsanet_case_id'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '0454a6e31b5a4f25bcf88ac779eec2d2'
                        key: {
                            sys_ui_section: {
                                id: 'f10ed024782146c1a53a85b2963cfcf4'
                                key: {
                                    name: 'x_2256809_connect_case'
                                    caption: 'Submitter'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'submitter_case_number'
                            position: '7'
                        }
                    },
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
                        table: 'sys_ui_element'
                        id: '09c64637c7a943778067c38f782dcfbb'
                        key: {
                            sys_ui_section: {
                                id: 'f10ed024782146c1a53a85b2963cfcf4'
                                key: {
                                    name: 'x_2256809_connect_case'
                                    caption: 'Submitter'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'submitter_first_name'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: '09fb8953ee174a17aba0f62640962c6f'
                        key: {
                            category: 'x_2256809_connect_case'
                            prefix: 'TSA'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '0ad5fa9b71664c479dd66548e24d8c16'
                        key: {
                            sys_security_acl: '044e38307fd9415ebbe88263bbeedf88'
                            sys_user_role: {
                                id: '1245d50a3da44472a24ee30c22886d53'
                                key: {
                                    name: 'x_2256809_connect.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0ae5bee22d214126864b7aecda0eae2d'
                        key: {
                            name: 'x_2256809_connect_case'
                            element: 'status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '0bdf88e5325f4977a40fde8cf787ee63'
                        key: {
                            name: 'x_2256809_connect_case'
                            element: 'priority'
                            value: 'MEDIUM'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '0c3cff2e254c44b09a3434a2c3e04e9b'
                        key: {
                            sys_ui_section: {
                                id: 'f10ed024782146c1a53a85b2963cfcf4'
                                key: {
                                    name: 'x_2256809_connect_case'
                                    caption: 'Submitter'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'submitter_email'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '0c47a3e1cf83473ba2426d52afe9cda4'
                        key: {
                            sys_ui_section: {
                                id: '9494da57f2854f66b3504d2ee5cef2dc'
                                key: {
                                    name: 'x_2256809_connect_case'
                                    caption: 'Request'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'host_record'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '0d8b950e300e4eca801754c29e973df4'
                        key: {
                            sys_ui_section: {
                                id: 'f10ed024782146c1a53a85b2963cfcf4'
                                key: {
                                    name: 'x_2256809_connect_case'
                                    caption: 'Submitter'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'submitter_phone'
                            position: '6'
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
                        table: 'sys_security_acl_role'
                        id: '12ff495e6d744eba927db9213947d274'
                        key: {
                            sys_security_acl: 'e3eb8734cd0046c7a19db070017445b5'
                            sys_user_role: {
                                id: '1245d50a3da44472a24ee30c22886d53'
                                key: {
                                    name: 'x_2256809_connect.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '13c64c9ef7b54505a80e6f46530c6f51'
                        key: {
                            name: 'x_2256809_connect.user'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1606f2569dd54fa096ed974b8df811b1'
                        key: {
                            name: 'x_2256809_connect_case'
                            element: 'direction'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '18dd262ed31240e4a0afaceaa4ffe4bd'
                        key: {
                            name: 'x_2256809_connect_case'
                            element: 'tsanet_updated'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '1ab797e7ced04ea1ab8c5ed260e12c65'
                        key: {
                            sys_ui_section: {
                                id: '9494da57f2854f66b3504d2ee5cef2dc'
                                key: {
                                    name: 'x_2256809_connect_case'
                                    caption: 'Request'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'responded'
                            position: '10'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1b751168bfb241ea9f65541dda712131'
                        key: {
                            name: 'x_2256809_connect_case'
                            element: 'receiver_email'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '1d2f9473f56a411292a9d4348f8591da'
                        key: {
                            sys_ui_section: {
                                id: '9494da57f2854f66b3504d2ee5cef2dc'
                                key: {
                                    name: 'x_2256809_connect_case'
                                    caption: 'Request'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'status'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '239c6f1b1336494fb845075ce25fb0d8'
                        key: {
                            sys_ui_section: {
                                id: 'e113530bacdc48129656f31a7d30d817'
                                key: {
                                    name: 'x_2256809_connect_case'
                                    caption: 'Receiver'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'receiver_phone'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '24683d2a51fc488f8ddaa66d232cee09'
                        key: {
                            name: 'x_2256809_connect_case'
                            element: 'partner'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '26009a5caf1e449b9759f3574bca2763'
                        key: {
                            sys_ui_section: {
                                id: '87c8d008f3c54db4ab9489b8f08e1650'
                                key: {
                                    name: 'x_2256809_connect_case'
                                    caption: 'Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'token'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '27607f5da2054ed6b2c661e8510ba431'
                        key: {
                            name: 'x_2256809_connect_case'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '283dfdfc35ee45f2875b40b4be228fc6'
                        key: {
                            sys_ui_section: {
                                id: 'f10ed024782146c1a53a85b2963cfcf4'
                                key: {
                                    name: 'x_2256809_connect_case'
                                    caption: 'Submitter'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'submitted_company_name'
                            position: '8'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '28d13202882546c68bd9b09a867bf32e'
                        key: {
                            name: 'x_2256809_connect_case'
                            element: 'received_company_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '28ebefdabde044d49696e216eaab6a63'
                        key: {
                            name: 'x_2256809_connect_case'
                            element: 'number'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2974800aa83a455f831dfea12873e46c'
                        key: {
                            name: 'x_2256809_connect_case'
                            element: 'received_company_name'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '29ce3b8dcdd043adb88ab8fd6d01cb94'
                        key: {
                            name: 'x_2256809_connect_case'
                            element: 'reminder_sent'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '2a659aa2384846998af1c41374bb9975'
                        key: {
                            sys_ui_section: {
                                id: '87c8d008f3c54db4ab9489b8f08e1650'
                                key: {
                                    name: 'x_2256809_connect_case'
                                    caption: 'Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'feedback_requested'
                            position: '9'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '2aa4643edc234e6f80cc9e894581ba51'
                        key: {
                            name: 'x_2256809_connect_case'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2b741dc440ab4595b158958518d2e337'
                        key: {
                            name: 'x_2256809_connect_case'
                            element: 'responded'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '321eb46468774094a3205eb767916160'
                        key: {
                            name: 'x_2256809_connect_case'
                            element: 'received_company_id'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '388b21a57c8f4226acbebdf35e047e13'
                        key: {
                            sys_ui_section: {
                                id: 'e113530bacdc48129656f31a7d30d817'
                                key: {
                                    name: 'x_2256809_connect_case'
                                    caption: 'Receiver'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'escalation_instructions'
                            position: '9'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3899a162e9d64d5a972e373fc5a36732'
                        key: {
                            name: 'x_2256809_connect_case'
                            element: 'submitter_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '393b86469d6844709a1ccd5211c3a301'
                        key: {
                            name: 'x_2256809_connect_case'
                            element: 'submitted_company_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '395ca46cec85471dbe28879880569f8f'
                        key: {
                            sys_security_acl: 'c1ed2ea01b414a47bd460ea40b5b8c94'
                            sys_user_role: {
                                id: '1245d50a3da44472a24ee30c22886d53'
                                key: {
                                    name: 'x_2256809_connect.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '39a6c6b50a544aa8838e930ef9912832'
                        key: {
                            name: 'x_2256809_connect_case'
                            element: 'submitter_email'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3c17bca0a048422590f59edc7f5c2196'
                        key: {
                            name: 'x_2256809_connect_case'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3cb2af57e6c84a269cb5eee1a158e616'
                        key: {
                            name: 'x_2256809_connect_case'
                            element: 'receiver_phone'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3d21ae0671ec4d45ad42cc91f9d0c954'
                        key: {
                            name: 'x_2256809_connect_case'
                            element: 'receiver_email'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3d33194e78844b6c88ccfed679973127'
                        key: {
                            name: 'x_2256809_connect_case'
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '3e20b5b7e10843998da70727f4545ba6'
                        key: {
                            sys_ui_section: {
                                id: 'e113530bacdc48129656f31a7d30d817'
                                key: {
                                    name: 'x_2256809_connect_case'
                                    caption: 'Receiver'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '8'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4375ef3961e94a1f8f1a498f830ee0da'
                        key: {
                            name: 'x_2256809_connect_case'
                            element: 'host_record'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '47fcb1273aa443c5aeebc87e2ab62cda'
                        key: {
                            name: 'x_2256809_connect_case'
                            element: 'document_id'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '495c1828f2c143479264656c4ee4a0d7'
                        key: {
                            sys_ui_section: {
                                id: 'e113530bacdc48129656f31a7d30d817'
                                key: {
                                    name: 'x_2256809_connect_case'
                                    caption: 'Receiver'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '49969c204c534b61aa916bd3e6ce5c0b'
                        key: {
                            name: 'x_2256809_connect_case'
                            element: 'priority'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4ed1638fa418458280071ad9864db80d'
                        key: {
                            name: 'x_2256809_connect_case'
                            element: 'tsanet_updated'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4ef916d03b72440f91c8aad1eacbb8a6'
                        key: {
                            name: 'x_2256809_connect_case'
                            element: 'admin_note'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '4f553b40244041128246978670e5a4f5'
                        key: {
                            name: 'x_2256809_connect_case'
                            element: 'direction'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '51243e6f972e4cf69003f470cabba500'
                        key: {
                            name: 'x_2256809_connect_case'
                            element: 'responded'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '539a73f636ff4cde915dd90f540fd80d'
                        key: {
                            list_id: {
                                id: '5e1ec490866843a8a5affb30470926a1'
                                key: {
                                    name: 'x_2256809_connect_case'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'priority'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '55dfd41a7ae34d7a8f6e72c6133ccd68'
                        key: {
                            sys_ui_form: {
                                id: 'ffbf6ba3f0dc4f88915fecd0ee6cd02b'
                                key: {
                                    name: 'x_2256809_connect_case'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '87c8d008f3c54db4ab9489b8f08e1650'
                                key: {
                                    name: 'x_2256809_connect_case'
                                    caption: 'Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '56f31c55b3694dd5b1887f6e625bc42e'
                        key: {
                            name: 'x_2256809_connect_case'
                            element: 'submitted_company_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '59c365946c0d4378bb4d8e74691eeed0'
                        key: {
                            name: 'x_2256809_connect_case'
                            element: 'direction'
                            value: 'OUTBOUND'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5a5e78f8944846ddb5ec887c41f9e0f9'
                        key: {
                            name: 'x_2256809_connect_case'
                            element: 'summary'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '5b36eafecfe948d88f7b01cf1e4f3918'
                        key: {
                            sys_ui_section: {
                                id: '9494da57f2854f66b3504d2ee5cef2dc'
                                key: {
                                    name: 'x_2256809_connect_case'
                                    caption: 'Request'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '12'
                        }
                    },
                    {
                        table: 'sys_ui_list'
                        id: '5e1ec490866843a8a5affb30470926a1'
                        key: {
                            name: 'x_2256809_connect_case'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                            element: 'NULL'
                            relationship: 'NULL'
                            parent: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '5effeb87af8e4e5fa13cfbcef37f71ec'
                        key: {
                            sys_ui_section: {
                                id: '87c8d008f3c54db4ab9489b8f08e1650'
                                key: {
                                    name: 'x_2256809_connect_case'
                                    caption: 'Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'admin_note'
                            position: '11'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '604ea7483f174a609ea1fa6a3499a022'
                        key: {
                            sys_ui_section: {
                                id: '9494da57f2854f66b3504d2ee5cef2dc'
                                key: {
                                    name: 'x_2256809_connect_case'
                                    caption: 'Request'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'tsanet_updated'
                            position: '11'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '612cef382bfc4407a4e7100d0c14cea3'
                        key: {
                            sys_ui_section: {
                                id: '87c8d008f3c54db4ab9489b8f08e1650'
                                key: {
                                    name: 'x_2256809_connect_case'
                                    caption: 'Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '10'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '62f9231c404847ab986014c8ae55bf04'
                        key: {
                            list_id: {
                                id: '5e1ec490866843a8a5affb30470926a1'
                                key: {
                                    name: 'x_2256809_connect_case'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'request_date'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '63dd34b117894f8392fc5f26534daf73'
                        key: {
                            sys_ui_section: {
                                id: '87c8d008f3c54db4ab9489b8f08e1650'
                                key: {
                                    name: 'x_2256809_connect_case'
                                    caption: 'Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'document_name'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '64e5d2b877c7492099b233a67ebc402c'
                        key: {
                            list_id: {
                                id: '5e1ec490866843a8a5affb30470926a1'
                                key: {
                                    name: 'x_2256809_connect_case'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'response_sla'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6689329c9ee3442990c6782a36caf263'
                        key: {
                            name: 'x_2256809_connect_case'
                            element: 'receiver_case_number'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '68ce02bddf1a4b28b5b0ad70448b964e'
                        key: {
                            name: 'x_2256809_connect_case'
                            element: 'document_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6d1a11347cfc4ce2a8644a8a56747579'
                        key: {
                            name: 'x_2256809_connect_case'
                            element: 'response_sla'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6d2706b9732a48fa9cb74f51dcbaf3a8'
                        key: {
                            name: 'x_2256809_connect_case'
                            element: 'escalation_instructions'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6e152005393345cdbbfca57c2674301b'
                        key: {
                            name: 'x_2256809_connect_case'
                            element: 'receiver_phone'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '72db4aa8e7714da5aee09dc7c295244e'
                        key: {
                            name: 'x_2256809_connect_case'
                            element: 'custom_fields'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '7896bbdd3ef54c98ac32ad30a05ca607'
                        key: {
                            list_id: {
                                id: '5e1ec490866843a8a5affb30470926a1'
                                key: {
                                    name: 'x_2256809_connect_case'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7b9be4902d1e4de6ab95ae38d884d5c4'
                        key: {
                            name: 'x_2256809_connect_case'
                            element: 'submitted_company_name'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7cbced1f9fc94c448da605c8f5a77885'
                        key: {
                            name: 'x_2256809_connect_case'
                            element: 'host_record'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '7dc4d81417934c9cad409bb61b03406e'
                        key: {
                            sys_ui_section: {
                                id: 'e113530bacdc48129656f31a7d30d817'
                                key: {
                                    name: 'x_2256809_connect_case'
                                    caption: 'Receiver'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'received_company_id'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '809b3c3c3630456fa9b2bd9124fb6d12'
                        key: {
                            name: 'x_2256809_connect_case'
                            element: 'number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '80a305b32f2c4d88825fd077138f29f7'
                        key: {
                            name: 'x_2256809_connect_case'
                            element: 'response_sla'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '817bcfd3f35543649029bac2163cc154'
                        key: {
                            name: 'x_2256809_connect_case'
                            element: 'summary'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '823cdbd075bb4233ba98098195bdc478'
                        key: {
                            name: 'x_2256809_connect_case'
                            element: 'direction'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '83a8a38eaa174899a23732c11d8c376e'
                        key: {
                            sys_ui_section: {
                                id: '9494da57f2854f66b3504d2ee5cef2dc'
                                key: {
                                    name: 'x_2256809_connect_case'
                                    caption: 'Request'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'partner'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '87c8d008f3c54db4ab9489b8f08e1650'
                        key: {
                            name: 'x_2256809_connect_case'
                            caption: 'Details'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '8b8ec8cf5c6f4bd9ba7e8b5f94d65303'
                        key: {
                            sys_ui_section: {
                                id: '9494da57f2854f66b3504d2ee5cef2dc'
                                key: {
                                    name: 'x_2256809_connect_case'
                                    caption: 'Request'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'summary'
                            position: '13'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '8cfb5c52fd2847c9ad22f39ba670d968'
                        key: {
                            sys_ui_section: {
                                id: '87c8d008f3c54db4ab9489b8f08e1650'
                                key: {
                                    name: 'x_2256809_connect_case'
                                    caption: 'Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'tsanet_case_id'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8d041cb69e7c41a7868c84e8831cd882'
                        key: {
                            name: 'x_2256809_connect_case'
                            element: 'direction'
                            value: 'INBOUND'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '8d81e9a4905245a7b450aa8e2c8c7580'
                        key: {
                            sys_ui_section: {
                                id: '87c8d008f3c54db4ab9489b8f08e1650'
                                key: {
                                    name: 'x_2256809_connect_case'
                                    caption: 'Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '8ffa2030de0d47ffa5b07a14e34b23bb'
                        key: {
                            sys_ui_section: {
                                id: '87c8d008f3c54db4ab9489b8f08e1650'
                                key: {
                                    name: 'x_2256809_connect_case'
                                    caption: 'Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'document_id'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '90ba58ddb65c4acdac762b58ca6fcf25'
                        key: {
                            name: 'x_2256809_connect_case'
                            element: 'receiver_case_number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '924a15a6808f432a9cf17263b0d1e508'
                        key: {
                            name: 'x_2256809_connect_case'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '93ad43f4fe6c4326b0d227a4336376ce'
                        key: {
                            sys_ui_section: {
                                id: '9494da57f2854f66b3504d2ee5cef2dc'
                                key: {
                                    name: 'x_2256809_connect_case'
                                    caption: 'Request'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '9494da57f2854f66b3504d2ee5cef2dc'
                        key: {
                            name: 'x_2256809_connect_case'
                            caption: 'Request'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '94d983157bfb496e97e9579f39afcdfb'
                        key: {
                            name: 'x_2256809_connect_case'
                            element: 'description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '94e2305cb42448bea3c85e9ae0b62155'
                        key: {
                            sys_ui_section: {
                                id: 'f10ed024782146c1a53a85b2963cfcf4'
                                key: {
                                    name: 'x_2256809_connect_case'
                                    caption: 'Submitter'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '10'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9589b08370104df996b994f440729422'
                        key: {
                            name: 'x_2256809_connect_case'
                            element: 'priority_note'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '9613454d411b47b88c6a3c212962208f'
                        key: {
                            list_id: {
                                id: '5e1ec490866843a8a5affb30470926a1'
                                key: {
                                    name: 'x_2256809_connect_case'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'direction'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '98855a033b454604b124736c77bf8e9b'
                        key: {
                            name: 'x_2256809_connect_case'
                            element: 'submitter_case_number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '990d682c668f435ca235d3b0f975ae24'
                        key: {
                            sys_ui_section: {
                                id: '87c8d008f3c54db4ab9489b8f08e1650'
                                key: {
                                    name: 'x_2256809_connect_case'
                                    caption: 'Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'custom_fields'
                            position: '12'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '99eb8723042748cd87d664fd8da69a77'
                        key: {
                            sys_ui_section: {
                                id: 'e113530bacdc48129656f31a7d30d817'
                                key: {
                                    name: 'x_2256809_connect_case'
                                    caption: 'Receiver'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'received_company_name'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9aa24730ef894092a9cb5db96dd0011b'
                        key: {
                            name: 'x_2256809_connect_case'
                            element: 'priority'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '9af3dc98f57f455faf438c027b98c355'
                        key: {
                            list_id: {
                                id: '5e1ec490866843a8a5affb30470926a1'
                                key: {
                                    name: 'x_2256809_connect_case'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'summary'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9c529f794d0c45588bda41d27caedd4f'
                        key: {
                            name: 'x_2256809_connect_case'
                            element: 'submitter_case_number'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'a17e1d7582fc4d8aa5d30d3a0b1e10f8'
                        key: {
                            sys_ui_section: {
                                id: '87c8d008f3c54db4ab9489b8f08e1650'
                                key: {
                                    name: 'x_2256809_connect_case'
                                    caption: 'Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'tsanet_contact'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a3daf30571224cc39885db242b26ed4c'
                        key: {
                            name: 'x_2256809_connect_case'
                            element: 'document_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a40aecac756a4061928b6fa48bb8a565'
                        key: {
                            name: 'x_2256809_connect_case'
                            element: 'submitter_phone'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a6869aede8f74ab6a86417fcd72d71eb'
                        key: {
                            name: 'x_2256809_connect_case'
                            element: 'submitted_company_id'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: 'a6ef27540b32492ab94a1c8cc77d28bc'
                        deleted: true
                        key: {
                            category: 'x_2256809_connect_case'
                            prefix: 'TSN'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a9f740eac8884a74b7dd78147b7b1e23'
                        key: {
                            name: 'x_2256809_connect_case'
                            element: 'custom_fields'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'aaf1763510a14e7885a17a2a3dba01df'
                        key: {
                            name: 'x_2256809_connect_case'
                            element: 'tsanet_contact'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ae3a7d854c2244fabf898e79663f6260'
                        key: {
                            name: 'x_2256809_connect_case'
                            element: 'feedback_requested'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'af22377256374d04869a3df1fe23209d'
                        key: {
                            sys_ui_section: {
                                id: '87c8d008f3c54db4ab9489b8f08e1650'
                                key: {
                                    name: 'x_2256809_connect_case'
                                    caption: 'Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'reminder_sent'
                            position: '8'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b1750d5c34194c17b97893a65e36c8a5'
                        key: {
                            name: 'x_2256809_connect_case'
                            element: 'status'
                            value: 'CLOSED'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b362d6efdcac445791c6d66fcf83e25f'
                        key: {
                            name: 'x_2256809_connect_case'
                            element: 'token'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: 'b6b56e5244f84e47ade7d2492758dfbf'
                        key: {
                            logical_table_name: 'x_2256809_connect_case'
                            col_name_string: 'token'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b90c1803bdea4945a732c144fe7edb59'
                        key: {
                            name: 'x_2256809_connect_case'
                            element: 'feedback_requested'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ba5521c33bfa43369c4cc343a90a38b8'
                        key: {
                            name: 'x_2256809_connect_case'
                            element: 'status'
                            value: 'REJECTED'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'bb0253c1fcbe424e94b5b13422c8c260'
                        key: {
                            name: 'x_2256809_connect_case'
                            element: 'submitter_name'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'bb5c4b48056f414e8fa4b56ca5b051b1'
                        key: {
                            name: 'x_2256809_connect_case'
                            element: 'escalation_instructions'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'bc4266d6cfb144e8ad2ff1e2ec680734'
                        key: {
                            name: 'x_2256809_connect_case'
                            element: 'receiver_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'bc59feffe807440c842c3be24d4c2257'
                        key: {
                            sys_ui_section: {
                                id: '87c8d008f3c54db4ab9489b8f08e1650'
                                key: {
                                    name: 'x_2256809_connect_case'
                                    caption: 'Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'bd0f6ce3898349108a65a8ff2805e3d2'
                        key: {
                            sys_ui_section: {
                                id: '9494da57f2854f66b3504d2ee5cef2dc'
                                key: {
                                    name: 'x_2256809_connect_case'
                                    caption: 'Request'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'request_date'
                            position: '8'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'bdcaaaed5ae94e4ab8f23707f3209d18'
                        key: {
                            name: 'x_2256809_connect_case'
                            element: 'tsanet_email'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'bddbe222ef134cc1b42446050a8274aa'
                        key: {
                            name: 'x_2256809_connect_case'
                            element: 'submitter_last_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'be1ced2dccad493d9499b769c78adfd0'
                        key: {
                            name: 'x_2256809_connect_case'
                            element: 'received_company_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'bf8f6fb50b174170adc247029db4b7f9'
                        key: {
                            list_id: {
                                id: '5e1ec490866843a8a5affb30470926a1'
                                key: {
                                    name: 'x_2256809_connect_case'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'host_record'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'bfcb8a72ac554e31a517baa0b414d69b'
                        key: {
                            sys_ui_section: {
                                id: '9494da57f2854f66b3504d2ee5cef2dc'
                                key: {
                                    name: 'x_2256809_connect_case'
                                    caption: 'Request'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'c21283b200c84426952823c12972e7be'
                        key: {
                            sys_ui_section: {
                                id: 'e113530bacdc48129656f31a7d30d817'
                                key: {
                                    name: 'x_2256809_connect_case'
                                    caption: 'Receiver'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c317d9ba5cfb4362b9b1109016a357fc'
                        key: {
                            name: 'x_2256809_connect_case'
                            element: 'priority'
                            value: 'HIGH'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c4835a9ca6d84879831164c2adf6870a'
                        key: {
                            name: 'x_2256809_connect_case'
                            element: 'submitter_first_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'c4bf3e59ac804f7f9191d2014dd82658'
                        key: {
                            sys_ui_section: {
                                id: 'f10ed024782146c1a53a85b2963cfcf4'
                                key: {
                                    name: 'x_2256809_connect_case'
                                    caption: 'Submitter'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'submitter_name'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c53763c5a5c14876a8ab39b97ea71bea'
                        key: {
                            name: 'x_2256809_connect_case'
                            element: 'reminder_sent'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c644d719326a4ddf8e76e350fdba5e74'
                        key: {
                            name: 'x_2256809_connect_case'
                            element: 'token'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c701f44e3dc24f70a2408463a6ae5605'
                        key: {
                            name: 'x_2256809_connect_case'
                            element: 'submitter_phone'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c97df862476f403ebb92d662b41bdcc9'
                        key: {
                            name: 'x_2256809_connect_case'
                            element: 'partner'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ca02e29ba6b54da69dead8376cb1ffab'
                        key: {
                            name: 'x_2256809_connect_case'
                            element: 'submitter_first_name'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'ca7694b0030d420aaa5ccd753b8c4917'
                        key: {
                            sys_ui_section: {
                                id: 'f10ed024782146c1a53a85b2963cfcf4'
                                key: {
                                    name: 'x_2256809_connect_case'
                                    caption: 'Submitter'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'submitted_company_id'
                            position: '9'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: 'cce70be759fe494f8b8dae70189b8d67'
                        key: {
                            sys_ui_form: {
                                id: 'ffbf6ba3f0dc4f88915fecd0ee6cd02b'
                                key: {
                                    name: 'x_2256809_connect_case'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: 'e113530bacdc48129656f31a7d30d817'
                                key: {
                                    name: 'x_2256809_connect_case'
                                    caption: 'Receiver'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ccf2f7426d2548bc939d80c30a9e3a8b'
                        key: {
                            name: 'x_2256809_connect_case'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'cd98f6ddc6bf49899ba8a6cae978ee7d'
                        key: {
                            sys_ui_section: {
                                id: '9494da57f2854f66b3504d2ee5cef2dc'
                                key: {
                                    name: 'x_2256809_connect_case'
                                    caption: 'Request'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'priority'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'cde9e17db1ac4a609c44f2a936b43f3c'
                        key: {
                            sys_security_acl: '600a948e179f4b67a66630cb1447c36e'
                            sys_user_role: {
                                id: '13c64c9ef7b54505a80e6f46530c6f51'
                                key: {
                                    name: 'x_2256809_connect.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd104c579919348458bf784fd888909c4'
                        key: {
                            name: 'x_2256809_connect_case'
                            element: 'tsanet_email'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'd2640bf92b21421a8fdfeafcea782d4d'
                        key: {
                            list_id: {
                                id: '5e1ec490866843a8a5affb30470926a1'
                                key: {
                                    name: 'x_2256809_connect_case'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'number'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd6cbecba96184e7c9479ce13dbbc0b84'
                        key: {
                            name: 'x_2256809_connect_case'
                            element: 'tsanet_case_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: 'db684896ea124d19808e8133660a9b64'
                        key: {
                            sys_ui_form: {
                                id: 'ffbf6ba3f0dc4f88915fecd0ee6cd02b'
                                key: {
                                    name: 'x_2256809_connect_case'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '9494da57f2854f66b3504d2ee5cef2dc'
                                key: {
                                    name: 'x_2256809_connect_case'
                                    caption: 'Request'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'dca92a2481b24aba8b4b89903ad4d472'
                        key: {
                            name: 'x_2256809_connect_case'
                            element: 'priority'
                            value: 'LOW'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'dd3f46c6eca34bcb87b9f385e2f25620'
                        key: {
                            sys_ui_section: {
                                id: 'f10ed024782146c1a53a85b2963cfcf4'
                                key: {
                                    name: 'x_2256809_connect_case'
                                    caption: 'Submitter'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'df22c43af56c47a49dc378769a88da31'
                        key: {
                            name: 'x_2256809_connect_case'
                            element: 'submitter_last_name'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e0f48ad22eab4500b981500884985e0e'
                        key: {
                            name: 'x_2256809_connect_case'
                            element: 'tsanet_contact'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: 'e113530bacdc48129656f31a7d30d817'
                        key: {
                            name: 'x_2256809_connect_case'
                            caption: 'Receiver'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'e54352aac106498e8968ce1808093295'
                        key: {
                            name: 'x_2256809_connect_case'
                            element: 'priority'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'e6a06ed5b18a448791311aef38cf8a63'
                        key: {
                            list_id: {
                                id: '5e1ec490866843a8a5affb30470926a1'
                                key: {
                                    name: 'x_2256809_connect_case'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'partner'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'ea4740eaf2ec4dc994dfbcdb3f5f7fbb'
                        key: {
                            sys_ui_section: {
                                id: 'e113530bacdc48129656f31a7d30d817'
                                key: {
                                    name: 'x_2256809_connect_case'
                                    caption: 'Receiver'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'receiver_case_number'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'ed8038486c1b4eafba13ec19e254603a'
                        key: {
                            sys_ui_section: {
                                id: '9494da57f2854f66b3504d2ee5cef2dc'
                                key: {
                                    name: 'x_2256809_connect_case'
                                    caption: 'Request'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'direction'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'ed8cbf9e67204185aa9f24eddc4b4210'
                        key: {
                            sys_ui_section: {
                                id: '9494da57f2854f66b3504d2ee5cef2dc'
                                key: {
                                    name: 'x_2256809_connect_case'
                                    caption: 'Request'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'number'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'ee24b6a0f6424ce9bfb229acaa7d8498'
                        key: {
                            sys_ui_section: {
                                id: '87c8d008f3c54db4ab9489b8f08e1650'
                                key: {
                                    name: 'x_2256809_connect_case'
                                    caption: 'Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'tsanet_email'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'eed71d16c78b4dcdba619808f4221157'
                        key: {
                            sys_ui_section: {
                                id: '9494da57f2854f66b3504d2ee5cef2dc'
                                key: {
                                    name: 'x_2256809_connect_case'
                                    caption: 'Request'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'response_sla'
                            position: '9'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ef098d9f4e2f483a971a82845472d5a6'
                        key: {
                            name: 'x_2256809_connect_case'
                            element: 'request_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f0751d243fc14d0289f46f73174cc83d'
                        key: {
                            name: 'x_2256809_connect_case'
                            element: 'priority_note'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'f09e37300a074d4781ee95793cf38a9b'
                        key: {
                            sys_ui_section: {
                                id: 'e113530bacdc48129656f31a7d30d817'
                                key: {
                                    name: 'x_2256809_connect_case'
                                    caption: 'Receiver'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'receiver_name'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: 'f10ed024782146c1a53a85b2963cfcf4'
                        key: {
                            name: 'x_2256809_connect_case'
                            caption: 'Submitter'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'f1a90ae9345a4271a7fc02c78a7a73f3'
                        key: {
                            sys_ui_section: {
                                id: '9494da57f2854f66b3504d2ee5cef2dc'
                                key: {
                                    name: 'x_2256809_connect_case'
                                    caption: 'Request'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'description'
                            position: '14'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'f3673dd4e7664b0fb05eeff12bc8655f'
                        key: {
                            sys_ui_section: {
                                id: 'f10ed024782146c1a53a85b2963cfcf4'
                                key: {
                                    name: 'x_2256809_connect_case'
                                    caption: 'Submitter'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'submitter_last_name'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f4034d1fa0914c1bb65541bf24b9fec8'
                        key: {
                            name: 'x_2256809_connect_case'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f56ce5e185e94e4ab78e00e4aca7c846'
                        key: {
                            name: 'x_2256809_connect_case'
                            element: 'request_date'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f5ad3be0dfda45919ab9b3c8be7ff1c6'
                        key: {
                            name: 'x_2256809_connect_case'
                            element: 'status'
                            value: 'INFORMATION'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'f85a42a65bce404eabc0e8ab8a5cd8b3'
                        key: {
                            sys_ui_section: {
                                id: '9494da57f2854f66b3504d2ee5cef2dc'
                                key: {
                                    name: 'x_2256809_connect_case'
                                    caption: 'Request'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'priority_note'
                            position: '15'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f8ee95b842ea4b55bd099317693bca82'
                        key: {
                            name: 'x_2256809_connect_case'
                            element: 'document_name'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'fab392627463438aab7ae00f0fdfdda0'
                        key: {
                            sys_ui_section: {
                                id: 'f10ed024782146c1a53a85b2963cfcf4'
                                key: {
                                    name: 'x_2256809_connect_case'
                                    caption: 'Submitter'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: 'fb5699ca6d7b4cada7c04442fa16027b'
                        key: {
                            sys_ui_form: {
                                id: 'ffbf6ba3f0dc4f88915fecd0ee6cd02b'
                                key: {
                                    name: 'x_2256809_connect_case'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: 'f10ed024782146c1a53a85b2963cfcf4'
                                key: {
                                    name: 'x_2256809_connect_case'
                                    caption: 'Submitter'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'fdbb9e80d1064d57ae48dba0926cd774'
                        key: {
                            sys_ui_section: {
                                id: 'e113530bacdc48129656f31a7d30d817'
                                key: {
                                    name: 'x_2256809_connect_case'
                                    caption: 'Receiver'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'receiver_email'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'fdc40a2173e04a8db49fef919d93cb59'
                        key: {
                            name: 'x_2256809_connect_case'
                            element: 'status'
                            value: 'OPEN'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fef3b1436307406d85ab74d1eb974d32'
                        key: {
                            name: 'x_2256809_connect_case'
                            element: 'admin_note'
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: 'ffbf6ba3f0dc4f88915fecd0ee6cd02b'
                        key: {
                            name: 'x_2256809_connect_case'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ffd510b57af2481eaaa5ef69511d4b0e'
                        key: {
                            name: 'x_2256809_connect_case'
                            element: 'submitter_email'
                            language: 'en'
                        }
                    },
                ]
            }
        }
    }
}
