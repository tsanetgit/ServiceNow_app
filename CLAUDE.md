# CLAUDE.md: ServiceNow_app

## What this repo is

TSANet Connect for ServiceNow: a scoped app that TSANet members install on their own ServiceNow instance to work their TSANet Connect collaboration cases there. It is a client of the Connect REST API (`tsanetgit/Connect-API-Code`, whose `openapi.yaml` is the contract) and calls it from server scripts. A ServiceNow scoped app built with the ServiceNow SDK (Fluent): TypeScript `.now.ts` source in `src/fluent/`, server scripts in `src/server/`.

## Build and test

```bash
npm install                        # once per checkout; needs Node 20.18 or later and npm 11.16 or later
npm run build                      # now-sdk build: compiles to dist/app
npx now-sdk build --frozenKeys     # the CI check: fails if keys.ts is out of date
python3 tools/cert_check.py dist/app   # optional, after a build: the most common Store certification failures
```

`tools/cert_check.py` comes from the devkit's `templates/servicenow-sdk/tools/` and needs Python 3.9 or later (on Windows the command may be `python` or `py`). It is optional: copy it in to use it, and delete this paragraph and its run line if the repo doesn't. Where it's copied in, run it after every build that changes records. It is a pre-check only: ServiceNow's Certification Self-Test Tool on the vendor instance stays the authority.

`src/fluent/generated/keys.ts` is repo-generated: `npm run build` regenerates it, and it maps each record's ID to its sys_id. Commit it with the change that produced it, never edit it by hand. Without it, deploys from different machines give the same record different sys_ids and create duplicates.

Some of the SDK's dependencies have install scripts the build needs. npm 12 and later skip a dependency's install script unless `allowScripts` in `package.json` approves it (npm 11.16 and later only warn), and the build can break without them. The approvals are committed in `package.json`, never kept in anyone's own npm config. They are pinned to a version, so a dependency update lists them as pending again. If `npm install` ends by listing packages with pending install scripts, stop and tell the person which ones. Approving or denying them is their decision: run `npm approve-scripts <pkg>` or `npm deny-scripts <pkg>` only for the packages they name (npm's own messages call these `npm install-scripts approve` and `deny`, the same commands), and commit `package.json` with the change. Approving doesn't run the skipped scripts, and a plain `npm install` then reports up to date, so run `npm ci` (or `npm rebuild <pkg>`) before building.

The SDK's own guides are in `node_modules/@servicenow/sdk/docs/`.

## Instance check

Forms, lists, filters, navigator modules and ACLs show their behavior only on an instance, so a change to any of them needs an Instance check: the person deploys the branch to their developer instance and records what they checked. Claude never deploys.

```bash
npm run deploy                     # now-sdk install, to your developer instance only
```

- **Your instance:** your own ServiceNow developer instance (each developer deploys to their own). Never production, and never a member's instance.
- **Credentials** stay in your environment, never in the repo. Unattended deploys use the SDK's CI mode, `SN_SDK_NODE_ENV=SN_SDK_CI_INSTALL` with `SN_SDK_INSTANCE_URL`. Prefer OAuth client credentials, which the SDK recommends: `SN_SDK_AUTH_TYPE=oauth` with `SN_SDK_OAUTH_CLIENT_ID` and `SN_SDK_OAUTH_CLIENT_SECRET` from an OAuth Application Registry entry on your instance. Basic auth, `SN_SDK_USER` and `SN_SDK_USER_PWD`, also works, on a dedicated account without MFA.
- **A second instance:** an install fails with "Unable to install third party application" when the instance's company code isn't the app's scope prefix. Add the prefix to the instance's `sn_appauthor.all_company_keys` system property once, from the global scope. Not needed on the instance whose company code the scope uses.

## Layout

- `now.config.json`: the app's scope (`x_<prefix>_<app>`) and name. The scope is fixed once the app is installed outside your own instances. Until `tsanetgit/ServiceNow_app#3` switches it to TSANet's vendor prefix, the prefix is a developer instance's stand-in, so install only on your own developer instances.
- `src/fluent/`: tables, roles, ACLs, menus and other records, as `.now.ts`.
- `src/server/`: server scripts the records reference.
- `src/fluent/generated/keys.ts`: repo-generated (see Build and test).
- `tools/cert_check.py`: the optional certification pre-check, if the repo copied it in (see Build and test).
- `dist/`: build output. Never commit it.

## Conventions

- Branch from `main` as `feat/<slug>` or `fix/<slug>`. Open draft PRs. Never push to `main` directly.
- Change the app in code. `now-sdk transform` pulls edits made on an instance back into code, but rewrites unrelated lines and can drop `$id` entries: review its output hunk by hunk, never commit it whole.
- `gs.print` isn't allowed in scoped apps; use `gs.info`.
- Every module and app menu has roles, and every table has a read, write, create and delete ACL. The ServiceNow Store's certification fails apps without them.

## Off-limits

- Hand edits to `src/fluent/generated/keys.ts`.
- `dist/`, `node_modules/` and `.now/`.
- The scope in `now.config.json`, unless the task is to change it.
- `allowScripts` in `package.json`, except `npm approve-scripts` or `npm deny-scripts` (or `npm install-scripts approve` or `deny`) for the packages the person names (see Build and test).
- npm settings or flags that bypass `allowScripts`, such as `--dangerously-allow-all-scripts`.
