import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  tagItems,
  recipes,
  bestPractices,
  categories,
  totalEntries,
  compiledDate,
} from "./data/content";
import type { CategoryId, TagItem } from "./data/types";
import { Header } from "./components/Header";
import { NoticeBanner } from "./components/NoticeBanner";
import { CategoryNav, type NavSelection } from "./components/CategoryNav";
import { TagCard } from "./components/TagCard";
import { RecipeCard } from "./components/RecipeCard";
import { PracticeCard } from "./components/PracticeCard";
import { PlatformView } from "./components/PlatformView";

// Diacritic-insensitive, case-insensitive normalization for search.
function norm(s: string): string {
  return s
    .toLocaleLowerCase("tr")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/ı/g, "i");
}

// Precomputed search text for each entry.
const tagSearch = new Map<string, string>(
  tagItems.map((it) => [
    it.id,
    norm(
      [
        it.token,
        it.name,
        it.description.en,
        it.description.tr,
        it.example ?? "",
        it.family ?? "",
        it.subgroup ?? "",
      ].join(" "),
    ),
  ]),
);
const recipeSearch = new Map<string, string>(
  recipes.map((r) => [
    r.id,
    norm([r.title.en, r.title.tr, r.goal.en, r.goal.tr, r.styleBox, r.notes.en, r.notes.tr].join(" ")),
  ]),
);
const practiceSearch = new Map<string, string>(
  bestPractices.map((p) => [
    p.id,
    norm([p.title.en, p.title.tr, p.rule.en, p.rule.tr, p.detail.en, p.detail.tr].join(" ")),
  ]),
);

const TAG_CATEGORY_IDS: CategoryId[] = [
  "structure",
  "vocal",
  "instrument",
  "production",
  "genre",
  "mood",
];

// Groups tag items by family, falling back to subgroup, for section headers.
function groupTags(items: TagItem[]): [string, TagItem[]][] {
  const groups = new Map<string, TagItem[]>();
  for (const it of items) {
    const key = it.family ?? it.subgroup ?? "";
    const arr = groups.get(key);
    if (arr) arr.push(it);
    else groups.set(key, [it]);
  }
  return [...groups.entries()];
}

export default function App() {
  const { t } = useTranslation();
  const [active, setActive] = useState<NavSelection>("all");
  const [query, setQuery] = useState("");
  const q = norm(query.trim());

  const filteredTags = useMemo(
    () => (q ? tagItems.filter((it) => tagSearch.get(it.id)!.includes(q)) : tagItems),
    [q],
  );
  const filteredRecipes = useMemo(
    () => (q ? recipes.filter((r) => recipeSearch.get(r.id)!.includes(q)) : recipes),
    [q],
  );
  const filteredPractices = useMemo(
    () => (q ? bestPractices.filter((p) => practiceSearch.get(p.id)!.includes(q)) : bestPractices),
    [q],
  );

  // Per-category counts for the nav badges (respect the active query).
  const counts = useMemo(() => {
    const c: Record<string, number> = {};
    for (const id of TAG_CATEGORY_IDS) c[id] = filteredTags.filter((it) => it.category === id).length;
    c.recipe = filteredRecipes.length;
    c.practice = filteredPractices.length;
    return c;
  }, [filteredTags, filteredRecipes, filteredPractices]);

  // Which categories to render given the active selection.
  const scope: CategoryId[] = active === "all" ? categories.map((c) => c.id) : [active];

  const showPlatform = scope.includes("platform") && !q;

  const resultCount =
    filteredTags.filter((it) => scope.includes(it.category)).length +
    (scope.includes("recipe") ? filteredRecipes.length : 0) +
    (scope.includes("practice") ? filteredPractices.length : 0);

  const nothing = resultCount === 0 && !showPlatform;

  return (
    <div className="app">
      <Header query={query} onQuery={setQuery} />
      <NoticeBanner />

      <div className="layout">
        <aside className="sidebar">
          <CategoryNav active={active} onSelect={setActive} counts={counts} />
        </aside>

        <main className="content">
          {q && <p className="result-count">{t("app.results", { count: resultCount })}</p>}

          {nothing && (
            <div className="empty">
              <p className="empty-title">{t("app.noResults")}</p>
              <p className="empty-hint">{t("app.noResultsHint")}</p>
            </div>
          )}

          {/* Tag-style categories */}
          {TAG_CATEGORY_IDS.filter((id) => scope.includes(id)).map((id) => {
            const items = filteredTags.filter((it) => it.category === id);
            if (items.length === 0) return null;
            const cat = categories.find((c) => c.id === id)!;
            return (
              <section key={id} className="cat-section">
                <h2 className="section-title">
                  <span className="section-icon">{cat.icon}</span>
                  {t(cat.labelKey)}
                  <span className="section-count">{items.length}</span>
                </h2>
                {groupTags(items).map(([group, groupItems]) => (
                  <div key={group || "_"} className="group">
                    {group && <h3 className="group-title">{group}</h3>}
                    <div className="card-grid">
                      {groupItems.map((it) => (
                        <TagCard key={it.id} item={it} />
                      ))}
                    </div>
                  </div>
                ))}
              </section>
            );
          })}

          {/* Recipes */}
          {scope.includes("recipe") && filteredRecipes.length > 0 && (
            <section className="cat-section">
              <h2 className="section-title">
                <span className="section-icon">{"\u{1F4D6}"}</span>
                {t("nav.recipe")}
                <span className="section-count">{filteredRecipes.length}</span>
              </h2>
              <div className="card-grid recipe-grid">
                {filteredRecipes.map((r) => (
                  <RecipeCard key={r.id} item={r} />
                ))}
              </div>
            </section>
          )}

          {/* Best practices */}
          {scope.includes("practice") && filteredPractices.length > 0 && (
            <section className="cat-section">
              <h2 className="section-title">
                <span className="section-icon">{"✅"}</span>
                {t("nav.practice")}
                <span className="section-count">{filteredPractices.length}</span>
              </h2>
              <div className="card-grid">
                {filteredPractices.map((p) => (
                  <PracticeCard key={p.id} item={p} />
                ))}
              </div>
            </section>
          )}

          {/* Platform facts */}
          {showPlatform && (
            <section className="cat-section">
              <h2 className="section-title">
                <span className="section-icon">{"⚙️"}</span>
                {t("nav.platform")}
              </h2>
              <PlatformView />
            </section>
          )}

          <footer className="app-footer">
            <p>{t("footer.disclaimer")}</p>
            <p className="footer-meta">{t("footer.trademark")}</p>
            <p className="footer-meta">
              {t("footer.verified", { date: compiledDate })} · {totalEntries}+
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
}
