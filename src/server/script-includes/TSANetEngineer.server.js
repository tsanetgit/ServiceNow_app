/**
 * TSANetEngineer - the signed-in agent as TSANet's engineer contact: the one place it is read.
 *
 * TSANet requires the engineer's name and email on a new request, an accept and a reject,
 * so a blank one stops the action here, before anything is sent to TSANet.
 */
var TSANetEngineer = Class.create();
TSANetEngineer.prototype = {
    initialize: function() {},

    /** { name, email, phone } of the signed-in user. Throws an input error when the name or email is blank. */
    current: function() {
        var user = new GlideRecord('sys_user');
        var found = user.get(gs.getUserID());
        var read = function(value) {
            return found ? String(value || '').trim() : '';
        };
        var engineer = {
            name: read(user.getValue('name')),
            email: read(user.getValue('email')),
            phone: read(user.getValue('phone') || user.getValue('mobile_phone')),
        };
        var missing = [];
        if (!engineer.name)
            missing.push('name');
        if (!engineer.email)
            missing.push('email address');
        if (missing.length) {
            var e = new Error('Your user profile has no ' + missing.join(' or ') + '. Add it before sending to TSANet.');
            e.inputError = true;
            throw e;
        }
        return engineer;
    },

    type: 'TSANetEngineer'
};
