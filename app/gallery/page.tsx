import PageHeader from "@/components/ui/PageHeader";
import GalleryGrid from "@/components/gallery/GalleryGrid";

export const metadata = {
  title: "Gallery — daisychainsawmassacre",
};

export default function GalleryPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
      <PageHeader title="Gallery" subtitle="Selected works, 2022–present" />
      <GalleryGrid />
    </div>
  );
}
