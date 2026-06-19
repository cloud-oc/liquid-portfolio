import { AboutSection } from "./components/AboutSection";
import { FooterSection } from "./components/FooterSection";
import { HeroSection } from "./components/HeroSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ServicesSection } from "./components/ServicesSection";
import { useEffect } from "react";

export function App() {
  useEffect(() => {
    const targetId = window.location.hash.slice(1);

    if (!targetId) {
      return;
    }

    document.getElementById(targetId)?.scrollIntoView();
  }, []);

  return (
    <main className="relative min-h-screen overflow-x-clip bg-ink font-body text-white">
      <div className="site-backdrop" aria-hidden="true" />
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <FooterSection />
      </div>
    </main>
  );
}
