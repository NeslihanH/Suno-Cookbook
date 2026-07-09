# Suno Cookbook - Resume Doc (single source of truth)

Read this first when resuming. Update after every milestone, before commit.

## What this is

A single-page reference app (SPA) for Suno AI music prompting: a searchable,
categorized library of meta-tags, song-structure tags, vocal/instrument tags,
genres, moods, production descriptors, ready-to-copy prompt recipes, best
practices, and platform facts (models, features, plans, limits). Browse + copy.
No prompt builder (reference only). Available in 5 locales: English, Turkish,
Spanish, Portuguese, German.

Not affiliated with Suno. Content is compiled from official Suno docs
(suno.com, help.suno.com, release notes) plus reputable community guides, and is
marked Official vs Community per entry.

## Hard rules

- Chat in Turkish; all shipped code/identifiers/comments/filenames in English.
- UI ships in 5 locales: English (`en`), Turkish (`tr`), Spanish (`es`),
  Portuguese (`pt`), German (`de`). `en` and `tr` are required on every
  `Localized` field; `es`/`pt`/`de` are optional and fall back to English, but
  existing content fills all five for consistency - match that when adding
  entries. Non-English locale content DOES use proper native diacritics - that
  is the intended, correct behavior (the English-only rule applies to code,
  not to locale content). Suno tag literals (e.g. `[Chorus]`), prompt examples,
  `styleBox` and `lyricsSkeleton` stay in English everywhere (Suno expects
  English tags).
- No em-dash in user-facing strings.
- No secrets, no backend, no API keys - this is a static client-only SPA.

## Locked stack

- Vite + React 19 + TypeScript.
- i18n: `i18next` + `react-i18next` (locale files in `src/i18n/locales`).
- No backend. No router (single page). Client-side search (diacritic-insensitive).
- Deploy target: Vercel (static build).

## Repo layout

```
src/
  data/            content schema + datasets (one file per category)
    types.ts       TagItem / Recipe / BestPractice / PlatformFacts
    structure.ts vocals.ts instruments.ts genres.ts moods.ts production.ts
    recipes.ts bestPractices.ts platform.ts
    content.ts     aggregator: categories, tagItems, exports, totals
  i18n/            i18n config + locales/{en,tr,es,pt,de}.json
  hooks/           useLocalized (5-locale picker, falls back to en), useTheme (light/dark)
  components/      Header, CategoryNav, TagCard, RecipeCard, PracticeCard,
                   PlatformView, CopyButton, Badge
  App.tsx          state, search/filter, grouping, layout
  main.tsx index.css
```

Content datasets use the `Localized` type for prose fields: `en`/`tr` required,
`es`/`pt`/`de` optional (fall back to English) but filled in practice;
tokens/examples/styleBox/lyricsSkeleton are plain English strings.

## How to run

```
npm install
npm run dev      # local dev server (http://localhost:5174, pinned in vite.config.ts)
npm run build    # tsc -b && vite build  (must pass before commit)
npm run preview  # serve the production build (also port 5174)
```

## Status

- M0 scaffold + i18n + docs: DONE.
- M1 content dataset (research + bilingual data files): DONE.
  ~40 structure, ~44 vocal, ~83 instrument, ~118 genre, ~22 mood, ~25 production
  tags; 15 recipes; 14 best practices; platform facts (7 models, 11 features,
  3 plans, limits + commercial).
- M2 UI (browse, search, copy, language switch, theme): DONE.
- M2.1 instrument playing-technique coverage (guitar/bass/drum/keys/strings/brass
  technique subgroups) + "Powerful" mood: DONE.
- M3 polish + deploy: IN PROGRESS.

## Next step

Verify `npm run build` passes, run the dev server, eyeball the app, then deploy
to Vercel.
