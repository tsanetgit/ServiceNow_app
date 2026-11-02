import { Role } from '@servicenow/sdk/core'

export const userRole = Role({
    name: 'x_2256809_connect.user',
    description: 'TSANet Connect user: support engineers who view and work collaboration requests.',
})

export const adminRole = Role({
    name: 'x_2256809_connect.admin',
    description: 'TSANet Connect admin: setup, credentials, sync. Contains the user role.',
    containsRoles: [userRole],
})
