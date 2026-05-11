"use client";

/**
 * Subtle power-user cue; hidden on very small screens to reduce noise.
 */
export function KeyboardHint() {
  return (
    <p className="pointer-events-none fixed bottom-6 left-1/2 z-30 hidden -translate-x-1/2 font-mono text-[11px] tracking-wide text-muted-foreground md:block">
      <kbd className="rounded border border-border bg-muted/60 px-1.5 py-0.5 text-muted-foreground transition-colors duration-300">
        ⌘K
      </kbd>
      <span className="ml-2">Navigate</span>
    </p>
  );
}
