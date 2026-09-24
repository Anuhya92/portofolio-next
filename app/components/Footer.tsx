import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { profile } from "../data";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-xs text-ink/40">
          {profile.name} · Built with Next.js &amp; Tailwind CSS
        </p>

        <div className="flex gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink/70 transition-colors hover:border-cyan hover:text-cyan"
          >
            <FaGithub size={16} />
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink/70 transition-colors hover:border-cyan hover:text-cyan"
          >
            <FaLinkedin size={16} />
          </a>

          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink/70 transition-colors hover:border-cyan hover:text-cyan"
          >
            <FaEnvelope size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}