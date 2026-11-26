import { BusinessRule } from '@servicenow/sdk/core'

// When a case's owner changes, every open TSANet Case linked to it sends TSANet its case number and new owner (TSANetCaseUpdates).
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

// The same for an incident, when incidents are allowed host records (#50). On an instance that uses only
// cases, no TSANet Case links to an incident, so the rule finds nothing to queue.
BusinessRule({
    $id: Now.ID['br_incident_owner_changed'],
    name: 'TSANet - incident owner changed',
    table: 'incident',
    when: 'after',
    action: ['update'],
    order: 200,
    active: true,
    condition: 'current.assigned_to.changes() && !current.assigned_to.nil()',
    description: 'Queues an update to TSANet for each open TSANet Case linked to the incident when its Assigned to changes.',
    script: `(function executeRule(current, previous) {
    new TSANetCaseUpdates().queueOwner(current);
})(current, previous);`,
})
