import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";

const stats = [
  { value: 70, decimals: 0, suffix: "%", label: "less manual refactoring effort", detail: "Refactor Bot" },
  { value: 20, decimals: 0, suffix: "+", label: "coding challenges shipped", detail: "Little Developer" },
  { value: 100, decimals: 0, suffix: "%", label: "sprint test coverage delivered", detail: "Infinity" },
  { value: 3.8, decimals: 1, suffix: "/4.0", label: "graduate GPA", detail: "Seattle University" },
];

function AnimatedStat({ value, decimals, suffix }: { value: number; decimals: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1000;
    const start = performance.now();

    let frame: number;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(value * eased);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {display.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export function StatsStrip() {
  return (
    <section aria-label="Impact highlights" className="py-12 md:py-14 bg-background-alt border-y border-border-subtle">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <div className="text-3xl md:text-4xl font-bold -tracking-[0.02em] text-accent">
                <AnimatedStat value={stat.value} decimals={stat.decimals} suffix={stat.suffix} />
              </div>
              <p className="text-xs md:text-sm mt-2 leading-snug text-dim-foreground">{stat.label}</p>
              <p className="text-xs mt-1 text-dimmest-foreground font-mono">{stat.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
