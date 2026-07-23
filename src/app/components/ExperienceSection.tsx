import { experience } from "../data";
import { SectionLabel } from "./Atoms";
import { Reveal } from "./Reveal";

export function ExperienceSection() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <SectionLabel id="experience-heading">Experience</SectionLabel>
        </Reveal>

        <div className="mt-10 md:mt-12 max-w-2xl">
          <div className="relative pl-6 border-l border-[var(--timeline-line)]">
            {experience.map((item, i) => {
              const isActive = item.type === "work" || item.period.includes("Present");
              return (
                <Reveal key={i} delay={0.08 * i} className="relative mb-12 last:mb-0">
                  <div
                    className={`absolute top-0.5 w-2.5 h-2.5 rounded-full ${
                      isActive ? "bg-accent border-none" : "bg-timeline-dot border border-border"
                    }`}
                    style={{
                      left: "calc(-1.5rem - 0.3125rem)",
                      boxShadow: isActive ? "0 0 10px var(--accent)66" : "none",
                    }}
                  />

                  <span className="text-xs mb-2 block text-dimmer-foreground font-mono">{item.period}</span>

                  <h3 className="text-lg font-semibold mb-0.5 -tracking-[0.01em] text-foreground">{item.role}</h3>

                  <p className="text-sm mb-3 text-accent">{item.org}</p>

                  <p className="text-sm leading-relaxed text-dim-foreground">{item.detail}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
