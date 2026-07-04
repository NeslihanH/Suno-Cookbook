import { useTranslation } from "react-i18next";
import { useTheme } from "../hooks/useTheme";
import { SUPPORTED_LOCALES } from "../i18n";

type Props = {
  query: string;
  onQuery: (v: string) => void;
};

export function Header({ query, onQuery }: Props) {
  const { t, i18n } = useTranslation();
  const { theme, toggle } = useTheme();
  const activeLang = i18n.language.slice(0, 2);

  return (
    <header className="app-header">
      <div className="header-top">
        <div className="brand">
          <span className="brand-mark">{"♪"}</span>
          <div>
            <h1 className="brand-title">{t("app.title")}</h1>
            <p className="brand-tagline">{t("app.tagline")}</p>
          </div>
        </div>

        <div className="header-controls">
          <div className="lang-switch" role="group" aria-label="Language">
            {SUPPORTED_LOCALES.map((lng) => (
              <button
                key={lng}
                type="button"
                className={`lang-btn${activeLang === lng ? " is-active" : ""}`}
                onClick={() => i18n.changeLanguage(lng)}
              >
                {lng.toUpperCase()}
              </button>
            ))}
          </div>
          <button
            type="button"
            className="theme-btn"
            onClick={toggle}
            aria-label={theme === "dark" ? t("theme.toggleToLight") : t("theme.toggleToDark")}
            title={theme === "dark" ? t("theme.toggleToLight") : t("theme.toggleToDark")}
          >
            {theme === "dark" ? "☀️" : "\u{1F319}"}
          </button>
        </div>
      </div>

      <div className="search-wrap">
        <span className="search-icon" aria-hidden="true">{"\u{1F50D}"}</span>
        <input
          type="search"
          className="search-input"
          placeholder={t("app.search")}
          value={query}
          onChange={(e) => onQuery(e.target.value)}
          autoComplete="off"
          spellCheck={false}
        />
        {query && (
          <button type="button" className="search-clear" onClick={() => onQuery("")}>
            {t("app.clear")}
          </button>
        )}
      </div>
    </header>
  );
}
