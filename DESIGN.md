---
name: who_am_i
description: Personal website, resume, and thoughts of Lucas Gobbi. A hand-bound zine, not a SaaS page.
colors:
  paper: "#f7f2e8"
  paper-deep: "#efe7d5"
  paper-edge: "#e4d9c2"
  ink: "#1a1714"
  ink-soft: "#3a322b"
  ink-mute: "#6b6155"
  ink-faint: "#9a8f7f"
  accent: "#7c2d12"
  terminal-bg: "#0c0a09"
  terminal-ink: "#e7e5e4"
  terminal-prompt: "#22c55e"
  terminal-mute: "#a8a29e"
typography:
  display:
    fontFamily: "Fraunces, 'Iowan Old Style', 'Apple Garamond', Georgia, serif"
    fontSize: "clamp(2rem, 5vw, 3rem)"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Fraunces, 'Iowan Old Style', Georgia, serif"
    fontSize: "1.5rem"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "normal"
  title:
    fontFamily: "Fraunces, 'Iowan Old Style', Georgia, serif"
    fontSize: "1.15rem"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "normal"
  body:
    fontFamily: "Inter, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "1.05rem"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "normal"
  label:
    fontFamily: "ui-monospace, 'JetBrains Mono', Menlo, monospace"
    fontSize: "0.8rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.04em"
  mono:
    fontFamily: "ui-monospace, 'JetBrains Mono', Menlo, monospace"
    fontSize: "0.88rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
rounded:
  none: "0px"
  sm: "2px"
  md: "4px"
  pill: "999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "40px"
  xxl: "64px"
components:
  link:
    textColor: "{colors.ink}"
    typography: "{typography.body}"
  link-hover:
    textColor: "{colors.accent}"
  tag:
    backgroundColor: "{colors.paper-deep}"
    textColor: "{colors.ink-mute}"
    rounded: "{rounded.pill}"
    padding: "2px 10px"
  nav-link:
    textColor: "{colors.ink-soft}"
    typography: "{typography.label}"
  nav-link-active:
    textColor: "{colors.ink}"
  callout-note:
    backgroundColor: "{colors.paper-deep}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "14px 18px"
---

# Design System: who_am_i

## 1. Overview

**Creative North Star: "The Hand-Bound Zine"**

This is a personal website that should feel like a small hand-bound publication:
warm paper, ink that presses into the page, slightly off-center details, and a
voice that belongs to one person. Not a SaaS page, not a template, not a
developer portfolio generated from defaults.

The visual system is deliberately restrained. Cream paper carries near-black
ink. One editorial accent (a deep oxblood) appears rarely, mostly to mark a
link the reader has already visited or a moment of emphasis. Everything else
is the relationship between paper and ink, set with care.

Typography is the primary identity: a variable serif (Fraunces) for display and
headlines, paired with a humanist sans (Inter) for body and interface. A
monospace face handles metadata, dates, tags, and terminal blocks. The pairing
reads like a well-set book whose margins and running heads were chosen by a
person.

The system rejects the generic SaaS portfolio (hero + three cards + gradient
CTA), the bland minimal blog (pure white, no identity), terminal-aesthetic
overload (green-on-black everywhere, fake CRT), and overdesigned agency sites
(WebGL, entrance animations, loaders that perform rather than load).

**Key Characteristics:**

- Cream paper background, never pure white. Ink foreground, never pure black.
- Restrained palette: paper + ink + one oxblood accent used ≤10% per screen.
- Serif display + sans body + mono meta. Hierarchy through weight and size.
- Flat by default. Depth conveyed by paper tone shifts, not shadows.
- Motion supports meaning: link underlines grow, scroll fades are subtle, page
  transitions feel like turning a page. Never decorative, never layout-animated.
- Imperfection welcome: slightly off-center details, hand-set feel, willingness
  to break the grid. This is what separates the site from a template.

## 2. Colors

A restrained palette of warm cream paper, near-black ink, and a single deep
oxblood accent that earns its appearance through rarity.

### Primary

- **Cream Paper** (`#f7f2e8`): the page itself. Every surface starts here.
  Warm, slightly aged, never pure white. The base background for every route.
- **Ink** (`#1a1714`): primary text color. Near-black with a warm brown tint.
  Used for body, headings, and primary foreground.

### Neutral

- **Paper Deep** (`#efe7d5`): a one-step-darker paper tone for surfaces that
  sit on top of the page (callouts, code blocks, tags, terminal figure ground
  outside the dark terminal itself).
- **Paper Edge** (`#e4d9c2`): borders and dividers. Never a hard line; always
  a paper-toned hairline.
- **Ink Soft** (`#3a322b`): secondary headings, emphasis that is not the
  primary ink.
- **Ink Mute** (`#6b6155`): metadata, dates, captions, secondary labels.
- **Ink Faint** (`#9a8f7f`): disabled states, the lightest text that still
  meets contrast on paper.

### Accent

- **Oxblood** (`#7c2d12`): the single editorial accent. Used on visited links,
  moments of real emphasis, and the focus ring. Rare by design.

### Terminal

- **Terminal Bg** (`#0c0a09`): the dark ground inside the `<Terminal>` figure
  only. Not a site-wide dark mode.
- **Terminal Ink** (`#e7e5e4`): command text inside the terminal.
- **Terminal Prompt** (`#22c55e`): the `$` prompt glyph, in a restrained green.
- **Terminal Mute** (`#a8a29e`): output text inside the terminal.

### Named Rules

**The Paper-Not-White Rule.** Never use `#ffffff` or `#000000` anywhere. Every
neutral is tinted toward warm. The page is paper, not a screen.

**The One Oxblood Rule.** The accent appears on no more than 10% of any given
screen. Its rarity is the point. If it feels common, remove it.

## 3. Typography

**Display Font:** Fraunces (with Iowan Old Style, Apple Garamond, Georgia, serif)
**Body Font:** Inter (with system-ui, -apple-system, Segoe UI, sans-serif)
**Label/Mono Font:** ui-monospace, JetBrains Mono, Menlo, monospace

**Character:** A variable serif with optical sizing for display and headlines,
paired with a clean humanist sans for body. The serif carries personality; the
sans carries reading. Mono handles dates, tags, and the terminal. The pairing
reads like a well-set book with marginalia.

### Hierarchy

- **Display** (Fraunces, 400, `clamp(2rem, 5vw, 3rem)`, line-height 1.05,
  letter-spacing -0.01em): page titles only. The H1 of each route. Never more
  than one per page.
- **Headline** (Fraunces, 500, 1.5rem, line-height 1.2): H2 inside a route.
  Section headings on the homepage, resume, and thoughts index.
- **Title** (Fraunces, 500, 1.15rem, line-height 1.3): H3 and entry titles.
  Thought titles in lists, experience role lines, project names.
- **Body** (Inter, 400, 1.05rem, line-height 1.7): running text in thought
  posts, descriptions, about bio. Max line length 65–75ch.
- **Label** (mono, 500, 0.8rem, letter-spacing 0.04em): nav links, tag pills,
  date stamps, section eyebrows. Often uppercase or title case, never sentence
  case rambling.
- **Mono** (mono, 400, 0.88rem, line-height 1.6): terminal text, code blocks,
  inline code, the year axis on the experience timeline.

### Named Rules

**The Serif-Speaks Rule.** Fraunces is the voice. If a heading can be serif, it
is. Sans is for body and interface chrome only. Mono is for metadata, code,
and terminal. Never use sans for a page title or a thought heading.

**The 1.25 Step Rule.** Type scale steps differ by at least 1.25 in size. No
flat scales. Display to headline to title to body is a real descent, not a
shuffle.

## 4. Elevation

Flat by default. The system does not use shadows for depth. Depth is conveyed
by paper tone shifts: the page is cream paper, a callout is a one-step-darker
paper, a code block is a darker paper still, the terminal figure is the only
true dark surface and it earns it by being a terminal.

### Named Rules

**The Flat-By-Default Rule.** Surfaces are flat at rest. No box-shadows on
cards, callouts, inputs, or tags. The single exception is the terminal figure,
which may carry a soft ambient shadow (`0 8px 24px rgba(28,23,20,0.12)`) to
establish it as a recessed object on the page.

**The Paper-Tone Rule.** Where another system would use a shadow, this system
uses a one-step-darker paper tone. Hierarchy comes from the paper tone ladder
(paper → paper-deep → paper-edge), not from elevation.

## 5. Components

### Links

- **Shape:** no radius; inline text.
- **Default:** ink color, underline at 1px, offset 0.15em.
- **Hover:** underline thickens to 2px; color stays ink. Motion is a 120ms
  ease-out on `text-decoration-thickness` only.
- **Visited:** oxblood. Rare, deliberate.
- **Focus-visible:** 2px oxblood outline, 2px offset.

### Tags (pills)

- **Shape:** pill (`999px`).
- **Background:** paper-deep.
- **Text:** ink-mute, mono label at 0.8rem.
- **Padding:** 2px 10px.
- **Border:** none.
- **Shadow:** none.

### Navigation

- **Layout:** horizontal, baseline-aligned with the site title.
- **Links:** mono label, 0.8rem, letter-spacing 0.04em, ink-soft at rest.
- **Active:** ink, with a 1px underline at 0.25em offset (not a side stripe).
- **Hover:** ink, underline thickens to 2px.
- **Mobile:** wraps to a second row rather than collapsing into a hamburger,
  unless the viewport is under 480px.

### Cards (used sparingly)

- **Corner Style:** 4px radius, never larger.
- **Background:** paper-deep only when the card genuinely sits on top of the
  page. Most of the time, prefer no card at all.
- **Shadow:** none. Use paper-tone contrast.
- **Border:** 1px paper-edge.
- **Internal Padding:** 18px–24px.

### Terminal figure

- **Corner Style:** 8px radius.
- **Background:** terminal-bg (`#0c0a09`).
- **Text:** terminal-ink for commands, terminal-mute for output,
  terminal-prompt for the `$` glyph.
- **Titlebar:** a 1c1917 strip with three 11px dots (red, amber, green) and a
  mono caption at 0.75rem.
- **Shadow:** `0 8px 24px rgba(28,23,20,0.12)` allowed here only.
- **Copy button:** appears on line hover, 22px square, icon-only, swaps to a
  checkmark for 1.2s after copy.

### Callouts

- **Note:** paper-deep background, 3px left border in ink-mute (not a colored
  stripe; a tonal continuation of the paper).
- **Warning:** a warmer paper tone (`#f5e7c8`) with ink-soft text. No red.
- **Tip:** a cooler paper tone (`#e8eee5`) with ink-soft text. No green.
- **Padding:** 14px 18px. **Radius:** 2px.

### Inputs (when added later)

- **Style:** 1px paper-edge border, paper background, 4px radius.
- **Focus:** border shifts to ink, 1px. No glow.
- **Error:** oxblood border, 1px. No background change.

## 6. Do's and Don'ts

### Do:

- **Do** use cream paper (`#f7f2e8`) for every page background. Never pure white.
- **Do** use ink (`#1a1714`) for primary text. Never pure black.
- **Do** keep the oxblood accent (`#7c2d12`) under 10% of any screen. It is the
  rare emphasis, not a brand color.
- **Do** use Fraunces for every heading and display. Use Inter for body. Use
  mono for metadata, dates, tags, code, and terminal.
- **Do** vary spacing for rhythm. `40px` between sections, `16px` between
  paragraphs, `8px` between list items. Same padding everywhere is monotony.
- **Do** break the grid slightly when it serves the page. A hand-set feel, not
  machine perfection.
- **Do** respect `prefers-reduced-motion`. Canvas animations render a single
  static frame; transitions become instant.
- **Do** keep body line length at 65–75ch. The page rewards the slow read.

### Don't:

- **Don't** use `#ffffff` or `#000000` anywhere. Every neutral is warm-tinted.
- **Don't** use `border-left` greater than 1px as a colored accent stripe. The
  callout's 3px border is a tonal paper continuation in ink-mute, not a
  decorative color stripe.
- **Don't** use gradient text (`background-clip: text`). Use a single solid
  color. Emphasis comes from weight or size.
- **Don't** use glassmorphism, blur, or translucency decoratively.
- **Don't** build the hero-metric template (big number, small label, supporting
  stats, gradient accent). This is a SaaS cliché and an anti-reference.
- **Don't** make identical card grids (icon + heading + text, repeated). The
  page is the unit, not the component.
- **Don't** reach for a modal first. Exhaust inline and progressive alternatives.
- **Don't** use em dashes. Use commas, colons, semicolons, periods, or
  parentheses. Also not `--`.
- **Don't** ship the generic SaaS portfolio: hero + three feature cards +
  gradient CTA. Explicitly rejected.
- **Don't** ship the bland minimal blog: plain serif on pure white, no
  identity, no rhythm. Explicitly rejected.
- **Don't** ship terminal-aesthetic overload: everything in mono, fake CRT
  scanlines, green-on-black everywhere. The terminal is one figure, not the site.
- **Don't** animate CSS layout properties. Motion supports meaning; it does not
  decorate. Ease out with exponential curves, never bounce or elastic.
