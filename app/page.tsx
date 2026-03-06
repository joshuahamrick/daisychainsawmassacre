import ArtistPortrait from "@/components/home/ArtistPortrait";
import SocialLinks from "@/components/home/SocialLinks";
import ArtworkCarousel from "@/components/home/ArtworkCarousel";

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
        {/* Left: Portrait + Social links */}
        <div className="flex flex-col">
          <ArtistPortrait />
          <SocialLinks />
        </div>

        {/* Right: Artwork carousel */}
        <div>
          <ArtworkCarousel />
        </div>
      </div>
    </div>
  );
}
