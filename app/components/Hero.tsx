import { profile } from "../data";
import TypingRoles from "./TypingRoles";
import HexAvatar from "./HexAvatar";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-bg text-ink"
    >
      <div
        className="pointer-events-none absolute -top-40 right-0 h-[420px] w-[420px] rounded-full bg-cyan/10 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-5xl gap-12 px-6 pb-20 pt-16 sm:grid-cols-[1.2fr_1fr] sm:items-center sm:pb-28 sm:pt-20">
        <div>
          <p className="font-mono text-sm text-cyan">
            status: open to junior fullstack roles
          </p>

          <h1 className="mt-6 font-display text-5xl leading-[1.05] sm:text-6xl">
            {profile.name}
          </h1>

          <p className="mt-4 h-8 max-w-prose font-mono text-lg text-ink/80 sm:text-xl">
            <TypingRoles />
          </p>

          <p className="mt-6 max-w-prose text-ink/60">
            Based in {profile.location}. I build interfaces with React and
            Next.js, and the APIs behind them with Node.js and Express —
            recently trained, genuinely committed, ready for a team.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="rounded-full bg-cyan px-6 py-2.5 font-mono text-sm text-bg shadow-glow transition-transform hover:-translate-y-0.5"
            >
              See my projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-ink/20 px-6 py-2.5 font-mono text-sm text-ink transition-colors hover:border-cyan hover:text-cyan"
            >
              Get in touch
            </a>
            <a
              href={profile.resume}
              download
              className="rounded-full border border-ink/20 px-6 py-2.5 font-mono text-sm text-ink transition-colors hover:border-cyan hover:text-cyan"
            >
              Download CV
            </a>
          </div>

          <div className="mt-8 flex gap-5 font-mono text-xs text-ink/50">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer noopener"
              className="transition-colors hover:text-cyan"
            >
              GitHub
            </a>
            <span aria-hidden>·</span>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="transition-colors hover:text-cyan"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <HexAvatar />
      </div>
    </section>
  );
}
