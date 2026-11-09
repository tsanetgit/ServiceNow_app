// Reads the case the action was started from and the agent starting it.
const headers = { Accept: 'application/json', 'X-UserToken': window['g_ck'] }

async function get(path: string) {
    const response = await fetch(path, { headers })
    const body = await response.json().catch(() => null)
    if (!response.ok) throw new Error(body?.error?.message || `${response.status} ${response.statusText}`)
    return body.result
}

export function getCase(sysId: string) {
    const fields = 'number,short_description,priority,account'
    return get(
        `/api/now/table/sn_customerservice_case/${encodeURIComponent(sysId)}?sysparm_display_value=all&sysparm_fields=${fields}`
    )
}

export async function getCurrentUser() {
    const users = await get(
        '/api/now/table/sys_user?sysparm_query=sys_id=javascript:gs.getUserID()&sysparm_display_value=all&sysparm_fields=name,email,phone&sysparm_limit=1'
    )
    if (!users.length) throw new Error('Your user record could not be read.')
    return users[0]
}
