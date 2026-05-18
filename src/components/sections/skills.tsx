"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { skills } from "@/lib/content/portfolio-data";
import { fadeUp, staggerContainer } from "@/lib/animation/motion";
import { cn } from "@/lib/utils";

const TRACK_COUNT = 4;

export function SkillsSection() {
  return (
    <section id="skills" className="section-editorial">
      <SectionHeading
        title="Instruments"
        // subtitle="The stack I work in—languages, platforms, and runtimes, filed by the part of the system they serve."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-48px" }}
        className="roadmap"
      >
        <ol className="roadmap-grid">
          {skills.map((category, i) => (
            <li
              key={category.title}
              className={cn("roadmap-cell", category.colSpan === 2 && "roadmap-cell--wide")}
            >
              <motion.article
                variants={fadeUp}
                data-track={i % TRACK_COUNT}
                className="roadmap-node group/node"
              >
                <div className="roadmap-node-cap">
                  <span className="roadmap-node-step font-mono tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="roadmap-node-title">{category.title}</h3>
                </div>
                <ul
                  className="roadmap-node-skills"
                  aria-label={`${category.title} skills`}
                >
                  {category.items.map((item) => (
                    <li key={item}>
                      <span className="roadmap-skill">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            </li>
          ))}
        </ol>
      </motion.div>
    </section>
  );
}
