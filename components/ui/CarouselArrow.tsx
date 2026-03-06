import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselArrowProps {
  direction: "left" | "right";
  onClick: () => void;
  disabled?: boolean;
}

export default function CarouselArrow({ direction, onClick, disabled }: CarouselArrowProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === "left" ? "Previous" : "Next"}
      className="absolute top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 rounded-full transition-all"
      style={{
        [direction === "left" ? "left" : "right"]: "0.5rem",
        backgroundColor: "rgba(26, 26, 26, 0.85)",
        border: "1px solid rgba(201, 169, 110, 0.3)",
        color: "#C9A96E",
        opacity: disabled ? 0.3 : 1,
        cursor: disabled ? "not-allowed" : "pointer",
      }}
    >
      {direction === "left" ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
    </button>
  );
}
