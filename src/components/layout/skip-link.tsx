/**
 * First focusable control for keyboard / screen-reader users.
 */
export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="absolute left-[-9999px] top-0 z-[100] h-px w-px overflow-hidden rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground shadow-lg focus:fixed focus:left-4 focus:top-4 focus:h-auto focus:w-auto focus:overflow-visible"
    >
      Skip to content
    </a>
  );
}
