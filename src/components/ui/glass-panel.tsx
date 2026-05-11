import { cn } from "@/lib/utils";

interface GlassPanelProps {
  className?: string;
  children: React.ReactNode;
}

export function GlassPanel({ className, children }: GlassPanelProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-white/10 bg-slate-900/40 p-6 shadow-[0_20px_60px_-40px_rgba(0,0,0,0.8)] backdrop-blur-sm",
        className,
      )}
    >
      {children}
    </div>
  );
}
