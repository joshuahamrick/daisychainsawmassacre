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
      <div style={{ display: "flex", gap: "0.5rem", marginBottom: "2rem", flexWrap: "wrap" }}>
        {CATEGORIES.map((cat) => {
          const isActive = cat === activeCategory;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                fontFamily: "var(--font-courier), 'Courier New', monospace",
                fontSize: "0.72rem",
                letterSpacing: "2px",
                textTransform: "uppercase",
                padding: "0.4rem 1rem",
                border: isActive ? "1px solid #ff00cc" : "1px solid #3d0060",
                backgroundColor: isActive ? "rgba(255, 0, 204, 0.12)" : "transparent",
                color: isActive ? "#ff00cc" : "#8855aa",
                cursor: "pointer",
                boxShadow: isActive ? "0 0 10px rgba(255, 0, 204, 0.25)" : "none",
                transition: "all 0.2s",
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
        <p
          style={{
            textAlign: "center",
            padding: "4rem 0",
            color: "#8855aa",
            fontFamily: "var(--font-courier), 'Courier New', monospace",
            letterSpacing: "2px",
            fontSize: "0.85rem",
          }}
        >
          ✦ no works in this category yet ✦
        </p>
      )}
    </div>
  );
}
