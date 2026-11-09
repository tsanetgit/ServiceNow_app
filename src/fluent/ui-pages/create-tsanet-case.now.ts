import '@servicenow/sdk/global'
import { UiPage } from '@servicenow/sdk/core'
import page from '../../client/create-case/index.html'

// The steps for starting an outbound TSANet Case, opened by ⋯ Create TSANet Case.
// The partner steps are placeholders until the API is connected.
export const createCasePage = UiPage({
    $id: Now.ID['page_create_case'],
    endpoint: 'x_2256809_connect_create_case.do',
    html: page,
    direct: true,
})
