import PageHeader from "@/components/ui/PageHeader";
import ShopGrid from "@/components/shop/ShopGrid";
import Link from "next/link";

export const metadata = {
  title: "Shop — daisychainsawmassacre",
};

export default function ShopPage() {
  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "2.5rem 1rem 3.5rem" }}>
      <PageHeader
        title="Shop"
        subtitle="Original works and limited prints — also available on Etsy"
      />

      <ShopGrid />

      <div
        style={{
          marginTop: "4rem",
          paddingTop: "2rem",
          borderTop: "1px solid #3d0060",
        }}
      >
        <p
          style={{
            fontSize: "0.8rem",
            color: "#8855aa",
            fontFamily: "var(--font-courier), 'Courier New', monospace",
            marginBottom: "1rem",
            letterSpacing: "1px",
          }}
        >
          ✦ commissions are open ✦
        </p>
        <Link
          href="/contact?subject=Commission"
          style={{
            fontSize: "0.7rem",
            letterSpacing: "3px",
            textTransform: "uppercase",
            padding: "0.75rem 1.5rem",
            border: "1px solid #ff00cc",
            color: "#ff00cc",
            textDecoration: "none",
            fontFamily: "var(--font-courier), 'Courier New', monospace",
            display: "inline-block",
            boxShadow: "0 0 10px rgba(255, 0, 204, 0.2)",
          }}
        >
          Enquire about a Commission
        </Link>
      </div>
    </div>
  );
}
