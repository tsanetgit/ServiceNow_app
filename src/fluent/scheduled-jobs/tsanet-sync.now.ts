import { ScheduledScript } from '@servicenow/sdk/core'

// Every 10 minutes: the safety net behind TSANet's webhooks (TSANetWebhook), for deliveries that
// never arrived or failed, and for changes no webhook reports, such as a note's status. A run that
// finds nothing new is one API call, and a request that hasn't changed is never rewritten (TSANetCaseStore).
// No "Run as": the job runs as the system, which stores TSANet Cases (their create ACL is admin-only).
export const syncJob = ScheduledScript({
    $id: Now.ID['job_tsanet_sync'],
    name: 'TSANet Connect - sync requests',
    active: true,
    frequency: 'periodically',
    executionInterval: { minutes: 10 },
    script: Now.include('../../server/scheduled-jobs/tsanet-sync-job.js'),
})
