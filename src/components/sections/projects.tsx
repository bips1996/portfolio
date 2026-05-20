"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/lib/content/portfolio-data";
import { BuildRegister } from "./build-register";

export function ProjectsSection() {
  return (
    <section id="projects" className="section-editorial">
      <SectionHeading marker="III" title="Artifacts" />
      <BuildRegister projects={projects} />
    </section>
  );
}
