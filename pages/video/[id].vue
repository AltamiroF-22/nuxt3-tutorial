<template>
  <div>
    <p>PARAMS: {{ id }}</p>
    <VideoDetalhes />
    <VideoControlePlay />
  </div>
</template>

<script setup>
const route = useRoute();
const { id } = route.params;

definePageMeta({
  layout: "exibicao",
  middleware: ["auth", "video"],
});
</script>
