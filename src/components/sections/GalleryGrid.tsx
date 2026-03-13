"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { gallery } from "@/app/resources/content";
import { FadeIn } from "@/components/animations/FadeIn";

export function GalleryGrid() {
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const slides = gallery.images.map((img) => ({
    src: img.src,
    alt: img.alt,
  }));

  return (
    <>
      <div className="columns-2 md:columns-3 gap-3 space-y-3">
        {gallery.images.map((img, i) => (
          <FadeIn key={img.src} delay={i * 0.04} y={8}>
            <button
              onClick={() => setLightboxIndex(i)}
              className="break-inside-avoid block w-full rounded-lg overflow-hidden border border-border/40 hover:border-border-hover transition-all duration-200 cursor-zoom-in group"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={img.orientation === "vertical" ? 400 : 600}
                height={img.orientation === "vertical" ? 600 : 400}
                className="w-full h-auto transition-opacity duration-200 group-hover:opacity-90"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </button>
          </FadeIn>
        ))}
      </div>

      <Lightbox
        open={lightboxIndex >= 0}
        index={lightboxIndex}
        close={() => setLightboxIndex(-1)}
        slides={slides}
        styles={{
          container: { backgroundColor: "rgba(0, 0, 0, 0.92)" },
        }}
        animation={{ fade: 200, swipe: 300 }}
        controller={{ closeOnBackdropClick: true }}
      />
    </>
  );
}
