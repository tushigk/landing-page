"use client";

import i18n from "i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { initReactI18next } from "react-i18next";

i18n
  .use(
    resourcesToBackend((language, namespace) =>
      import(`./public/locales/${language}/${namespace}.json`)
    )
  )
  .use(initReactI18next)
  .init({
    fallbackLng: "mn",
    debug: false,
    supportedLngs: ["en", "mn"],
    interpolation: {
      escapeVlaue: false,
    },
    detection: {
      order: ["cookie", "localStorage", "navigator"],
      caches: ["cookie"],
    },
  });

export default i18n;
