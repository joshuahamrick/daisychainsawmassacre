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
      className="sticky top-0 z-50 border-b"
      style={{
        backgroundColor: "rgba(17, 17, 17, 0.92)",
        backdropFilter: "blur(8px)",
        borderColor: "#2a2a2a",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand name */}
          <Link
            href="/"
            className="font-heading text-lg tracking-wide hover:opacity-80 transition-opacity"
            style={{ color: "#F0EDE8", fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            <span className="hidden sm:inline">daisychainsawmassacre</span>
            <span className="sm:hidden">DCM</span>
          </Link>

          {/* Nav links */}
          <div className="flex items-center gap-6 sm:gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm tracking-wide transition-colors relative"
                  style={{
                    fontFamily: "var(--font-inter), system-ui, sans-serif",
                    color: isActive ? "#C9A96E" : "#F0EDE8",
                  }}
                >
                  {link.label}
                  {isActive && (
                    <span
                      className="absolute -bottom-1 left-0 right-0 h-px"
                      style={{ backgroundColor: "#C9A96E" }}
                    />
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
