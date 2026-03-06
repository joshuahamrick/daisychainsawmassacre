import PageHeader from "@/components/ui/PageHeader";
import GalleryGrid from "@/components/gallery/GalleryGrid";

export const metadata = {
  title: "Gallery — daisychainsawmassacre",
};

export default function GalleryPage() {
  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "2.5rem 1rem 3.5rem" }}>
      <PageHeader title="Gallery" subtitle="Selected works, 2022–present" />
      <GalleryGrid />
    </div>
  );
}
