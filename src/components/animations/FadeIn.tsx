"use client";

import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  className?: string;
}

export function FadeIn({
  children,
  delay = 0,
  duration = 0.4,
  y = 12,
  className = "",
}: FadeInProps) {
  return (
    <div
      className={`animate-fade-in-up ${className}`}
      style={{
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
        ["--fade-y" as string]: `${y}px`,
      }}
    >
      {children}
    </div>
  );
}
