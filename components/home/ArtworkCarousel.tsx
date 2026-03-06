"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { carouselPieces } from "@/data/carouselPieces";

const COLS = 4;
const ROWS = 2;
const VISIBLE = COLS * ROWS; // 8

function ArrowButton({ side, onClick }: { side: "left" | "right"; onClick: () => void }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onClick={onClick}
      aria-label={side === "left" ? "Previous" : "Next"}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="absolute top-0 bottom-0 flex items-center z-10"
      style={{
        [side]: 0,
        width: `${100 / COLS}%`,
        justifyContent: side === "left" ? "flex-start" : "flex-end",
        paddingLeft: side === "left" ? "10px" : "0",
        paddingRight: side === "right" ? "10px" : "0",
        background: "none",
        border: "none",
        cursor: "pointer",
      }}
    >
      <span
        className="flex items-center justify-center w-9 h-9"
        style={{
          backgroundColor: hovered ? "rgba(13, 0, 16, 0.85)" : "rgba(13, 0, 16, 0.4)",
          border: "1px solid #ff00cc",
          color: hovered ? "#ff00cc" : "rgba(255, 0, 204, 0.45)",
          boxShadow: hovered ? "0 0 10px rgba(255, 0, 204, 0.6)" : "none",
          transition: "background-color 0.15s, color 0.15s, box-shadow 0.15s",
        }}
      >
        {side === "left" ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
      </span>
    </button>
  );
}

export default function ArtworkCarousel() {
  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const canPrev = startIndex > 0;
  const canNext = startIndex + VISIBLE < carouselPieces.length;

  const go = (dir: 1 | -1) => {
    if (dir === -1 && !canPrev) return;
    if (dir === 1 && !canNext) return;
    setDirection(dir);
    setStartIndex((i) => i + dir);
  };

  const visible = carouselPieces.slice(startIndex, startIndex + VISIBLE);

  return (
    <div className="w-full relative overflow-hidden">
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={startIndex}
          custom={direction}
          initial={{ x: direction > 0 ? 50 : -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: direction > 0 ? -50 : 50, opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${COLS}, 1fr)`,
            gridTemplateRows: `repeat(${ROWS}, 1fr)`,
            border: "2px solid #ff00cc",
            boxShadow: "0 0 28px rgba(255, 0, 204, 0.25)",
          }}
        >
          {visible.map((piece) => (
            <div
              key={piece.id}
              className="relative aspect-square"
              style={{
                backgroundColor: "#180025",
                outline: "1px solid #3d0060",
              }}
            >
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(135deg, #1a0030 0%, #2a0050 60%, #180025 100%)",
                }}
              />
            </div>
          ))}
        </motion.div>
      </AnimatePresence>

      {canPrev && <ArrowButton side="left" onClick={() => go(-1)} />}
      {canNext && <ArrowButton side="right" onClick={() => go(1)} />}
    </div>
  );
}
