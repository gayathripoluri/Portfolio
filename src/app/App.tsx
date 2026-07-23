import { useTheme } from "./hooks/useTheme";
import { NavBar } from "./components/NavBar";
import { ScrollProgress } from "./components/ScrollProgress";
import { HeroSection } from "./components/HeroSection";
import { StatsStrip } from "./components/StatsStrip";
import { AboutSection } from "./components/AboutSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { ContactSection } from "./components/ContactSection";

export default function App() {
  const { isDark, toggle } = useTheme();

  return (
    <div className="bg-background min-h-screen transition-colors duration-300">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-sm focus:bg-accent focus:text-accent-foreground"
      >
        Skip to content
      </a>

      <ScrollProgress />
      <NavBar isDark={isDark} toggle={toggle} />

      <main id="main-content">
        <HeroSection />
        <StatsStrip />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
    </div>
  );
}
