import Image from "next/image";
import { baseURL } from "@/app/resources";
import { person, about, social } from "@/app/resources/content";
import { Meta } from "@/components/seo/Meta";
import { Schema } from "@/components/seo/Schema";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa6";
import { FadeIn } from "@/components/animations/FadeIn";

export async function generateMetadata() {
  return Meta.generate({
    title: about.title,
    description: about.description,
    baseURL: baseURL,
    image: `${baseURL}/og?title=${encodeURIComponent(about.title)}`,
    path: about.path,
  });
}

const iconMap: Record<string, React.ReactNode> = {
  GitHub: <FaGithub className="w-3.5 h-3.5" />,
  LinkedIn: <FaLinkedinIn className="w-3.5 h-3.5" />,
  Email: <FaEnvelope className="w-3.5 h-3.5" />,
};

export default function About() {
  return (
    <div>
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={about.title}
        description={about.description}
        path={about.path}
        image={`${baseURL}/og?title=${encodeURIComponent(about.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
        social={social}
      />

      {/* ── Editorial Header ── */}
      <FadeIn>
        <div className="flex items-center gap-5 mb-6">
          <Image
            src={person.avatar}
            alt={person.name}
            width={56}
            height={56}
            className="rounded-full shrink-0"
            style={{
              boxShadow: "0 0 20px 5px rgba(142,197,255,0.08)",
            }}
          />
          <div>
            <h1 className="text-2xl font-display font-normal tracking-[-0.02em] text-white">
              {person.name}
            </h1>
            <p className="text-text-tertiary text-[12px] font-mono tracking-widest uppercase">
              {person.role}
            </p>
          </div>
        </div>
      </FadeIn>

      {/* ── Narrative Intro ── */}
      {about.intro.display && (
        <FadeIn delay={0.1}>
          <p className="text-text-secondary text-[15px] leading-[1.8] max-w-xl mb-12">
            {about.intro.description}
          </p>
        </FadeIn>
      )}

      {/* ── Experience ── */}
      {about.work.display && (
        <FadeIn delay={0.2}>
          <section className="mb-12">
            <h2 className="text-[11px] tracking-[0.1em] uppercase text-text-tertiary font-mono mb-6">
              Experience
            </h2>
            <div className="space-y-6">
              {about.work.experiences.map((exp, i) => (
                <div
                  key={`${exp.company}-${i}`}
                  className="group relative pl-4 border-l border-border/60 hover:border-accent/30 transition-colors duration-300"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5">
                    <h3 className="font-display font-normal text-text-primary tracking-[-0.01em]">
                      {exp.company}
                    </h3>
                    <span className="text-text-tertiary text-[11px] font-mono tracking-wide shrink-0">
                      {exp.timeframe}
                    </span>
                  </div>
                  <p className="text-accent/60 text-[13px] mt-0.5">
                    {exp.role}
                  </p>
                  {exp.images.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-3">
                      {exp.images.map((img, j) => (
                        <div
                          key={j}
                          className="rounded-lg overflow-hidden border border-border/40"
                        >
                          <Image
                            src={img.src}
                            alt={img.alt}
                            width={320}
                            height={180}
                            className="w-full max-w-[280px] h-auto"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        </FadeIn>
      )}

      {/* ── Education ── */}
      {about.studies.display && (
        <FadeIn delay={0.3}>
          <section className="mb-12">
            <h2 className="text-[11px] tracking-[0.1em] uppercase text-text-tertiary font-mono mb-6">
              Education
            </h2>
            <div className="space-y-3">
              {about.studies.institutions.map((inst, i) => (
                <div
                  key={`${inst.name}-${i}`}
                  className="pl-4 border-l border-border/60"
                >
                  <h3 className="font-display font-normal text-text-primary tracking-[-0.01em]">
                    {inst.name}
                  </h3>
                  <p className="text-text-secondary text-[13px] mt-0.5">
                    {inst.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </FadeIn>
      )}

      {/* ── Connect ── */}
      <FadeIn delay={0.4}>
        <section>
          <h2 className="text-[11px] tracking-[0.1em] uppercase text-text-tertiary font-mono mb-4">
            Connect
          </h2>
          <div className="flex items-center gap-3">
            {social
              .filter((s) => s.link)
              .map((s) => (
                <a
                  key={s.name}
                  href={s.link}
                  target={s.name === "Email" ? undefined : "_blank"}
                  rel={s.name === "Email" ? undefined : "noopener noreferrer"}
                  className="flex items-center gap-2 text-text-tertiary hover:text-accent text-[13px] transition-colors duration-200"
                  aria-label={s.name}
                >
                  {iconMap[s.name] ?? null}
                  <span>{s.name}</span>
                </a>
              ))}
          </div>
        </section>
      </FadeIn>
    </div>
  );
}
