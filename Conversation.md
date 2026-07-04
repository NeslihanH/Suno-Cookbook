# Conversation (running narrative)

## Session 1 (2026-07-04)

User asked for a fast SPA "Suno Cookbook" with multi-language support, built on
thorough research of Suno's latest docs. Confirmed the project approach from the
parent `extension_playbook.md`.

Clarified three product decisions via a quick menu:
1. Product shape -> Reference library (browse + copy), no builder.
2. Languages -> Turkish + English.
3. Content -> Claude researches and fills it.

Research (5 parallel agents) established the current Suno picture (mid-2026):
- Current model v5.5 (2026-03-26); Free plan runs v4.5-all; v5/v5.5 are paid.
- Meta-tags: bracketed section/vocal/instrument cues in the Lyrics box,
  descriptors in the Style box; placement (top vs local cue) matters; first
  ~20-30 words carry the most weight.
- No official public API - so the product is a reference, not an integration.

Built M0-M2 in one pass: Vite+React+TS scaffold, i18n, bilingual data files
(compiled by parallel translation agents from the researched English source),
and the browse/search/copy UI with light/dark theme and EN/TR switching.

Note: could not read the user's unsaved "Untitled-1" buffer (untitled buffers
are not passed to the assistant) - told the user to save/paste if it mattered.

Next: verify build, run app, deploy to Vercel.
