export default defineNuxtRouteMiddleware((to, from) => {
  const paramValue = +to.params.id;
  if (isNaN(paramValue) || paramValue < 0) {
    return navigateTo("/video");
  }
});
