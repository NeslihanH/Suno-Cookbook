import { useTranslation } from "react-i18next";
import { platformFacts } from "../data/content";
import { useLocalized } from "../hooks/useLocalized";
import { Badge } from "./Badge";

// Renders the Models & Features reference (not a searchable card grid).
export function PlatformView() {
  const { t } = useTranslation();
  const L = useLocalized();
  const { models, features, plans, limits, commercial } = platformFacts;

  return (
    <div className="platform">
      <section className="platform-section">
        <h2 className="section-title">{t("platform.models")}</h2>
        <div className="platform-grid">
          {models.map((m) => (
            <article key={m.id} className="card platform-card">
              <header className="card-head">
                <h3 className="platform-name">{m.name}</h3>
                <Badge variant={m.tier === "free" ? "free" : "paid"} />
              </header>
              {(m.released || m.audio) && (
                <p className="card-meta small">
                  {m.released}
                  {m.released && m.audio ? " · " : ""}
                  {m.audio}
                </p>
              )}
              <p className="card-desc">{L(m.summary)}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="platform-section">
        <h2 className="section-title">{t("platform.features")}</h2>
        <div className="platform-grid">
          {features.map((f) => (
            <article key={f.id} className="card platform-card">
              <header className="card-head">
                <h3 className="platform-name">{f.name}</h3>
                {f.beta && <Badge variant="beta" />}
              </header>
              <p className="card-desc">{L(f.description)}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="platform-section">
        <h2 className="section-title">{t("platform.plans")}</h2>
        <div className="platform-grid">
          {plans.map((p) => (
            <article key={p.id} className="card platform-card plan-card">
              <header className="card-head">
                <h3 className="platform-name">{p.name}</h3>
                <span
                  className={`badge ${p.commercialUse ? "badge-paid" : "badge-community"}`}
                >
                  {p.commercialUse
                    ? t("platform.commercialYes")
                    : t("platform.commercialNo")}
                </span>
              </header>
              <p className="card-desc">{L(p.highlights)}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="platform-section">
        <h2 className="section-title">{t("platform.limits")}</h2>
        <ul className="fact-list">
          {[...limits, ...commercial].map((item) => (
            <li key={item.id} className="fact-row">
              <div className="fact-label">
                {L(item.label)}
                <Badge variant={item.official ? "official" : "community"} />
              </div>
              <div className="fact-value">{L(item.value)}</div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
