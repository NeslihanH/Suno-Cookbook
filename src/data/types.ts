// Core content schema for the Suno Cookbook reference library.
// Tag literals and prompt examples stay in English because Suno expects
// English style/section tags. Human-facing prose is bilingual (en + tr).

export type LocaleKey = "en" | "tr" | "es" | "pt" | "de";

// English and Turkish are always present; the remaining locales are optional
// and fall back to English when a translation is missing.
export type Localized = {
  en: string;
  tr: string;
  es?: string;
  pt?: string;
  de?: string;
};

export type CategoryId =
  | "structure"
  | "vocal"
  | "instrument"
  | "production"
  | "genre"
  | "mood"
  | "recipe"
  | "practice"
  | "platform";

// A browsable tag / term entry: structure tags, vocal tags, instrument tags,
// production descriptors, genres and moods all share this shape.
export type TagItem = {
  id: string;
  category: Extract<
    CategoryId,
    "structure" | "vocal" | "instrument" | "production" | "genre" | "mood"
  >;
  // The literal Suno token. For bracketed tags: "[Chorus]". For style-box
  // words (genre / mood / production) it is the bare term: "Synthwave".
  token: string;
  // Display name (English label; matches the token for most entries).
  name: string;
  subgroup?: string;
  family?: string;
  description: Localized;
  // Where the token belongs / how placement changes its behavior.
  placement?: Localized;
  // A short realistic prompt snippet (English literal).
  example?: string;
  // true = documented by Suno officially; false = community convention.
  official: boolean;
};

export type Recipe = {
  id: string;
  category: "recipe";
  title: Localized;
  goal: Localized;
  styleBox: string;
  lyricsSkeleton: string;
  notes: Localized;
};

export type BestPractice = {
  id: string;
  category: "practice";
  title: Localized;
  rule: Localized;
  detail: Localized;
  official: boolean;
};

export type PlatformModel = {
  id: string;
  name: string;
  released?: string;
  tier: "free" | "paid";
  audio?: string;
  summary: Localized;
};

export type PlatformFeature = {
  id: string;
  name: string;
  beta: boolean;
  description: Localized;
};

export type PlatformPlan = {
  id: string;
  name: string;
  highlights: Localized;
  commercialUse: boolean;
};

export type PlatformLimit = {
  id: string;
  label: Localized;
  value: Localized;
  official: boolean;
};

export type PlatformFacts = {
  models: PlatformModel[];
  features: PlatformFeature[];
  plans: PlatformPlan[];
  limits: PlatformLimit[];
  commercial: PlatformLimit[];
};

// Union used by the search index / card renderer.
export type ContentItem = TagItem | Recipe | BestPractice;

export type Category = {
  id: CategoryId;
  // i18n key for the category label; resolved via react-i18next.
  labelKey: string;
  icon: string;
};
