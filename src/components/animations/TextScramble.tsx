"use client";

import { useEffect, useState, useRef, useCallback } from "react";

const GLYPHS = "_-/\\|#@&*+=~<>?!.";

interface TextScrambleProps {
  text: string;
  className?: string;
  speed?: number;
  charDelay?: number;
}

interface CharState {
  char: string;
  resolved: boolean;
  settling: boolean;
}

export function TextScramble({
  text,
  className = "",
  speed = 50,
  charDelay = 80,
}: TextScrambleProps) {
  // Start with the real text to avoid hydration mismatch, then scramble on mount
  const [chars, setChars] = useState<CharState[]>(() =>
    text.split("").map((ch) => ({
      char: ch,
      resolved: true,
      settling: false,
    }))
  );
  const [allResolved, setAllResolved] = useState(true);
  const [mounted, setMounted] = useState(false);
  const intervalsRef = useRef<ReturnType<typeof setInterval>[]>([]);

  const cleanup = useCallback(() => {
    intervalsRef.current.forEach(clearInterval);
    intervalsRef.current = [];
  }, []);

  // On mount, scramble the text then animate it resolving
  useEffect(() => {
    setMounted(true);

    // Scramble initial state
    setChars(
      text.split("").map((ch) => ({
        char: ch === " " ? " " : GLYPHS[Math.floor(Math.random() * GLYPHS.length)],
        resolved: ch === " ",
        settling: false,
      }))
    );
    setAllResolved(false);

    const characters = text.split("");

    characters.forEach((targetChar, i) => {
      if (targetChar === " ") return;

      const cycleCount = 3 + Math.floor(Math.random() * 3);
      let ticks = 0;

      const timeout = setTimeout(() => {
        const interval = setInterval(() => {
          ticks++;

          if (ticks >= cycleCount) {
            clearInterval(interval);
            setChars((prev) => {
              const next = [...prev];
              next[i] = { char: targetChar, resolved: true, settling: true };
              return next;
            });

            setTimeout(() => {
              setChars((prev) => {
                const next = [...prev];
                next[i] = { char: targetChar, resolved: true, settling: false };
                return next;
              });
            }, 300);
          } else {
            setChars((prev) => {
              const next = [...prev];
              next[i] = {
                char: GLYPHS[Math.floor(Math.random() * GLYPHS.length)],
                resolved: false,
                settling: false,
              };
              return next;
            });
          }
        }, speed);

        intervalsRef.current.push(interval);
      }, i * charDelay);

      intervalsRef.current.push(timeout as unknown as ReturnType<typeof setInterval>);
    });

    const totalTime = (characters.length - 1) * charDelay + 8 * speed + 400;
    const resolveTimeout = setTimeout(() => setAllResolved(true), totalTime);

    return () => {
      cleanup();
      clearTimeout(resolveTimeout);
    };
  }, [text, speed, charDelay, cleanup]);

  // Before mount, render plain text to match server
  if (!mounted) {
    return (
      <span className={className} aria-label={text}>
        {text}
      </span>
    );
  }

  return (
    <span className={className} aria-label={text}>
      {chars.map((c, i) => (
        <span
          key={i}
          className={`inline-block ${
            !allResolved ? "font-mono" : "font-display"
          } transition-colors duration-300`}
          style={{
            minWidth: text[i] === " " ? "0.25em" : undefined,
            textAlign: c.resolved ? undefined : "center",
            color: c.resolved
              ? c.settling
                ? "var(--color-accent)"
                : "var(--color-text-primary)"
              : "var(--color-text-tertiary)",
          }}
        >
          {c.char}
        </span>
      ))}
    </span>
  );
}
