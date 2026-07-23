import { useState } from "react";
import { Code2, Server, Database, Cloud, Sparkles, LayoutGrid, ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import { skills } from "../data";
import { SectionLabel } from "./Atoms";
import { Reveal } from "./Reveal";

const coreStack = [
  { icon: Code2, label: "TypeScript & JavaScript" },
  { icon: LayoutGrid, label: "React & Next.js" },
  { icon: Server, label: "Node.js & Flask" },
  { icon: Database, label: "PostgreSQL & SQL" },
  { icon: Cloud, label: "AWS & Azure DevOps" },
  { icon: Sparkles, label: "AI Integration" },
];

export function AboutSection() {
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="about" aria-labelledby="about-heading" className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <SectionLabel id="about-heading">About</SectionLabel>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 mt-10 md:mt-12">
          <Reveal delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 leading-tight -tracking-[0.02em] text-foreground">
              Building end-to-end,<br />from system design to deployment.
            </h2>
            <p className="leading-relaxed text-dim-foreground text-[0.95rem]">
              I'm a full-stack software engineer currently pursuing my M.S. in Computer Science at Seattle
              University (GPA 3.8/4.0, 2× Student Honor Roll), with a B.Tech in Computer Science &amp; Engineering.
              My experience spans backend microservices and cloud infrastructure at ADP, AI-integrated full-stack
              platforms, and even game development — I like building things end-to-end, from system design to
              deployment.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <span className="text-xs uppercase tracking-widest mb-4 block text-accent font-mono">Core Stack</span>
            <div className="grid grid-cols-2 gap-3 mb-6">
              {coreStack.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2.5 px-3 py-2.5 rounded-sm border border-border-subtle bg-card"
                >
                  <Icon size={15} className="text-accent shrink-0" />
                  <span className="text-xs text-dim-foreground">{label}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => setShowAll((s) => !s)}
              aria-expanded={showAll}
              aria-controls="full-skill-list"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-accent hover:opacity-70 transition-opacity duration-200 font-mono"
            >
              <ChevronDown size={13} className={`transition-transform duration-200 ${showAll ? "rotate-180" : ""}`} />
              {showAll ? "Hide full skill set" : "View full skill set"}
            </button>

            <motion.div
              id="full-skill-list"
              initial={false}
              animate={{ height: showAll ? "auto" : 0, opacity: showAll ? 1 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="space-y-6 pt-6">
                {skills.map((group) => (
                  <div key={group.label}>
                    <span className="text-xs uppercase tracking-widest mb-2 block text-accent font-mono">
                      {group.label}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {group.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 rounded-sm border border-border bg-tag-background text-tag-foreground font-mono"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
