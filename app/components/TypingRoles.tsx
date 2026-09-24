"use client";

import { useEffect, useState } from "react";

const roles = [
  "Junior Fullstack Developer",
  "Frontend Developer",
  "React & Next.js Developer",
  "Node.js Developer",
];

export default function TypingRoles() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = deleting ? 35 : 65;
    const pauseAtFull = 1400;
    const pauseAtEmpty = 300;

    if (!deleting && text === current) {
      const t = setTimeout(() => setDeleting(true), pauseAtFull);
      return () => clearTimeout(t);
    }

    if (deleting && text === "") {
      const t = setTimeout(() => {
        setDeleting(false);
        setRoleIndex((i) => (i + 1) % roles.length);
      }, pauseAtEmpty);
      return () => clearTimeout(t);
    }

    const t = setTimeout(() => {
      setText((prev) =>
        deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1),
      );
    }, speed);

    return () => clearTimeout(t);
  }, [text, deleting, roleIndex]);

  return (
    <span aria-live="polite">
      {text}
      <span className="animate-caret text-cyan">|</span>
      <span className="sr-only">{roles[roleIndex]}</span>
    </span>
  );
}
