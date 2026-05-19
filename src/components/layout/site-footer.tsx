import { profileName } from "@/lib/content/portfolio-data";

/** Page-level copyright — sits below the last section. */
export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-14 border-t border-border/50 pt-8 pb-2 sm:mt-16">
      <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
        © {year} {profileName}. All rights reserved.
      </p>
    </footer>
  );
}
