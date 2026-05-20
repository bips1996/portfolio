"use client";

import { useEffect } from "react";
import { navItems } from "@/lib/content/portfolio-data";

interface ShortcutConfig {
  onCommandPalette: () => void;
  onNavigate: (targetId: string) => void;
}

export function useKeyboardShortcuts({
  onCommandPalette,
  onNavigate,
}: ShortcutConfig): void {
  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        onCommandPalette();
        return;
      }

      if (event.altKey && /^[1-9]$/.test(event.key)) {
        const index = Number(event.key) - 1;
        const target = navItems[index]?.id;
        if (target) {
          event.preventDefault();
          onNavigate(target);
        }
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onCommandPalette, onNavigate]);
}
