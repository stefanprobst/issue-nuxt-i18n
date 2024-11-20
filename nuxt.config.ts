export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  experimental: {
    inlineRouteRules: true,
  },
  future: {
    compatibilityVersion: 4,
  },
  modules: ["@nuxtjs/i18n"],
  i18n: {
    defaultLocale: "en",
    detectBrowserLanguage: {
      redirectOn: "root",
    },
    lazy: true,
    locales: [
      { code: "de", file: "de.json", language: "de" },
      { code: "en", file: "en.json", language: "en" },
    ],
    strategy: "prefix",
  },
});
