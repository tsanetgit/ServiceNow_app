import { ScheduledScript } from '@servicenow/sdk/core'

// Every minute, for the pilot only: polling stands in until the app receives TSANet's webhooks,
// which will replace this job. A run that finds nothing new is one API call, and a request that
// hasn't changed is never rewritten (TSANetCaseStore), so the short interval only costs reads.
// No "Run as": the job runs as the system, which stores TSANet Cases (their create ACL is admin-only).
export const syncJob = ScheduledScript({
    $id: Now.ID['job_tsanet_sync'],
    name: 'TSANet Connect - sync requests',
    active: true,
    frequency: 'periodically',
    executionInterval: { minutes: 1 },
    script: Now.include('../../server/scheduled-jobs/tsanet-sync-job.js'),
})
