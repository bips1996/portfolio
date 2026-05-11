"use client";

import { motion } from "framer-motion";
import { ExternalLink, FolderGit2, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/lib/content/portfolio-data";
import { cn } from "@/lib/utils";
import { fadeUp, staggerContainer } from "@/lib/animation/motion";

const STACK_VISIBLE = 3;

export function ProjectsSection() {
  return (
    <section id="projects" className="section-editorial">
      <SectionHeading
        title="Artifacts"
        subtitle="Selected work you can open—repos, demos, and the stack each piece actually shipped with."
        index="02"
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-3.5 lg:grid-cols-3 lg:gap-4"
      >
        {projects.map((project, index) => {
          const featured = index === 0;
          const extraStack = Math.max(0, project.stack.length - STACK_VISIBLE);
          return (
            <motion.article
              key={project.title}
              variants={fadeUp}
              className={cn(
                "artifact-card group relative flex min-h-0 flex-col overflow-hidden rounded-xl border border-border/70 bg-gradient-to-b from-muted/[0.14] via-background/35 to-background/[0.08] p-3.5 shadow-sm transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-px hover:border-primary/30 hover:shadow-[0_16px_40px_-28px_hsl(var(--primary)/0.35)] sm:p-4",
                featured &&
                  "ring-1 ring-primary/[0.12] sm:ring-primary/[0.18] lg:col-span-1 lg:row-span-1",
              )}
            >
              <div
                className={cn(
                  "pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-primary/55 via-primary/15 to-transparent sm:h-full sm:w-px sm:bg-gradient-to-b sm:from-primary/50 sm:via-primary/12 sm:to-transparent",
                  index % 3 === 1 &&
                    "from-[hsl(var(--ambient-b)/0.5)] via-[hsl(var(--ambient-b)/0.12)] sm:from-[hsl(var(--ambient-b)/0.42)]",
                  index % 3 === 2 &&
                    "from-[hsl(var(--ambient-c)/0.45)] via-[hsl(var(--ambient-c)/0.1)] sm:from-[hsl(var(--ambient-c)/0.38)]",
                )}
                aria-hidden
              />

              <span
                className="pointer-events-none absolute -right-1 top-0.5 select-none font-mono text-[2.75rem] font-semibold leading-none tabular-nums text-foreground/[0.045] sm:text-[3.25rem]"
                aria-hidden
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <header className="relative flex items-start justify-between gap-2">
                <div className="min-w-0 flex-1 pl-1 sm:pl-1.5">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                    <span className="font-mono text-[9px] font-semibold tabular-nums tracking-[0.14em] text-primary/85">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {featured ? (
                      <span
                        className="inline-flex items-center rounded-full border border-primary/22 bg-primary/[0.07] p-0.5 text-primary"
                        title="Featured artifact"
                      >
                        <Sparkles className="h-2.5 w-2.5" aria-hidden />
                        <span className="sr-only">Featured artifact</span>
                      </span>
                    ) : null}
                  </div>
                  <h3 className="mt-1.5 font-display text-base italic leading-snug tracking-tight text-foreground sm:text-[1.05rem]">
                    {project.title}
                  </h3>
                </div>

                <div className="relative flex shrink-0 gap-1">
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="artifact-cta-icon"
                      title="Source on GitHub"
                    >
                      <FolderGit2 className="h-3.5 w-3.5" aria-hidden />
                      <span className="sr-only">Source on GitHub</span>
                    </a>
                  ) : null}
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="artifact-cta-icon"
                      title="Live demo"
                    >
                      <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                      <span className="sr-only">Open live demo</span>
                    </a>
                  ) : null}
                </div>
              </header>

              <p className="relative mt-2.5 line-clamp-2 pl-1 text-[11px] leading-relaxed text-muted-foreground sm:mt-3 sm:pl-1.5 sm:text-[12px] sm:leading-[1.55]">
                {project.description}
              </p>

              <ul
                className="relative mt-auto flex flex-wrap items-center gap-1 pt-3 pl-1 sm:pl-1.5"
                aria-label="Tech stack"
              >
                {project.stack.slice(0, STACK_VISIBLE).map((tech) => (
                  <li key={tech}>
                    <span className="artifact-stack-chip">{tech}</span>
                  </li>
                ))}
                {extraStack > 0 ? (
                  <li>
                    <span className="artifact-stack-more">+{extraStack}</span>
                  </li>
                ) : null}
              </ul>
            </motion.article>
          );
        })}
      </motion.div>
    </section>
  );
}
