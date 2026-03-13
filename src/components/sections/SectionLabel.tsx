"use client";

import { FadeIn } from "@/components/animations/FadeIn";

interface SectionLabelProps {
  label: string;
  number?: string;
  delay?: number;
}

export function SectionLabel({ label, number, delay = 0 }: SectionLabelProps) {
  return (
    <FadeIn delay={delay}>
      <div className="mb-8">
        <h2 className="text-sm tracking-[0.06em] uppercase text-text-tertiary font-mono mb-3">
          {number && <span className="text-text-tertiary/50 mr-2">{number}</span>}
          {label}
        </h2>
        <div className="w-full h-px bg-border/60" />
      </div>
    </FadeIn>
  );
}
