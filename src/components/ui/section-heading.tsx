import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

/** Editorial section title — full rule, optional lead (matches Artifacts). */
export function SectionHeading({ title, subtitle, className }: SectionHeadingProps) {
  return (
    <header className={cn("mb-7 sm:mb-9", className)}>
      <h2 className="font-display text-[1.75rem] font-normal italic leading-[1.1] tracking-tight text-foreground sm:text-[2rem]">
        {title}
      </h2>
      <hr className="mt-3 border-0 border-t border-border/70" />
      {subtitle ? (
        <p className="mt-4 max-w-[42rem] text-[14px] leading-[1.6] text-muted-foreground sm:text-[15px] sm:leading-[1.65]">
          {subtitle}
        </p>
      ) : null}
    </header>
  );
}
