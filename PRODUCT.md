# Product

## Register

brand

## Users

Primary audience is future Lucas. The site exists first as a personal notebook:
a place to preserve thoughts, fragments, half-finished ideas, and project notes
so they can be revisited months or years later.

Secondary audience is whoever Lucas links the site to: recruiters, hiring
managers, fellow engineers. They arrive looking for a resume and a sense of
who this person is, and they should leave feeling they read something written
by a real human, not generated from a template.

Context of use: quiet, focused reading. Often a single tab on a laptop, often
on a slow connection, often scanned quickly. The site should reward both the
quick scan (resume, project list) and the slow read (a thought post).

## Product Purpose

A personal digital space that serves three roles at once:

1. Interactive resume and portfolio. Linkable from job applications and
   LinkedIn. Professional enough for recruiters, honest enough not to feel
   like a sales pitch.
2. Personal thoughts notebook. Small posts, fragments, lists, technical notes,
   observations. Primarily for future Lucas to re-read. Short posts are
   first-class, not a special case.
3. Project reference. Concise cards for things built, with links out.

Success looks like: Lucas keeps the site for years without rebuilding it,
adds thoughts without touching components, and sends the link to a recruiter
without apologizing for how it looks.

## Brand Personality

Crafted, personal, slightly handcrafted. A zine, not a SaaS page.

- **Personal** first. Feels like one person made it, not a team.
- **Warm** but not soft. Ink on paper, not gradients on glass.
- **Handcrafted** edges welcome. Imperfection is part of the personality.
- **Quiet** confidence. No hero shouting. No big CTAs. The work speaks.

Three words: crafted, warm, personal.

Emotional goal: a visitor should feel they stepped into someone's digital
workshop, not a product page. A recruiter should feel the person is real.

## Anti-references

What this site must NOT look like:

- **Generic SaaS portfolio.** Hero block, three feature cards, gradient
  accent, big "Let's talk" CTA. The default dev-portfolio look.
- **Bland minimal blog.** Plain serif on pure white, no visual identity, no
  rhythm. Safe, forgettable, indistinguishable from a thousand others.
- **Terminal-aesthetic overload.** Everything in monospace, fake CRT
  scanlines, green-on-black everywhere. Fun once, exhausting long-term, and
  this site is meant to last years.
- **Overdesigned agency site.** Heavy entrance animations, WebGL shaders,
  flashy loaders. Style over substance. The site should not perform.

## Design Principles

1. **The page is the unit, not the component.** Each route is a complete
   document with its own rhythm, not a stack of reusable cards. Components
   serve the page; the page does not assemble components.
2. **Paper, not screen.** Default to the feel of a well-set printed page:
   warm paper background, ink text, generous margins, a single accent used
   sparingly. The screen is just the delivery medium.
3. **Reward the slow read.** Quick scanning must work (resume, thoughts
   index), but the typography and spacing should also reward reading a full
   thought post from top to bottom.
4. **Imperfection is identity.** Slightly off-center details, a hand-set
   feel, a zine-like willingness to break the grid. Not chaos, just not
   machine-perfect. This is what separates it from a template.
5. **Motion supports meaning.** Present, but never decorative. Page
   transitions, scroll fades, interactive timeline later. Motion should
   feel like turning a page, not like a loading screen.

## Accessibility & Inclusion

- Semantic HTML throughout, correct heading hierarchy per route.
- Visible focus states, keyboard-navigable navigation and interactive
  elements.
- `prefers-reduced-motion` respected everywhere motion exists. Static
  fallbacks for canvas animations and any future Svelte islands.
- Sufficient contrast on the warm paper palette. Body text meets WCAG AA.
- Alt text on every image. No information conveyed by color alone.
- No JS required to read any page. JS only enhances.
