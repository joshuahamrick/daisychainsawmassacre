"use client";

import Link from "next/link";
import { Instagram, Mail } from "lucide-react";
import { SiTiktok, SiBluesky, SiEtsy } from "react-icons/si";
import { socialLinks } from "@/data/socialLinks";

const iconMap: Record<string, React.ReactNode> = {
  instagram: <Instagram size={20} />,
  tiktok: <SiTiktok size={18} />,
  bluesky: <SiBluesky size={18} />,
  etsy: <SiEtsy size={20} />,
  email: <Mail size={20} />,
};

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-4 mt-4">
      {socialLinks.map((link) => {
        const icon = iconMap[link.id];
        const isInternal = link.url.startsWith("/");

        return (
          <Link
            key={link.id}
            href={link.url}
            aria-label={link.label}
            {...(!isInternal && { target: "_blank", rel: "noopener noreferrer" })}
            className="transition-colors"
            style={{ color: "#6B6B6B" }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.color = "#C9A96E")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.color = "#6B6B6B")
            }
          >
            {icon}
          </Link>
        );
      })}
    </div>
  );
}
