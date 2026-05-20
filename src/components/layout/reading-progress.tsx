"use client";

import { useReadingProgress } from "@/lib/hooks/use-reading-progress";

export function ReadingProgress() {
  const progress = useReadingProgress();

  return (
    <div className="fixed left-0 top-0 z-50 h-[2px] w-full bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-primary/70 via-primary/90 to-primary/75 shadow-[0_0_8px_hsl(var(--primary)/0.12)] transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
