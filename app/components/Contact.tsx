import { profile } from "../data";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
      <p className="font-mono text-sm text-cyan">05. Contact</p>
      <div className="mt-6 grid gap-12 sm:grid-cols-[1fr_1.2fr]">
        <div>
          <h2 className="font-display text-3xl text-ink">Let's talk</h2>
          <p className="mt-4 max-w-prose text-ink/60">
            Open to junior fullstack roles, and happy to hear about
            internships, freelance work, or just a conversation about
            what you're building.
          </p>

          <dl className="mt-8 space-y-3 font-mono text-sm">
            <div className="flex gap-3">
              <dt className="text-ink/40">Email</dt>
              <dd>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-ink underline decoration-cyan/50 underline-offset-4 hover:text-cyan hover:decoration-cyan"
                >
                  {profile.email}
                </a>
              </dd>
            </div>
            <div className="flex gap-3">
              <dt className="text-ink/40">Phone</dt>
              <dd className="text-ink">{profile.phone}</dd>
            </div>
            <div className="flex gap-3">
              <dt className="text-ink/40">LinkedIn</dt>
              <dd>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-ink underline decoration-cyan/50 underline-offset-4 hover:text-cyan hover:decoration-cyan"
                >
                  anuhya-talamanchi
                </a>
              </dd>
            </div>
            <div className="flex gap-3">
              <dt className="text-ink/40">GitHub</dt>
              <dd>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-ink underline decoration-cyan/50 underline-offset-4 hover:text-cyan hover:decoration-cyan"
                >
                  anuhya92
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <div className="rounded-xl border border-line bg-surface p-6 sm:p-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
