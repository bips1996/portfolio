import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  index?: string;
  className?: string;
}

export function SectionHeading({ title, subtitle, index, className }: SectionHeadingProps) {
  return (
    <header className={cn("mb-12 sm:mb-16", className)}>
      <div className="flex flex-col gap-1">
        <div className="flex flex-wrap items-center gap-3">
          {index ? (
            <span
              className="inline-flex min-h-[1.625rem] min-w-[1.625rem] items-center justify-center rounded-full border border-primary/25 bg-primary/[0.07] px-2 font-mono text-[10px] font-semibold tabular-nums tracking-wide text-primary"
              aria-hidden
            >
              {index}
            </span>
          ) : null}
          <h2 className="font-display text-[1.75rem] font-normal italic leading-[1.1] tracking-tight text-foreground sm:text-[2rem]">
            {title}
          </h2>
        </div>
        <div className="mt-4 h-px w-10 rounded-full bg-primary/45" aria-hidden />
      </div>
      {subtitle ? (
        <p className="mt-6 max-w-[36rem] text-[15px] leading-[1.65] text-muted-foreground sm:text-base">
          {subtitle}
        </p>
      ) : null}
    </header>
  );
}
