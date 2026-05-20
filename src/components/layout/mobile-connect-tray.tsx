"use client";

import { Mail } from "lucide-react";
import { socialLinks } from "@/lib/content/portfolio-data";
import { IconGitHub, IconLinkedIn } from "@/components/ui/brand-icons";
import { cn } from "@/lib/utils";

/** 44px min touch target; visible “pebble” stays smaller inside padding */
const hit = "flex min-h-[44px] min-w-[44px] items-center justify-center";

const pebbleBase = cn(
  "rounded-full border backdrop-blur-md transition-[transform,box-shadow,border-color,background-color] duration-300",
  "active:scale-[0.94] motion-reduce:transition-none motion-reduce:active:scale-100",
);

/**
 * Mobile-only “orbit” — overlapping glass pebbles (not a nav bar).
 * Mail anchors forward; GitHub / LinkedIn sit as satellites with slight tilt.
 */
export function MobileConnectTray() {
  return (
    <div className="pointer-events-none fixed bottom-[max(0.5rem,env(safe-area-inset-bottom))] left-1/2 z-40 flex -translate-x-1/2 flex-col items-center md:hidden">
      <p
        className="pointer-events-auto mb-1.5 max-w-[12rem] text-center font-display text-[10px] italic leading-tight tracking-wide text-muted-foreground/75"
        aria-hidden
      >
        Elsewhere — tap a seal
      </p>

      <div className="pointer-events-auto relative flex h-[4.5rem] w-[9.5rem] items-end justify-center">
        {/* faint orbit */}
        <svg
          className="pointer-events-none absolute -inset-x-2 -top-1 bottom-0 opacity-[0.35] dark:opacity-[0.28]"
          viewBox="0 0 180 72"
          fill="none"
          aria-hidden
        >
          <ellipse
            cx="90"
            cy="58"
            rx="78"
            ry="22"
            stroke="currentColor"
            strokeWidth="0.75"
            strokeDasharray="3 5"
            className="text-primary/35"
          />
        </svg>

        <a
          href={socialLinks.github}
          target="_blank"
          rel="noreferrer"
          className={cn(hit, "absolute left-0 bottom-0 z-[1] -rotate-[8deg]")}
          aria-label="GitHub profile"
        >
          <span
            className={cn(
              pebbleBase,
              "flex h-10 w-10 items-center justify-center border-border/60 bg-background/55 shadow-[0_6px_20px_-10px_rgba(0,0,0,0.45)]",
              "hover:border-primary/35 hover:bg-primary/[0.08] hover:shadow-[0_8px_28px_-12px_hsl(var(--primary)/0.18)]",
            )}
          >
            <IconGitHub className="h-[15px] w-[15px] text-foreground/80" />
          </span>
        </a>

        <a
          href={socialLinks.linkedin}
          target="_blank"
          rel="noreferrer"
          className={cn(hit, "absolute right-0 bottom-0.5 z-[1] rotate-[7deg]")}
          aria-label="LinkedIn profile"
        >
          <span
            className={cn(
              pebbleBase,
              "flex h-10 w-10 items-center justify-center border-border/60 bg-background/55 shadow-[0_6px_20px_-10px_rgba(0,0,0,0.45)]",
              "hover:border-[#0A66C2]/40 hover:bg-[#0A66C2]/[0.07] hover:shadow-[0_8px_28px_-12px_rgba(10,102,194,0.25)] dark:hover:border-[#70B7FF]/35",
            )}
          >
            <IconLinkedIn className="h-[15px] w-[15px] text-[#0A66C2] dark:text-[#70B7FF]" />
          </span>
        </a>

        <a href={socialLinks.email} className={cn(hit, "relative z-[2]")} aria-label="Send email">
          <span
            className={cn(
              pebbleBase,
              "flex h-12 w-12 items-center justify-center border-primary/40 bg-gradient-to-b from-primary/[0.18] to-primary/[0.06]",
              "shadow-[0_0_32px_-10px_hsl(var(--primary)/0.24),0_10px_28px_-16px_rgba(0,0,0,0.5)]",
              "hover:border-primary/55 hover:from-primary/[0.24] hover:to-primary/[0.1]",
            )}
          >
            <Mail className="h-[18px] w-[18px] stroke-[1.7] text-primary" strokeWidth={1.7} />
          </span>
        </a>
      </div>
    </div>
  );
}
