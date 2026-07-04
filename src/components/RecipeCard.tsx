import { useTranslation } from "react-i18next";
import type { Recipe } from "../data/types";
import { useLocalized } from "../hooks/useLocalized";
import { CopyButton } from "./CopyButton";

export function RecipeCard({ item }: { item: Recipe }) {
  const { t } = useTranslation();
  const L = useLocalized();

  return (
    <article className="card recipe-card">
      <header className="card-head">
        <h3 className="recipe-title">{L(item.title)}</h3>
      </header>

      <p className="card-meta">
        <span className="meta-label">{t("card.goal")}:</span> {L(item.goal)}
      </p>

      <div className="recipe-block">
        <div className="block-head">
          <span className="meta-label">{t("card.styleBox")}</span>
          <CopyButton text={item.styleBox} label={t("card.copyStyle")} />
        </div>
        <pre className="block-body style-body">{item.styleBox}</pre>
      </div>

      <div className="recipe-block">
        <div className="block-head">
          <span className="meta-label">{t("card.lyrics")}</span>
          <CopyButton text={item.lyricsSkeleton} label={t("card.copyLyrics")} />
        </div>
        <pre className="block-body lyrics-body">{item.lyricsSkeleton}</pre>
      </div>

      <p className="card-note">
        <span className="meta-label">{t("card.notes")}:</span> {L(item.notes)}
      </p>
    </article>
  );
}
