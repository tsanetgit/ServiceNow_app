import { UiAction } from '@servicenow/sdk/core'
import { adminRole } from '../roles.now'

// On a TSANet Webhook record that isn't registered yet: signs this instance up at TSANet and keeps
// the secret (TSANetWebhook.register). The callback URL defaults to this instance's endpoint.
UiAction({
    $id: Now.ID['action_webhook_register'],
    table: 'x_2256809_connect_webhook',
    actionName: 'x_2256809_connect_webhook_register',
    name: 'Register with TSANet',
    hint: 'Sign this instance up for TSANet webhooks and keep the secret TSANet returns',
    roles: [adminRole],
    condition: 'current.subscription_id.nil()',
    showInsert: true,
    showUpdate: true,
    order: 100,
    form: { showButton: true, style: 'primary' },
    script: `try {
    var id = new TSANetWebhook().register(current);
    gs.addInfoMessage('Registered with TSANet as webhook subscription ' + id + '.');
} catch (e) {
    gs.addErrorMessage('Could not register with TSANet: ' + e.message);
}
action.setRedirectURL(current);`,
})
