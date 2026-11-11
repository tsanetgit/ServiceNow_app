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
                    acl_create_case_api: {
                        table: 'sys_security_acl'
                        id: 'd4e687bcfb6345d99579c385b8583d8d'
                    }
                    acl_note_create: {
                        table: 'sys_security_acl'
                        id: '2677b3e546bf4f288d31b4608fedff03'
                    }
                    acl_note_delete: {
                        table: 'sys_security_acl'
                        id: '65cb4a4d599c414fa121192f3f1754a8'
                    }
                    acl_note_read: {
                        table: 'sys_security_acl'
                        id: '35a3d699d75d45fea9f93fdbca349219'
                    }
                    acl_note_write: {
                        table: 'sys_security_acl'
                        id: '075e87d06c6644ad9462e45b235ece0d'
                    }
                    acl_page_create_case_read: {
                        table: 'sys_security_acl'
                        id: 'aecb84bfd08c4dbdb8feb8e2f9ca1301'
                    }
                    acl_response_create: {
                        table: 'sys_security_acl'
                        id: '90f3eafcfb6847a5ad120b38b99c3df5'
                    }
                    acl_response_delete: {
                        table: 'sys_security_acl'
                        id: '48c8ed3d6ee04954b2560361c9bb659e'
                    }
                    acl_response_read: {
                        table: 'sys_security_acl'
                        id: '3c1b9c88feda45e998ebd72538d9d4f1'
                    }
                    acl_response_write: {
                        table: 'sys_security_acl'
                        id: 'df470c48ecd949b980b9ebe4ce6379e2'
                    }
                    action_create_tsanet_case: {
                        table: 'sys_ui_action'
                        id: '422d2538bf3d4e7e88acdd8184ef8959'
                    }
                    bom_json: {
                        table: 'sys_module'
                        id: '4487cc33ad644a75860d83db24a15e35'
                    }
                    case_related_list_notes: {
                        table: 'sys_ui_related_list_entry'
                        id: 'ec1d7008b46943769ac238f5d0dc38ca'
                    }
                    case_related_list_responses: {
                        table: 'sys_ui_related_list_entry'
                        id: 'e5a10d05076e46d99776ff55aa439988'
                    }
                    case_related_lists: {
                        table: 'sys_ui_related_list'
                        id: '88fa7d2d9ff946d3b78b790e4f28bf83'
                    }
                    csm_case_related_list_tsanet: {
                        table: 'sys_ui_related_list_entry'
                        id: '7e0cb14e3a3b43cf9b9e14f8d010e1f8'
                    }
                    csp_connection_info_get: {
                        table: 'sys_scope_privilege'
                        id: 'bc494caae862474baac221df031aecf4'
                        deleted: true
                    }
                    csp_connection_info_get_attribute: {
                        table: 'sys_scope_privilege'
                        id: 'fa5dc08e172548ecac9b329ee4d9b01a'
                        deleted: true
                    }
                    csp_connection_info_get_credential_attribute: {
                        table: 'sys_scope_privilege'
                        id: '277048ee18c74e498081496bb964a38a'
                        deleted: true
                    }
                    csp_credential_get_attribute: {
                        table: 'sys_scope_privilege'
                        id: '76b79d012e834fbb98cbc026280d8a01'
                        deleted: true
                    }
                    csp_credentials_get_by_alias: {
                        table: 'sys_scope_privilege'
                        id: '6050304ed46b4dc2bfd0e6f9c5d36074'
                        deleted: true
                    }
                    csp_glide_properties: {
                        table: 'sys_scope_privilege'
                        id: 'a5e7c90afb4f484facc897552688d7d0'
                    }
                    csp_glide_record_insert: {
                        table: 'sys_scope_privilege'
                        id: '1dfce811626c47e88466d786a7f92797'
                    }
                    csp_glide_record_secure_get_value: {
                        table: 'sys_scope_privilege'
                        id: 'fcb41743e148403cb17423501542a738'
                    }
                    csp_glide_record_set_value: {
                        table: 'sys_scope_privilege'
                        id: '465dea2627bc4866bd915898d657e420'
                    }
                    csp_rest_api_request: {
                        table: 'sys_scope_privilege'
                        id: '011786327d584309a915b7c06df3f10b'
                    }
                    csp_rest_api_request_body: {
                        table: 'sys_scope_privilege'
                        id: 'a42e3e462ce6453e9b120761c54e9029'
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
                    csp_rest_set_authentication_profile: {
                        table: 'sys_scope_privilege'
                        id: '5d303639bfde400faaf5b9cb40262470'
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
                    csp_rest_set_requestor_profile: {
                        table: 'sys_scope_privilege'
                        id: 'f6119b2d353a47adb506fcac82f8b7bf'
                    }
                    csp_service_error_set_message: {
                        table: 'sys_scope_privilege'
                        id: '096959aa706342969e178836d8ae56fe'
                    }
                    csp_service_error_set_status: {
                        table: 'sys_scope_privilege'
                        id: 'ef58cbb316c148b08dc5c0a99fb9aa13'
                    }
                    csp_service_result_set_body: {
                        table: 'sys_scope_privilege'
                        id: '410eb328ce304233837964a5a288bfa0'
                    }
                    csp_service_result_set_status: {
                        table: 'sys_scope_privilege'
                        id: 'be66a435e22a4fdb958527e79c622eca'
                    }
                    csp_table_customerservice_case_read: {
                        table: 'sys_scope_privilege'
                        id: 'c90477a6c9864734bc78e5225b8b5323'
                    }
                    csp_table_http_connection_read: {
                        table: 'sys_scope_privilege'
                        id: '5371b2d99d9a4f1b9a4db8aad9fdc068'
                    }
                    csp_table_oauth_credentials_read: {
                        table: 'sys_scope_privilege'
                        id: '30e1bbf6529e4be3ad293d5c69b632bc'
                    }
                    csp_table_sys_user_read: {
                        table: 'sys_scope_privilege'
                        id: '2644aa90b6a5478a8739788cf1b1a4e8'
                    }
                    form_action_item_create_tsanet_case: {
                        table: 'sys_ux_form_action_layout_item'
                        id: '20f4f4a107764e72a343d432df499f41'
                    }
                    form_action_item_link_case: {
                        table: 'sys_ux_m2m_action_layout_item'
                        id: '017d8d3564a6499bb0dd266fb6a146f6'
                    }
                    form_action_item_link_front_line: {
                        table: 'sys_ux_m2m_action_layout_item'
                        id: 'b6214ea8eb6c4974b87fbaa4a6d93c1e'
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
                    module_notes: {
                        table: 'sys_app_module'
                        id: '2c3bfb51707c4d5d9901bd86bd6600c5'
                    }
                    module_responses: {
                        table: 'sys_app_module'
                        id: '87ba2362e1f647b9afa5f9477b145260'
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
                        deleted: true
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
                    rest_create_case: {
                        table: 'sys_ws_definition'
                        id: 'e964e9b764284af59d3493ef9cc418a3'
                    }
                    rest_create_case_form: {
                        table: 'sys_ws_operation'
                        id: '30110d94b3304439a5fc5d1bc78457fc'
                    }
                    rest_create_case_form_company: {
                        table: 'sys_ws_query_parameter'
                        id: '6594a9ce9dc24e378a0d40730621fb7f'
                    }
                    rest_create_case_form_department: {
                        table: 'sys_ws_query_parameter'
                        id: 'edbb0819c78d47eabcb051943f575f07'
                    }
                    rest_create_case_partners: {
                        table: 'sys_ws_operation'
                        id: '55cc1d93b6db49e3afdcae8a2755c31b'
                    }
                    rest_create_case_partners_q: {
                        table: 'sys_ws_query_parameter'
                        id: 'd9d67e14da944347a8f49a95f23b94c0'
                    }
                    rest_create_case_submit: {
                        table: 'sys_ws_operation'
                        id: '0999f9db964f44b998b391c350cc2cc5'
                    }
                    rest_create_case_v1: {
                        table: 'sys_ws_version'
                        id: 'b8cc6bdee0a645a487b88b50fdcde060'
                    }
                    setup_api_base_url: {
                        table: 'sys_properties_category_m2m'
                        id: '310c12115e014275a4f24574412688d3'
                        deleted: true
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
                    tsanet_api_oauth_template: {
                        table: 'sys_alias_templates'
                        id: '50fb810c859c41b9b13bdf9cb7a95931'
                    }
                    tsanet_client: {
                        table: 'sys_script_include'
                        id: 'c38a84a6cfea43f1a0f150b67b6e1d33'
                    }
                    tsanet_create_case: {
                        table: 'sys_script_include'
                        id: '74581165f2064e3784f92e83062fefac'
                    }
                    tsanet_menu: {
                        table: 'sys_app_application'
                        id: '63f7f870c83b4b27ad97c086245792e7'
                    }
                    ws_audience_user: {
                        table: 'sys_ux_applicability'
                        id: '7ce54f380bbf420399b26c0d10e7af9d'
                    }
                    ws_category_tsanet: {
                        table: 'sys_ux_list_category'
                        id: 'd4d12f979a604da1a6c8a22ebe9f0fd4'
                    }
                    ws_list_all: {
                        table: 'sys_ux_list'
                        id: 'ef7713c791bc455d90055f506baa118a'
                    }
                    ws_list_all_audience: {
                        table: 'sys_ux_applicability_m2m_list'
                        id: '406371ec08884b4a854d1e74da4035f0'
                    }
                    ws_list_inbound_open: {
                        table: 'sys_ux_list'
                        id: 'c84c6ceb3c1146748eba0a0708792f91'
                    }
                    ws_list_inbound_open_audience: {
                        table: 'sys_ux_applicability_m2m_list'
                        id: 'a28ee59c8ccc4fc9ae2e19bfc630cd5a'
                    }
                    ws_list_outbound: {
                        table: 'sys_ux_list'
                        id: 'f665c6b63b53499fa6a2eedaee31a702'
                    }
                    ws_list_outbound_audience: {
                        table: 'sys_ux_applicability_m2m_list'
                        id: 'e19102142e8c42bf8906008858ae23fa'
                    }
                }
                composite: [
                    {
                        table: 'sys_ui_form_section'
                        id: '001c1307ccb14d2090efaf9001d869d3'
                        key: {
                            sys_ui_form: {
                                id: '3926476220e14c3790197d6ffc5d85dd'
                                key: {
                                    name: 'x_2256809_connect_note'
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
                                id: '18c84d0bed3c47cc8e0f58a2ec120b3f'
                                key: {
                                    name: 'x_2256809_connect_note'
                                    caption: 'Note'
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
                        id: '0144510813ce40b69c20dce28d047148'
                        key: {
                            name: 'x_2256809_connect_response'
                            element: 'type'
                            value: 'INFORMATION_RESPONSE'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '02b80e6252424a59ba5e5a8d104083e8'
                        key: {
                            name: 'x_2256809_connect_case'
                            element: 'receiver_name'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0350df19b0154d18ac65344840a177e0'
                        key: {
                            name: 'x_2256809_connect_note'
                            element: 'tsanet_case'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '0384051451a34a068c9a06d1f7ce89f8'
                        key: {
                            sys_ui_section: {
                                id: '18c84d0bed3c47cc8e0f58a2ec120b3f'
                                key: {
                                    name: 'x_2256809_connect_note'
                                    caption: 'Note'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'tsanet_created'
                            position: '10'
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
                        table: 'sys_ui_list'
                        id: '047c6d3777c64eadbf86d5064327e1e9'
                        key: {
                            name: 'x_2256809_connect_note'
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
                        id: '064eb5a140c64629bfd8e95e3516756b'
                        key: {
                            sys_ui_section: {
                                id: '4da60f5fb761441dac3d4bc30544a62a'
                                key: {
                                    name: 'x_2256809_connect_note'
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
                            element: 'tsanet_updated'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0765f7a95b8541a7b58cc83c942107ef'
                        key: {
                            name: 'x_2256809_connect_response'
                            element: 'case_number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '079d4bb2b86f48a38bb27594867d70e0'
                        key: {
                            name: 'x_2256809_connect_response'
                            element: 'type'
                            value: 'INFORMATION_REQUEST'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '09138308d54447c298c998331b8453f4'
                        key: {
                            name: 'x_2256809_connect_response'
                            caption: 'Response'
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
                        table: 'sys_ui_list_element'
                        id: '095ee372ea0b4d52859c55c37aa82b2d'
                        key: {
                            list_id: {
                                id: '047c6d3777c64eadbf86d5064327e1e9'
                                key: {
                                    name: 'x_2256809_connect_note'
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
                            element: 'company_name'
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
                        table: 'sys_ui_element'
                        id: '0b4a70c006e0429f895e66cbd1895f9d'
                        key: {
                            sys_ui_section: {
                                id: '18c84d0bed3c47cc8e0f58a2ec120b3f'
                                key: {
                                    name: 'x_2256809_connect_note'
                                    caption: 'Note'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'tsanet_case'
                            position: '1'
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
                        table: 'sys_ui_action_role'
                        id: '0edff4015ccf44359088fbea10e44908'
                        key: {
                            sys_ui_action: '422d2538bf3d4e7e88acdd8184ef8959'
                            sys_user_role: {
                                id: '13c64c9ef7b54505a80e6f46530c6f51'
                                key: {
                                    name: 'x_2256809_connect.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0f9d002c7d164385b5c0ec754fc03fa5'
                        key: {
                            name: 'x_2256809_connect_note'
                            element: 'NULL'
                            language: 'en'
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
                        id: '1556b7f72a644414bf7fad384960cd2a'
                        key: {
                            name: 'x_2256809_connect_response'
                            element: 'engineer_name'
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
                        table: 'sys_security_acl_role'
                        id: '17ef65c13c7b4682b257b4b1b5386357'
                        key: {
                            sys_security_acl: '90f3eafcfb6847a5ad120b38b99c3df5'
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
                        id: '18c66536413f423e837e7ce2b821f59a'
                        key: {
                            name: 'x_2256809_connect_note'
                            element: 'direction'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '18c84d0bed3c47cc8e0f58a2ec120b3f'
                        key: {
                            name: 'x_2256809_connect_note'
                            caption: 'Note'
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
                        id: '1cb79d9033504bbe9d0829abce13dfd5'
                        key: {
                            sys_ui_section: {
                                id: '09138308d54447c298c998331b8453f4'
                                key: {
                                    name: 'x_2256809_connect_response'
                                    caption: 'Response'
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
                        id: '1cdc19ec91a042929c57134c5f8e1c7d'
                        key: {
                            sys_ui_section: {
                                id: '18c84d0bed3c47cc8e0f58a2ec120b3f'
                                key: {
                                    name: 'x_2256809_connect_note'
                                    caption: 'Note'
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
                            position: '5'
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
                        table: 'sys_choice'
                        id: '1f21c31f91f54343993130c7602cc430'
                        key: {
                            name: 'x_2256809_connect_note'
                            element: 'status'
                            value: 'ENTERED'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '20fed5733a164b7ea1d160f271f1fcaf'
                        key: {
                            sys_security_acl: '35a3d699d75d45fea9f93fdbca349219'
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
                        id: '225f9ae569284cc9b2b4cfbe24d8515c'
                        key: {
                            name: 'x_2256809_connect_note'
                            element: 'status'
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
                        table: 'sys_documentation'
                        id: '26e77dd19d1041baa0ea020d356e16e3'
                        key: {
                            name: 'x_2256809_connect_response'
                            element: 'engineer_email'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '275475be4e7047fcacd8abfff4cfd0bc'
                        key: {
                            name: 'x_2256809_connect_note'
                            element: 'creator_name'
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
                        table: 'sys_ui_page'
                        id: '282183f7e10445b68e44febe09613392'
                        key: {
                            endpoint: 'x_2256809_connect_create_case.do'
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
                        table: 'sys_choice_set'
                        id: '2a629c8a5e3748bd90623ba6456595fc'
                        key: {
                            name: 'x_2256809_connect_note'
                            element: 'status'
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
                        table: 'sys_security_acl_role'
                        id: '2acfdbf3768c4c739b350c0eda492e43'
                        key: {
                            sys_security_acl: 'aecb84bfd08c4dbdb8feb8e2f9ca1301'
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
                        id: '2b741dc440ab4595b158958518d2e337'
                        key: {
                            name: 'x_2256809_connect_case'
                            element: 'responded'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2dbebb7004a244b9b3eee09458e03f7e'
                        key: {
                            name: 'x_2256809_connect_note'
                            element: 'description_plain'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '2e8c659a231f4fa4b0ce9319d316cc82'
                        key: {
                            list_id: {
                                id: '047c6d3777c64eadbf86d5064327e1e9'
                                key: {
                                    name: 'x_2256809_connect_note'
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
                            element: 'type'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '31aee86cd71b4456be4f1110f576ecc7'
                        key: {
                            list_id: {
                                id: '047c6d3777c64eadbf86d5064327e1e9'
                                key: {
                                    name: 'x_2256809_connect_note'
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
                        table: 'sys_ui_element'
                        id: '31d2b4a815214160a165c1628b2d5bf9'
                        key: {
                            sys_ui_section: {
                                id: '18c84d0bed3c47cc8e0f58a2ec120b3f'
                                key: {
                                    name: 'x_2256809_connect_note'
                                    caption: 'Note'
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
                            position: '2'
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
                        table: 'sys_documentation'
                        id: '325fe818fc984f24b3730e07bdf62135'
                        key: {
                            name: 'x_2256809_connect_response'
                            element: 'response_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '333c5a2d828e48f9a6f48b4a6e03e518'
                        key: {
                            name: 'x_2256809_connect_note'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '36a480504e3b4a35baa4ba0d145c3f7f'
                        key: {
                            sys_ui_section: {
                                id: '4da60f5fb761441dac3d4bc30544a62a'
                                key: {
                                    name: 'x_2256809_connect_note'
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
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '36fdcd0096c34623b5c599a819d602d2'
                        key: {
                            name: 'x_2256809_connect_note'
                            element: 'creator_email'
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
                        table: 'sys_ui_form'
                        id: '3926476220e14c3790197d6ffc5d85dd'
                        key: {
                            name: 'x_2256809_connect_note'
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
                        table: 'sys_ui_element'
                        id: '3b91b267cdc04b5885dc5f1e048fbf5b'
                        key: {
                            sys_ui_section: {
                                id: '18c84d0bed3c47cc8e0f58a2ec120b3f'
                                key: {
                                    name: 'x_2256809_connect_note'
                                    caption: 'Note'
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
                        table: 'sys_dictionary'
                        id: '3d48633d92bb452aaa5b8a898cbd6f75'
                        key: {
                            name: 'x_2256809_connect_note'
                            element: 'type'
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
                        table: 'sys_choice'
                        id: '3fb7a2d52f1345a7834f3ba28df9568f'
                        key: {
                            name: 'x_2256809_connect_note'
                            element: 'direction'
                            value: 'OUTBOUND'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4123c84217a14626b48c46aec91e6bbf'
                        key: {
                            name: 'x_2256809_connect_note'
                            element: 'company_id'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '41372e22b4c2426582d48f80b61eb2ca'
                        key: {
                            sys_ui_section: {
                                id: '09138308d54447c298c998331b8453f4'
                                key: {
                                    name: 'x_2256809_connect_response'
                                    caption: 'Response'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'engineer_email'
                            position: '7'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact'
                        id: '4279f3107f8b43c4b3c513be8a32d4a5'
                        key: {
                            name: 'x_2256809_connect_create_case.do - BYOUI Files'
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
                        id: '4526a7906543463daa58958b465c7c8f'
                        key: {
                            name: 'x_2256809_connect_note'
                            element: 'priority'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4688d9e6344f405bb63f28f88cd780b4'
                        key: {
                            name: 'x_2256809_connect_response'
                            element: 'case_number'
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
                        id: '49249337f1134ec28b4e7564b1ff616d'
                        key: {
                            sys_ui_section: {
                                id: '18c84d0bed3c47cc8e0f58a2ec120b3f'
                                key: {
                                    name: 'x_2256809_connect_note'
                                    caption: 'Note'
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
                            position: '4'
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
                        table: 'sys_ui_list_element'
                        id: '4999e9443e654529b6d399b75fcf7287'
                        key: {
                            list_id: {
                                id: '82540ffa4b6a425aaa8903014b4687aa'
                                key: {
                                    name: 'x_2256809_connect_response'
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
                            element: 'engineer_name'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '49eb6c9127ce416b9549239dd888b898'
                        key: {
                            name: 'x_2256809_connect_note'
                            element: 'direction'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '4a3dd20b903e4b238ed2dffe641b4c63'
                        key: {
                            sys_security_acl: '48c8ed3d6ee04954b2560361c9bb659e'
                            sys_user_role: {
                                id: '1245d50a3da44472a24ee30c22886d53'
                                key: {
                                    name: 'x_2256809_connect.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ws_query_parameter_map'
                        id: '4b1884d9775b470bbdddb9ae7509ca15'
                        key: {
                            web_service_operation: '55cc1d93b6db49e3afdcae8a2755c31b'
                            web_service_query_parameter: 'd9d67e14da944347a8f49a95f23b94c0'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4d12785e5f434ea88fb6826b694c2074'
                        key: {
                            name: 'x_2256809_connect_note'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '4d6127ed016a4c0380932e17cb54ecb0'
                        key: {
                            sys_ui_section: {
                                id: '09138308d54447c298c998331b8453f4'
                                key: {
                                    name: 'x_2256809_connect_response'
                                    caption: 'Response'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'tsanet_case'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '4d8428b73f8c430196224e42e6653d36'
                        key: {
                            sys_ui_section: {
                                id: '09138308d54447c298c998331b8453f4'
                                key: {
                                    name: 'x_2256809_connect_response'
                                    caption: 'Response'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'type'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '4da60f5fb761441dac3d4bc30544a62a'
                        key: {
                            name: 'x_2256809_connect_note'
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
                        table: 'sys_ux_lib_asset'
                        id: '4dffd763740e4678aaacb50c9f58e21b'
                        key: {
                            name: 'x_2256809_connect/create-case/main.js.map'
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
                        id: '50cf73dd45f946a1af097763ab9a0b8e'
                        key: {
                            name: 'x_2256809_connect_note'
                            element: 'priority'
                            language: 'en'
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
                        table: 'sys_dictionary'
                        id: '536d1e7a9b594cfbad99ae507de89b18'
                        key: {
                            name: 'x_2256809_connect_note'
                            element: 'token'
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
                        table: 'sys_security_acl_role'
                        id: '545b4787841b41cf96a9b1e75e9adfc8'
                        key: {
                            sys_security_acl: '075e87d06c6644ad9462e45b235ece0d'
                            sys_user_role: {
                                id: '1245d50a3da44472a24ee30c22886d53'
                                key: {
                                    name: 'x_2256809_connect.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '558e2ebabac74fc3b820ca1ce0c9f4c7'
                        key: {
                            list_id: {
                                id: '047c6d3777c64eadbf86d5064327e1e9'
                                key: {
                                    name: 'x_2256809_connect_note'
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
                        table: 'ua_table_licensing_config'
                        id: '5670463fd2ea44d5994e0d340d2347f6'
                        key: {
                            name: 'x_2256809_connect_response'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '56d40df19fe0440ba42a127ccddafcb3'
                        key: {
                            name: 'x_2256809_connect_response'
                            element: 'response_id'
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
                        table: 'sys_documentation'
                        id: '578b9857882044588377727ff6a8e9a0'
                        key: {
                            name: 'x_2256809_connect_note'
                            element: 'creator_email'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '5887f86220b243ffb581f2810c699980'
                        key: {
                            sys_ui_section: {
                                id: '18c84d0bed3c47cc8e0f58a2ec120b3f'
                                key: {
                                    name: 'x_2256809_connect_note'
                                    caption: 'Note'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'creator_name'
                            position: '7'
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
                        table: 'sys_ui_list_element'
                        id: '5a6e0df5ec774aa28a4b6af562fa226f'
                        key: {
                            list_id: {
                                id: '047c6d3777c64eadbf86d5064327e1e9'
                                key: {
                                    name: 'x_2256809_connect_note'
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
                            element: 'tsanet_created'
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
                        table: 'sys_documentation'
                        id: '5f0850a31e16491c9ab2ecc2a906fd06'
                        key: {
                            name: 'x_2256809_connect_response'
                            element: 'next_steps'
                            language: 'en'
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
                        id: '639dcc9ef07d458597f9c72d7635b246'
                        key: {
                            sys_ui_section: {
                                id: '09138308d54447c298c998331b8453f4'
                                key: {
                                    name: 'x_2256809_connect_response'
                                    caption: 'Response'
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
                        table: 'sys_documentation'
                        id: '644cbd9c4e4b469eb65ec332b1ef31f5'
                        key: {
                            name: 'x_2256809_connect_response'
                            element: 'engineer_name'
                            language: 'en'
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
                        table: 'sys_choice'
                        id: '657179c505ec48d58ac8d75035af9df2'
                        key: {
                            name: 'x_2256809_connect_note'
                            element: 'status'
                            value: 'READ'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '65d2378b4ca24fc0bbbbfaaa11473e28'
                        key: {
                            name: 'x_2256809_connect_note'
                            element: 'creator_username'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '66170f0ee596496994de2b0852484804'
                        key: {
                            name: 'x_2256809_connect_note'
                            element: 'summary'
                            language: 'en'
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
                        table: 'sys_ui_element'
                        id: '68d420ef78284ca991558c925a2c8ee4'
                        key: {
                            sys_ui_section: {
                                id: '09138308d54447c298c998331b8453f4'
                                key: {
                                    name: 'x_2256809_connect_response'
                                    caption: 'Response'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'next_steps'
                            position: '11'
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
                        id: '6f00e81c4ced4be2be95c2d92022e9b8'
                        key: {
                            name: 'x_2256809_connect_note'
                            element: 'tsanet_case'
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
                        table: 'sys_choice'
                        id: '757a02bcdc674d14b5790043fc1c073b'
                        key: {
                            name: 'x_2256809_connect_note'
                            element: 'type'
                            value: 'system'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '75b203c70fc949379b0115c2903736f2'
                        key: {
                            name: 'x_2256809_connect_note'
                            element: 'tsanet_created'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '7641679339704e04b38a6f356e31c9ee'
                        key: {
                            sys_ui_section: {
                                id: '18c84d0bed3c47cc8e0f58a2ec120b3f'
                                key: {
                                    name: 'x_2256809_connect_note'
                                    caption: 'Note'
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
                        table: 'sys_ws_query_parameter_map'
                        id: '78f25f2fec6c457ea624ff88c5209c34'
                        key: {
                            web_service_operation: '30110d94b3304439a5fc5d1bc78457fc'
                            web_service_query_parameter: 'edbb0819c78d47eabcb051943f575f07'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7b68a3a8002449809989f2e1804ab9c6'
                        key: {
                            name: 'x_2256809_connect_note'
                            element: 'description'
                            language: 'en'
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
                        id: '7c94f9fac43946fdb27497c5eb7d6008'
                        key: {
                            name: 'x_2256809_connect_response'
                            element: 'tsanet_case'
                            language: 'en'
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
                        table: 'sys_security_acl_role'
                        id: '7e9cfb9b462946878f549fcd567cb6c2'
                        key: {
                            sys_security_acl: '65cb4a4d599c414fa121192f3f1754a8'
                            sys_user_role: {
                                id: '1245d50a3da44472a24ee30c22886d53'
                                key: {
                                    name: 'x_2256809_connect.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '7ea291412f0a4e3e9c4b0fbb85d27cb8'
                        key: {
                            logical_table_name: 'x_2256809_connect_note'
                            col_name_string: 'token'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7f37beb4c16640f8a32e902044922644'
                        key: {
                            name: 'x_2256809_connect_note'
                            element: 'direction'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8069d55a4b784a3cb55172d1eecf945f'
                        key: {
                            name: 'x_2256809_connect_note'
                            element: 'company_name'
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
                        table: 'sys_ui_list_element'
                        id: '817118f8e9994f7aa02c92fb581b8e64'
                        key: {
                            list_id: {
                                id: '82540ffa4b6a425aaa8903014b4687aa'
                                key: {
                                    name: 'x_2256809_connect_response'
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
                            element: 'type'
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
                        table: 'sys_ui_list'
                        id: '82540ffa4b6a425aaa8903014b4687aa'
                        key: {
                            name: 'x_2256809_connect_response'
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
                        table: 'sys_documentation'
                        id: '83f3bf07650348d88011d1f8ca866169'
                        key: {
                            name: 'x_2256809_connect_note'
                            element: 'company_id'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '8610deca20d04a0da3f4fef6115f5b7b'
                        key: {
                            sys_ui_section: {
                                id: '18c84d0bed3c47cc8e0f58a2ec120b3f'
                                key: {
                                    name: 'x_2256809_connect_note'
                                    caption: 'Note'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'copied_to_case'
                            position: '11'
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
                        table: 'sys_dictionary'
                        id: '8a0f0568d07642a5974f695d410350a5'
                        key: {
                            name: 'x_2256809_connect_response'
                            element: 'tsanet_case'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '8abb3caf299a4a479ecb98dce57737ef'
                        key: {
                            name: 'x_2256809_connect_response'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8af34324e8ec4ed28e8747c81cb6864c'
                        key: {
                            name: 'x_2256809_connect_note'
                            element: 'type'
                            value: 'public'
                            language: 'en'
                            dependent_value: 'NULL'
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
                        table: 'sys_choice_set'
                        id: '8c808e9f5de24647ba47f72a581647ae'
                        key: {
                            name: 'x_2256809_connect_note'
                            element: 'type'
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
                        table: 'sys_dictionary'
                        id: '91978088deb84280a2e1cd14ae7b1ed2'
                        key: {
                            name: 'x_2256809_connect_response'
                            element: 'engineer_email'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '921e4f22e515432eb059b095108e0bfa'
                        key: {
                            list_id: {
                                id: '047c6d3777c64eadbf86d5064327e1e9'
                                key: {
                                    name: 'x_2256809_connect_note'
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
                            element: 'creator_name'
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
                        table: 'sys_choice_set'
                        id: '92b62f72e178401cbb9a1d64ed98ed7c'
                        key: {
                            name: 'x_2256809_connect_note'
                            element: 'priority'
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
                        table: 'sys_ui_element'
                        id: '94456b35ac2148da9a9ae6915c709b23'
                        key: {
                            sys_ui_section: {
                                id: '18c84d0bed3c47cc8e0f58a2ec120b3f'
                                key: {
                                    name: 'x_2256809_connect_note'
                                    caption: 'Note'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'company_name'
                            position: '9'
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
                        table: 'sn_glider_source_artifact_m2m'
                        id: '99a9138516e2467b9c2afbef5b6a0ba0'
                        key: {
                            application_file: '4dffd763740e4678aaacb50c9f58e21b'
                            source_artifact: '4279f3107f8b43c4b3c513be8a32d4a5'
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
                        table: 'sys_ui_list_element'
                        id: '9c8cd1b668c442a592401615545ee45a'
                        key: {
                            list_id: {
                                id: '047c6d3777c64eadbf86d5064327e1e9'
                                key: {
                                    name: 'x_2256809_connect_note'
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
                            element: 'tsanet_case'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '9cb4797d7a904079970d3134e679b682'
                        key: {
                            sys_security_acl: '3c1b9c88feda45e998ebd72538d9d4f1'
                            sys_user_role: {
                                id: '13c64c9ef7b54505a80e6f46530c6f51'
                                key: {
                                    name: 'x_2256809_connect.user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '9d3a5638a0e5489998cb0ccb94d96b07'
                        key: {
                            sys_ui_section: {
                                id: '4da60f5fb761441dac3d4bc30544a62a'
                                key: {
                                    name: 'x_2256809_connect_note'
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
                        table: 'sys_ui_list_element'
                        id: '9e58d002b03f4d288e107bb9258e218f'
                        key: {
                            list_id: {
                                id: '047c6d3777c64eadbf86d5064327e1e9'
                                key: {
                                    name: 'x_2256809_connect_note'
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
                        table: 'sys_ui_element'
                        id: '9f93d58005dc48c8aecd11bc51969677'
                        key: {
                            sys_ui_section: {
                                id: '18c84d0bed3c47cc8e0f58a2ec120b3f'
                                key: {
                                    name: 'x_2256809_connect_note'
                                    caption: 'Note'
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
                        table: 'sys_security_acl_role'
                        id: '9fe1af1143304a6d9be96352fb43efed'
                        key: {
                            sys_security_acl: '2677b3e546bf4f288d31b4608fedff03'
                            sys_user_role: {
                                id: '1245d50a3da44472a24ee30c22886d53'
                                key: {
                                    name: 'x_2256809_connect.admin'
                                }
                            }
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
                        table: 'sys_choice'
                        id: 'a1a3a72f851a4f979dff97cae7452919'
                        key: {
                            name: 'x_2256809_connect_note'
                            element: 'direction'
                            value: 'INBOUND'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'a2bd2b6ad1764d2cab9be47a17bb1240'
                        key: {
                            sys_ui_section: {
                                id: '4da60f5fb761441dac3d4bc30544a62a'
                                key: {
                                    name: 'x_2256809_connect_note'
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
                            element: 'description_plain'
                            position: '7'
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
                        table: 'sys_documentation'
                        id: 'a4a1932f1b4444da8b68f6376d90c5d2'
                        key: {
                            name: 'x_2256809_connect_note'
                            element: 'company_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a60579a0df90456ea077c036a9a34dfb'
                        key: {
                            name: 'x_2256809_connect_note'
                            element: 'description'
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
                        table: 'sys_documentation'
                        id: 'a75e8308c57a404f8d4c80a94eed8ce4'
                        key: {
                            name: 'x_2256809_connect_note'
                            element: 'token'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a8d0cc0934f542cdb1bcdb79caf519cd'
                        key: {
                            name: 'x_2256809_connect_note'
                            element: 'tsanet_updated'
                            language: 'en'
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
                        table: 'sys_ui_element'
                        id: 'ac27f92258724de1a20a3eaadffdb68f'
                        key: {
                            sys_ui_section: {
                                id: '4da60f5fb761441dac3d4bc30544a62a'
                                key: {
                                    name: 'x_2256809_connect_note'
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
                            element: 'company_id'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'ad94a7ce5f0c4318a8cd3280ab973941'
                        key: {
                            sys_security_acl: 'd4e687bcfb6345d99579c385b8583d8d'
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
                        id: 'ae3a7d854c2244fabf898e79663f6260'
                        key: {
                            name: 'x_2256809_connect_case'
                            element: 'feedback_requested'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'aebf48025cc24bc0ba0692212b819b14'
                        key: {
                            name: 'x_2256809_connect_note'
                            element: 'type'
                            value: 'partner'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: 'aed6ea62607440bf84354304b0a590d3'
                        key: {
                            name: 'x_2256809_connect_response'
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
                        table: 'sys_ui_element'
                        id: 'b263e47d44db465397992e8688f14126'
                        key: {
                            sys_ui_section: {
                                id: '18c84d0bed3c47cc8e0f58a2ec120b3f'
                                key: {
                                    name: 'x_2256809_connect_note'
                                    caption: 'Note'
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
                        table: 'sys_documentation'
                        id: 'b362d6efdcac445791c6d66fcf83e25f'
                        key: {
                            name: 'x_2256809_connect_case'
                            element: 'token'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b3f262b6528a4af5aede53aaf8195565'
                        key: {
                            name: 'x_2256809_connect_note'
                            element: 'copied_to_case'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'b46fdb1d530c45379905d262c3014fc7'
                        key: {
                            sys_ui_section: {
                                id: '09138308d54447c298c998331b8453f4'
                                key: {
                                    name: 'x_2256809_connect_response'
                                    caption: 'Response'
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
                        id: 'b48485a5050a4c10a6498494a64c31a5'
                        key: {
                            name: 'x_2256809_connect_note'
                            element: 'tsanet_updated'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: 'b60bebcc5ba74ca6b8775e8016ebb791'
                        key: {
                            logical_table_name: 'x_2256809_connect_response'
                            col_name_string: 'response_id'
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
                        id: 'b8bfcc33a1124f07b18c942e605f6593'
                        key: {
                            name: 'x_2256809_connect_note'
                            element: 'creator_name'
                            language: 'en'
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
                        table: 'sys_documentation'
                        id: 'b9460158698a4f38be0f317640742bee'
                        key: {
                            name: 'x_2256809_connect_response'
                            element: 'engineer_phone'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'b9c5f633d48d42a4a0e0d9ef28af3a9c'
                        key: {
                            sys_ui_section: {
                                id: '18c84d0bed3c47cc8e0f58a2ec120b3f'
                                key: {
                                    name: 'x_2256809_connect_note'
                                    caption: 'Note'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'creator_email'
                            position: '8'
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
                        id: 'bb873d92542441908e9c58fb342518c7'
                        key: {
                            name: 'x_2256809_connect_response'
                            element: 'tsanet_created'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'bc027124481646588a4ffaec15b913a8'
                        key: {
                            list_id: {
                                id: '82540ffa4b6a425aaa8903014b4687aa'
                                key: {
                                    name: 'x_2256809_connect_response'
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
                            element: 'case_number'
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
                        table: 'sys_ux_lib_asset'
                        id: 'bcaad298f3d44c53b845af3fbbc0f33f'
                        key: {
                            name: 'x_2256809_connect/create-case/main'
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
                        table: 'sys_ui_element'
                        id: 'bd69611852854a8e9aaf9ba67c1639a1'
                        key: {
                            sys_ui_section: {
                                id: '09138308d54447c298c998331b8453f4'
                                key: {
                                    name: 'x_2256809_connect_response'
                                    caption: 'Response'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'engineer_name'
                            position: '6'
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
                        table: 'sys_ui_form_section'
                        id: 'bde4c307f29e478ebe6538bc29f0c00b'
                        key: {
                            sys_ui_form: {
                                id: '3926476220e14c3790197d6ffc5d85dd'
                                key: {
                                    name: 'x_2256809_connect_note'
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
                                id: '4da60f5fb761441dac3d4bc30544a62a'
                                key: {
                                    name: 'x_2256809_connect_note'
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
                        id: 'be1ced2dccad493d9499b769c78adfd0'
                        key: {
                            name: 'x_2256809_connect_case'
                            element: 'received_company_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'bebfbbe21bff464bb53885ff7737e632'
                        key: {
                            name: 'x_2256809_connect_response'
                            element: 'type'
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
                        table: 'sys_choice'
                        id: 'bfadd03c8c2e43e48ede04a7879efa7d'
                        key: {
                            name: 'x_2256809_connect_note'
                            element: 'priority'
                            value: 'MEDIUM'
                            language: 'en'
                            dependent_value: 'NULL'
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
                        id: 'c040778a286c48499cd3b7ad616bc202'
                        key: {
                            sys_ui_section: {
                                id: '09138308d54447c298c998331b8453f4'
                                key: {
                                    name: 'x_2256809_connect_response'
                                    caption: 'Response'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'engineer_phone'
                            position: '8'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c12813a424234d15a5accb91e22e861b'
                        key: {
                            name: 'x_2256809_connect_note'
                            element: 'type'
                            value: 'status'
                            language: 'en'
                            dependent_value: 'NULL'
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
                        table: 'sys_dictionary'
                        id: 'c25ef7ff59704e09b4d654459c69c439'
                        key: {
                            name: 'x_2256809_connect_note'
                            element: 'description_plain'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c2b1fdc463dd4cef94e80e6c5a6932bf'
                        key: {
                            name: 'x_2256809_connect_note'
                            element: 'creator_username'
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
                        table: 'sys_choice'
                        id: 'c48a338db35c414da97f04150b2fbd23'
                        key: {
                            name: 'x_2256809_connect_note'
                            element: 'status'
                            value: 'RESPONDED'
                            language: 'en'
                            dependent_value: 'NULL'
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
                        table: 'sys_ux_form_action'
                        id: 'c63f247388ee40e3b3deef702543600f'
                        key: {
                            ui_action: '422d2538bf3d4e7e88acdd8184ef8959'
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
                        table: 'sys_dictionary'
                        id: 'c67f8ed81b3346da869f9551c3432b0a'
                        key: {
                            name: 'x_2256809_connect_response'
                            element: 'next_steps'
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
                        table: 'sys_ui_element'
                        id: 'c7da6dd73dc54803ba29777b7810c014'
                        key: {
                            sys_ui_section: {
                                id: '09138308d54447c298c998331b8453f4'
                                key: {
                                    name: 'x_2256809_connect_response'
                                    caption: 'Response'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'tsanet_created'
                            position: '4'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: 'c81d8f6dc5364093839e829280c91518'
                        key: {
                            application_file: 'bcaad298f3d44c53b845af3fbbc0f33f'
                            source_artifact: '4279f3107f8b43c4b3c513be8a32d4a5'
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
                        table: 'sys_ui_list_element'
                        id: 'c9891c31dee04a1aab2738029af1f348'
                        key: {
                            list_id: {
                                id: '82540ffa4b6a425aaa8903014b4687aa'
                                key: {
                                    name: 'x_2256809_connect_response'
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
                            element: 'tsanet_case'
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
                        table: 'sys_ui_element'
                        id: 'cbe3f3609a144d158406de281d00dc21'
                        key: {
                            sys_ui_section: {
                                id: '09138308d54447c298c998331b8453f4'
                                key: {
                                    name: 'x_2256809_connect_response'
                                    caption: 'Response'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'case_number'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'cc5a2849cfea4fcd82ede6bfa4421dc5'
                        key: {
                            name: 'x_2256809_connect_note'
                            element: 'type'
                            language: 'en'
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
                        table: 'sys_choice'
                        id: 'ce561d9c8ec841749f9b5b0f70dfb271'
                        key: {
                            name: 'x_2256809_connect_response'
                            element: 'type'
                            value: 'APPROVAL'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ws_query_parameter_map'
                        id: 'cea16a1c6e0f4b22b531057399c144ff'
                        key: {
                            web_service_operation: '30110d94b3304439a5fc5d1bc78457fc'
                            web_service_query_parameter: '6594a9ce9dc24e378a0d40730621fb7f'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'cedbd0e6ee19470ca40cf28a6407512e'
                        key: {
                            name: 'x_2256809_connect_note'
                            element: 'tsanet_created'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'cf679964392b4db4a7d91962cfba47c3'
                        key: {
                            name: 'x_2256809_connect_note'
                            element: 'status'
                            value: 'REMOVED'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd0729d8172364d0cbc590417a6ad2e7a'
                        key: {
                            name: 'x_2256809_connect_response'
                            element: 'type'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd0fd4915e82a4352a63515e6f848b2d7'
                        key: {
                            name: 'x_2256809_connect_note'
                            element: 'copied_to_case'
                            language: 'en'
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
                        table: 'sys_ui_element'
                        id: 'd4cc62665f914508836e5a839c08a28d'
                        key: {
                            sys_ui_section: {
                                id: '09138308d54447c298c998331b8453f4'
                                key: {
                                    name: 'x_2256809_connect_response'
                                    caption: 'Response'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'response_id'
                            position: '9'
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
                        table: 'sys_ui_element'
                        id: 'e0dcde4f34fa451d96c5de016192ad2c'
                        key: {
                            sys_ui_section: {
                                id: '4da60f5fb761441dac3d4bc30544a62a'
                                key: {
                                    name: 'x_2256809_connect_note'
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
                        table: 'sys_documentation'
                        id: 'e411622564f040439c6d57d6e05227cc'
                        key: {
                            name: 'x_2256809_connect_note'
                            element: 'status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'e411cc2ef88c429680a1fa4ed74a163f'
                        key: {
                            sys_ui_section: {
                                id: '4da60f5fb761441dac3d4bc30544a62a'
                                key: {
                                    name: 'x_2256809_connect_note'
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
                            element: 'creator_username'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e43ce12b035440be892df80937e612f2'
                        key: {
                            name: 'x_2256809_connect_response'
                            element: 'NULL'
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
                        table: 'sys_choice'
                        id: 'e89a672b6db74f828d35db889641674b'
                        key: {
                            name: 'x_2256809_connect_response'
                            element: 'type'
                            value: 'REJECTION'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'e9d9d8b977cc4672a8c8e2b34bf3ddbd'
                        key: {
                            name: 'x_2256809_connect_note'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e9f6fb32779c49508d758c09c796e56e'
                        key: {
                            name: 'x_2256809_connect_note'
                            element: 'summary'
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
                        table: 'sys_ui_list_element'
                        id: 'ebe3e62dd22e40a5aea791c0a28a796a'
                        key: {
                            list_id: {
                                id: '82540ffa4b6a425aaa8903014b4687aa'
                                key: {
                                    name: 'x_2256809_connect_response'
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
                            element: 'engineer_email'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'ecb69215ca4c4596b898353438920723'
                        key: {
                            sys_ui_section: {
                                id: '4da60f5fb761441dac3d4bc30544a62a'
                                key: {
                                    name: 'x_2256809_connect_note'
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
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ed2523355d554f018b86ed1530c5036c'
                        key: {
                            name: 'x_2256809_connect_response'
                            element: 'engineer_phone'
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
                        table: 'sys_choice'
                        id: 'eeadf70549bf4ab8a6303eaee8025073'
                        key: {
                            name: 'x_2256809_connect_note'
                            element: 'type'
                            value: 'escalation'
                            language: 'en'
                            dependent_value: 'NULL'
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
                        table: 'sys_choice'
                        id: 'efc29f08aa5e4997833aa2ece82aec20'
                        key: {
                            name: 'x_2256809_connect_note'
                            element: 'priority'
                            value: 'HIGH'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f002cef27a584e15a087153bbc190212'
                        key: {
                            name: 'x_2256809_connect_response'
                            element: 'NULL'
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
                        table: 'sys_choice'
                        id: 'f094fb0f9dad4ded8405a9102649ad02'
                        key: {
                            name: 'x_2256809_connect_note'
                            element: 'priority'
                            value: 'LOW'
                            language: 'en'
                            dependent_value: 'NULL'
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
                        table: 'sys_dictionary'
                        id: 'f3228e7b6cf24305bab1ab2c0d967ca4'
                        key: {
                            name: 'x_2256809_connect_response'
                            element: 'tsanet_created'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: 'f339a826913f45d2acad5645c244c23f'
                        key: {
                            sys_ui_form: {
                                id: 'aed6ea62607440bf84354304b0a590d3'
                                key: {
                                    name: 'x_2256809_connect_response'
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
                                id: '09138308d54447c298c998331b8453f4'
                                key: {
                                    name: 'x_2256809_connect_response'
                                    caption: 'Response'
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
                        id: 'f5af890d3ca14ec089bca0ac4134d389'
                        key: {
                            sys_ui_section: {
                                id: '18c84d0bed3c47cc8e0f58a2ec120b3f'
                                key: {
                                    name: 'x_2256809_connect_note'
                                    caption: 'Note'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'type'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'f648f54e93fd4b0ea1c69396d32fda7c'
                        key: {
                            sys_security_acl: 'df470c48ecd949b980b9ebe4ce6379e2'
                            sys_user_role: {
                                id: '1245d50a3da44472a24ee30c22886d53'
                                key: {
                                    name: 'x_2256809_connect.admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'f6de8a5355a64d7b890987b23bd8f452'
                        key: {
                            name: 'x_2256809_connect_response'
                            element: 'type'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'f7125accebc84cdea30cc4d573d28cea'
                        key: {
                            list_id: {
                                id: '82540ffa4b6a425aaa8903014b4687aa'
                                key: {
                                    name: 'x_2256809_connect_response'
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
                            element: 'tsanet_created'
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
                        id: 'fa18e9698f6d4f3293f863f8dde65542'
                        key: {
                            sys_ui_section: {
                                id: '18c84d0bed3c47cc8e0f58a2ec120b3f'
                                key: {
                                    name: 'x_2256809_connect_note'
                                    caption: 'Note'
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
                        table: 'sn_glider_source_artifact_m2m'
                        id: 'fbc2d2de92784ec4bf71c32e6a83885b'
                        key: {
                            application_file: '282183f7e10445b68e44febe09613392'
                            source_artifact: '4279f3107f8b43c4b3c513be8a32d4a5'
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
