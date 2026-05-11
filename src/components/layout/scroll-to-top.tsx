"use client";

import { useLayoutEffect } from "react";

/**
 * Full page load / refresh: start at top (unless URL has a hash for deep linking).
 * Prevents the browser from restoring a stale scroll position after reload.
 */
export function ScrollToTopOnLoad() {
  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    window.history.scrollRestoration = "manual";

    const hash = window.location.hash?.replace(/^#/, "");
    if (hash) {
      requestAnimationFrame(() => {
        document.getElementById(hash)?.scrollIntoView({ block: "start", behavior: "instant" });
      });
      return;
    }

    window.scrollTo(0, 0);
  }, []);

  return null;
}
