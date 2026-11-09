// Reads the case the action was started from and the agent starting it.
const headers = { Accept: 'application/json', 'X-UserToken': window['g_ck'] }

async function get(path: string) {
    const response = await fetch(path, { headers })
    if (!response.ok) throw new Error(`${response.status} ${response.statusText}`)
    return (await response.json()).result
}

export function getCase(sysId: string) {
    const fields = 'number,short_description,priority,account'
    return get(`/api/now/table/sn_customerservice_case/${sysId}?sysparm_display_value=all&sysparm_fields=${fields}`)
}

export async function getCurrentUser() {
    const users = await get(
        '/api/now/table/sys_user?sysparm_query=sys_id=javascript:gs.getUserID()&sysparm_display_value=all&sysparm_fields=name,email,phone&sysparm_limit=1'
    )
    return users[0]
}
