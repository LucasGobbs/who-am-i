---
title: "Trogue"
description: "Graphics agnostic API to make UI applications with terminal look. A terminal emulator abstraction that decouples UI logic from backend rendering implementations."
date: 2026-08-13
tech:
  - Rust
role: "Creator"
links:
  - label: "Source"
    href: "https://github.com/LucasGobbs/trogue"
tags:
  - terminal
  - graphics
  - rust
interest: development
draft: false
---

A terminal emulator that's agnostic of backend rendering APIs. Build terminal-style UIs without coupling to any specific graphics backend.

## Backend Abstraction

The core `Backend` trait defines the rendering interface:

```rust
use crate::buffer::Buffer;

pub trait Backend {
    type Context;
    fn draw(&mut self, buf: Buffer, ctx: &mut Self::Context);
    fn clear();
}
```

This trait lets you swap rendering backends (e.g., Tetra, wgpu, SDL2) without changing application code.

## Buffer-Based Rendering

All drawing happens on a `Buffer` — a 2D grid of cells:

```rust
let mut app = TrogueApp::new(150, 100);
app.buf().clear();

// Draw characters
app.buf().set_char(x, y, '█', Color::GREEN);

// Draw strings
app.buf().set_string(0, 0, "Hello, terminal!", Color::WHITE);
```

## UI Components

Trogue includes composable UI elements:

```rust
// Text with multiple colors
let mut text = TextComponent::new(Component::new(0, 0));
text.add_text("Health: ", Color::WHITE)
    .add_text("85", Color::RED)
    .generate();

// Dividers and borders
let mut div = DividerComponent::new(Component::new(1, 10).size(11, 1));
div.line_char('#')
   .vertical()
   .corner_char('@')
   .generate();

app.buf().c_draw(text);
app.buf().c_draw(div);
```

## Shape Primitives

Draw geometric shapes using terminal characters:

```rust
// Line from (0,0) to mouse position
app.buf().g_draw(Line::new(0, 0, mouse_x, mouse_y), '.', Color::MAGENTA);

// Rectangle outline
app.buf().g_draw(Rect::new(0, 0, 75, 75, false), '#', Color::rgb(0.6, 0.1, 0.8));
```

## Example: Tetra Backend

```rust
use trogue::backend::{Backend, TetraBackend};
use trogue::trogue_app::TrogueApp;

struct GameState {
    backend: TetraBackend,
    app: TrogueApp,
}

impl State for GameState {
    fn draw(&mut self, ctx: &mut Context) -> tetra::Result {
        graphics::clear(ctx, Color::BLACK);
        self.app.buf().clear();

        // Draw your UI here
        self.app.buf().set_char(10, 10, '@', Color::YELLOW);

        // Render buffer to screen
        self.backend.draw(self.app.clone().draw(), ctx);
        Ok(())
    }
}
```

The architecture separates your terminal UI logic from the rendering backend, making it portable across game engines and graphics APIs.
