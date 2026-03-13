"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaGitlab, FaLinkedinIn, FaBluesky, FaMastodon, FaEnvelope } from "react-icons/fa6";
import { person, social } from "@/app/resources/content";

const iconMap: Record<string, React.ReactNode> = {
  GitHub: <FaGithub />,
  GitLab: <FaGitlab />,
  LinkedIn: <FaLinkedinIn />,
  Bluesky: <FaBluesky />,
  Mastodon: <FaMastodon />,
  Email: <FaEnvelope />,
};

const ease = [0.25, 0.1, 0.25, 1] as const;

function SocialLink({ item }: { item: (typeof social)[number] }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.a
      href={item.link}
      target={item.name === "Email" ? undefined : "_blank"}
      rel={item.name === "Email" ? undefined : "noopener noreferrer"}
      aria-label={item.name}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="text-[15px] p-2 rounded-lg transition-colors duration-200"
      style={{
        color: hovered ? "#8ec5ff" : "#6b6e78",
        backgroundColor: hovered ? "rgba(142,197,255,0.08)" : "transparent",
      }}
    >
      {iconMap[item.name]}
    </motion.a>
  );
}

export function Hero() {
  return (
    <section className="relative pt-6 sm:pt-10 pb-12 sm:pb-16">
      {/* ── Radial atmosphere ── */}
      <div
        className="pointer-events-none absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px]"
        style={{
          background:
            "radial-gradient(circle, rgba(142,197,255,0.06) 0%, rgba(142,197,255,0.02) 30%, rgba(142,197,255,0.005) 55%, transparent 80%)",
        }}
      />

      {/* ── Content ── */}
      <div className="relative flex flex-col items-center text-center">
        {/* The Orb */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease }}
          className="relative mb-4"
        >
          <div className="absolute inset-[-80%] animate-glow-breathe">
            <div
              className="w-full h-full rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(142,197,255,0.10) 0%, rgba(142,197,255,0.04) 30%, rgba(142,197,255,0.01) 55%, transparent 80%)",
              }}
            />
          </div>
          <div className="relative animate-float">
            <Image
              src={person.avatar}
              alt={person.name}
              width={200}
              height={200}
              className="rounded-full"
              style={{
                boxShadow:
                  "0 0 40px 12px rgba(142,197,255,0.12), 0 0 80px 35px rgba(142,197,255,0.06), 0 0 140px 60px rgba(142,197,255,0.025)",
              }}
              priority
            />
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease }}
          className="text-[2.5rem] sm:text-5xl lg:text-[3.25rem] font-display font-semibold tracking-[-0.04em] text-accent leading-[1.1] mb-1"
        >
          {person.name}
        </motion.h1>

        {/* Role & location */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease }}
          className="text-text-primary text-[15px] font-body tracking-[-0.01em] mb-3"
        >
          {person.role}
          <span className="text-text-tertiary mx-2">·</span>
          <span className="text-text-secondary">{person.location}</span>
        </motion.p>

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.45, ease }}
          className="flex items-center gap-0.5"
        >
          {social
            .filter((s) => s.link)
            .map((s) => (
              <SocialLink key={s.name} item={s} />
            ))}
        </motion.div>
      </div>

      {/* ── Bottom gradient line ── */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.6, ease }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md h-px bg-gradient-to-r from-transparent via-border to-transparent"
      />
    </section>
  );
}
