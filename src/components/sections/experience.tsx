"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { experiences } from "@/lib/content/portfolio-data";
import { fadeUp, staggerContainer } from "@/lib/animation/motion";

/** Dense timeline: vertical spine + nodes — high signal, low chrome (no large cards). */
export function ExperienceSection() {
  return (
    <section id="experience" className="section-editorial">
      <SectionHeading
        title="Field notes"
        subtitle="Chronicle of tenure—systems exercised where latency and ownership are non-negotiable."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="relative"
      >
        {/* Spine */}
        <div
          className="absolute left-[7px] top-3 bottom-3 w-px bg-gradient-to-b from-primary/45 via-border/80 to-transparent sm:left-[9px]"
          aria-hidden
        />

        <div className="space-y-0">
          {experiences.map((item) => (
            <motion.article
              key={`${item.company}-${item.period}`}
              variants={fadeUp}
              className="experience-entry group relative flex gap-4 pb-10 last:pb-3 sm:gap-6"
            >
              {/* Node */}
              <div className="relative z-[1] mt-1.5 flex w-4 shrink-0 justify-center sm:w-5">
                <span
                  className="experience-node h-2 w-2 rounded-full border-2 border-[hsl(var(--background))] bg-primary shadow-[0_0_10px_hsl(var(--primary)_/_0.35)] ring-1 ring-primary/30 transition-all duration-300"
                  aria-hidden
                />
              </div>

              <div className="experience-body min-w-0 flex-1 border-b border-border/70 pb-10 transition-colors duration-300 last:border-0 last:pb-3">
                <div className="flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:items-baseline sm:justify-between sm:gap-x-4">
                  <h3 className="experience-role text-[15px] font-semibold leading-snug tracking-tight text-foreground transition-colors duration-300">
                    <span>{item.role}</span>
                    <span className="font-normal text-muted-foreground"> · </span>
                    <span className="text-foreground">{item.company}</span>
                  </h3>
                  <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-primary/75">
                    {item.period}
                  </p>
                </div>
                <p className="mt-1 text-[11px] text-muted-foreground">{item.location}</p>
                <p className="mt-3 max-w-prose text-[13px] leading-relaxed text-muted-foreground sm:text-[14px]">
                  {item.description}
                </p>
                <p className="mt-3 font-mono text-[11px] leading-snug tracking-wide text-muted-foreground">
                  <span className="text-muted-foreground/70">materials </span>
                  {item.stack.join(" · ")}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
