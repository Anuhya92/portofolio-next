"use client";

import { useEffect, useState } from "react";
import { profile } from "../data";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#journey", label: "Journey" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((link) => document.querySelector(link.href))
      .filter((el): el is Element => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          setActive(`#${visible[0].target.id}`);
        }
      },
      {
        rootMargin: "-15% 0px -55% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled
          ? "border-line bg-bg/85 backdrop-blur"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-mono text-sm tracking-tight text-ink">
          anuhya<span className="text-cyan">.</span>dev
        </a>

        <nav className="hidden gap-8 font-mono text-sm sm:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={active === link.href ? "true" : undefined}
              className={`relative pb-1 transition-colors ${
                active === link.href
                  ? "text-cyan after:absolute after:inset-x-0 after:-bottom-[1px] after:h-[2px] after:bg-cyan after:shadow-glow after:content-['']"
                  : "text-ink/60 hover:text-ink"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 sm:flex">
          <a
            href={profile.resume}
            download
            className="font-mono text-sm text-ink/60 transition-colors hover:text-ink"
          >
            Download CV
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full border border-cyan/40 px-4 py-1.5 font-mono text-xs text-cyan transition-colors hover:bg-cyan hover:text-bg"
          >
            Say hello
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 sm:hidden"
        >
          <span
            className={`block h-px w-5 bg-ink transition-transform ${
              open ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-5 bg-ink transition-transform ${
              open ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="border-t border-line bg-bg px-6 py-4 sm:hidden"
        >
          <nav className="flex flex-col gap-4 font-mono text-sm">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                aria-current={active === link.href ? "true" : undefined}
                className={`w-fit border-l-2 pl-3 transition-colors ${
                  active === link.href
                    ? "border-cyan text-cyan"
                    : "border-transparent text-ink/60 hover:text-ink"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-5 flex flex-col gap-3 border-t border-line pt-5">
            <a
              href={profile.resume}
              download
              onClick={() => setOpen(false)}
              className="font-mono text-sm text-ink/60 transition-colors hover:text-ink"
            >
              Download CV
            </a>
            <a
              href={`mailto:${profile.email}`}
              onClick={() => setOpen(false)}
              className="w-fit rounded-full border border-cyan/40 px-4 py-1.5 font-mono text-xs text-cyan transition-colors hover:bg-cyan hover:text-bg"
            >
              Say hello
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
