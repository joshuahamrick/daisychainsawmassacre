import type { CarouselPiece } from "@/types";

// Drop images into /public/images/carousel/ and update paths here
export const carouselPieces: CarouselPiece[] = [
  {
    id: "piece-1",
    title: "Untitled I",
    medium: "Oil on canvas",
    year: 2024,
    imagePath: "/images/carousel/piece-1.jpg",
  },
  {
    id: "piece-2",
    title: "Untitled II",
    medium: "Acrylic on board",
    year: 2024,
    imagePath: "/images/carousel/piece-2.jpg",
  },
  {
    id: "piece-3",
    title: "Untitled III",
    medium: "Mixed media",
    year: 2023,
    imagePath: "/images/carousel/piece-3.jpg",
  },
  {
    id: "piece-4",
    title: "Untitled IV",
    medium: "Ink on paper",
    year: 2023,
    imagePath: "/images/carousel/piece-4.jpg",
  },
];
