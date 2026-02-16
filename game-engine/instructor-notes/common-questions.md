---
layout: default
title: Common Questions
workshop: Game Engine Tools
section: Instructor Notes
---

# Game Engine Tools Common Questions

Use these as quick answers during the workshop.

## "What is a node?"

A node is one building block in Godot. A player can be a node, a gem can be a
node, and the UI score label can be a node.

## "What is a scene?"

A scene is a saved collection of nodes. Think of it like a "prefab" or a level.

## "Why doesn't my game start?"

Common causes:

- The script has an error (check the error output)
- You edited a node name but didn't update code
- You're running a different scene than you think

## "I changed code, but nothing happened"

Checklist:

- Did you press Play again?
- Did you save the script?
- Are you editing the correct script file?
- Add a quick `print("here")` to verify the code runs

## "My player falls through the ground"

Usually collision setup:

- Ground is missing a CollisionShape2D
- Player is missing a CollisionShape2D
- Collision is disabled or moved out of place

## "Gems don't get collected"

Common causes:

- Gem Area2D has no collision shape
- Player collider doesn't overlap the gem's area
- The gem signal/overlap code isn't running

## "What does flip_h do?"

It mirrors the sprite horizontally. It's an easy way to face left/right without
needing separate art.

## Web Editor gotchas

- If things feel stuck, refresh and re-import the project
- Be patient on first load (assets take time)
- Don't panic if the file tree takes a moment to appear

Keep answers short and friendly. Add detail only if students ask for more.
