import { useEffect, useRef, useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

const links = ["About", "Projects", "Experience", "Contact"];

export function NavBar({ isDark, toggle }: { isDark: boolean; toggle: () => void }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      setScrolled(window.scrollY > 40);
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.toLowerCase()))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onClickOutside);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, [open]);

  return (
    <header
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-300 ${
        scrolled ? "bg-nav-background backdrop-blur-2xl border-border-subtle" : "bg-transparent border-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="text-sm tracking-[0.18em] uppercase text-accent font-mono">gp</span>

        <div className="hidden md:flex items-center gap-8" aria-label="Primary navigation">
          {links.map((l) => {
            const id = l.toLowerCase();
            const isActive = active === id;
            return (
              <a
                key={l}
                href={`#${id}`}
                aria-current={isActive ? "true" : undefined}
                className={`relative pb-1 text-sm tracking-wide transition-colors duration-200 ${
                  isActive ? "text-foreground" : "text-dim-foreground hover:text-foreground"
                }`}
              >
                {l}
                {isActive && (
                  <motion.span
                    layoutId="nav-active-indicator"
                    className="absolute left-0 right-0 -bottom-0.5 h-[1.5px] bg-accent rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}

          <motion.button
            onClick={toggle}
            whileTap={{ scale: 0.92 }}
            className="flex items-center justify-center w-11 h-11 rounded-sm border border-border text-dim-foreground hover:text-accent hover:border-accent-border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            title={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDark ? <Sun size={14} /> : <Moon size={14} />}
          </motion.button>
        </div>

        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggle}
            className="flex items-center justify-center w-11 h-11 p-1 text-dim-foreground focus-visible:outline-none focus-visible:ring-2"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            title={isDark ? "Light mode" : "Dark mode"}
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            className="flex items-center justify-center w-11 h-11 p-1 text-dim-foreground focus-visible:outline-none focus-visible:ring-2"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="md:hidden fixed inset-0 top-16 bg-black/40 -z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              id="mobile-navigation"
              className="md:hidden border-t bg-nav-background border-border-subtle overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
            >
              {links.map((l) => (
                <a
                  key={l}
                  href={`#${l.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="block w-full text-left px-6 py-4 text-sm text-dim-foreground"
                >
                  {l}
                </a>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
