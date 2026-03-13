"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaXmark, FaChevronLeft, FaChevronRight } from "react-icons/fa6";

interface LightboxProps {
  images: { src: string; alt: string; orientation: string }[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export function Lightbox({
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: LightboxProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && currentIndex > 0) onPrev();
      if (e.key === "ArrowRight" && currentIndex < images.length - 1) onNext();
    },
    [onClose, onPrev, onNext, currentIndex, images.length]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown]);

  const current = images[currentIndex];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 z-10 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-colors"
        aria-label="Close"
      >
        <FaXmark className="w-5 h-5" />
      </button>

      {/* Prev */}
      {currentIndex > 0 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-5 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-colors"
          aria-label="Previous image"
        >
          <FaChevronLeft className="w-4 h-4" />
        </button>
      )}

      {/* Next */}
      {currentIndex < images.length - 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-5 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-colors"
          aria-label="Next image"
        >
          <FaChevronRight className="w-4 h-4" />
        </button>
      )}

      {/* Image */}
      <motion.div
        key={current.src}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
        className="relative max-w-[90vw] max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={current.src}
          alt={current.alt}
          width={current.orientation === "vertical" ? 600 : 900}
          height={current.orientation === "vertical" ? 900 : 600}
          className="max-w-full max-h-[85vh] w-auto h-auto object-contain rounded-lg"
          priority
        />
      </motion.div>

      {/* Counter */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/50 text-sm font-mono">
        {currentIndex + 1} / {images.length}
      </div>
    </motion.div>
  );
}
