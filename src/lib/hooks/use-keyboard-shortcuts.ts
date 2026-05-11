"use client";

import { useEffect } from "react";

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

      if (event.altKey && /^[1-5]$/.test(event.key)) {
        event.preventDefault();
        const sections = ["hero", "experience", "projects", "skills", "contact"];
        const index = Number(event.key) - 1;
        const target = sections[index];
        if (target) onNavigate(target);
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onCommandPalette, onNavigate]);
}
