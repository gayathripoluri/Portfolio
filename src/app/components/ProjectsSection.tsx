import { useState } from "react";
import { Github, ExternalLink, AlertTriangle, Wrench, TrendingUp, ArrowUpRight } from "lucide-react";
import { projects } from "../data";
import { SectionLabel, TechTag, CaseBlock } from "./Atoms";
import { Reveal } from "./Reveal";
import { AbstractMockup } from "./AbstractMockup";

type Project = (typeof projects)[number];

export function ProjectsSection() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="py-24 md:py-32 bg-background-alt">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <SectionLabel id="projects-heading">Projects</SectionLabel>
        </Reveal>

        <Reveal
          delay={0.1}
          className="mt-10 md:mt-12 mb-8 p-6 md:p-12 relative overflow-hidden rounded-[4px] border border-accent-border bg-card"
        >
          <div
            className="absolute top-0 right-0 w-64 h-64 pointer-events-none"
            style={{ background: "radial-gradient(circle at top right, var(--accent-background) 0%, transparent 70%)" }}
          />

          <div className="relative">
            <div className="grid lg:grid-cols-[1fr_380px] gap-8 lg:gap-10 items-start mb-10">
              <div>
                <span className="text-xs uppercase tracking-widest mb-4 block text-accent font-mono">
                  Featured Project
                </span>

                <h3 className="text-2xl md:text-3xl font-semibold mb-1 -tracking-[0.02em] text-foreground">
                  Apply AI
                </h3>
                <p className="text-sm mb-6 text-dim-foreground">AI-Powered Job Application Platform</p>

                <div className="flex flex-wrap gap-2">
                  {["TypeScript", "Next.js", "PostgreSQL", "Prisma", "OpenAI API", "AWS", "CI/CD"].map((t) => (
                    <TechTag key={t}>{t}</TechTag>
                  ))}
                </div>
              </div>

              <AbstractMockup className="w-full" />
            </div>

            <div className="grid sm:grid-cols-3 gap-5 mb-8">
              <CaseBlock step="01" icon={AlertTriangle} label="Problem">
                Job seekers spend hours hand-tailoring every resume to a posting, with no signal on whether it will
                even clear an ATS filter — and outreach falls through the cracks with no system tracking it.
              </CaseBlock>

              <CaseBlock step="02" icon={Wrench} label="Solution" emphasis>
                A cloud-native platform that parses job descriptions, scores resumes against ATS criteria, and
                generates tailored resume variants automatically — with OpenAI-driven JD-to-resume matching and
                outreach automation, shipped on AWS behind a secure CI/CD pipeline.
              </CaseBlock>

              <CaseBlock step="03" icon={TrendingUp} label="Result">
                A high-availability, fault-tolerant platform that turns a multi-hour manual workflow into an
                automated pipeline — from raw job posting to a ready-to-send, ATS-optimized application.
              </CaseBlock>
            </div>

            <a
              href="https://github.com/gayathripoluri/Apply-AI.git"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:opacity-70 transition-opacity duration-200"
            >
              <Github size={15} />
              View on GitHub
            </a>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((p, i) => (
            <Reveal key={p.id} delay={0.05 * (i % 3)}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`p-6 flex flex-col h-full rounded-[4px] border transition-all duration-200 cursor-default ${
        hovered ? "bg-card-hover border-accent-border -translate-y-0.5" : "bg-card border-border-subtle"
      }`}
      style={hovered ? { boxShadow: "0 0 24px var(--accent-glow)" } : undefined}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="mb-4">
        <h4 className="text-base font-semibold mb-0.5 -tracking-[0.01em] text-foreground">{project.title}</h4>
        <p className="text-xs text-dimmer-foreground">{project.subtitle}</p>
      </div>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tech.map((t) => (
          <TechTag key={t}>{t}</TechTag>
        ))}
      </div>

      <p className="text-sm leading-relaxed text-dim-foreground mb-4">{project.description}</p>

      <div className="flex-1 flex items-end mb-5">
        <div className="w-full flex items-center gap-2 px-3 py-2.5 rounded-sm border border-accent-border bg-accent-background">
          <ArrowUpRight size={14} className="text-accent shrink-0" />
          <span className="text-xs font-medium text-accent">{project.result}</span>
        </div>
      </div>

      {(project.github || project.figma) && (
        <a
          href={project.github || project.figma}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-medium mt-auto text-accent hover:opacity-70 transition-opacity duration-200 font-mono"
        >
          {project.figma && !project.github ? <ExternalLink size={12} /> : <Github size={12} />}
          {project.figma && !project.github ? "View Prototype" : "View on GitHub"}
        </a>
      )}
    </div>
  );
}
