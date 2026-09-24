import { skillGroups } from "../data";
import Tools from "./Tools";

export default function Skills() {
  return (
    <section id="skills" className="border-y border-line bg-surface/40">
      <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
        <p className="font-mono text-sm text-cyan">02. Skills</p>
        <h2 className="mt-3 font-display text-3xl text-ink">What I work with</h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.label}
              className="rounded-xl border border-line bg-surface p-6 transition-colors hover:border-cyan/40"
            >
              <h3 className="font-mono text-sm text-sage">{group.label}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-line bg-bg px-3 py-1 font-mono text-xs text-ink/70"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <Tools />
      </div>
    </section>
  );
}
