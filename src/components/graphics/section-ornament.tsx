import { cn } from "@/lib/utils";

type SectionOrnamentProps = {
  className?: string;
};

/** Graphic accent beside section titles */
export function SectionOrnament({ className }: SectionOrnamentProps) {
  return (
    <span className={cn("section-ornament", className)} aria-hidden>
      <svg viewBox="0 0 48 48" className="section-ornament-svg" fill="none">
        <path
          d="M24 4 L44 24 L24 44 L4 24 Z"
          stroke="currentColor"
          strokeWidth="0.75"
          opacity="0.35"
        />
        <path
          d="M24 12 L36 24 L24 36 L12 24 Z"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.55"
        />
        <circle cx="24" cy="24" r="3" fill="currentColor" opacity="0.7" />
      </svg>
      <span className="section-ornament-beam" />
    </span>
  );
}
