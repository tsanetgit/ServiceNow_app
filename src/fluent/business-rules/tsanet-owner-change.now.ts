import { BusinessRule } from '@servicenow/sdk/core'

// A case's new owner goes to TSANet for every open TSANet Case linked to it (TSANetCaseUpdates).
// Only queues events: nothing is sent to TSANet inside the reassignment's own transaction.
BusinessRule({
    $id: Now.ID['br_case_owner_changed'],
    name: 'TSANet - case owner changed',
    table: 'sn_customerservice_case',
    when: 'after',
    action: ['update'],
    order: 200,
    active: true,
    condition: 'current.assigned_to.changes() && !current.assigned_to.nil()',
    description: 'Queues an update to TSANet for each open TSANet Case linked to the case when its Assigned to changes.',
    script: `(function executeRule(current, previous) {
    new TSANetCaseUpdates().queueOwner(current);
})(current, previous);`,
})
