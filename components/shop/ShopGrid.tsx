import ShopItem from "./ShopItem";
import { shopItems } from "@/data/shopItems";

export default function ShopGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {shopItems.map((item) => (
        <ShopItem key={item.id} item={item} />
      ))}
    </div>
  );
}
