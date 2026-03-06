"use client";

import { useState } from "react";
import GalleryItem from "./GalleryItem";
import { galleryItems } from "@/data/galleryItems";
import type { GalleryItem as GalleryItemType } from "@/types";

const CATEGORIES = ["All", "Paintings", "Drawings", "WIP"] as const;
type Category = (typeof CATEGORIES)[number];

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filtered: GalleryItemType[] =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div>
      {/* Category filters */}
      <div className="flex gap-6 mb-8 flex-wrap">
        {CATEGORIES.map((cat) => {
          const isActive = cat === activeCategory;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="text-sm tracking-wide pb-1 transition-colors relative"
              style={{
                color: isActive ? "#C9A96E" : "#6B6B6B",
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                background: "none",
                border: "none",
                cursor: "pointer",
                borderBottom: isActive ? "1px solid #C9A96E" : "1px solid transparent",
              }}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Masonry grid */}
      <div className="columns-2 md:columns-3 gap-4">
        {filtered.map((item) => (
          <GalleryItem key={item.id} item={item} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center py-16" style={{ color: "#6B6B6B" }}>
          No works in this category yet.
        </p>
      )}
    </div>
  );
}
