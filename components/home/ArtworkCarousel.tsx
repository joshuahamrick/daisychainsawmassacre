"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import CarouselArrow from "@/components/ui/CarouselArrow";
import { carouselPieces } from "@/data/carouselPieces";

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
  }),
};

export default function ArtworkCarousel() {
  const [[currentIndex, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    const newIndex =
      (currentIndex + newDirection + carouselPieces.length) % carouselPieces.length;
    setPage([newIndex, newDirection]);
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") paginate(-1);
      if (e.key === "ArrowRight") paginate(1);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [currentIndex]);

  const piece = carouselPieces[currentIndex];

  return (
    <div className="w-full flex flex-col gap-4">
      {/* Slide container */}
      <div
        className="relative w-full aspect-[3/4] rounded-sm overflow-hidden"
        style={{ backgroundColor: "#1A1A1A" }}
      >
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <div
              className="absolute inset-0 flex items-end"
              style={{
                background:
                  "linear-gradient(160deg, #181310 0%, #221c10 50%, #1A1A1A 100%)",
              }}
            >
              {/* Placeholder artwork panel — replace with <Image> once images exist */}
              <div className="absolute inset-0 flex items-center justify-center">
                <p
                  className="text-xs tracking-widest uppercase text-center px-4"
                  style={{ color: "#2a2a2a" }}
                >
                  {piece.imagePath}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <CarouselArrow direction="left" onClick={() => paginate(-1)} />
        <CarouselArrow direction="right" onClick={() => paginate(1)} />
      </div>

      {/* Caption */}
      <div>
        <p
          className="text-base font-medium"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "#F0EDE8" }}
        >
          {piece.title}
        </p>
        <p className="text-sm mt-0.5" style={{ color: "#6B6B6B" }}>
          {piece.medium} — {piece.year}
        </p>
      </div>

      {/* Dot indicators */}
      <div className="flex items-center gap-2">
        {carouselPieces.map((_, i) => (
          <button
            key={i}
            onClick={() => setPage([i, i > currentIndex ? 1 : -1])}
            aria-label={`Go to slide ${i + 1}`}
            className="w-1.5 h-1.5 rounded-full transition-all"
            style={{
              backgroundColor: i === currentIndex ? "#C9A96E" : "#2a2a2a",
              transform: i === currentIndex ? "scale(1.3)" : "scale(1)",
            }}
          />
        ))}
      </div>
    </div>
  );
}
