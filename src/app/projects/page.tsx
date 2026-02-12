import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import { projects } from "@/data/projects";
import SectionContainer from "@/components/ui/SectionContainer";
import ProjectCard from "@/components/projects/ProjectCard";
import styles from "./page.module.css";

export const metadata: Metadata = createPageMetadata({
  title: "Projects — Your Name",
  description:
    "A collection of projects spanning web development, data visualization, and backend systems.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <SectionContainer background="off-white">
      <div className={styles.header}>
        <h1 className={styles.title}>Projects</h1>
        <p className={styles.subtitle}>
          A selection of work I've built. Each project links to a demo and its
          source code.
        </p>
      </div>
      <div className={styles.grid}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </SectionContainer>
  );
}
