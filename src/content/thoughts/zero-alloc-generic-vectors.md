---
title: "Zero-alloc generic vectors in C via the preprocessor"
description: "Notes on glal — a single-header C vector library that uses the preprocessor to generate type-safe, heap-free containers. Why, how, and where it breaks."
date: 2026-08-13
tags:
  - c
  - preprocessor
  - libraries
draft: true
---

The C preprocessor gets a bad reputation, and most of it is earned. But for
generics in C — before `_Generic` and before C23 — it's the only tool that
doesn't require `void*` erasure or function pointer indirection.

**glal** is the vector library inside [LCG](https://github.com/LucasGobbs/lcg).
Every vector operation is a macro that expands into a type-specific function.
`vec_push(int, v, 42)` becomes `vec_int_push(&v, 42)`. No heap allocation —
vectors live on the stack with a fixed capacity you choose at declaration.

Things I want to write about:

- The macro pattern: `#define vec(T) vec_##T` and the naming convention it
  enforces
- Why stack-only is enough (and when it isn't)
- The debugging experience — compiler errors from macro expansion are
  unreadable; what helps
- STB-style API design: what to copy, what to change
- Where I'd use this vs. just writing the struct by hand
