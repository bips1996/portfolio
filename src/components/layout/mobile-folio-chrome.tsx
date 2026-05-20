"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { navItems, brandMedia } from "@/lib/content/portfolio-data";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const ROMAN = ["I", "II", "III", "IV", "V"] as const;

interface MobileFolioChromeProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

/**
 * Fixed folio chapter tab — stays pinned on scroll; main uses --folio-chrome-offset for spacing.
 */
export function MobileFolioChrome({ activeSection, onNavigate }: MobileFolioChromeProps) {
  const activeIndex = Math.max(
    0,
    navItems.findIndex((item) => item.id === activeSection),
  );
  const active = navItems[activeIndex] ?? navItems[0];
  const marker = ROMAN[activeIndex] ?? "I";

  return (
    <header
      className="folio-mobile-chrome pointer-events-none fixed inset-x-0 top-0 z-30 lg:hidden"
      aria-label="Folio chapter"
    >
      <motion.div
        layout
        className="pointer-events-auto mx-auto w-full max-w-md px-4 pt-[max(0.25rem,env(safe-area-inset-top))] sm:px-7"
      >
        <div className="folio-chrome-panel relative overflow-hidden rounded-2xl border border-border/50 bg-background/90 shadow-[0_12px_40px_-28px_rgba(0,0,0,0.35)] backdrop-blur-xl supports-[backdrop-filter]:bg-background/78 dark:border-border/70 dark:bg-card/92 dark:shadow-[0_16px_48px_-32px_hsl(var(--primary)/0.12)]">
        <motion.div className="folio-chrome-capsule flex items-center gap-2 px-2.5 py-2">
          <button
            type="button"
            onClick={() => onNavigate("hero")}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border/50 bg-muted/25 transition-colors duration-300 active:scale-95 active:border-primary/35"
            aria-label="Back to prologue"
          >
            <Image
              src={brandMedia.logoSrc}
              alt=""
              width={18}
              height={18}
              className="h-[1.05rem] w-[1.05rem] object-contain opacity-90"
              aria-hidden
            />
          </button>

          <div className="flex min-w-0 flex-1 items-baseline gap-1.5 overflow-hidden py-0.5 pl-0.5 pr-1">
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={marker}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.18 }}
                className="shrink-0 font-mono text-[10px] tabular-nums tracking-[0.12em] text-accent-gold/85"
              >
                {marker}
              </motion.span>
            </AnimatePresence>
            <span className="font-mono text-[9px] text-muted-foreground/35" aria-hidden>
              ·
            </span>
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={active.id}
                initial={{ opacity: 0, x: 6 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -6 }}
                transition={{ duration: 0.2 }}
                className="truncate font-display text-[0.8125rem] italic leading-none tracking-tight text-foreground/95"
              >
                {active.label}
              </motion.span>
            </AnimatePresence>
          </div>

          <ThemeToggle variant="icon" />
        </motion.div>

        <nav
          className="folio-chrome-rail flex items-center gap-0.5 border-t border-border/45 bg-muted/15 px-2 py-1.5 dark:bg-muted/10"
          aria-label="Folio sections"
        >
          {navItems.map((item, idx) => {
            const isActive = activeSection === item.id;
            const seg = ROMAN[idx] ?? String(idx + 1);
            return (
              <button
                key={item.id}
                type="button"
                aria-current={isActive ? "location" : undefined}
                aria-label={`${seg} — ${item.label}`}
                onClick={() => onNavigate(item.id)}
                className="group/chapter relative flex min-h-[32px] min-w-0 flex-1 flex-col items-center justify-end gap-0.5 rounded-lg py-0.5 active:bg-primary/[0.06]"
              >
                <span
                  className={cn(
                    "folio-chrome-numeral font-mono text-[8px] tabular-nums tracking-[0.08em] transition-colors duration-300",
                    isActive
                      ? "text-accent-gold/88"
                      : "text-muted-foreground/45 group-hover/chapter:text-muted-foreground/80",
                  )}
                >
                  {seg}
                </span>
                <span
                  className={cn(
                    "folio-chrome-seg block h-[3px] w-full max-w-[2.75rem] rounded-full transition-all duration-300",
                    isActive ? "folio-gold-active-line" : "bg-border/55",
                  )}
                  aria-hidden
                />
              </button>
            );
          })}
        </nav>
        </div>
      </motion.div>
    </header>
  );
}
