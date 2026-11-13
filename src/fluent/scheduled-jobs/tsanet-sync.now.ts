import { ScheduledScript } from '@servicenow/sdk/core'

// Every 10 minutes until TSANet's webhooks are used. A run that finds nothing new is one API call.
// No "Run as": the job runs as the system, which stores TSANet Cases (their create ACL is admin-only).
export const syncJob = ScheduledScript({
    $id: Now.ID['job_tsanet_sync'],
    name: 'TSANet Connect - sync requests',
    active: true,
    frequency: 'periodically',
    executionInterval: { minutes: 10 },
    script: Now.include('../../server/scheduled-jobs/tsanet-sync-job.js'),
})
