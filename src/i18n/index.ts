import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en.json";
import tr from "./locales/tr.json";
import es from "./locales/es.json";
import pt from "./locales/pt.json";
import de from "./locales/de.json";

export const SUPPORTED_LOCALES = ["en", "tr", "es", "pt", "de"] as const;
export type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];

const STORAGE_KEY = "suno-cookbook.locale";

function detectInitialLocale(): SupportedLocale {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored && SUPPORTED_LOCALES.includes(stored as SupportedLocale)) {
    return stored as SupportedLocale;
  }
  const nav = navigator.language.slice(0, 2).toLowerCase();
  return (SUPPORTED_LOCALES as readonly string[]).includes(nav)
    ? (nav as SupportedLocale)
    : "en";
}

void i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    tr: { translation: tr },
    es: { translation: es },
    pt: { translation: pt },
    de: { translation: de },
  },
  lng: detectInitialLocale(),
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

i18n.on("languageChanged", (lng) => {
  localStorage.setItem(STORAGE_KEY, lng);
  document.documentElement.lang = lng;
});

document.documentElement.lang = i18n.language;

export default i18n;
