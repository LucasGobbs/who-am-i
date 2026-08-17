---
title: "Lessons in integrations"
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

**Drifting Schemas** The other side will change a field type, rename a key, or
add a required field without telling you. Put only the necessary values and let the validation as open as possible, so new fields dont break your types.

**Scapegoat Problem** The integration ll be guilty of every system problem

**Standards shall break** A lot of times integrations try to create default integrations, so that next customers dont need to be customized. The next customer ll break every design desision and add thousands of exceptions to the 



