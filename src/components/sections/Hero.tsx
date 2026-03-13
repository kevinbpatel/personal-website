"use client";

import Image from "next/image";
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

function SocialLink({ item, index }: { item: (typeof social)[number]; index: number }) {
  return (
    <a
      href={item.link}
      target={item.name === "Email" ? undefined : "_blank"}
      rel={item.name === "Email" ? undefined : "noopener noreferrer"}
      aria-label={item.name}
      className="hero-social-link text-[17px] p-2 animate-hero-fade-in"
      style={{ animationDelay: `${500 + index * 50}ms` }}
    >
      {iconMap[item.name]}
    </a>
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
        <div
          className="relative mb-4 animate-hero-scale-in"
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
        </div>

        {/* Name */}
        <h1
          className="text-[2.75rem] sm:text-[3.25rem] lg:text-[3.5rem] font-display font-light tracking-[-0.03em] text-accent leading-[1.1] mb-1 animate-hero-fade-in"
          style={{ animationDelay: "150ms" }}
        >
          {person.name}
        </h1>

        {/* Role & location — mono, same weight, lowercase */}
        <p
          className="text-text-tertiary text-[13px] font-mono tracking-[0.02em] lowercase mb-2 animate-hero-fade-in"
          style={{ animationDelay: "300ms" }}
        >
          {person.role}
          <span className="mx-2 text-text-tertiary/40">/</span>
          {person.location}
        </p>

        {/* Social icons */}
        <div className="flex items-center gap-0.5">
          {social
            .filter((s) => s.link)
            .map((s, i) => (
              <SocialLink key={s.name} item={s} index={i} />
            ))}
        </div>
      </div>
    </section>
  );
}
