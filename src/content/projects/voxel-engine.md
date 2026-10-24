---
title: "Voxel Engine"
description: "A Minecraft-style voxel engine prototype on three.js: chunked simplex-noise terrain, face-culled meshes, baked ambient occlusion, and a flying camera."
date: 2026-10-19
tech:
  - TypeScript
  - three.js
role: "Creator"
links:
  - label: "Source"
    href: "https://github.com/LucasGobbs/cube-engine"
tags:
  - graphics
  - webgl
  - voxels
interest: development
draft: false
---

A voxel engine prototype built on three.js and TypeScript. Chunks of
32×64×32 voxels are generated from layered, alea-seeded simplex noise:
hills with rivers, sandy shores, dirt and rock layers, and trees.

![Fly-through over the terrain](/projects/voxel-engine/demo.gif)

## Meshing

Each chunk becomes a single mesh. Faces between two solid voxels are
skipped, so only the visible boundary gets geometry. Ambient occlusion
is baked per-vertex using the classic side/side/corner rule, and a small
custom shader applies the AO values plus fog.

## Streaming

New chunks generate around the camera as you fly. The worker-pool path
is written but the simple in-process pool is the one running today.

## Status

A prototype, not a game: no collision or physics yet, so you fly
through blocks.
