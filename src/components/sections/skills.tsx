"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { skills } from "@/lib/content/portfolio-data";
import { fadeUp } from "@/lib/animation/motion";

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-28 py-9 sm:scroll-mt-32 sm:py-11 md:py-14">
      <SectionHeading
        title="Instruments"
        subtitle="Languages, platforms, and practice areas—grouped by domain so you can scan the whole stack at once."
        index="03"
        className="mb-5 sm:mb-6"
      />

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-24px" }}
        className="rounded-xl border border-border/70 bg-muted/[0.14] px-4 py-3.5 sm:px-5 sm:py-4"
      >
        <div className="grid grid-cols-1 gap-x-10 gap-y-3.5 sm:grid-cols-2 sm:gap-y-4 lg:grid-cols-3">
          {skills.map((category, i) => (
            <div key={category.title} className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-mono text-[9px] tabular-nums text-muted-foreground/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">
                  {category.title}
                </h3>
              </div>
              <p className="mt-1.5 text-[12px] leading-snug tracking-[0.01em] text-muted-foreground sm:text-[13px]">
                {category.items.join(" · ")}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
