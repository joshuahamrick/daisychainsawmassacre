"use client";

import Image from "next/image";
import Link from "next/link";
import type { ShopItem as ShopItemType } from "@/types";

const HAS_IMAGES = false;

interface ShopItemProps {
  item: ShopItemType;
}

export default function ShopItem({ item }: ShopItemProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        border: "1px solid #3d0060",
        backgroundColor: "#100018",
      }}
    >
      {/* Image */}
      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "1/1",
          overflow: "hidden",
          backgroundColor: "#180025",
        }}
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
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(135deg, #1a0030 0%, #180025 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ fontSize: "2rem", opacity: 0.15, color: "#ff00cc" }}>✦</span>
          </div>
        )}

        {!item.available && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(13, 0, 16, 0.75)",
            }}
          >
            <span
              style={{
                fontSize: "0.7rem",
                letterSpacing: "4px",
                textTransform: "uppercase",
                color: "#8855aa",
                fontFamily: "var(--font-courier), 'Courier New', monospace",
                border: "1px solid #8855aa",
                padding: "0.25rem 0.75rem",
              }}
            >
              SOLD
            </span>
          </div>
        )}
      </div>

      {/* Info */}
      <div style={{ padding: "0.75rem 1rem", borderTop: "1px solid #3d0060" }}>
        <p
          style={{
            fontFamily: "var(--font-boogaloo), 'Arial Black', sans-serif",
            fontSize: "1rem",
            color: "#f5f0ff",
            marginBottom: "0.25rem",
          }}
        >
          {item.title}
        </p>
        <p
          style={{
            fontSize: "0.9rem",
            color: "#ff00cc",
            fontFamily: "var(--font-courier), 'Courier New', monospace",
            textShadow: "0 0 6px rgba(255, 0, 204, 0.4)",
            marginBottom: "0.75rem",
            fontWeight: "bold",
          }}
        >
          £{item.price}
        </p>

        <div style={{ display: "flex", gap: "0.5rem" }}>
          {item.available && (
            <Link
              href={item.etsyUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: "0.65rem",
                letterSpacing: "2px",
                textTransform: "uppercase",
                padding: "0.4rem 0.75rem",
                border: "1px solid #ff00cc",
                color: "#ff00cc",
                textDecoration: "none",
                fontFamily: "var(--font-courier), 'Courier New', monospace",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#ff00cc";
                (e.currentTarget as HTMLAnchorElement).style.color = "#0d0010";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 0 12px #ff00cc";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent";
                (e.currentTarget as HTMLAnchorElement).style.color = "#ff00cc";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
              }}
            >
              Buy on Etsy
            </Link>
          )}
          <Link
            href="/contact?subject=Commission"
            style={{
              fontSize: "0.65rem",
              letterSpacing: "2px",
              textTransform: "uppercase",
              padding: "0.4rem 0.75rem",
              border: "1px solid #3d0060",
              color: "#8855aa",
              textDecoration: "none",
              fontFamily: "var(--font-courier), 'Courier New', monospace",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "#8855aa";
              (e.currentTarget as HTMLAnchorElement).style.color = "#f5f0ff";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "#3d0060";
              (e.currentTarget as HTMLAnchorElement).style.color = "#8855aa";
            }}
          >
            Enquire
          </Link>
        </div>
      </div>
    </div>
  );
}
