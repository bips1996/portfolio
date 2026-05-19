import { BackdropGraphics } from "@/components/graphics/backdrop-graphics";

/**
 * Full-viewport backdrop — rendered at layout root (z-0) so it stays above body paint.
 */
export function SiteBackdrop() {
  return (
    <div
      className="site-backdrop pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      <div className="site-backdrop-base absolute inset-0" />
      <BackdropGraphics />
      <div className="absolute inset-0 bg-grid-fine opacity-[0.14] dark:opacity-[0.2]" />
    </div>
  );
}
