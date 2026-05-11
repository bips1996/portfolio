"use client";

import { MoonStar, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

/** Track 5.75rem, p-0.5: inner 88px → half 44px (w-11) */
export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <span
        className="inline-block h-9 w-[5.75rem] shrink-0 rounded-full border border-border/50 bg-muted/40"
        aria-hidden
      />
    );
  }

  const isDark = resolvedTheme !== "light";

  return (
    <button
      type="button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "relative inline-flex h-9 w-[5.75rem] shrink-0 items-center rounded-full border border-border/75 p-0.5",
        "bg-muted/45 shadow-[inset_0_1px_0_0_hsl(var(--foreground)/0.04)]",
        "transition-[border-color,background-color] duration-200 hover:border-primary/30 hover:bg-muted/60",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
      )}
    >
      <span
        className={cn(
          "pointer-events-none absolute inset-y-0.5 left-0.5 w-11 rounded-full border border-border/55",
          "bg-card/95 shadow-sm ring-1 ring-black/[0.04] dark:ring-white/[0.06]",
          "transition-transform duration-200 ease-out",
          isDark ? "translate-x-0" : "translate-x-11",
        )}
        aria-hidden
      />

      <span className="relative z-[1] flex h-full w-full items-center">
        <span className="flex flex-1 justify-center" aria-hidden>
          <MoonStar
            className={cn(
              "h-3.5 w-3.5 transition-[color,transform,opacity] duration-200",
              isDark ? "text-primary opacity-100" : "text-muted-foreground/50 opacity-90",
            )}
            strokeWidth={1.6}
          />
        </span>
        <span className="flex flex-1 justify-center" aria-hidden>
          <Sun
            className={cn(
              "h-3.5 w-3.5 transition-[color,transform,opacity] duration-200",
              !isDark ? "text-primary opacity-100" : "text-muted-foreground/50 opacity-90",
            )}
            strokeWidth={1.6}
          />
        </span>
      </span>
    </button>
  );
}
