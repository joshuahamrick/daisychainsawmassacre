export interface CarouselPiece {
  id: string;
  title: string;
  medium: string;
  year: number;
  imagePath: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  medium: string;
  year: number;
  imagePath: string;
  category: "Paintings" | "Drawings" | "WIP";
}

export interface ShopItem {
  id: string;
  title: string;
  price: number;
  imagePath: string;
  etsyUrl: string;
  available: boolean;
}

export interface SocialLink {
  id: string;
  platform: string;
  url: string;
  label: string;
}
