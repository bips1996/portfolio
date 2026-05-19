"use client";

import { useMemo, useState } from "react";
import { LeftRail } from "@/components/layout/left-rail";
import { ReadingProgress } from "@/components/layout/reading-progress";
import { MobileConnectTray } from "@/components/layout/mobile-connect-tray";
import { MobileFolioChrome } from "@/components/layout/mobile-folio-chrome";
import { CursorAmbient } from "@/components/layout/cursor-ambient";
import { KeyboardHint } from "@/components/layout/keyboard-hint";
import { ScrollToTopOnLoad } from "@/components/layout/scroll-to-top";
import { SkipLink } from "@/components/layout/skip-link";
import { CommandPalette } from "@/components/ui/command-palette";
import { HeroSection } from "@/components/sections/hero";
import { ExperienceSection } from "@/components/sections/experience";
import { ProjectsSection } from "@/components/sections/projects";
import { SkillsSection } from "@/components/sections/skills";
import { ContactSection } from "@/components/sections/contact";
import { SiteFooter } from "@/components/layout/site-footer";
import { navItems } from "@/lib/content/portfolio-data";
import { useScrollSpy } from "@/lib/hooks/use-scrollspy";
import { useKeyboardShortcuts } from "@/lib/hooks/use-keyboard-shortcuts";

export default function Home() {
  const [commandOpen, setCommandOpen] = useState(false);
  const sectionIds = useMemo(() => navItems.map((item) => item.id), []);
  const activeSection = useScrollSpy(sectionIds);

  const onNavigate = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useKeyboardShortcuts({
    onCommandPalette: () => setCommandOpen(true),
    onNavigate,
  });

  return (
    <div className="relative min-h-screen">
      <ScrollToTopOnLoad />
      <SkipLink />
      <CursorAmbient />
      <ReadingProgress />
      <KeyboardHint />
      <CommandPalette open={commandOpen} onOpenChange={setCommandOpen} onNavigate={onNavigate} />
      <MobileFolioChrome activeSection={activeSection} onNavigate={onNavigate} />

      <div className="relative z-10 mx-auto flex w-full max-w-[1180px] gap-0 px-4 sm:px-7 lg:px-10">
        <LeftRail activeSection={activeSection} onNavigate={onNavigate} />

        <main
          id="main-content"
          className="min-w-0 flex-1 border-l-0 bg-transparent py-8 transition-colors duration-500 sm:border-l sm:border-primary/15 sm:py-12 lg:max-w-none lg:border-l-0 lg:py-[4.25rem] lg:pl-11 lg:pr-5 xl:pl-14 max-lg:pb-[calc(6.5rem+env(safe-area-inset-bottom,0px))] max-lg:pt-[var(--folio-chrome-offset,6.5rem)]"
        >
          <div className="content-well">
            <HeroSection />
            <ExperienceSection />
            <ProjectsSection />
            <SkillsSection />
            <ContactSection />
            <SiteFooter />
          </div>
        </main>
      </div>

      <MobileConnectTray />
    </div>
  );
}
