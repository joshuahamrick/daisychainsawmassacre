import Image from "next/image";

// Replace /images/portrait/portrait.jpg with the actual portrait image
const PORTRAIT_PATH = "/images/portrait/portrait.jpg";
const HAS_PORTRAIT = false; // Set to true once you add the image

export default function ArtistPortrait() {
  return (
    <div className="w-full">
      <div
        className="relative w-full aspect-[3/4] rounded-sm overflow-hidden"
        style={{ backgroundColor: "#1A1A1A" }}
      >
        {HAS_PORTRAIT ? (
          <Image
            src={PORTRAIT_PATH}
            alt="Artist portrait"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          /* Placeholder shown until portrait image is added */
          <div
            className="absolute inset-0 flex items-end p-6"
            style={{
              background:
                "linear-gradient(160deg, #1f1a14 0%, #2a2018 50%, #1A1A1A 100%)",
            }}
          >
            <p className="text-xs tracking-widest uppercase" style={{ color: "#6B6B6B" }}>
              Portrait — add /public/images/portrait/portrait.jpg
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
