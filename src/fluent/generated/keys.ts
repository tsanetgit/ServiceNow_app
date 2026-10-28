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
                    package_json: {
                        table: 'sys_module'
                        id: 'c5b5e9db667047d7a08ec04020d81d96'
                    }
                }
            }
        }
    }
}
