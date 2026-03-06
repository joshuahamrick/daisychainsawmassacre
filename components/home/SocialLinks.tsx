"use client";

import Link from "next/link";
import { socialLinks } from "@/data/socialLinks";

// filter: invert(1) hue-rotate(180deg) + mix-blend-mode: screen
// → white bg becomes transparent on dark bg, magenta stays magenta
// → on hover (button goes #ff00cc), icon auto-inverts to light
const pngIcon = (src: string): React.ReactNode => (
  <img
    src={src}
    alt=""
    style={{
      width: 30,
      height: 30,
      objectFit: "contain",
      imageRendering: "pixelated",
      filter: "invert(1) hue-rotate(180deg)",
      mixBlendMode: "screen",
      display: "block",
    }}
  />
);

const iconMap: Record<string, React.ReactNode> = {
  instagram: pngIcon("/icons/instagram.png"),
  tiktok: pngIcon("/icons/tiktok.png"),
  bluesky: pngIcon("/icons/bluesky.png"),
  email: pngIcon("/icons/mail.png"),
};

const iconMapHover: Record<string, React.ReactNode> = {
  instagram: pngIcon("/icons/instagram.png"),
  tiktok: pngIcon("/icons/tiktok.png"),
  bluesky: pngIcon("/icons/bluesky.png"),
  email: pngIcon("/icons/mail.png"),
};

export default function SocialLinks() {
  return (
    <div
      style={{
        width: "280px",
        border: "3px solid #ff00cc",
        borderTop: "none",
        backgroundColor: "#100018",
        padding: "0.75rem 2rem",
        boxSizing: "border-box",
      }}
    >
      <p
        style={{
          fontSize: "0.6rem",
          letterSpacing: "3px",
          textTransform: "uppercase",
          color: "#8855aa",
          fontFamily: "var(--font-courier), 'Courier New', monospace",
          marginBottom: "0.6rem",
        }}
      >
        ✦ find me on ✦
      </p>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {socialLinks.map((link) => {
          const isInternal = link.url.startsWith("/");
          return (
            <PixelIconLink
              key={link.id}
              href={link.url}
              label={link.label}
              isInternal={isInternal}
              icon={iconMap[link.id]}
              iconHover={iconMapHover[link.id]}
            />
          );
        })}
      </div>
    </div>
  );
}

function PixelIconLink({
  href,
  label,
  isInternal,
  icon,
  iconHover,
}: {
  href: string;
  label: string;
  isInternal: boolean;
  icon: React.ReactNode;
  iconHover: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      {...(!isInternal && { target: "_blank", rel: "noopener noreferrer" })}
      className="pixel-social-link"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "38px",
        height: "38px",
        border: "1px solid rgba(255, 0, 204, 0.5)",
        backgroundColor: "transparent",
        position: "relative",
        transition: "background-color 0.15s, box-shadow 0.15s",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.backgroundColor = "#ff00cc";
        el.style.boxShadow = "0 0 12px rgba(255, 0, 204, 0.7)";
        const normal = el.querySelector(".icon-normal") as HTMLElement | null;
        const hover = el.querySelector(".icon-hover") as HTMLElement | null;
        if (normal) normal.style.display = "none";
        if (hover) hover.style.display = "block";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.backgroundColor = "transparent";
        el.style.boxShadow = "none";
        const normal = el.querySelector(".icon-normal") as HTMLElement | null;
        const hover = el.querySelector(".icon-hover") as HTMLElement | null;
        if (normal) normal.style.display = "block";
        if (hover) hover.style.display = "none";
      }}
    >
      <span className="icon-normal" style={{ display: "block" }}>
        {icon}
      </span>
      <span className="icon-hover" style={{ display: "none", position: "absolute" }}>
        {iconHover}
      </span>
    </Link>
  );
}
