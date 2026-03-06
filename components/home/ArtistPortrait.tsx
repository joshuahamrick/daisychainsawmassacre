import Image from "next/image";

const PORTRAIT_PATH = "/images/portrait/portrait.jpg";
const HAS_PORTRAIT = false;

export default function ArtistPortrait() {
  return (
    <div
      className="relative flex-shrink-0 overflow-hidden"
      style={{
        width: 280,
        height: 280,
        border: "3px solid #ff00cc",
        boxShadow: "0 0 20px rgba(255, 0, 204, 0.45), inset 0 0 16px rgba(255, 0, 204, 0.05)",
        backgroundColor: "#180025",
      }}
    >
      {HAS_PORTRAIT ? (
        <Image
          src={PORTRAIT_PATH}
          alt="Artist portrait"
          fill
          className="object-cover"
          priority
          sizes="280px"
        />
      ) : (
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, #1a0030 0%, #2d0050 50%, #180025 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ fontSize: "3.5rem", opacity: 0.2, color: "#ff00cc" }}>✦</span>
        </div>
      )}
    </div>
  );
}
