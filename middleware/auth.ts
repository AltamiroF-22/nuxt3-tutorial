const logado = true;

//to add global rename this file as: auth.global.ts

export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path !== "/login" && !logado) return navigateTo("/login");
  if (to.path === "/login" && logado) return navigateTo("/");
});
