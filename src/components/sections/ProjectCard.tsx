import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  summary: string;
  slug: string;
  image?: string;
  date?: string;
}

export function ProjectCard({ title, summary, slug, image, date }: ProjectCardProps) {
  return (
    <Link href={`/work/${slug}`} className="group block">
      <article className="h-full rounded-lg border border-border/60 hover:border-border-hover bg-bg-card/40 hover:bg-bg-card/70 transition-all duration-200 overflow-hidden">
        {image && (
          <div className="relative aspect-[16/10] overflow-hidden bg-bg-secondary">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-opacity duration-300 group-hover:opacity-90"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        )}
        <div className="p-5">
          {date && (
            <time className="text-text-tertiary text-[11px] font-mono tracking-wide mb-2 block">
              {new Date(date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
              })}
            </time>
          )}
          <h3 className="font-display font-normal text-text-primary group-hover:text-accent transition-colors duration-200 mb-1.5 text-[15px] tracking-[-0.01em]">
            {title}
          </h3>
          <p className="text-text-secondary text-sm leading-relaxed line-clamp-2">
            {summary}
          </p>
        </div>
      </article>
    </Link>
  );
}
