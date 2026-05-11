"use client";

import { useEffect, useRef } from "react";
import { navItems } from "@/lib/content/portfolio-data";
import { cn } from "@/lib/utils";

const ROMAN = ["I", "II", "III", "IV", "V"] as const;

interface MobileFolioStripProps {
  activeSection: string;
  onNavigate: (id: string) => void;
}

/**
 * Horizontal “index cards” — scroll-snap folio TOC, not a classic nav bar.
 */
export function MobileFolioStrip({ activeSection, onNavigate }: MobileFolioStripProps) {
  const skipScrollRef = useRef(true);

  useEffect(() => {
    if (skipScrollRef.current) {
      skipScrollRef.current = false;
      return;
    }
    const btn = document.querySelector<HTMLButtonElement>(
      `[data-folio-jump="${activeSection}"]`,
    );
    btn?.scrollIntoView({ inline: "center", behavior: "smooth", block: "nearest" });
  }, [activeSection]);

  return (
    <div className="relative border-t border-border/45 pt-3 dark:border-border/35">
      <p className="mb-2.5 px-0.5 font-mono text-[8px] uppercase tracking-[0.28em] text-muted-foreground/90">
        Folio index
      </p>
      <nav
        aria-label="Folio sections"
        className="-mx-1 flex snap-x snap-mandatory gap-2 overflow-x-auto overscroll-x-contain px-1 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {navItems.map((item, idx) => {
          const isActive = activeSection === item.id;
          const marker = ROMAN[idx] ?? String(idx + 1);
          return (
            <button
              key={item.id}
              type="button"
              data-folio-jump={item.id}
              aria-current={isActive ? "true" : undefined}
              onClick={() => onNavigate(item.id)}
              className={cn(
                "snap-center",
                "group relative shrink-0 select-none rounded-2xl border px-3.5 py-2.5 text-left transition-[transform,box-shadow,border-color,background-color] duration-300 active:scale-[0.98]",
                "min-w-[5.75rem] max-w-[7.25rem] sm:min-w-[6.25rem]",
                isActive
                  ? "border-primary/45 bg-gradient-to-br from-primary/[0.14] via-primary/[0.06] to-transparent shadow-[0_0_28px_-12px_hsl(var(--primary)/0.55)]"
                  : "border-border/55 bg-muted/[0.12] hover:border-primary/25 hover:bg-muted/25",
              )}
            >
              <span
                className={cn(
                  "font-mono text-[9px] tabular-nums tracking-[0.14em] transition-colors duration-300",
                  isActive ? "text-primary" : "text-muted-foreground/75 group-hover:text-primary/80",
                )}
              >
                {marker}
              </span>
              <span className="mt-1 block font-display text-[0.8125rem] italic leading-[1.2] tracking-tight text-foreground sm:text-[0.875rem]">
                {item.label}
              </span>
              {isActive ? (
                <span
                  className="absolute right-2.5 top-2.5 h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_hsl(var(--primary)/0.85)]"
                  aria-hidden
                />
              ) : null}
            </button>
          );
        })}
      </nav>
    </div>
  );
}
