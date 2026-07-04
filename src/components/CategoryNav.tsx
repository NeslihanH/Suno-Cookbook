import { useTranslation } from "react-i18next";
import { categories } from "../data/content";
import type { CategoryId } from "../data/types";

export type NavSelection = CategoryId | "all";

type Props = {
  active: NavSelection;
  onSelect: (id: NavSelection) => void;
  counts: Record<string, number>;
};

export function CategoryNav({ active, onSelect, counts }: Props) {
  const { t } = useTranslation();

  return (
    <nav className="category-nav" aria-label="Categories">
      <button
        type="button"
        className={`cat-btn${active === "all" ? " is-active" : ""}`}
        onClick={() => onSelect("all")}
      >
        <span className="cat-icon">{"✨"}</span>
        <span className="cat-label">{t("app.allCategories")}</span>
      </button>

      {categories.map((c) => (
        <button
          key={c.id}
          type="button"
          className={`cat-btn${active === c.id ? " is-active" : ""}`}
          onClick={() => onSelect(c.id)}
        >
          <span className="cat-icon">{c.icon}</span>
          <span className="cat-label">{t(c.labelKey)}</span>
          {counts[c.id] != null && <span className="cat-count">{counts[c.id]}</span>}
        </button>
      ))}
    </nav>
  );
}
