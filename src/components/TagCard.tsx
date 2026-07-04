import { useTranslation } from "react-i18next";
import type { TagItem } from "../data/types";
import { useLocalized } from "../hooks/useLocalized";
import { CopyButton } from "./CopyButton";
import { OfficialBadge } from "./Badge";

export function TagCard({ item }: { item: TagItem }) {
  const { t } = useTranslation();
  const L = useLocalized();

  return (
    <article className="card tag-card">
      <header className="card-head">
        <code className="token">{item.token}</code>
        <OfficialBadge official={item.official} />
      </header>

      <p className="card-desc">{L(item.description)}</p>

      {item.placement && (
        <p className="card-meta">
          <span className="meta-label">{t("card.placement")}:</span>{" "}
          {L(item.placement)}
        </p>
      )}

      {item.example && (
        <div className="example">
          <span className="meta-label">{t("card.example")}</span>
          <pre className="example-body">{item.example}</pre>
        </div>
      )}

      <footer className="card-foot">
        <CopyButton text={item.token} label={t("card.copyTag")} />
      </footer>
    </article>
  );
}
