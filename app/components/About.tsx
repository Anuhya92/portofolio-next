import { bio, languages } from "../data";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
      <p className="font-mono text-sm text-cyan">01. About</p>
      <div className="mt-6 grid gap-12 sm:grid-cols-[1fr_auto] sm:gap-16">
        <div>
          <h2 className="font-display text-3xl text-ink">Who I am</h2>
          <p className="mt-6 max-w-prose text-lg leading-relaxed text-ink/70">
            {bio}
          </p>
        </div>

        <div className="sm:w-48">
          <h3 className="font-mono text-sm text-ink/50">Languages</h3>
          <ul className="mt-4 space-y-3">
            {languages.map((lang) => (
              <li
                key={lang.name}
                className="flex items-baseline justify-between gap-4 border-b border-line pb-2"
              >
                <span className="text-ink">{lang.name}</span>
                <span className="font-mono text-xs text-ink/40">{lang.level}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
