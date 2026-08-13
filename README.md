# who_am_i

Personal website built with Astro. Static HTML, tiny CSS, no JS shipped by
default. Resume, projects, and a small "thoughts" notebook.

## Stack

- [Astro 5](https://astro.build) — static site generator, one HTML file per route.
- [Tailwind CSS v4](https://tailwindcss.com) via `@tailwindcss/vite` (CSS-first, no config file).
- [Svelte](https://svelte.dev) integration wired but **no Svelte components shipped yet** — add islands later without setup.
- Markdown content collections (no MDX, no CMS, no backend).
- Deploy: GitHub Pages via GitHub Actions.

## Commands

```bash
pnpm install      # install deps
pnpm dev          # dev server at http://localhost:4321
pnpm build        # static build into dist/
pnpm preview      # preview the production build
```

## Where to edit things

| What | Where |
| --- | --- |
| Name, role, nav, social links, resume, projects, skills, bio | `src/consts.ts` |
| New thought post | drop a `.md` in `src/content/thoughts/` |
| Content collection schema | `src/content.config.ts` |
| Colors, fonts, tokens | `src/styles/global.css` |
| Site URL / integrations | `astro.config.mjs` |
| OG / meta defaults | `src/layouts/BaseLayout.astro` |

## Adding a thought

Create `src/content/thoughts/my-thought.md`:

```md
---
title: "My thought"
description: "Optional short description."
date: 2026-08-13
tags:
  - software
  - architecture
---

Body goes here. Plain Markdown.
```

It shows up at `/thoughts/my-thought/`, in the thoughts index, and in the RSS
feed automatically. No component changes needed.

## Deploy

1. Set `site` in `astro.config.mjs` to your GitHub Pages URL.
2. Push to `main`. The workflow in `.github/workflows/deploy.yml` builds and
   deploys.
3. In repo Settings → Pages, set Source to **GitHub Actions**.

For user pages (`USERNAME.github.io`) the site serves from root, so no `base`
is needed. For project pages under a subpath, set `base: "/repo-name/"` in
`astro.config.mjs`.

## Notes / out of scope (intentionally)

- No interactive timeline Svelte island yet — architecture is ready; add later.
- No project tech filter yet — needs minimal JS; add later.
- No theme toggle, command palette, search, or analytics.
- Placeholder personal content in `src/consts.ts` and the two example
  thoughts — replace with real content.
