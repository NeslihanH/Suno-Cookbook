import { useTranslation } from "react-i18next";
import type { BestPractice } from "../data/types";
import { useLocalized } from "../hooks/useLocalized";
import { OfficialBadge } from "./Badge";

export function PracticeCard({ item }: { item: BestPractice }) {
  const { t } = useTranslation();
  const L = useLocalized();

  return (
    <article className="card practice-card">
      <header className="card-head">
        <h3 className="practice-title">{L(item.title)}</h3>
        <OfficialBadge official={item.official} />
      </header>

      <p className="practice-rule">{L(item.rule)}</p>
      <p className="card-desc">{L(item.detail)}</p>

      <span className="meta-label sr-only">{t("card.notes")}</span>
    </article>
  );
}
