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
      <div className="flex items-center gap-3 mb-8">
        <div className="w-1.5 h-1.5 rounded-full bg-blue" />
        <h2 className="text-xs tracking-[0.08em] uppercase text-text-tertiary font-mono">
          {number && <span className="text-text-tertiary/50 mr-2">{number}</span>}
          {label}
        </h2>
        <div className="flex-1 h-px bg-border/60" />
      </div>
    </FadeIn>
  );
}
