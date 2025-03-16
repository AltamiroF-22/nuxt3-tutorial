export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: [
    "@/assets/css/main.css",  // CSS principal
    "@/assets/css/tailwind.css", // Arquivo Tailwind específico
  ],
  alias: {
    // Alias de CSS não é realmente necessário se você já tem caminhos corretos no css
    // css: "<rootDir>/assets/css", // Você pode remover isso se não for necessário
  },
  modules: [
    "@pinia/nuxt",
    "pinia-plugin-persistedstate/nuxt",
    "@nuxtjs/i18n", // Módulo de tradução
    "@nuxt/ui", // Módulo de UI do Nuxt
  ],
  pinia: {
    storesDirs: ["./stores/**"], // Diretório das stores do Pinia
  },
  i18n: {
    vueI18n: "./i18n.config.ts", // Caminho do arquivo de configuração i18n
  },
});
