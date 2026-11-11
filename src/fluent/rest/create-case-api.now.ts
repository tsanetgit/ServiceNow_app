import { Acl, RestApi } from '@servicenow/sdk/core'
import { userRole } from '../roles.now'

// The same users as the ⋯ Create TSANet Case action and its page.
const createCaseApiAcl = Acl({
    $id: Now.ID['acl_create_case_api'],
    type: 'rest_endpoint',
    name: 'x_2256809_connect.create_case',
    operation: 'execute',
    roles: [userRole],
})

// Called by the Create TSANet Case page: /api/x_2256809_connect/v1/create_case/...
// TSANet's credentials stay on the server; each route only forwards to TSANetCreateCase.
RestApi({
    $id: Now.ID['rest_create_case'],
    name: 'Create TSANet Case',
    serviceId: 'create_case',
    consumes: 'application/json',
    produces: 'application/json',
    enforceAcl: [createCaseApiAcl],
    versions: [{ $id: Now.ID['rest_create_case_v1'], version: 1, isDefault: true }],
    routes: [
        {
            $id: Now.ID['rest_create_case_partners'],
            name: 'Search partners',
            method: 'GET',
            path: '/partners',
            version: 1,
            enforceAcl: [createCaseApiAcl],
            parameters: [{ $id: Now.ID['rest_create_case_partners_q'], name: 'q', required: true }],
            script: `(function process(request, response) {
    TSANetCreateCase.respond(response, function(svc) { return svc.searchPartners(request.queryParams.q); });
})(request, response);`,
        },
        {
            $id: Now.ID['rest_create_case_form'],
            name: 'Get partner form',
            method: 'GET',
            path: '/form',
            version: 1,
            enforceAcl: [createCaseApiAcl],
            parameters: [
                { $id: Now.ID['rest_create_case_form_company'], name: 'company' },
                { $id: Now.ID['rest_create_case_form_department'], name: 'department' },
            ],
            script: `(function process(request, response) {
    TSANetCreateCase.respond(response, function(svc) {
        return svc.getForm(request.queryParams.company, request.queryParams.department);
    });
})(request, response);`,
        },
        {
            $id: Now.ID['rest_create_case_submit'],
            name: 'Submit request',
            method: 'POST',
            path: '/cases',
            version: 1,
            enforceAcl: [createCaseApiAcl],
            script: `(function process(request, response) {
    TSANetCreateCase.respond(response, function(svc) { return svc.create(request.body.data); });
})(request, response);`,
        },
    ],
})
