---
title: "LCG"
description: "STB-style single-header C libraries. The evolved piece is glal — a generic C vector library with zero heap allocations, driven by heavy preprocessor usage."
date: 2026-08-13
tech:
  - C
  - Preprocessor
role: "Creator"
links:
  - label: "Source"
    href: "https://github.com/LucasGobbs/lcg"
tags:
  - libraries
  -  STB Library
interest: development
---

STB-style single-header C libraries. The main piece that evolved is **glal** — a
generic C vector library with zero heap allocations. All genericity comes from
the C preprocessor: macros generate type-specific functions at compile time, so
no `void*` erasure, no heap, no runtime cost for the abstraction.

More coming — usage examples, the macro patterns that made it work, and where it
falls apart.
