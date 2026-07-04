# Decisions (append-only architecture log)

## D1 - Product shape: reference library, not a builder

Suno Cookbook is a browse + copy reference library (searchable, categorized),
not an interactive prompt builder. Chosen by the user from a 3-option menu.
Rationale: "cookbook" = curated recipes/reference; a builder is a larger,
separate product. Keeps scope tight and shippable fast.

## D2 - No backend, static client-only SPA

There is no official public Suno API (all third-party "Suno APIs" are
reverse-engineered). The app consumes no external service and holds no secrets,
so per the playbook's "single-platform, no secrets" case we skip the backend
entirely. Content is bundled static data. This also makes hosting trivial and
free (static deploy).

## D3 - Stack: Vite + React 19 + TS, react-i18next

Fast dev/build, first-class TS, tiny static output. i18next chosen for i18n
because the app is bilingual from day one and i18next is the de-facto React i18n
library with interpolation/pluralization built in.

## D4 - Bilingual content model

Prose fields are `Localized = { en, tr }`; Suno tag literals, prompt examples,
`styleBox`, and `lyricsSkeleton` stay English (Suno expects English tags). The TR
locale and TR content translations use proper Turkish diacritics - this is a
deliberate localized product, so the playbook's English-only rule (which targets
code and monolingual English products) does not apply to the TR locale strings.

## D5 - Content sourcing + Official/Community labeling

Content compiled via parallel research agents from official Suno sources first
(suno.com, help.suno.com, release notes), then reputable community guides. Every
entry carries an `official` flag rendered as an Official/Community badge, because
Suno documents the mechanism (brackets in lyrics, descriptors in style) but does
NOT publish a canonical tag dictionary - most specific tags are well-attested
community conventions, and we must not present them as officially guaranteed.

## D6 - Data facts flagged as approximate where Suno is silent

Audio sample-rate/bitrate for v5/v5.5 and character limits are community-reported
(Suno does not publish them). These are labeled Community and worded as
approximate in the content, not stated as fact.

## D7 - Search is diacritic-insensitive

Client-side search normalizes NFD + strips combining marks + maps Turkish
dotless-i so that querying "sozler" matches "sozler"/"sözler" and vice versa.
Searchable text spans both `en` and `tr` fields plus token/example.
