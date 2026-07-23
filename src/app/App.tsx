import { useState, useEffect, createContext, useContext } from "react";
import { Github, Linkedin, Mail, MapPin, ExternalLink, ChevronDown, Menu, X, Sun, Moon } from "lucide-react";

const dark = {
  bg: "#0A0A0B",
  bgAlt: "#0D0D0F",
  card: "#111114",
  cardHover: "#161618",
  fg: "#E8E8EA",
  fgMuted: "#9999AA",
  fgDim: "#A1A1AF",
  fgDimmer: "#858594",
  fgDimmest: "#696978",
  border: "rgba(255,255,255,0.07)",
  borderSubtle: "rgba(255,255,255,0.06)",
  tagBg: "#1A1A1F",
  tagText: "#9999AA",
  accent: "#4F9EFF",
  accentBg: "rgba(79,158,255,0.08)",
  accentBorder: "rgba(79,158,255,0.2)",
  accentGlow: "rgba(79,158,255,0.06)",
  navBg: "rgba(10,10,11,0.92)",
  gridLine: "rgba(255,255,255,0.025)",
  caseBlockBg: "#0D0D0F",
  timelineDot: "#2A2A35",
  timelineLine: "rgba(255,255,255,0.08)",
  isDark: true,
};

const light = {
  bg: "#F7F7FA",
  bgAlt: "#EFEFF4",
  card: "#FFFFFF",
  cardHover: "#F5F5F8",
  fg: "#111114",
  fgMuted: "#4A4A5A",
  fgDim: "#6B6B7A",
  fgDimmer: "#9999AA",
  fgDimmest: "#BBBBCC",
  border: "rgba(0,0,0,0.08)",
  borderSubtle: "rgba(0,0,0,0.07)",
  tagBg: "#EBEBF0",
  tagText: "#4A4A5A",
  accent: "#2563EB",
  accentBg: "rgba(37,99,235,0.07)",
  accentBorder: "rgba(37,99,235,0.2)",
  accentGlow: "rgba(37,99,235,0.04)",
  navBg: "rgba(247,247,250,0.92)",
  gridLine: "rgba(0,0,0,0.04)",
  caseBlockBg: "#EFEFF4",
  timelineDot: "#DDDDE8",
  timelineLine: "rgba(0,0,0,0.1)",
  isDark: false,
};

type Theme = typeof dark;
const ThemeCtx = createContext<Theme>(dark);
const useTheme = () => useContext(ThemeCtx);

const skills = [
  { label: "Programming", tags: ["Python", "C++", "C#", "JavaScript", "TypeScript", "SQL"] },
  { label: "CS Fundamentals", tags: ["Data Structures", "Algorithms", "OOP", "System Design", "Design Patterns", "SDLC"] },
  { label: "Backend", tags: ["Node.js", "Express.js", "Flask", "REST APIs", "Authentication", "Session Management", "Microservices"] },
  { label: "Frontend", tags: ["React.js", "Next.js", "HTML", "CSS", "Tailwind CSS"] },
  { label: "Databases", tags: ["PostgreSQL", "MySQL", "SQLite", "Firebase Firestore", "SQL/NoSQL"] },
  { label: "Cloud & Tools", tags: ["AWS", "Azure DevOps", "Git", "GitHub", "Postman", "Prisma", "CI/CD"] },
  { label: "AI", tags: ["OpenAI API", "Prompt Engineering", "AI Integration", "Code Analysis", "Debugging"] },
];

const projects = [
  {
    id: "refactor-bot",
    title: "Refactor Bot",
    subtitle: "AI Code Refactoring Tool",
    tech: ["Node.js", "TypeScript", "LLM APIs", "Code Smell Detection"],
    description: "Built an LLM-powered refactoring platform that detects code smells and applies software metrics to clean up messy code — reducing manual refactoring effort by ~70% on test codebases.",
    github: "https://github.com/gayathripoluri/refactorCode.git",
  },
  {
    id: "little-developer",
    title: "Little Developer",
    subtitle: "Gamified Coding Education Platform",
    tech: ["Flask", "React.js", "Firebase", "Firestore", "Python"],
    description: "Built 20+ interactive coding challenges with secure sandboxed code execution and real-time runtime tracing; engineered live feedback infrastructure with a React + Firebase frontend.",
    github: "https://github.com/gayathripoluri/LittleDeveloper.git",
  },
  {
    id: "prince-pursuit",
    title: "Prince Pursuit",
    subtitle: "Narrative Adventure Game",
    tech: ["Godot", "GDScript"],
    description: "Designed and built a story-driven game where a prince runs through a cursed forest collecting gems to break his princess's curse. Implemented branching outcomes — Happy End, Sad End, and a bonus second-chance path — showing strength in game logic, state management, and interactive storytelling.",
    github: "https://github.com/gayathripoluri/Game-project.git",
  },
  {
    id: "newbie-connect",
    title: "Newbie Connect",
    subtitle: "Relocation Support Platform",
    tech: ["Figma", "UX/UI Design", "Product Design"],
    description: "Designed a platform concept to help people new to a country navigate essentials like SIM cards, transportation, and local logistics. Built out full user flows and wireframes covering onboarding, information discovery, and task completion.",
    figma: "https://www.figma.com/proto/ElErFzhhcFswQ7oNJhuxRg/Wireframes?node-id=1208-1590&starting-point-node-id=1234%3A2052&t=LZs5fdyh5RE9KQNp-1",
  },
  {
    id: "infinity",
    title: "Infinity",
    subtitle: "Full-Stack Platform",
    tech: ["C#", "Node.js", "REST APIs", "Azure DevOps", "Agile/Scrum"],
    description: "Led backend architecture, system design, and testing for a 3-person agile team; delivered sprint-based releases with 100% unit test coverage validated before every sprint review.",
  },
];

const experience = [
  {
    role: "M.S. in Computer Science",
    org: "Seattle University",
    period: "Mar 2025 – Present",
    type: "education",
    detail: "GPA 3.8/4.0, Student Honor Roll (×2)",
  },
  {
    role: "Python Developer",
    org: "ADP",
    period: "Jan 2025 – Mar 2025",
    type: "work",
    detail: "Designed Python backend microservices on the Pay Direct platform using AWS, supporting secure salary transfer workflows for thousands of U.S. payroll transactions. Diagnosed and resolved production issues through root-cause analysis, improving system reliability.",
  },
  {
    role: "B.Tech in Computer Science & Engineering",
    org: "Anurag Engineering College",
    period: "Aug 2020 – Aug 2024",
    type: "education",
    detail: "Bachelor of Technology",
  },
];

function NavBar({ isDark, toggle }: { isDark: boolean; toggle: () => void }) {
  const C = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  });

  const links = ["About", "Projects", "Experience", "Contact"];

  return (
    <header
      style={{
        background: scrolled ? C.navBg : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: `1px solid ${scrolled ? C.borderSubtle : "transparent"}`,
        transition: "all 0.3s ease",
      }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span
          className="text-sm tracking-widest uppercase"
          style={{ color: C.accent, fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.18em" }}
        >
          gp
        </span>

        <div className="hidden md:flex items-center gap-8" aria-label="Primary navigation">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-sm tracking-wide transition-colors duration-200"
              style={{ color: C.fgDim, fontFamily: "'Manrope', sans-serif" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = C.fg)}
              onMouseLeave={(e) => (e.currentTarget.style.color = C.fgDim)}
            >
              {l}
            </a>
          ))}

          <button
            onClick={toggle}
            className="flex items-center justify-center w-11 h-11 rounded-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2"
            style={{ color: C.fgDim, border: `1px solid ${C.border}` }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = C.accent;
              e.currentTarget.style.borderColor = C.accentBorder;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = C.fgDim;
              e.currentTarget.style.borderColor = C.border;
            }}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            title={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDark ? <Sun size={14} /> : <Moon size={14} />}
          </button>
        </div>

        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggle}
            className="flex items-center justify-center w-11 h-11 p-1 focus-visible:outline-none focus-visible:ring-2"
            style={{ color: C.fgDim }}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            title={isDark ? "Light mode" : "Dark mode"}
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            className="flex items-center justify-center w-11 h-11 p-1 focus-visible:outline-none focus-visible:ring-2"
            style={{ color: C.fgDim }}
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div
          id="mobile-navigation"
          className="md:hidden border-t"
          style={{ background: C.navBg, borderColor: C.borderSubtle }}
        >
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="block w-full text-left px-6 py-4 text-sm"
              style={{ color: C.fgDim, fontFamily: "'Manrope', sans-serif" }}
            >
              {l}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

function HeroSection() {
  const C = useTheme();
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: C.bg }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 60% 40%, ${C.accentBg} 0%, transparent 70%)`,
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(${C.gridLine} 1px, transparent 1px), linear-gradient(90deg, ${C.gridLine} 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-8">
            <MapPin size={12} style={{ color: C.accent }} />
            <span
              className="text-xs tracking-widest uppercase"
              style={{ color: C.accent, fontFamily: "'JetBrains Mono', monospace" }}
            >
              Seattle, WA
            </span>
          </div>

          <h1
            className="font-bold leading-none mb-6"
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: "clamp(2.8rem, 8vw, 6rem)",
              color: C.fg,
              letterSpacing: "-0.03em",
            }}
          >
            Gayathri
            <br />
            <span style={{ color: C.accent }}>Poluri</span>
          </h1>

          <p
            className="text-lg mb-6 max-w-xl leading-relaxed"
            style={{ color: C.fgMuted, fontFamily: "'Manrope', sans-serif", fontWeight: 400 }}
          >
            Full-Stack Engineer building scalable systems,{" "}
            <span style={{ color: C.fg }}>AI-powered tools</span>, and interactive experiences.
          </p>

          <p
            className="text-base mb-10 max-w-2xl leading-relaxed"
            style={{ color: C.fgDim, fontFamily: "'Manrope', sans-serif" }}
          >
            M.S. Computer Science student at Seattle University with hands-on experience across the full stack —
            from cloud-native backend microservices to React frontends to game development.
            I love turning complex problems into clean, working software.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="px-6 py-3 text-sm font-medium tracking-wide transition-opacity duration-200 hover:opacity-80"
              style={{
                background: C.accent,
                color: C.isDark ? "#0A0A0B" : "#FFFFFF",
                fontFamily: "'Manrope', sans-serif",
                border: "none",
                borderRadius: "2px",
              }}
            >
              View Projects
            </button>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-6 py-3 text-sm font-medium tracking-wide transition-all duration-200"
              style={{
                background: "transparent",
                color: C.fg,
                fontFamily: "'Manrope', sans-serif",
                border: `1px solid ${C.border}`,
                borderRadius: "2px",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = C.accentBorder)}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = C.border)}
            >
              Contact Me
            </button>
          </div>
        </div>

        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce"
          style={{ color: C.fgDimmest }}
        >
          <ChevronDown size={18} />
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  const C = useTheme();
  return (
    <section id="about" aria-labelledby="about-heading" className="py-24 md:py-32" style={{ background: C.bg }}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionLabel id="about-heading">About</SectionLabel>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 mt-10 md:mt-12">
          <div>
            <h2
              className="text-3xl md:text-4xl font-semibold mb-6 leading-tight"
              style={{ fontFamily: "'Manrope', sans-serif", color: C.fg, letterSpacing: "-0.02em" }}
            >
              Building end-to-end,<br />from system design to deployment.
            </h2>
            <p
              className="leading-relaxed"
              style={{ color: C.fgDim, fontFamily: "'Manrope', sans-serif", fontSize: "0.95rem" }}
            >
              {"I'm a full-stack software engineer currently pursuing my M.S. in Computer Science at Seattle University (GPA 3.8/4.0, 2× Student Honor Roll), with a B.Tech in Computer Science & Engineering. My experience spans backend microservices and cloud infrastructure at ADP, AI-integrated full-stack platforms, and even game development — I like building things end-to-end, from system design to deployment."}
            </p>
          </div>

          <div className="space-y-6">
            {skills.map((group) => (
              <div key={group.label}>
                <span
                  className="text-xs uppercase tracking-widest mb-2 block"
                  style={{ color: C.accent, fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {group.label}
                </span>
                <div className="flex flex-wrap gap-2">
                  {group.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1"
                      style={{
                        background: C.tagBg,
                        color: C.tagText,
                        fontFamily: "'JetBrains Mono', monospace",
                        border: `1px solid ${C.border}`,
                        borderRadius: "2px",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  const C = useTheme();
  return (
    <section id="projects" aria-labelledby="projects-heading" className="py-24 md:py-32" style={{ background: C.bgAlt }}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionLabel id="projects-heading">Projects</SectionLabel>

        <div
          className="mt-10 md:mt-12 mb-8 p-6 md:p-12 relative overflow-hidden"
          style={{
            background: C.card,
            border: `1px solid ${C.accentBorder}`,
            borderRadius: "4px",
          }}
        >
          <div
            className="absolute top-0 right-0 w-64 h-64 pointer-events-none"
            style={{
              background: `radial-gradient(circle at top right, ${C.accentBg} 0%, transparent 70%)`,
            }}
          />

          <div className="relative">
            <span
              className="text-xs uppercase tracking-widest mb-4 block"
              style={{ color: C.accent, fontFamily: "'JetBrains Mono', monospace" }}
            >
              Featured Project
            </span>

            <h3
              className="text-2xl md:text-3xl font-semibold mb-1"
              style={{ fontFamily: "'Manrope', sans-serif", color: C.fg, letterSpacing: "-0.02em" }}
            >
              Apply AI
            </h3>
            <p className="text-sm mb-6" style={{ color: C.fgDim, fontFamily: "'Manrope', sans-serif" }}>
              AI-Powered Job Application Platform
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {["TypeScript", "Next.js", "PostgreSQL", "Prisma", "OpenAI API", "AWS", "CI/CD"].map((t) => (
                <TechTag key={t}>{t}</TechTag>
              ))}
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <CaseBlock label="Problem">
                Job seekers waste time manually tailoring resumes and tracking outreach.
              </CaseBlock>
              <CaseBlock label="Solution">
                Built a scalable, cloud-native full-stack platform for JD analysis, ATS scoring, tailored resume
                generation, and outreach automation — with OpenAI integration for intelligent matching and secure
                AWS-based CI/CD.
              </CaseBlock>
              <CaseBlock label="Result">
                A high-availability, fault-tolerant platform with automated, intelligent application workflows.
              </CaseBlock>
            </div>

            <a
              href="https://github.com/gayathripoluri/Apply-AI.git"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium transition-opacity duration-200 hover:opacity-70"
              style={{ color: C.accent, fontFamily: "'Manrope', sans-serif" }}
            >
              <Github size={15} />
              View on GitHub
            </a>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: typeof projects[0] }) {
  const C = useTheme();
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="p-6 flex flex-col h-full transition-all duration-200"
      style={{
        background: hovered ? C.cardHover : C.card,
        border: `1px solid ${hovered ? C.accentBorder : C.borderSubtle}`,
        borderRadius: "4px",
        boxShadow: hovered ? `0 0 24px ${C.accentGlow}` : "none",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
        cursor: "default",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="mb-4">
        <h4
          className="text-base font-semibold mb-0.5"
          style={{ fontFamily: "'Manrope', sans-serif", color: C.fg, letterSpacing: "-0.01em" }}
        >
          {project.title}
        </h4>
        <p className="text-xs" style={{ color: C.fgDimmer, fontFamily: "'Manrope', sans-serif" }}>
          {project.subtitle}
        </p>
      </div>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tech.map((t) => (
          <TechTag key={t}>{t}</TechTag>
        ))}
      </div>

      <p
        className="text-sm leading-relaxed flex-1 mb-5"
        style={{ color: C.fgDim, fontFamily: "'Manrope', sans-serif" }}
      >
        {project.description}
      </p>

      {(project.github || project.figma) && (
        <a
          href={project.github || project.figma}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-medium transition-opacity duration-200 hover:opacity-70 mt-auto"
          style={{ color: C.accent, fontFamily: "'JetBrains Mono', monospace" }}
        >
          {project.figma && !project.github ? <ExternalLink size={12} /> : <Github size={12} />}
          {project.figma && !project.github ? "View Prototype" : "View on GitHub"}
        </a>
      )}
    </div>
  );
}

function ExperienceSection() {
  const C = useTheme();
  return (
    <section id="experience" aria-labelledby="experience-heading" className="py-24 md:py-32" style={{ background: C.bg }}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionLabel id="experience-heading">Experience</SectionLabel>

        <div className="mt-10 md:mt-12 max-w-2xl">
          <div className="relative pl-6" style={{ borderLeft: `1px solid ${C.timelineLine}` }}>
            {experience.map((item, i) => (
              <div key={i} className="relative mb-12 last:mb-0">
                <div
                  className="absolute top-0.5 w-2.5 h-2.5 rounded-full"
                  style={{
                    left: "calc(-1.5rem - 0.3125rem)",
                    background: item.type === "work" || item.period.includes("Present") ? C.accent : C.timelineDot,
                    border: item.type === "work" || item.period.includes("Present") ? "none" : `1px solid ${C.border}`,
                    boxShadow: item.type === "work" || item.period.includes("Present") ? `0 0 10px ${C.accent}66` : "none",
                  }}
                />

                <span
                  className="text-xs mb-2 block"
                  style={{ color: C.fgDimmer, fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {item.period}
                </span>

                <h3
                  className="text-lg font-semibold mb-0.5"
                  style={{ fontFamily: "'Manrope', sans-serif", color: C.fg, letterSpacing: "-0.01em" }}
                >
                  {item.role}
                </h3>

                <p className="text-sm mb-3" style={{ color: C.accent, fontFamily: "'Manrope', sans-serif" }}>
                  {item.org}
                </p>

                <p
                  className="text-sm leading-relaxed"
                  style={{ color: C.fgDim, fontFamily: "'Manrope', sans-serif" }}
                >
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const C = useTheme();
  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-24 md:py-32" style={{ background: C.bgAlt }}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionLabel id="contact-heading">Contact</SectionLabel>

        <div className="mt-10 md:mt-12 grid md:grid-cols-[1.25fr_0.75fr] gap-12 md:gap-16 items-start">
          <div>
            <h2
              className="text-3xl md:text-4xl font-semibold mb-4 leading-tight md:whitespace-nowrap"
              style={{ fontFamily: "'Manrope', sans-serif", color: C.fg, letterSpacing: "-0.02em" }}
            >
              {"Let's build something great together."}
            </h2>
            <p
              className="leading-relaxed mb-8"
              style={{ color: C.fgDim, fontFamily: "'Manrope', sans-serif", fontSize: "0.95rem" }}
            >
              Open to full-stack and backend engineering opportunities. If you have a role, a project,
              or just want to talk engineering — reach out.
            </p>

          </div>

          <div className="flex items-center gap-5">
            {[
              { icon: <Mail size={18} />, href: "mailto:gayathrisameeraa@gmail.com", title: "Email" },
              { icon: <Linkedin size={18} />, href: "https://linkedin.com/in/gayathri-poluri", title: "LinkedIn" },
              { icon: <Github size={18} />, href: "https://github.com/gayathripoluri", title: "GitHub" },
            ].map(({ icon, href, title }) => (
              <a
                key={title}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                title={title}
                className="flex items-center justify-center w-10 h-10 rounded-sm transition-all duration-200"
                style={{ color: C.fgDim, border: `1px solid ${C.border}`, background: C.card }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = C.accent;
                  e.currentTarget.style.borderColor = C.accentBorder;
                  e.currentTarget.style.background = C.accentBg;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = C.fgDim;
                  e.currentTarget.style.borderColor = C.border;
                  e.currentTarget.style.background = C.card;
                }}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div
        className="mt-16 md:mt-20 border-t pt-8 max-w-6xl mx-auto px-6"
        style={{ borderColor: C.borderSubtle }}
      >
        <span
          className="text-xs"
          style={{ color: C.fgDimmest, fontFamily: "'JetBrains Mono', monospace" }}
        >
          © 2025 Gayathri Poluri
        </span>
      </div>
    </section>
  );
}

function SectionLabel({ children, id }: { children: React.ReactNode; id: string }) {
  const C = useTheme();
  return (
    <div className="flex items-center gap-4">
      <h2
        id={id}
        className="text-sm uppercase tracking-widest"
        style={{ color: C.accent, fontFamily: "'JetBrains Mono', monospace" }}
      >
        {children}
      </h2>
      <div className="flex-1 h-px" style={{ background: C.borderSubtle, maxWidth: "160px" }} />
    </div>
  );
}

function TechTag({ children }: { children: React.ReactNode }) {
  const C = useTheme();
  return (
    <span
      className="text-xs px-2 py-0.5"
      style={{
        background: C.accentBg,
        color: C.accent,
        fontFamily: "'JetBrains Mono', monospace",
        border: `1px solid ${C.accentBorder}`,
        borderRadius: "2px",
        opacity: 1,
      }}
    >
      {children}
    </span>
  );
}

function CaseBlock({ label, children }: { label: string; children: React.ReactNode }) {
  const C = useTheme();
  return (
    <div
      className="p-4"
      style={{
        background: C.caseBlockBg,
        border: `1px solid ${C.borderSubtle}`,
        borderRadius: "2px",
      }}
    >
      <span
        className="text-xs uppercase tracking-widest mb-2 block"
        style={{ color: C.fgDimmer, fontFamily: "'JetBrains Mono', monospace" }}
      >
        {label}
      </span>
      <p className="text-sm leading-relaxed" style={{ color: C.fgMuted, fontFamily: "'Manrope', sans-serif" }}>
        {children}
      </p>
    </div>
  );
}

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const C = isDark ? dark : light;

  return (
    <ThemeCtx.Provider value={C}>
      <div style={{ background: C.bg, minHeight: "100vh", transition: "background 0.3s ease, color 0.3s ease" }}>
        <NavBar isDark={isDark} toggle={() => setIsDark((d) => !d)} />
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </div>
    </ThemeCtx.Provider>
  );
}
