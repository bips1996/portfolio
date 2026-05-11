"use client";

import { useReadingProgress } from "@/lib/hooks/use-reading-progress";

export function ReadingProgress() {
  const progress = useReadingProgress();

  return (
    <div className="fixed left-0 top-0 z-50 h-[2px] w-full bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-primary/90 via-[hsl(var(--ambient-b)_/_0.92)] to-primary/85 shadow-[0_0_12px_hsl(var(--primary)_/_0.35)] transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
