"use client";

import Image from "next/image";
import Link from "next/link";
import type { ShopItem as ShopItemType } from "@/types";

const HAS_IMAGES = false; // Set to true once shop images are added

interface ShopItemProps {
  item: ShopItemType;
}

export default function ShopItem({ item }: ShopItemProps) {
  return (
    <div className="flex flex-col" style={{ color: "#F0EDE8" }}>
      {/* Image */}
      <div
        className="relative w-full aspect-square rounded-sm overflow-hidden mb-4"
        style={{ backgroundColor: "#1A1A1A" }}
      >
        {HAS_IMAGES ? (
          <Image
            src={item.imagePath}
            alt={item.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : (
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(135deg, #1f1a14 0%, #1A1A1A 100%)" }}
          />
        )}

        {!item.available && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/60">
            <span
              className="text-xs tracking-widest uppercase"
              style={{ color: "#6B6B6B" }}
            >
              Sold
            </span>
          </div>
        )}
      </div>

      {/* Info */}
      <p
        className="text-base font-medium mb-1"
        style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
      >
        {item.title}
      </p>
      <p className="text-sm mb-3" style={{ color: "#6B6B6B" }}>
        £{item.price}
      </p>

      {/* Actions */}
      <div className="flex gap-3">
        {item.available && (
          <Link
            href={item.etsyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-widest uppercase px-4 py-2 transition-colors"
            style={{
              border: "1px solid #C9A96E",
              color: "#C9A96E",
              borderRadius: "2px",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#C9A96E";
              (e.currentTarget as HTMLAnchorElement).style.color = "#111111";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent";
              (e.currentTarget as HTMLAnchorElement).style.color = "#C9A96E";
            }}
          >
            Buy on Etsy
          </Link>
        )}
        <Link
          href={`/contact?subject=Commission`}
          className="text-xs tracking-widest uppercase px-4 py-2 transition-colors"
          style={{
            border: "1px solid #2a2a2a",
            color: "#6B6B6B",
            borderRadius: "2px",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.borderColor = "#6B6B6B";
            (e.currentTarget as HTMLAnchorElement).style.color = "#F0EDE8";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.borderColor = "#2a2a2a";
            (e.currentTarget as HTMLAnchorElement).style.color = "#6B6B6B";
          }}
        >
          Enquire
        </Link>
      </div>
    </div>
  );
}
