import type { Metadata } from "next";
import { Boogaloo, Courier_Prime, VT323 } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

const boogaloo = Boogaloo({
  variable: "--font-boogaloo",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const courierPrime = Courier_Prime({
  variable: "--font-courier",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const vt323 = VT323({
  variable: "--font-vt323",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "daisychainsawmassacre",
  description: "Visual artist — paintings, drawings, and original works.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${boogaloo.variable} ${courierPrime.variable} ${vt323.variable}`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
