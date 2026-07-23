import { useRef } from "react";
import { MapPin, ChevronDown } from "lucide-react";
import { motion } from "motion/react";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const frame = useRef<number | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = sectionRef.current;
    if (!el) return;
    if (frame.current !== null) return;

    frame.current = requestAnimationFrame(() => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      el.style.setProperty("--spotlight-x", `${x}%`);
      el.style.setProperty("--spotlight-y", `${y}%`);
      frame.current = null;
    });
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center overflow-hidden bg-background"
      style={{ ["--spotlight-x" as string]: "60%", ["--spotlight-y" as string]: "40%" }}
    >
      <div
        className="absolute inset-0 pointer-events-none transition-[background] duration-300"
        style={{
          background:
            "radial-gradient(600px circle at var(--spotlight-x) var(--spotlight-y), var(--accent-background) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-16 w-full">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <div className="flex items-center gap-2">
              <MapPin size={12} className="text-accent" />
              <span className="text-xs tracking-widest uppercase text-accent font-mono">Seattle, WA</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card text-xs text-dim-foreground">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75 animate-ping" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
              </span>
              Open to full-stack &amp; backend opportunities
            </div>
          </div>

          <h1
            className="font-bold leading-none mb-6 text-foreground -tracking-[0.03em]"
            style={{ fontSize: "clamp(2.8rem, 8vw, 6rem)" }}
          >
            Gayathri
            <br />
            <span className="text-accent">Poluri</span>
          </h1>

          <p className="text-lg mb-6 max-w-xl leading-relaxed font-normal text-muted-foreground">
            Full-Stack Engineer building scalable systems,{" "}
            <span className="text-foreground">AI-powered tools</span>, and interactive experiences.
          </p>

          <p className="text-base mb-10 max-w-2xl leading-relaxed text-dim-foreground">
            M.S. Computer Science student at Seattle University with hands-on experience across the full stack —
            from cloud-native backend microservices to React frontends to game development.
            I love turning complex problems into clean, working software.
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-3 text-sm font-medium tracking-wide rounded-[2px] bg-accent text-accent-foreground border-none transition-shadow duration-200 hover:shadow-[0_0_24px_var(--accent-glow)]"
            >
              View Projects
            </motion.button>
            <motion.button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-3 text-sm font-medium tracking-wide rounded-[2px] bg-transparent text-foreground border border-border hover:border-accent-border transition-colors duration-200"
            >
              Contact Me
            </motion.button>
          </div>
        </motion.div>

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce text-dimmest-foreground">
          <ChevronDown size={18} />
        </div>
      </div>
    </section>
  );
}
