import { journey } from "../data";

export default function Journey() {
  return (
    <section id="journey" className="border-t border-line bg-surface/40">
      <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
        <p className="font-mono text-sm text-cyan">04. Journey</p>
        <h2 className="mt-3 font-display text-3xl text-ink">Journey</h2>

        <ol className="mt-10 space-y-10 border-l border-line pl-8">
          {journey.map((step) => (
            <li key={step.place + step.role} className="relative">
              <span
                className={`absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full ${
                  step.current ? "bg-sage shadow-glow" : "bg-cyan"
                }`}
              />
              <p className="font-mono text-xs text-ink/40">
                {step.period}
                {step.current && (
                  <span className="ml-2 text-sage">in progress</span>
                )}
              </p>
              <h3 className="mt-1 font-display text-xl text-ink">{step.role}</h3>
              <p className="text-sm text-cyan/80">{step.place}</p>
              <p className="mt-2 max-w-prose text-ink/60">{step.detail}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
