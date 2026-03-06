import PageHeader from "@/components/ui/PageHeader";
import ShopGrid from "@/components/shop/ShopGrid";
import Link from "next/link";

export const metadata = {
  title: "Shop — daisychainsawmassacre",
};

export default function ShopPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
      <PageHeader
        title="Shop"
        subtitle="Original works and limited prints — also available on Etsy"
      />

      <ShopGrid />

      <div className="mt-16 pt-8 border-t" style={{ borderColor: "#2a2a2a" }}>
        <p className="text-sm mb-4" style={{ color: "#6B6B6B" }}>
          Looking for something custom? Commissions are open.
        </p>
        <Link
          href="/contact?subject=Commission"
          className="text-sm tracking-widest uppercase px-6 py-3 transition-all inline-block"
          style={{
            border: "1px solid #C9A96E",
            color: "#C9A96E",
            borderRadius: "2px",
          }}
        >
          Enquire about a Commission
        </Link>
      </div>
    </div>
  );
}
