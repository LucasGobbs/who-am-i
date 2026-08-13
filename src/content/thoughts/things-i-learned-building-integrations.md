---
title: "Things I learned building integrations"
description: "Notes from years of gluing systems together."
date: 2026-07-29
tags:
  - software
  - integrations
  - lessons
---

I have built a lot of integrations. Most of what I learned fits in a short
list.

**Idempotency is not optional.** Every integration endpoint will be called at
least twice. Sometimes ten times. Sometimes a week late. If you cannot safely
reprocess a message, you do not have an integration — you have a future
incident.

**Schemas drift.** The other side will change a field type, rename a key, or
add a required field without telling you. Pin a schema on your side, validate
inbound data, and fail loudly when reality diverges from the contract.

**Retries hide bugs.** A retry policy is a confession that you do not trust the
system you are calling. Use retries, but log every one. A retry that succeeds
silently is a bug you will meet again.

**Time zones will betray you.** Store UTC. Render in the user's locale. Never
do date math in local time. This is advice, not a suggestion.

**Observability is the integration.** The integration is not the code that
sends the request. It is the dashboard that tells you the request stopped
succeeding. If you cannot see it, you cannot fix it.

**The webhook is the hard part.** Inbound webhooks combine every difficulty —
auth, idempotency, retries, ordering, and a partner who assumes you are always
available. Treat them as the most dangerous surface in your system.

The rest is details.
