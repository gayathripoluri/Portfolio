import { Github, Linkedin, Mail } from "lucide-react";
import { SectionLabel } from "./Atoms";
import { Reveal } from "./Reveal";

const socials = [
  { icon: Linkedin, href: "https://linkedin.com/in/gayathri-poluri", label: "LinkedIn profile" },
  { icon: Github, href: "https://github.com/gayathripoluri", label: "GitHub profile" },
];

export function ContactSection() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-24 md:py-32 bg-background-alt">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <SectionLabel id="contact-heading">Contact</SectionLabel>
        </Reveal>

        <div className="mt-10 md:mt-12 grid md:grid-cols-[1.25fr_0.75fr] gap-12 md:gap-16 items-start">
          <Reveal delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 leading-tight md:whitespace-nowrap -tracking-[0.02em] text-foreground">
              Let's build something great together.
            </h2>
            <p className="leading-relaxed mb-8 text-dim-foreground text-[0.95rem]">
              Open to full-stack and backend engineering opportunities. If you have a role, a project,
              or just want to talk engineering — reach out.
            </p>
          </Reveal>

          <Reveal delay={0.2} className="flex flex-col gap-4">
            <a
              href="mailto:gayathrisameeraa@gmail.com"
              aria-label="Email Gayathri Poluri"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium tracking-wide rounded-[2px] bg-accent text-accent-foreground transition-opacity duration-200 hover:opacity-80"
            >
              <Mail size={16} />
              gayathrisameeraa@gmail.com
            </a>

            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 text-sm rounded-sm border border-border bg-card text-dim-foreground hover:text-accent hover:border-accent-border hover:bg-accent-background transition-all duration-200"
                >
                  <Icon size={16} />
                  {label.split(" ")[0]}
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      <div className="mt-16 md:mt-20 border-t border-border-subtle pt-8 max-w-6xl mx-auto px-6">
        <span className="text-xs text-dimmest-foreground font-mono">
          © {new Date().getFullYear()} Gayathri Poluri
        </span>
      </div>
    </section>
  );
}
