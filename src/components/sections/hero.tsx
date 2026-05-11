"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  brandMedia,
  editorialIntro,
  folioMeta,
  heroStatement,
  profileMeta,
  socialLinks,
} from "@/lib/content/portfolio-data";
import { fadeUp, staggerContainer } from "@/lib/animation/motion";

export function HeroSection() {
  return (
    <section id="hero" className="scroll-mt-28 pb-6 sm:scroll-mt-32 sm:pb-8">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        className="hero-surface relative overflow-hidden px-5 py-8 sm:px-9 sm:py-11"
      >
        <span className="pointer-events-none absolute left-4 top-4 h-3.5 w-3.5 border-l border-t border-primary/30 sm:left-5 sm:top-5" aria-hidden />
        <span className="pointer-events-none absolute right-4 top-4 h-3.5 w-3.5 border-r border-t border-primary/30 sm:right-5 sm:top-5" aria-hidden />

        <div className="flex flex-col gap-8 border-b border-border/70 pb-7 sm:flex-row sm:items-center sm:justify-between sm:gap-10">
          <div className="flex min-w-0 items-center gap-4 sm:gap-5">
            <div className="relative h-[3.25rem] w-[3.25rem] shrink-0 sm:h-14 sm:w-14">
              <Image
                src={brandMedia.logoSrc}
                alt={brandMedia.logoAlt}
                width={56}
                height={56}
                className="h-full w-full object-contain"
                priority
              />
            </div>
            <div className="min-w-0 border-l border-border/60 pl-4 sm:pl-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary/90">{folioMeta.plate}</p>
              <p className="mt-2 max-w-[20rem] font-mono text-[10px] leading-relaxed tracking-[0.06em] text-muted-foreground">
                {folioMeta.focus}
              </p>
            </div>
          </div>
          <div className="flex shrink-0 items-center gap-4 sm:gap-5">
            <p className="font-mono text-[10px] tabular-nums tracking-[0.16em] text-muted-foreground sm:text-right">
              ed. {folioMeta.edition}
            </p>
            <div className="relative h-[4.25rem] w-[4.25rem] shrink-0 sm:h-[4.75rem] sm:w-[4.75rem]">
              <Image
                src={brandMedia.profileSrc}
                alt={brandMedia.profileAlt}
                fill
                sizes="(max-width: 640px) 68px, 76px"
                className="rounded-full object-cover ring-2 ring-primary/35 ring-offset-2 ring-offset-[hsl(var(--background))]"
                priority
              />
            </div>
          </div>
        </div>

        <motion.div
          variants={fadeUp}
          className="mt-7 flex flex-col gap-2 text-[11px] leading-relaxed sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-1 sm:gap-y-1 sm:text-[11px]"
        >
          <span className="font-medium text-primary">{profileMeta.location}</span>
          <span className="hidden text-muted-foreground/50 sm:inline" aria-hidden>
            ·
          </span>
          <span className="text-muted-foreground">{profileMeta.stackFocus}</span>
          <span className="hidden text-muted-foreground/50 sm:inline" aria-hidden>
            ·
          </span>
          <span className="text-muted-foreground/95">{profileMeta.availability}</span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="font-display mt-9 max-w-[36rem] text-[1.85rem] font-medium leading-[1.14] tracking-tight text-foreground sm:mt-11 sm:text-[2.25rem] sm:leading-[1.1]"
        >
          {heroStatement}
        </motion.h1>

        <motion.div variants={fadeUp} className="mt-10 space-y-5 border-l-2 border-primary/25 pl-5 sm:mt-12 sm:space-y-6 sm:pl-6">
          {editorialIntro.observations.map((line, i) => (
            <p key={line} className="text-[14px] leading-[1.72] text-muted-foreground sm:text-[15px]">
              <span className="mr-3 inline-block min-w-[1.25rem] font-mono text-[10px] tabular-nums text-primary/70">
                {romanObservation(i + 1)}
              </span>
              {observationBody(line)}
            </p>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-col gap-3 border-t border-border/70 pt-8 sm:mt-11 sm:flex-row sm:flex-wrap sm:items-center sm:gap-2"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground sm:mr-1">References</span>
          <div className="flex flex-wrap gap-2">
            <a href={socialLinks.resume} className="folio-action-chip font-mono" target="_blank" rel="noreferrer">
              Résumé
            </a>
            <a href={socialLinks.github} className="folio-action-chip font-mono" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={socialLinks.linkedin} className="folio-action-chip font-mono" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="#contact" className="folio-action-chip font-mono">
              Contact
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function romanObservation(n: number): string {
  const r = ["", "I", "II", "III", "IV", "V"];
  return r[n] ?? String(n);
}

function observationBody(line: string): string {
  const sep = " — ";
  const i = line.indexOf(sep);
  return i >= 0 ? line.slice(i + sep.length) : line;
}
