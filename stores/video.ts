import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { ImageItem } from '~/interfaces/video';

export const useVideoStore = defineStore('videos', () => {
  const favorites = ref<ImageItem[]>([]);

  const addFavorite = (image: ImageItem) => {
    // Verifica se a imagem já está nos favoritos
    const isAlreadyFavorite = favorites.value.some((v) => v.id === image.id);
    
    // Se não estiver nos favoritos, adiciona
    if (!isAlreadyFavorite) {
      favorites.value.push(image);
    }
  };

  const deleteFavorite = (id: number) => {
    // Remove a imagem do favoritos
    favorites.value = favorites.value.filter((v) => v.id !== id);
  };

  return { addFavorite, deleteFavorite, favorites };
});
