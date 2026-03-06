"use client";

import Image from "next/image";
import { useState } from "react";
import type { GalleryItem as GalleryItemType } from "@/types";

const HAS_IMAGES = false; // Set to true once gallery images are added

interface GalleryItemProps {
  item: GalleryItemType;
}

export default function GalleryItem({ item }: GalleryItemProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative overflow-hidden rounded-sm mb-4 break-inside-avoid cursor-pointer"
      style={{ backgroundColor: "#1A1A1A" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="aspect-[3/4] relative">
        {HAS_IMAGES ? (
          <Image
            src={item.imagePath}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-500"
            style={{ transform: hovered ? "scale(1.03)" : "scale(1)" }}
            sizes="(max-width: 768px) 50vw, 33vw"
          />
        ) : (
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(135deg, #1f1a14 0%, #1A1A1A 100%)",
            }}
          />
        )}

        {/* Hover overlay */}
        <div
          className="absolute inset-0 flex flex-col justify-end p-4 transition-opacity duration-300"
          style={{
            background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)",
            opacity: hovered ? 1 : 0,
          }}
        >
          <p
            className="text-sm font-medium"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "#F0EDE8" }}
          >
            {item.title}
          </p>
          <p className="text-xs mt-0.5" style={{ color: "#C9A96E" }}>
            {item.medium} — {item.year}
          </p>
        </div>
      </div>
    </div>
  );
}
