# Suno Cookbook

A searchable, bilingual (English / Turkish) field guide to Suno AI music
prompting: meta-tags, song-structure tags, vocal and instrument tags, genres,
moods, production descriptors, ready-to-copy prompt recipes, best practices, and
platform facts (models, features, plans, limits).

Browse by category or search across everything, then copy any tag, style prompt
or lyric skeleton with one click. Every entry is marked Official (documented by
Suno) or Community (well-attested convention).

This is an unofficial reference and is not affiliated with Suno. Suno tag
behavior evolves; verify against the current app.

## Stack

- Vite + React 19 + TypeScript
- i18next / react-i18next for localization (EN + TR)
- No backend, no external API - a fully static client-only SPA

## Develop

```
npm install
npm run dev       # start the dev server
npm run build     # type-check + production build
npm run preview   # preview the production build
```

## Project layout

- `src/data` - content schema (`types.ts`) and the datasets, one file per
  category, aggregated in `content.ts`. Prose fields are bilingual `{ en, tr }`.
- `src/i18n` - i18n config and UI locale files (`locales/en.json`, `tr.json`).
- `src/components` - Header, category navigation, cards, platform view.
- `src/hooks` - localization picker and theme toggle.

## Content

Compiled from official Suno sources (suno.com, help.suno.com, release notes)
and reputable community guides. Figures Suno does not officially publish (some
audio specs, character limits) are labeled Community and worded as approximate.
