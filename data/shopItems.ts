import type { ShopItem } from "@/types";

// Drop images into /public/images/shop/ and update paths here
export const shopItems: ShopItem[] = [
  {
    id: "shop-1",
    title: "Study in Gold (Print)",
    price: 45,
    imagePath: "/images/shop/shop-1.jpg",
    etsyUrl: "https://etsy.com/shop/daisychainsawmassacre",
    available: true,
  },
  {
    id: "shop-2",
    title: "Quiet Interior (Original)",
    price: 380,
    imagePath: "/images/shop/shop-2.jpg",
    etsyUrl: "https://etsy.com/shop/daisychainsawmassacre",
    available: true,
  },
  {
    id: "shop-3",
    title: "Figure Study (Print)",
    price: 35,
    imagePath: "/images/shop/shop-3.jpg",
    etsyUrl: "https://etsy.com/shop/daisychainsawmassacre",
    available: false,
  },
];
