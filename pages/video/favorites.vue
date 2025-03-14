<template>
  <div class="container">
    <div v-if="favorites" class="gallery">
      <div v-for="image in favorites" :key="image.id" class="card">
        <img :src="image.image" :alt="image.description" class="card-img" />
        <div class="card-body">
          <h2 class="card-title">{{ image.description }}</h2>
        </div>
        <div class="">
          <button @click="handleRemoveFavorite(image.id)">
            remover dos favoritos
          </button>
        </div>
      </div>
    </div>
    <p v-if="!favorites.length">Sem favoritos ate o momento</p>
  </div>
</template>

<script setup lang="ts">
// const images = useFavorites();
const ImageVideoStore = useVideoStore();
const { $showErrorToast, $toast } = useNuxtApp();

const { favorites } = storeToRefs(ImageVideoStore);

// const handleRemoveFavorite = (id: number) => {
//   ImageVideoStore.deleteFavorite(id);
//   $showErrorToast("Erro ao desfavoritar!");
// };

const handleRemoveFavorite = (id: number) => {
  ImageVideoStore.deleteFavorite(id);
  $toast.success("desfavoritado com succeso!");
};
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

.card:hover {
  transform: scale(1.05);
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
