"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, FolderGit2 } from "lucide-react";
import type {
  ProjectDiagramKind,
  ProjectEntry,
} from "@/lib/content/portfolio-data";
import { fadeUp, staggerContainer } from "@/lib/animation/motion";
import { cn } from "@/lib/utils";

export interface ArtifactProject {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  links: { href: string; label: string; kind: "github" | "external" }[];
  diagram: ProjectDiagramKind;
  showNavigateChip?: boolean;
}

type Props = { projects: ProjectEntry[] };

function toArtifacts(projects: ProjectEntry[]): ArtifactProject[] {
  return projects.map((project, index) => ({
    id: `BUILD ${String(index + 1).padStart(2, "0")}`,
    title: project.title,
    description: project.description,
    techStack: project?.stack ?? [],
    links: [
      project.githubUrl && {
        href: project.githubUrl,
        label: "Repository",
        kind: "github" as const,
      },
      project.liveUrl && {
        href: project.liveUrl,
        label: "Live demo",
        kind: "external" as const,
      },
    ].filter(Boolean) as ArtifactProject["links"],
    diagram: project.diagram,
    // showNavigateChip: project.diagram === "ml-metrics",
  }));
}

function SchemaDiagram() {
  return (
    <div className="artifact-diagram-inner" aria-hidden>
      <p className="artifact-diagram-label">Data schema</p>
      <svg
        viewBox="0 0 280 200"
        className="h-auto max-h-[7.5rem] w-full text-primary/70 sm:max-h-[9rem]"
      >
        <rect
          x="16"
          y="24"
          width="88"
          height="44"
          rx="4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.55"
        />
        <text
          x="60"
          y="50"
          textAnchor="middle"
          className="fill-muted-foreground text-[9px] font-mono"
        >
          questions
        </text>
        <rect
          x="168"
          y="24"
          width="96"
          height="44"
          rx="4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.55"
        />
        <text
          x="216"
          y="50"
          textAnchor="middle"
          className="fill-muted-foreground text-[9px] font-mono"
        >
          technologies
        </text>
        <rect
          x="92"
          y="112"
          width="96"
          height="44"
          rx="4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.75"
        />
        <text
          x="140"
          y="138"
          textAnchor="middle"
          className="fill-muted-foreground text-[9px] font-mono"
        >
          analysis
        </text>
        <path
          d="M104 46 L132 46 L132 112"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.4"
        />
        <path
          d="M216 68 L148 68 L148 112"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.4"
        />
        <circle
          cx="140"
          cy="156"
          r="3"
          fill="hsl(var(--primary))"
          opacity="0.6"
        />
      </svg>
    </div>
  );
}

function WorkflowDiagram() {
  const nodes = ["PDF", "GitHub API", "LinkedIn JSON", "REST"];
  return (
    <div className="artifact-diagram-inner" aria-hidden>
      <p className="artifact-diagram-label">Ingestion pipeline</p>
      <div className="flex flex-col gap-1.5 py-0.5 sm:gap-2">
        {nodes.map((node, i) => (
          <div
            key={node}
            className="relative flex items-center gap-2 sm:gap-2.5"
          >
            {i > 0 ? (
              <span
                className="absolute -top-2 left-3 h-2 w-px bg-primary/35 sm:left-3.5"
                aria-hidden
              />
            ) : null}
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded border border-primary/35 bg-primary/[0.06] font-mono text-[8px] text-primary sm:h-7 sm:w-7 sm:text-[9px]">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="min-w-0 flex-1 rounded border border-border/80 bg-muted/20 px-2 py-1 font-mono text-[9px] tracking-wide text-muted-foreground sm:px-2.5 sm:py-1.5 sm:text-[10px]">
              {node}
            </span>
            {i < nodes.length - 1 ? (
              <span className="shrink-0 font-mono text-[8px] text-primary/50 sm:text-[9px]">
                →
              </span>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

function MLMetricsDiagram() {
  const matrix = [
    [0.82, 0.18],
    [0.21, 0.79],
  ];
  return (
    <div
      className="artifact-diagram-inner artifact-diagram-inner--split"
      aria-hidden
    >
      <div>
        <p className="artifact-diagram-label">Confusion matrix</p>
        <div className="mt-2 grid grid-cols-2 gap-1">
          {matrix.flat().map((value, i) => (
            <div
              key={i}
              className="flex aspect-square max-h-[2.75rem] items-center justify-center rounded border border-border/70 bg-primary/[0.04] font-mono text-[10px] tabular-nums text-primary/90 sm:max-h-none sm:text-[11px]"
              style={{ opacity: 0.45 + value * 0.55 }}
            >
              {value.toFixed(2)}
            </div>
          ))}
        </div>
      </div>
      <div>
        <p className="artifact-diagram-label">Scatter</p>
        <svg
          viewBox="0 0 120 100"
          className="mt-2 h-[4.25rem] w-full sm:h-[4.75rem]"
        >
          <line
            x1="8"
            y1="92"
            x2="112"
            y2="92"
            stroke="hsl(var(--border))"
            strokeWidth="1"
          />
          <line
            x1="8"
            y1="92"
            x2="8"
            y2="12"
            stroke="hsl(var(--border))"
            strokeWidth="1"
          />
          {[
            [22, 72],
            [38, 58],
            [52, 44],
            [68, 36],
            [84, 28],
            [96, 22],
          ].map(([cx, cy], i) => (
            <circle
              key={i}
              cx={cx}
              cy={cy}
              r="3.5"
              fill="hsl(var(--primary))"
              opacity={0.35 + i * 0.1}
            />
          ))}
        </svg>
      </div>
    </div>
  );
}

function ProjectDiagram({ kind }: { kind: ProjectDiagramKind }) {
  switch (kind) {
    case "schema":
      return <SchemaDiagram />;
    case "workflow":
      return <WorkflowDiagram />;
    case "ml-metrics":
      return <MLMetricsDiagram />;
    default:
      return null;
  }
}

function NavigateChip() {
  return (
    <div
      className="artifact-navigate-chip inline-flex items-center gap-1.5 rounded-md border border-border/80 bg-muted/25 px-2 py-1"
      aria-label="Press K to navigate sections"
    >
      <kbd className="inline-flex min-w-[1.25rem] items-center justify-center rounded border border-primary/35 bg-primary/[0.08] px-1.5 py-0.5 font-mono text-[11px] font-medium text-primary shadow-[0_0_12px_hsl(var(--primary)_/_0.25)]">
        K
      </kbd>
      <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
        Navigate
      </span>
    </div>
  );
}

function BuildLinks({
  links,
  alignEnd,
}: {
  links: ArtifactProject["links"];
  alignEnd?: boolean;
}) {
  if (links.length === 0) return null;

  return (
    <div
      className={cn(
        "mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 sm:mt-4",
        alignEnd && "lg:justify-end",
      )}
    >
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          className="artifact-link group/link"
        >
          {link.kind === "github" ? (
            <FolderGit2
              className="h-3.5 w-3.5 opacity-70 transition-opacity group-hover/link:opacity-100"
              aria-hidden
            />
          ) : null}
          {link.label}
          <ArrowUpRight
            className="h-3 w-3 opacity-50 transition-all group-hover/link:-translate-y-px group-hover/link:translate-x-px group-hover/link:opacity-100 group-hover/link:drop-shadow-[0_0_6px_hsl(var(--primary)_/_0.65)]"
            aria-hidden
          />
        </a>
      ))}
    </div>
  );
}

export function BuildRegister({ projects }: Props) {
  const artifacts = toArtifacts(projects);

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-48px" }}
      className="artifacts-register"
    >
      <ol className="relative space-y-10 sm:space-y-12 lg:space-y-14">
        {artifacts.map((project, index) => {
          const isReversed = index % 2 === 1;
          const bgNum = String(index + 1).padStart(2, "0");

          return (
            <motion.li
              key={project.id}
              variants={fadeUp}
              className="artifact-row group/artifact relative list-none overflow-hidden pb-10 last:pb-0 sm:pb-12 sm:last:pb-0"
            >
              <span
                className={cn(
                  "artifact-bg-num pointer-events-none absolute top-0 z-0 font-display text-[clamp(3.5rem,14vw,9rem)] font-normal leading-none tracking-tighter text-foreground/[0.035] select-none",
                  isReversed ? "right-0" : "left-0",
                )}
                aria-hidden
              >
                {bgNum}
              </span>

              <div
                className={cn(
                  "relative z-[1] grid grid-cols-1 items-start gap-4 sm:gap-5 lg:grid-cols-2 lg:items-center lg:gap-8 xl:gap-10",
                )}
              >
                <div
                  className={cn(
                    "artifact-content min-w-0 text-left",
                    isReversed ? "lg:order-2 lg:text-right" : "lg:order-1",
                  )}
                >
                  <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-primary/85 sm:text-[10px]">
                    {project.id}
                  </p>
                  <h3 className="mt-1 font-display text-[1.25rem] font-normal italic leading-[1.15] tracking-tight text-foreground transition-colors duration-300 group-hover/artifact:text-primary sm:mt-1.5 sm:text-[1.45rem] lg:text-[1.55rem]">
                    {project.title}
                  </h3>
                  <p className="mt-2 max-w-prose text-[12px] leading-[1.55] text-muted-foreground sm:mt-2.5 sm:text-[13px] sm:leading-[1.6]">
                    {project.description}
                  </p>

                  <div
                    className={cn(
                      "mt-3 flex flex-wrap gap-1.5 sm:mt-3.5",
                      isReversed && "lg:justify-end",
                    )}
                  >
                    {project.techStack.map((tag) => (
                      <span key={tag} className="artifact-tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {project.showNavigateChip ? (
                    <div
                      className={cn(
                        "mt-3",
                        isReversed && "lg:flex lg:justify-end",
                      )}
                    >
                      <NavigateChip />
                    </div>
                  ) : null}

                  <BuildLinks links={project.links} alignEnd={isReversed} />
                </div>

                <div
                  className={cn(
                    "artifact-diagram-shell min-w-0 w-full",
                    isReversed ? "lg:order-1" : "lg:order-2",
                  )}
                >
                  <ProjectDiagram kind={project.diagram} />
                </div>
              </div>
            </motion.li>
          );
        })}
      </ol>
    </motion.div>
  );
}
