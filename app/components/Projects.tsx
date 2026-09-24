import Image from "next/image";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
      <p className="font-mono text-sm text-cyan">03. Projects</p>
      <h2 className="mt-3 font-display text-3xl text-ink">Projects</h2>

      <p className="mt-3 max-w-prose text-ink/60">
        Twelve builds, roughly in the order I learned them — from plain HTML
        and CSS through to a real client project delivered with a team.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group overflow-hidden rounded-xl border border-line bg-surface transition-all hover:-translate-y-1 hover:border-cyan/50 hover:shadow-glow"
          >
            <div className="relative flex h-36 items-center justify-center overflow-hidden bg-gradient-to-br from-cyandim/30 via-surfacehi to-surface">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  fill
                  sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              ) : (
                <>
                  <div
                    className="absolute inset-0 opacity-40"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 20% 20%, rgba(34,211,238,0.25), transparent 55%), radial-gradient(circle at 80% 80%, rgba(125,211,192,0.2), transparent 55%)",
                    }}
                  />
                  <span className="relative text-5xl">{project.icon}</span>
                </>
              )}

              {project.tag && (
                <span className="absolute right-3 top-3 rounded-full bg-bg/70 px-2.5 py-0.5 font-mono text-[10px] text-sage backdrop-blur">
                  {project.tag}
                </span>
              )}
            </div>

            <div className="p-5">
              <h3 className="font-display text-lg text-ink">{project.title}</h3>
              <p className="mt-2 text-sm text-ink/60">{project.description}</p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-line px-2.5 py-0.5 font-mono text-[11px] text-ink/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex gap-4 border-t border-line pt-4 font-mono text-xs">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1.5 text-cyan hover:underline"
                  >
                    Live Demo
                  </a>
                )}

                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1.5 text-ink/70 hover:text-cyan hover:underline"
                  >
                    Code
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}