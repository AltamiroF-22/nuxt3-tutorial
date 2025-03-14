export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.directive("date-horario", {
    mounted(el, binding) {
      const dataFormatada = new Date(el.innerText);
      el.innerHTML = formataData(dataFormatada, binding.value);
    },
  });
});

const formataData = (date: Date, tipo: string = "") => {
  switch (tipo) {
    case "dd/mm/yyyy":
      return date.toLocaleDateString("pt-BR");
    case "hh:mm":
      return date.toLocaleTimeString("pt-BR");
    default:
      return date.toLocaleString("pt-BR");
  }
};
