"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/shop", label: "Shop" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav
      style={{
        backgroundColor: "#0d0010",
        borderBottom: "2px solid #ff00cc",
        boxShadow: "0 2px 24px rgba(255, 0, 204, 0.35)",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 1rem" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "60px",
          }}
        >
          {/* Brand */}
          <Link
            href="/"
            style={{
              fontFamily: "var(--font-boogaloo), 'Arial Black', sans-serif",
              fontSize: "1.35rem",
              color: "#ff00cc",
              textDecoration: "none",
              textShadow: "0 0 10px #ff00cc, 0 0 24px rgba(255, 0, 204, 0.4)",
              letterSpacing: "1px",
            }}
          >
            <span className="hidden sm:inline">✦ daisychainsawmassacre ✦</span>
            <span className="sm:hidden">✦ DCM ✦</span>
          </Link>

          {/* Nav links */}
          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    fontFamily: "var(--font-courier), 'Courier New', monospace",
                    fontSize: "0.8rem",
                    color: isActive ? "#00e5ff" : "#ff00cc",
                    textDecoration: isActive ? "underline" : "none",
                    letterSpacing: "2px",
                    textShadow: isActive ? "0 0 8px #00e5ff" : "none",
                    textTransform: "uppercase",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      (e.currentTarget as HTMLAnchorElement).style.textDecoration = "underline";
                      (e.currentTarget as HTMLAnchorElement).style.textShadow = "0 0 8px #ff00cc";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      (e.currentTarget as HTMLAnchorElement).style.textDecoration = "none";
                      (e.currentTarget as HTMLAnchorElement).style.textShadow = "none";
                    }
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
