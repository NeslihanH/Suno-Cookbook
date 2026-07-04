import { useTranslation } from "react-i18next";

const REPO_URL = "https://github.com/NeslihanH/Suno-Cookbook";

// Visible, always-on statement that this is an unofficial, open-source,
// non-profit fan project, with a link to the source repository.
export function NoticeBanner() {
  const { t } = useTranslation();
  return (
    <div className="notice-banner" role="note">
      <span className="notice-heart" aria-hidden="true">♥</span>
      <span className="notice-text">{t("about.notice")}</span>
      <a
        className="notice-link"
        href={REPO_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="notice-gh" aria-hidden="true">★</span> GitHub
      </a>
    </div>
  );
}
