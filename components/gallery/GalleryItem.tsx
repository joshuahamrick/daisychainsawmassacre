"use client";

import Image from "next/image";
import { useState } from "react";
import type { GalleryItem as GalleryItemType } from "@/types";

const HAS_IMAGES = false;

interface GalleryItemProps {
  item: GalleryItemType;
}

export default function GalleryItem({ item }: GalleryItemProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        marginBottom: "1rem",
        breakInside: "avoid",
        cursor: "pointer",
        border: hovered ? "2px solid #ff00cc" : "2px solid #3d0060",
        boxShadow: hovered ? "0 0 20px rgba(255, 0, 204, 0.45)" : "none",
        transition: "border-color 0.3s, box-shadow 0.3s",
        backgroundColor: "#180025",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ aspectRatio: "3/4", position: "relative" }}>
        {HAS_IMAGES ? (
          <Image
            src={item.imagePath}
            alt={item.title}
            fill
            className="object-cover"
            style={{
              transform: hovered ? "scale(1.03)" : "scale(1)",
              transition: "transform 0.5s",
            }}
            sizes="(max-width: 768px) 50vw, 33vw"
          />
        ) : (
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(135deg, #1a0030 0%, #180025 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ fontSize: "1.5rem", opacity: 0.18, color: "#ff00cc" }}>✦</span>
          </div>
        )}

        {/* Hover overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(13, 0, 16, 0.92) 0%, transparent 60%)",
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.3s",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: "0.75rem",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-boogaloo), 'Arial Black', sans-serif",
              fontSize: "0.95rem",
              color: "#f5f0ff",
            }}
          >
            {item.title}
          </p>
          <p
            style={{
              fontSize: "0.65rem",
              color: "#ff00cc",
              fontFamily: "var(--font-courier), 'Courier New', monospace",
              textShadow: "0 0 6px #ff00cc",
            }}
          >
            {item.medium} — {item.year}
          </p>
        </div>
      </div>
    </div>
  );
}
