/**
 * Ambient layer uses CSS variables (--ambient-a/b/c) so hues shift with light/dark theme.
 */
export function SiteBackdrop() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden transition-colors duration-700"
      aria-hidden
    >
      <div className="absolute inset-0 bg-background transition-colors duration-700" />
      <div className="ambient-orb ambient-orb-a" />
      <div className="ambient-orb ambient-orb-b" />
      <div className="ambient-orb ambient-orb-c hidden sm:block" />
      <div className="absolute inset-0 bg-grid-fine opacity-[0.35]" />
      <div className="absolute inset-0 folio-hatch opacity-[0.45]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background transition-colors duration-700" />
    </div>
  );
}
