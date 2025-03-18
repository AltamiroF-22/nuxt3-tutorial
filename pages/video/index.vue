<template>
  <div class="container">
    <h1>{{ $t("title") }}</h1>
    
    <NuxtLink to="/video/favorites" class="favorites-link">
      {{ $t("titleFavorite") }}
    </NuxtLink>

    <div v-if="images" class="grid grid-cols-2 lg:grid-cols-3 items-center justify-center">
      <UCard v-for="image in images" :key="image.id">
        <template #header>
          <h2 class="card-title">{{ image.description }}</h2>
        </template>

        <img :src="image.image" :alt="image.description" class="card-img" />
        <p>{{ formatDate(image.datePosted) }}</p>

        <template #footer>
          <button @click="addFavorite(image)">Adicionar aos favoritos</button>
        </template>
      </UCard>
    </div>

    <p v-else class="loading">Carregando imagens...</p>
  </div>
</template>

<script setup lang="ts">
import type { ImageItem } from "@/interfaces/video";
import { ref, onMounted, watchEffect } from "vue";
import { useNuxtApp } from "#app";
import { useVideoStore } from "@/stores/video";

const { $toast } = useNuxtApp();
const videoStore = useVideoStore();
const { addFavorite } = videoStore;

const images = ref<ImageItem[] | null>(null);

const { data } = useFetch<ImageItem[]>("/data/images.json", { lazy: true });

watchEffect(() => {
  if (data.value) {
    images.value = data.value;
  }
});

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("pt-BR");
};

onMounted(() => {
  if ($toast) {
    $toast.success("Toast adicionado com sucesso!");
  }
});
</script>

<style scoped>

</style>
