// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  alias: {
    css: "<rootDir>/assets/css",
  },
  css: ["@/assets/css/main.css"],
  modules: [
    "@pinia/nuxt",
    "pinia-plugin-persistedstate/nuxt",
    "@nuxtjs/i18n", // Módulo de tradução
  ],
  pinia: {
    storesDirs: ["./stores/**"],
  },
  i18n: {
    vueI18n: "./i18n.config.ts",
  },
});
