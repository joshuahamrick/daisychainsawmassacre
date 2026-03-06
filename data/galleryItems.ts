import type { GalleryItem } from "@/types";

// Drop images into /public/images/gallery/ and update paths here
export const galleryItems: GalleryItem[] = [
  {
    id: "g-1",
    title: "Study in Gold",
    medium: "Oil on canvas",
    year: 2024,
    imagePath: "/images/gallery/g-1.jpg",
    category: "Paintings",
  },
  {
    id: "g-2",
    title: "Quiet Interior",
    medium: "Acrylic on board",
    year: 2024,
    imagePath: "/images/gallery/g-2.jpg",
    category: "Paintings",
  },
  {
    id: "g-3",
    title: "Figure Study",
    medium: "Graphite on paper",
    year: 2023,
    imagePath: "/images/gallery/g-3.jpg",
    category: "Drawings",
  },
  {
    id: "g-4",
    title: "Process Notes",
    medium: "Ink on paper",
    year: 2023,
    imagePath: "/images/gallery/g-4.jpg",
    category: "WIP",
  },
  {
    id: "g-5",
    title: "Still Life with Draped Cloth",
    medium: "Oil on linen",
    year: 2023,
    imagePath: "/images/gallery/g-5.jpg",
    category: "Paintings",
  },
  {
    id: "g-6",
    title: "Composition in Dark",
    medium: "Charcoal on paper",
    year: 2022,
    imagePath: "/images/gallery/g-6.jpg",
    category: "Drawings",
  },
];
