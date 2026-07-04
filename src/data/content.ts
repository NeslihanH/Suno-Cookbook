import type { TagItem, Category } from "./types";
import { structureTags } from "./structure";
import { vocalTags } from "./vocals";
import { instrumentTags } from "./instruments";
import { genreTags } from "./genres";
import { moodTags } from "./moods";
import { productionTags } from "./production";
import { recipes } from "./recipes";
import { bestPractices } from "./bestPractices";
import { platformFacts } from "./platform";

// Category order drives the left navigation.
export const categories: Category[] = [
  { id: "structure", labelKey: "nav.structure", icon: "\u{1F3BC}" },
  { id: "vocal", labelKey: "nav.vocal", icon: "\u{1F3A4}" },
  { id: "instrument", labelKey: "nav.instrument", icon: "\u{1F3B9}" },
  { id: "production", labelKey: "nav.production", icon: "\u{1F39B}\u{FE0F}" },
  { id: "genre", labelKey: "nav.genre", icon: "\u{1F3B8}" },
  { id: "mood", labelKey: "nav.mood", icon: "\u{1F319}" },
  { id: "recipe", labelKey: "nav.recipe", icon: "\u{1F4D6}" },
  { id: "practice", labelKey: "nav.practice", icon: "\u{2705}" },
  { id: "platform", labelKey: "nav.platform", icon: "\u{2699}\u{FE0F}" },
];

// All browsable tag/term entries in one flat array.
export const tagItems: TagItem[] = [
  ...structureTags,
  ...vocalTags,
  ...instrumentTags,
  ...genreTags,
  ...moodTags,
  ...productionTags,
];

export { recipes, bestPractices, platformFacts };

// Total count of reference entries (for the header stat).
export const totalEntries =
  tagItems.length + recipes.length + bestPractices.length;

// Date the content snapshot was compiled (shown in the footer).
export const compiledDate = "2026-07";
