// plugins/piniaPersistedstate.ts
import { defineNuxtPlugin, useNuxtApp } from "#app";
import { usePinia } from "#imports";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

export default defineNuxtPlugin(() => {
  const nuxtApp = useNuxtApp();
  if (nuxtApp.ssrContext) return; // Evita execução no SSR

  const pinia = usePinia();
  pinia.use(piniaPluginPersistedstate);
});
