"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setError(null);

    const form = event.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? "Something went wrong.");
      }

      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "sent") {
    return (
      <p className="rounded-lg border border-sage/30 bg-sage/10 px-4 py-3 text-sage">
        Thanks — your message is in. I'll get back to you soon.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="font-mono text-xs text-ink/50">Name</span>
          <input
            required
            name="name"
            type="text"
            className="mt-1 w-full rounded-md border border-line bg-bg px-3 py-2 text-ink outline-none transition-colors focus:border-cyan"
          />
        </label>
        <label className="block">
          <span className="font-mono text-xs text-ink/50">Email</span>
          <input
            required
            name="email"
            type="email"
            className="mt-1 w-full rounded-md border border-line bg-bg px-3 py-2 text-ink outline-none transition-colors focus:border-cyan"
          />
        </label>
      </div>
      <label className="block">
        <span className="font-mono text-xs text-ink/50">Message</span>
        <textarea
          required
          name="message"
          rows={4}
          className="mt-1 w-full rounded-md border border-line bg-bg px-3 py-2 text-ink outline-none transition-colors focus:border-cyan"
        />
      </label>

      {status === "error" && <p className="text-sm text-red-400">{error}</p>}

      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-full bg-cyan px-6 py-2.5 font-mono text-sm text-bg shadow-glow transition-opacity disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
