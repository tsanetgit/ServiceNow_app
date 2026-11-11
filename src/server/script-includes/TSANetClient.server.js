/**
 * TSANetClient - the single client for the TSANet Connect REST API.
 *
 * Every outbound call goes through this class. Settings come from the
 * x_2256809_connect.* system properties; the API URL and the OAuth client
 * credentials come from the "TSANet Connect API" connection alias, never from
 * script. The platform gets, caches and renews the Azure AD token.
 *
 * Usage:
 *   var client = new x_2256809_connect.TSANetClient();
 *   var me = client.me();
 *   var changed = client.listRequests({ updatedAfter: '2026-10-01T00:00:00Z' });
 */
var TSANetClient = Class.create();
TSANetClient.prototype = {
    // PROVISIONAL(tsanetgit/ServiceNow_app#3): developer-instance scope until the app moves to
    // TSANet's vendor prefix. The code reads the scope only from here; the header comment repeats it.
    SCOPE: 'x_2256809_connect',

    initialize: function() {
        this.aliasId = this._prop('api.credential_alias', '');
        this.timeoutMs = parseInt(this._prop('api.timeout_ms', '60000'), 10);
        this.debug = this._prop('debug', 'false') == 'true';
        this.connection = null;
    },

    /* ---------- Identity ---------- */

    /** GET /v1/me - the API user and its company. */
    me: function() {
        return this.request('GET', '/v1/me');
    },

    /** GET /v1/health - no authentication needed. */
    health: function() {
        return this._send('GET', '/v1/health', null, null, true).body;
    },

    /* ---------- Collaboration requests ---------- */

    /**
     * GET /v2/collaboration-requests/list - full requests (with notes and responses).
     * opts: updatedAfter, createdAfter (YYYY-MM-DDTHH:MM:SSZ), type (ALL|INBOUND|OUTBOUND),
     *       status, internalCaseNumber
     */
    listRequests: function(opts) {
        return this.request('GET', '/v2/collaboration-requests/list', opts || {}) || [];
    },

    getRequest: function(token) {
        return this.request('GET', '/v1/collaboration-requests/' + encodeURIComponent(token));
    },

    createRequest: function(dto) {
        return this.request('POST', '/v1/collaboration-requests', null, dto);
    },

    /* ---------- Responses ---------- */

    approve: function(token, dto) {
        return this.request('POST', this._path(token, '/approval'), null, dto);
    },

    updateApproval: function(token, dto) {
        return this.request('PATCH', this._path(token, '/approval'), null, dto);
    },

    reject: function(token, dto) {
        return this.request('POST', this._path(token, '/rejection'), null, dto);
    },

    requestInformation: function(token, dto) {
        return this.request('POST', this._path(token, '/information-request'), null, dto);
    },

    respondInformation: function(token, dto) {
        return this.request('POST', this._path(token, '/information-response'), null, dto);
    },

    close: function(token, dto) {
        return this.request('POST', this._path(token, '/closure'), null, dto || {});
    },

    /* ---------- Notes ---------- */

    getNotes: function(token, opts) {
        return this.request('GET', this._path(token, '/notes'), opts || {}) || [];
    },

    createNote: function(token, dto) {
        return this.request('POST', this._path(token, '/notes'), null, dto);
    },

    noteTypes: function() {
        return this.request('GET', '/v1/note-types') || [];
    },

    /* ---------- Partners and forms ---------- */

    searchPartners: function(term) {
        return this.request('GET', '/v1/partners/' + encodeURIComponent(term)) || [];
    },

    getFormByCompany: function(companyId) {
        return this.request('GET', '/v1/forms/company/' + encodeURIComponent(companyId));
    },

    getFormByDepartment: function(departmentId) {
        return this.request('GET', '/v1/forms/department/' + encodeURIComponent(departmentId));
    },

    /* ---------- Plumbing ---------- */

    /** Authenticated call, with the connection's OAuth profile. */
    request: function(method, path, query, body) {
        return this._send(method, path, query, body, false).body;
    },

    _send: function(method, path, query, body, anonymous) {
        var conn = this._connection();

        var rm = new sn_ws.RESTMessageV2();
        rm.setHttpMethod(method.toLowerCase());
        rm.setEndpoint(conn.baseUrl + path + this._queryString(query));
        rm.setHttpTimeout(this.timeoutMs);
        // RFC 7807 errors with real status codes (see the TSANet Integration Guide).
        rm.setRequestHeader('Accept', 'application/json, application/problem+json');
        rm.setRequestHeader('Content-Type', 'application/json');
        if (!anonymous) {
            rm.setAuthenticationProfile('oauth2', conn.oauthProfile);
            // The platform keeps the client-credentials token against the credential, not the user.
            rm.setRequestorProfile('oauth_2_0_credentials', conn.credential);
        }
        if (body)
            rm.setRequestBody(JSON.stringify(body));

        var started = new Date().getTime();
        var resp = rm.execute();
        var status = resp.getStatusCode();
        var text = resp.getBody() || '';
        this._log(method + ' ' + path + ' -> ' + status + ' (' + (new Date().getTime() - started) + ' ms)');

        if (status == 0 || (resp.haveError() && !text))
            throw this._error('Could not reach TSANet: ' + resp.getErrorMessage(), status);

        var parsed = null;
        if (text) {
            try {
                parsed = JSON.parse(text);
            } catch (ignore) {
                parsed = null;
            }
        }
        if (status >= 400) {
            var detail = parsed ? (parsed.detail || parsed.title || parsed.message) : null;
            throw this._error(detail || ('HTTP ' + status), status, text);
        }
        return { status: status, body: parsed, text: text };
    },

    /** The API URL and OAuth profile from the alias's active connection, read once per client. */
    _connection: function() {
        if (this.connection)
            return this.connection;
        if (!this.aliasId)
            throw this._error('Property ' + this.SCOPE + '.api.credential_alias is not set', 0);
        var info = new sn_cc.ConnectionInfoProvider().getConnectionInfo(this.aliasId);
        if (!info)
            throw this._error('No active connection is set up for the TSANet Connect API alias', 0);
        var baseUrl = String(info.getAttribute('connection_url') || '').replace(/\/+$/, '');
        var credential = info.getCredentialAttribute('sys_id');
        var oauthProfile = info.getCredentialAttribute('oauth_entity_profile');
        if (!baseUrl || !credential || !oauthProfile)
            throw this._error('The TSANet Connect API connection is missing its URL or OAuth credential', 0);
        this.connection = { baseUrl: baseUrl, credential: credential, oauthProfile: oauthProfile };
        return this.connection;
    },

    _path: function(token, suffix) {
        return '/v1/collaboration-requests/' + encodeURIComponent(token) + suffix;
    },

    _queryString: function(query) {
        if (!query)
            return '';
        var parts = [];
        for (var k in query) {
            if (query.hasOwnProperty(k) && query[k] !== null && query[k] !== undefined && query[k] !== '')
                parts.push(encodeURIComponent(k) + '=' + encodeURIComponent(query[k]));
        }
        return parts.length ? '?' + parts.join('&') : '';
    },

    _prop: function(name, dflt) {
        return gs.getProperty(this.SCOPE + '.' + name, dflt);
    },

    _error: function(message, status, body) {
        var e = new Error('TSANet: ' + message);
        e.status = status || 0;
        e.body = body || '';
        return e;
    },

    _log: function(msg) {
        if (this.debug)
            gs.info('[TSANet] ' + msg);
    },

    type: 'TSANetClient'
};
