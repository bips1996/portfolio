"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Mail } from "lucide-react";
import { brandMedia, folioMeta, navItems, profileName, socialLinks } from "@/lib/content/portfolio-data";
import { cn } from "@/lib/utils";
import { IconGitHub, IconLinkedIn } from "@/components/ui/brand-icons";
import { ThemeToggle } from "@/components/ui/theme-toggle";

interface LeftRailProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

const NAV_INDEX = ["I", "II", "III", "IV", "V"] as const;

export function LeftRail({ activeSection, onNavigate }: LeftRailProps) {
  return (
    <aside className="surface-rail hidden lg:sticky lg:top-0 lg:flex lg:h-screen lg:min-h-0 lg:w-[268px] lg:shrink-0 lg:flex-col lg:border-r lg:border-border lg:py-11 lg:pr-8">
      <div className="flex min-h-0 flex-1 flex-col px-0.5">
        <a
          href="#hero"
          className="group block rounded-2xl border border-border/70 bg-muted/[0.18] p-4 transition-colors duration-300 hover:border-primary/28 hover:bg-muted/30"
          onClick={(e) => {
            e.preventDefault();
            onNavigate("hero");
          }}
        >
          <div className="flex gap-3.5">
            <div className="relative h-12 w-12 shrink-0">
              <Image
                src={brandMedia.logoSrc}
                alt={brandMedia.logoAlt}
                width={48}
                height={48}
                className="h-12 w-12 object-contain"
              />
            </div>
            <div className="min-w-0 flex-1 pt-0.5">
              <p className="font-mono text-[9px] uppercase tracking-[0.24em] text-primary">Folio</p>
              <p className="font-display mt-1.5 text-[1.05rem] font-medium italic leading-snug tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary sm:text-[1.125rem]">
                {profileName}
              </p>
              <p className="mt-2.5 font-mono text-[9px] tabular-nums tracking-[0.16em] text-muted-foreground">
                ed. {folioMeta.edition}
              </p>
            </div>
          </div>
        </a>

        <p className="mt-10 font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground/80">Contents</p>
        <nav className="mt-3 min-h-0 flex-1 space-y-0.5 overflow-y-auto overscroll-contain pr-1" aria-label="Section navigation">
          {navItems.map((item, idx) => {
            const isActive = activeSection === item.id;
            const marker = NAV_INDEX[idx] ?? String(idx + 1);
            return (
              <button
                key={item.id}
                type="button"
                aria-current={isActive ? "location" : undefined}
                onClick={() => onNavigate(item.id)}
                className={cn(
                  "group/nav relative flex w-full items-center gap-3 rounded-xl py-2.5 pl-2.5 pr-2 text-left text-[13px] transition-colors duration-200",
                  isActive
                    ? "font-medium text-foreground"
                    : "font-normal text-muted-foreground hover:bg-muted/50 hover:text-foreground",
                )}
              >
                <span
                  className={cn(
                    "w-5 shrink-0 text-right font-mono text-[9px] tabular-nums tracking-[0.1em] transition-colors duration-200",
                    isActive ? "text-primary" : "text-muted-foreground/65 group-hover/nav:text-muted-foreground",
                  )}
                  aria-hidden
                >
                  {marker}
                </span>
                <span
                  className={cn(
                    "absolute left-0 top-1/2 h-6 w-[3px] -translate-y-1/2 rounded-full transition-all duration-200",
                    isActive
                      ? "bg-primary shadow-[0_0_14px_hsl(var(--primary)/0.4)]"
                      : "bg-transparent group-hover/nav:bg-primary/20",
                  )}
                  aria-hidden
                />
                <span className="relative min-w-0 flex-1 leading-snug">
                  {item.label}
                  {isActive ? (
                    <motion.span
                      layoutId="navGlow"
                      className="absolute -inset-x-1 -inset-y-1 -z-10 rounded-lg bg-primary/[0.07]"
                      transition={{ type: "spring", stiffness: 380, damping: 34 }}
                    />
                  ) : null}
                </span>
              </button>
            );
          })}
        </nav>
      </div>

      <div className="mt-8 shrink-0 border-t border-border/80 pt-6">
        <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground">Connect</p>
        <div className="flex flex-wrap items-center gap-2">
          <a aria-label="Email" href={socialLinks.email} className="social-rail-link">
            <Mail className="h-[18px] w-[18px] stroke-[1.75]" strokeWidth={1.75} />
          </a>
          <a
            aria-label="GitHub"
            href={socialLinks.github}
            target="_blank"
            rel="noreferrer"
            className="social-rail-link"
          >
            <IconGitHub />
          </a>
          <a
            aria-label="LinkedIn"
            href={socialLinks.linkedin}
            target="_blank"
            rel="noreferrer"
            className="social-rail-link"
          >
            <IconLinkedIn />
          </a>
          <div className="ml-auto flex items-center pl-1">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </aside>
  );
}
