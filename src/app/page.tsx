"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { LeftRail } from "@/components/layout/left-rail";
import { ReadingProgress } from "@/components/layout/reading-progress";
import { MobileConnectTray } from "@/components/layout/mobile-connect-tray";
import { MobileFolioStrip } from "@/components/layout/mobile-folio-strip";
import { CursorAmbient } from "@/components/layout/cursor-ambient";
import { SiteBackdrop } from "@/components/layout/site-backdrop";
import { KeyboardHint } from "@/components/layout/keyboard-hint";
import { ScrollToTopOnLoad } from "@/components/layout/scroll-to-top";
import { SkipLink } from "@/components/layout/skip-link";
import { CommandPalette } from "@/components/ui/command-palette";
import { HeroSection } from "@/components/sections/hero";
import { ExperienceSection } from "@/components/sections/experience";
import { ProjectsSection } from "@/components/sections/projects";
import { SkillsSection } from "@/components/sections/skills";
import { ContactSection } from "@/components/sections/contact";
import { brandMedia, navItems, profileName } from "@/lib/content/portfolio-data";
import { useScrollSpy } from "@/lib/hooks/use-scrollspy";
import { useKeyboardShortcuts } from "@/lib/hooks/use-keyboard-shortcuts";
import { ThemeToggle } from "@/components/ui/theme-toggle";

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
      <SiteBackdrop />
      <CursorAmbient />
      <ReadingProgress />
      <KeyboardHint />
      <CommandPalette open={commandOpen} onOpenChange={setCommandOpen} onNavigate={onNavigate} />

      <div className="relative z-10 mx-auto flex w-full max-w-[1180px] gap-0 px-4 sm:px-7 lg:px-10">
        <LeftRail activeSection={activeSection} onNavigate={onNavigate} />

        <main
          id="main-content"
          className="min-w-0 flex-1 border-l-0 bg-gradient-to-b from-background via-background to-muted/[0.08] py-8 backdrop-blur-[2px] transition-colors duration-500 sm:border-l sm:border-border/50 sm:bg-background/35 sm:py-12 sm:from-transparent sm:via-transparent sm:to-transparent lg:max-w-none lg:border-l-0 lg:bg-transparent lg:bg-none lg:py-[4.25rem] lg:pl-11 lg:pr-5 xl:pl-14 max-lg:pb-[calc(6.5rem+env(safe-area-inset-bottom,0px))]"
        >
          <div
            className="sticky top-0 z-20 -mx-4 mb-7 border-b border-border/60 bg-background/80 shadow-[0_8px_32px_-20px_rgba(0,0,0,0.45)] backdrop-blur-xl supports-[backdrop-filter]:bg-background/65 sm:-mx-7 sm:mb-9 sm:rounded-b-2xl sm:shadow-[0_12px_40px_-24px_rgba(0,0,0,0.4)] lg:hidden dark:border-border/50 dark:bg-background/72 dark:shadow-[0_12px_48px_-28px_rgba(0,0,0,0.65)] dark:supports-[backdrop-filter]:bg-background/55"
          >
            <div className="px-4 pt-[max(0.625rem,env(safe-area-inset-top))] pb-3 sm:px-7">
              <div className="flex items-center justify-between gap-3">
                <a
                  href="#hero"
                  className="flex min-w-0 items-center gap-2.5 rounded-xl py-1 pr-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground transition-colors duration-300 active:text-primary sm:gap-3 sm:text-[11px] sm:tracking-[0.18em]"
                >
                  <span className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-border/70 bg-muted/30 shadow-inner shadow-black/10 dark:shadow-black/30">
                    <Image
                      src={brandMedia.logoSrc}
                      alt=""
                      width={26}
                      height={26}
                      className="h-[1.35rem] w-[1.35rem] object-contain sm:h-7 sm:w-7"
                      aria-hidden
                    />
                  </span>
                  <span className="truncate">
                    Folio
                    <span className="text-muted-foreground/40"> · </span>
                    <span className="text-foreground/90">{profileName.split(" ").pop()}</span>
                  </span>
                </a>
                <ThemeToggle />
              </div>
            </div>
            <div className="px-4 pb-3 sm:px-7">
              <MobileFolioStrip activeSection={activeSection} onNavigate={onNavigate} />
            </div>
          </div>

          <div className="content-well">
            <HeroSection />
            <ExperienceSection />
            <ProjectsSection />
            <SkillsSection />
            <ContactSection />
          </div>
        </main>
      </div>

      <MobileConnectTray />
    </div>
  );
}
