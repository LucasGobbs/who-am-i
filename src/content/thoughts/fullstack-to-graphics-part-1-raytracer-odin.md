---
title: "From fullstack to graphics, part 1: building a raytracer in Odin"
description: "First part of a series on leaving backend work to study computer graphics. This one is a CPU raytracer in Odin: what it renders, how fast it runs, and one honest performance mistake."
date: 2026-09-19
tags:
  - graphics
  - odin
  - development
interest: development
draft: true
---

I spent the last five years doing backend and fullstack work: Node, Go, Java,
the usual pile. This year I decided to move toward computer graphics, and this
series is the running log of that move. Each part is one artifact and what I
learned building it.

Part one is a CPU raytracer written in [Odin](https://odin-lang.org/). Odin is
a small systems language, close to C in spirit. Almost nobody hires for it,
and I picked it anyway: the algorithms, memory layout, and measurement habits
are the real curriculum, and I can read C++ fluently when a book or paper uses
it. I had already written a toy raytracer in Rust before, which helped.

The tracer follows the free [Ray Tracing in One
Weekend](https://raytracing.github.io/) book series. At this point it renders
diffuse, mirror, and glass materials, simulates camera depth of field by
sampling rays across a lens disk, intersects quadrilaterals as well as
spheres, and builds the Cornell Box geometry. To keep large scenes fast, rays
first test a bounding volume hierarchy, a tree of axis-aligned boxes that
skips groups of objects a ray cannot hit instead of testing each one. Motion
blur is a timestamp on each ray; moving spheres sweep their bounds.

The part I'm prouder of is the measurement loop. A headless mode with no
editor window renders a scene directly from its JSON config and appends a row
to a CSV: resolution, samples per pixel, bounce depth, threads, median time
over N runs, and the image file. Right now the complex scene (a hundred or so
random spheres on a mirror ground, 250x140 pixels, 100 samples per pixel, 50
bounces max) renders in about 600 milliseconds on my machine. Compared to the
first numbers at depth-fifty I call that good, and the CSV history makes the
claim checkable instead of a vibe.

It also caught an embarrassing mistake. When I added counters tracing rays,
primitive tests, and box visits with shared atomic increments, the render went
from about 0.6 seconds to about 16. Around 450 million atomic operations per
render fought over three cache lines. The fix was to delete the feature, not
optimize it. If those numbers are ever worth their cost, the right shape is a
local counter per thread-partition, merged once at the end.

Source: [github.com/LucasGobbs/toy_raytracer_odin](https://github.com/LucasGobbs/toy_raytracer_odin).

Next: emissive area lights, because the Cornell Box currently pretends to be
illuminated by a white Lambertian ceiling patch. Then textures, then volumes.
