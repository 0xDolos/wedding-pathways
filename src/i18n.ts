import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en.json";
import th from "./locales/th.json";

function getDefaultLanguage() {
  if (typeof navigator !== "undefined") {
    const lang = navigator.language || navigator.languages?.[0] || "en";
    if (lang.toLowerCase().startsWith("th")) {
      return "th";
    }
  }
  return "en";
}

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      th: { translation: th }
    },
    lng: getDefaultLanguage(),
    fallbackLng: "en",
    interpolation: {
      escapeValue: false // React already escapes
    }
  });

export default i18n;