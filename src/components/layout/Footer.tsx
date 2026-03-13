import { FaGithub, FaGitlab, FaLinkedinIn, FaBluesky, FaMastodon, FaEnvelope } from "react-icons/fa6";
import { person, social } from "@/app/resources/content";

const iconMap: Record<string, React.ReactNode> = {
  GitHub: <FaGithub className="w-3.5 h-3.5" />,
  GitLab: <FaGitlab className="w-3.5 h-3.5" />,
  LinkedIn: <FaLinkedinIn className="w-3.5 h-3.5" />,
  Bluesky: <FaBluesky className="w-3.5 h-3.5" />,
  Mastodon: <FaMastodon className="w-3.5 h-3.5" />,
  Email: <FaEnvelope className="w-3.5 h-3.5" />,
};

export function Footer() {
  return (
    <footer className="border-t border-border/40 mt-auto">
      <div className="max-w-[1080px] mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-text-tertiary text-xs">
          &copy; {new Date().getFullYear()} {person.name}
        </p>
        <div className="flex items-center gap-1">
          {social
            .filter((s) => s.link)
            .map((s) => (
              <a
                key={s.name}
                href={s.link}
                target={s.name === "Email" ? undefined : "_blank"}
                rel={s.name === "Email" ? undefined : "noopener noreferrer"}
                aria-label={s.name}
                className="footer-social-link p-1.5 rounded-md"
              >
                {iconMap[s.name] ?? s.name}
              </a>
            ))}
        </div>
      </div>
    </footer>
  );
}
