import type { ImageItem } from "~/interfaces/video";

export const useFavorites = () => useState<ImageItem[]>("favoritos", () => []);
