<template>
  <div class="container">
    <h1>{{ $t("title") }}</h1>
    <div class=""></div>
    <NuxtLink to="/video/favorites" class="favorites-link">
      {{ $t("titleFavorite") }}
    </NuxtLink>
    <div v-if="images" class="gallery">
      <div v-for="image in images" :key="image.id" class="card">
        <img :src="image.image" :alt="image.description" class="card-img" />
        <div class="card-body">
          <h2 class="card-title">{{ image.description }}</h2>
        </div>
        <p v-data-horario="'dd/mm/yyyy'">{{ image.datePosted }}</p>
        <div class="">
          <button @click="addFavorite(image)">Adicionar as favoritos</button>
        </div>
      </div>
    </div>
    <p v-else class="loading">Carregando imagens..</p>
  </div>
</template>

<script setup lang="ts">
import type { ImageItem } from "@/interfaces/video";
import { ref } from "vue";

const { $toast } = useNuxtApp();

onMounted(() => {
  $toast.success("Toast adicionando com sucesso!");
});

const images = ref<ImageItem[] | null>(null);

// const favorites = useFavorites();
const { addFavorite } = useVideoStore();

const { data } = await useFetch<ImageItem[]>("/data/images.json");

// Atualiza a ref com os dados
images.value = data.value;
</script>

<style scoped>
/* Estilos gerais */
.container {
  max-width: 1200px;
  margin: 20px auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

/* Título */
h1 {
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
}

/* Link para favoritos */
.favorites-link {
  display: block;
  text-align: center;
  font-size: 18px;
  margin-bottom: 20px;
  text-decoration: none;
  color: #007bff;
}

.favorites-link:hover {
  text-decoration: underline;
}
button {
  padding: 7px;
  cursor: pointer;
  width: 100%;
}

/* Galeria */
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

/* Card */
.card {
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
}

/* Imagem */
.card-img {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

/* Corpo do card */
.card-body {
  padding: 15px;
  text-align: center;
}

/* Título */
.card-title {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
}

/* Link */
.card-link {
  display: inline-block;
  text-decoration: none;
  color: #007bff;
  font-size: 14px;
}

.card-link:hover {
  text-decoration: underline;
}

/* Mensagem de carregamento */
.loading {
  text-align: center;
  font-size: 18px;
  color: red;
}
</style>
