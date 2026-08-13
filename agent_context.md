# Prompt — Build a Minimal, Static Personal Website with Astro

I want you to help me build a personal website that serves two purposes:

1. **Interactive professional resume / portfolio** that I can link in job applications and LinkedIn.
2. **Personal notes / thoughts website** where I can publish small blog-like posts primarily so I can preserve and revisit my own thoughts later.

This is **not** intended to be a commercial blog, media site, SEO-focused publication, or SaaS application. I do not care about becoming famous, maximizing traffic, comments, subscriptions, analytics, or complex content-management systems.

The website should feel like a **personal digital space** rather than a traditional corporate portfolio.

## Core philosophy

The project should prioritize:

* Minimal infrastructure.
* Extremely fast loading.
* Static HTML whenever possible.
* Excellent performance.
* Very little JavaScript by default.
* Simple deployment to GitHub Pages.
* Easy local development.
* Easy maintenance.
* Easy editing by an experienced developer.
* Interesting, thoughtful interactions rather than technical complexity.
* Architecture that AI coding assistants can understand and modify easily.

I have around 5 years of development experience, so I am comfortable with modern frontend development. However, I specifically **do not want to over-engineer this project**.

The website should be something I can keep for years without constantly maintaining a complicated stack.

---

# Technology Stack

Use:

* **Astro** as the main framework / static site generator.
* **Vite** through Astro for development and building.
* **TypeScript** for JavaScript code.
* **Tailwind CSS** for styling.
* **Standard HTML semantics** wherever possible.
* **Plain TypeScript/JavaScript** for interactions that don't require a framework.
* **Svelte components only when local state or more complicated interactive behavior genuinely benefits from component state/logic.**
* Markdown or MDX for personal notes/posts.
* GitHub Pages for deployment.

Do NOT introduce unnecessary dependencies.

Avoid adding frameworks or libraries merely because they are popular.

---

# Critical Architecture Requirement: NOT a SPA

This must **NOT be a Single Page Application**.

I explicitly want Astro's static-page architecture to be preserved.

For example:

```text
/
 /resume
 /projects
 /thoughts
 /thoughts/example-post
 /about
```

Each route should ideally produce its own HTML document.

When someone visits:

```text
/thoughts
```

they should **not download a giant JavaScript bundle containing the entire website or all application logic**.

The `/thoughts` page should load only what is necessary for that page.

Likewise, visiting an individual article should generate a dedicated static HTML page for that article.

Use Astro's architecture appropriately to achieve this.

Prefer:

```text
Static HTML
+
CSS
+
small isolated JS
```

over:

```text
SPA
+
client-side router
+
large global JS bundle
```

Do not introduce React-style client-side application architecture unless there is an extremely strong reason.

---

# Astro Architecture

Use Astro as the primary rendering layer.

The default assumption should be:

> **Render everything possible at build time.**

Interactive components should be islands rather than entire-page applications.

For example:

```astro
<InteractiveTimeline client:visible />
```

rather than turning the entire page into a client-side application.

Use Astro's island architecture deliberately.

Most of the website should remain completely static.

---

# Suggested Project Structure

Use something conceptually close to:

```text
src/
├── components/
│   ├── Navigation.astro
│   ├── Footer.astro
│   ├── ExperienceTimeline.astro
│   ├── ProjectCard.astro
│   ├── NoteCard.astro
│   ├── Tag.astro
│   └── interactive/
│       └── ...
│
├── layouts/
│   ├── BaseLayout.astro
│   ├── PageLayout.astro
│   └── NoteLayout.astro
│
├── pages/
│   ├── index.astro
│   ├── resume.astro
│   ├── projects.astro
│   ├── thoughts/
│   │   ├── index.astro
│   │   └── [...slug].astro
│   └── about.astro
│
├── content/
│   └── thoughts/
│       ├── example-1.md
│       ├── example-2.md
│       └── ...
│
├── styles/
│   └── global.css
│
└── lib/
    └── ...
```

You may adjust this structure if Astro conventions suggest something better, but keep the architecture simple.

---

# Content Architecture

I want writing a new thought/post to be extremely easy.

Ideally, adding a post should mean creating a Markdown file such as:

```md
---
title: "Why I stopped overengineering integrations"
description: "Some thoughts about complexity, systems and engineering."
date: 2026-08-13
tags:
  - software
  - architecture
  - integrations
---

The actual content goes here.

I don't want to touch Astro components to create a new post.
```

The site should automatically:

* Discover posts.
* Generate their static pages.
* Generate the thoughts index.
* Sort posts by date.
* Display metadata.
* Support tags.
* Generate appropriate links.
* Generate RSS only if it can be done without adding meaningful complexity.

Do not introduce a CMS.

Do not introduce a database.

Do not introduce an API.

---

# Design Direction

The visual identity should **not feel like a generic developer portfolio template**.

Avoid:

* Corporate SaaS aesthetics.
* Generic Bootstrap layouts.
* Generic "hero + three cards" portfolios.
* Excessive gradients.
* Huge startup-style headlines.
* Overdone animations.
* Generic developer illustrations.
* A website that looks like it was generated from a portfolio template.

I want something more personal, editorial, experimental and slightly unconventional.

Think:

> personal website + interactive resume + digital notebook.

The website should still look professional enough that I can comfortably send it to recruiters and hiring managers.

The personality should come primarily from:

* typography
* spacing
* layout
* subtle interactions
* transitions
* information architecture
* visual storytelling

rather than from excessive visual effects.

---

# Homepage Concept

The homepage should function as a concise introduction to me.

Potential sections:

```text
Name
Role / short description
Location or general context
Short introduction

Current status / what I am working on

Experience

Selected projects

Latest thoughts

Links
```

The homepage should quickly communicate:

> Who I am
> What I do
> What I have built
> What I think about

It should not feel like a 10-page resume dumped onto one page.

---

# Interactive Resume

The resume should be more interesting than a conventional PDF-like layout.

A major interaction could be a timeline:

```text
2020 ───── 2021 ───────────── 2024 ───────────── 2026
  │             │                    │
Backend       Backend              Systems       Current
Developer     Developer            Integration
```

Clicking or hovering an experience could reveal:

* company
* role
* duration
* technologies
* responsibilities
* notable projects
* accomplishments

However, the information must remain accessible without JavaScript.

The interaction should enhance the information rather than make it necessary.

For example:

```text
No JavaScript:
normal readable timeline

JavaScript enabled:
expandable / animated / interactive timeline
```

---

# Projects

Projects should have concise cards or sections containing:

* project name
* short description
* technologies
* role
* links
* optional screenshots
* optional GitHub repository

Potentially allow projects to have interactive filtering by technology.

However, filtering should be implemented with minimal client-side JavaScript and should not turn the page into an SPA.

---

# Thoughts / Notes Section

This is an important part of the website.

I do NOT necessarily want to call it "Blog."

Possible conceptual directions:

```text
Thoughts
Notes
Field Notes
Log
Journal
Fragments
```

The purpose is primarily personal memory.

Posts can be extremely short.

For example:

```text
2026.08.13

Why I like boring infrastructure
```

or:

```text
2026.07.29

Things I learned while building integrations
```

They don't need to follow journalistic conventions.

A post could be:

* 2000 words.
* 300 words.
* 3 paragraphs.
* A technical explanation.
* A random observation.
* A project postmortem.
* A personal idea.
* A list of things I learned.

The system should make short posts feel natural.

---

# Thought Index

The thoughts page should be lightweight and readable.

Something like:

```text
THOUGHTS

2026

08.13  Why I like boring infrastructure
07.29  Things I learned building integrations
06.14  Kafka is not always the answer
04.02  A surprisingly annoying bug

2025

12.21  Why I keep rebuilding my website
...
```

Potentially support:

* tag filtering
* search
* year grouping
* hover previews
* reading time

But do not over-engineer this.

---

# Individual Thought Pages

Each thought should have its own static route.

Example:

```text
/thoughts/why-i-like-boring-infrastructure
```

The page should be generated at build time.

It should contain:

* title
* date
* tags
* content
* optional description
* previous / next note navigation
* link back to thoughts

Use semantic HTML and excellent typography.

The article should work perfectly without JavaScript.

---

# Interactivity Philosophy

I want the website to have **a lot of potential for interactivity**, but I do not want it to have a lot of unnecessary JavaScript.

The rule should be:

> **Interactive where it improves the experience. Static everywhere else.**

Good examples:

* expandable resume sections
* interactive timeline
* hover states
* subtle page transitions
* animated navigation
* interactive project filters
* keyboard navigation
* command palette
* terminal-like Easter eggs
* interactive technology graph
* theme switching
* animated visualizations
* expandable technical details

Bad examples:

* client-side routing for no reason
* rendering static text with JavaScript
* downloading the entire application on every page
* global state management
* unnecessary hydration
* giant animation libraries
* unnecessary component abstractions

---

# Svelte Usage

Svelte is allowed but should be treated as an **optional tool**, not the primary framework.

Use Svelte when something genuinely needs:

* local component state
* complex interaction
* derived state
* event handling
* reusable interactive behavior

Example:

```text
Astro page
│
├── static HTML
├── static HTML
├── static HTML
│
└── <InteractiveTimeline client:visible />
        │
        └── Svelte
```

Do NOT create:

```text
Astro
└── Svelte app
    └── entire website
```

The Astro site should remain the primary architecture.

---

# Performance Requirements

Performance is a first-class requirement.

The site should aim to be extremely fast.

Prefer:

* static HTML
* static assets
* minimal JS
* optimized images
* lazy-loading images where appropriate
* local fonts only when necessary
* minimal third-party dependencies
* no unnecessary analytics
* no unnecessary external requests

Avoid:

* large client-side bundles
* loading the entire site before displaying content
* unnecessary hydration
* large animation libraries
* client-side data fetching
* API calls

A user should be able to open a thought page on a slow connection and get meaningful content almost immediately.

---

# Accessibility

Accessibility should not be an afterthought.

Use:

* semantic HTML
* correct heading hierarchy
* accessible navigation
* keyboard navigation
* visible focus states
* reduced-motion support
* sufficient contrast
* alt text
* interactive controls that work without a mouse

Animations should respect:

```css
@media (prefers-reduced-motion: reduce)
```

Interactive features should degrade gracefully.

---

# SEO / Social Metadata

I don't need aggressive SEO optimization, but the site should have sensible basics:

* page titles
* meta descriptions
* canonical URLs
* Open Graph metadata
* Twitter/X card metadata
* proper semantic HTML
* sitemap if trivial to add

Each thought should have appropriate metadata.

---

# Deployment

The target deployment is:

**GitHub Pages**

The entire website should be deployable through GitHub Actions.

The workflow should conceptually be:

```text
git push
    ↓
GitHub Actions
    ↓
npm install
    ↓
astro build
    ↓
deploy dist/
    ↓
GitHub Pages
```

No server-side runtime should be required.

No Node server should be running in production.

---

# Developer Experience

Local development should be extremely simple.

Ideally:

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

Keep scripts simple and conventional.

---

# AI-Friendly Codebase

The project will be developed heavily with AI assistance.

Therefore:

* prefer obvious file names
* avoid clever abstractions
* avoid unnecessary design patterns
* keep components small
* avoid excessive indirection
* use readable TypeScript
* keep configuration understandable
* document unusual decisions
* avoid code that exists only to demonstrate architectural sophistication

An AI should be able to open the repository and understand the architecture quickly.

When suggesting architectural changes, always prefer the **simplest solution that satisfies the requirement**.

---

# Important Constraints

Do NOT introduce:

* backend
* database
* API
* authentication
* CMS
* server-side application
* SPA routing
* global application state
* unnecessary React usage
* unnecessary Svelte usage
* unnecessary dependencies

The website must remain fundamentally:

```text
Markdown
+
Astro
+
HTML
+
CSS / Tailwind
+
small TypeScript
+
occasional Svelte islands
+
static hosting
```

---

# Desired End Result

The final website should feel like:

> "This is the personal website of a developer who actually built this."

Not:

> "This is a developer portfolio template."

It should be visually distinctive enough to be memorable, but technically conservative enough that I can maintain it for many years.

The most important architectural principle is:

> **Astro should generate separate static pages and HTML for each route. JavaScript should enhance pages rather than define them.**

Start by proposing the simplest architecture and directory structure that satisfies these requirements. Then help me implement the foundation incrementally, beginning with the Astro project setup, Tailwind, TypeScript, content collections for thoughts, layouts, routing, and GitHub Pages deployment.

Do not start by adding unnecessary visual effects or complex components. Establish the architecture first, then build the visual language and interactive pieces on top of it.
