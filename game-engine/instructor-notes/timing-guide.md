---
layout: default
title: Timing Guide
workshop: Game Engine Tools
section: Instructor Notes
---

# Game Engine Tools Timing Guide (90 minutes)

**Audience**: 10-14 year-olds, beginners or returning from JavaScript workshops. \
**Goal**: give students experience using a game engine, specifically Godot.

## 0:00-0:10 - Welcome & Game Engine Icebreaker

- Prompt: "What is one game mechanic you love?" (jump, gems, dash, etc.)
- Set expectations:
  - We will experiment
  - We will make mistakes
  - We will read errors

## 0:10-0:20 - Godot Overview (Mental Model)

Show the Scene Tree and emphasize:

- **Nodes** are building blocks
- **Scenes** are saved bundles of nodes
- **Scripts** attach behavior to nodes
- **Assets** are images/sounds/fonts

Keep it concrete: point to each panel in the editor.

## 0:20-0:30 - Import Starter Project + First Run

Primary path (web editor):

- Open <https://editor.godotengine.org/releases/latest/>
- Import `platformer-starter-godot4.zip`
- Press Play

Verification checklist:

- Player moves left/right
- Player jumps
- Gems disappear on touch
- No score shown yet
- Character appears idle all the time

## 0:30-0:40 - Physics + Collisions (Guided Tour)

Focus points:

- CharacterBody2D is the player
- CollisionShape2D is "what can collide"
- Area2D is "detect overlap" (gems)

Avoid deep math; keep it practical.

## 0:40-1:00 - Build Task 1: Animation States

Goal: idle/move/jump animation changes automatically.

Instructor flow:

- Find the player node
- Find the AnimatedSprite2D node
- Open the player script
- Implement a simple "state" decision:
  - if in air → jump
  - else if moving → move
  - else → idle

Checkpoint:

- Jump shows jump animation
- Running shows move animation
- Standing still shows idle

## 1:00-1:10 - Build Task 2: Flip Direction

Goal: character faces left when moving left.

- Use `flip_h` (or equivalent) on the sprite
- Tie it to horizontal movement direction

Checkpoint:

- Player faces the direction they run

## 1:10-1:25 - Build Task 3: Scoring

Goal: collect gem → score increases and UI updates.

Instructor flow:

- Decide where score lives (player vs a game manager node)
- Add a Label node in UI (if not present)
- When a gem is collected:
  - increment score
  - update label text

Checkpoint:

- Score changes when gems are collected

## 1:25-1:30 - If Time: Winner Message + Wrap-Up

- Track gems remaining (count at start, or decrement on pickup)
- When zero: show "You win!" label

Wrap-up questions:

- "What did you change in the game?"
- "What would you add next?"
