// Reads the case the action was started from and the agent starting it, and calls the
// app's Create TSANet Case API, which talks to TSANet on the server.
const headers = { Accept: 'application/json', 'X-UserToken': window['g_ck'] }
const API = '/api/x_2256809_connect/v1/create_case'

async function send(path: string, init: RequestInit = {}) {
    const response = await fetch(path, { ...init, headers: { ...headers, ...(init.headers || {}) } })
    const body = await response.json().catch(() => null)
    if (!response.ok) throw new Error(body?.error?.message || `${response.status} ${response.statusText}`)
    return body.result
}

const get = (path: string) => send(path)

export function getCase(sysId: string) {
    const fields =
        'number,short_description,description,priority,account,account.name,contact.name,contact.email,contact.phone'
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

export function searchPartners(term: string) {
    return get(`${API}/partners?q=${encodeURIComponent(term)}`)
}

export function getPartnerForm(partner) {
    const query = partner.departmentId ? `department=${partner.departmentId}` : `company=${partner.companyId}`
    return get(`${API}/form?${query}`)
}

export function submitCase(payload) {
    return send(`${API}/cases`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
    })
}
