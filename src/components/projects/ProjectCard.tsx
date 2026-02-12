"use client";

import type { Project } from "@/types";
import { trackDemoClick, trackGitHubClick } from "@/lib/analytics";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const handleDemoClick = () => {
    trackDemoClick(project.title);
  };

  const handleGitHubClick = () => {
    trackGitHubClick(project.title);
  };

  return (
    <Card hoverable className={styles.card}>
      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.description}>{project.description}</p>
      {project.tags && (
        <div className={styles.tags}>
          {project.tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      )}
      <div className={styles.actions}>
        <Button
          href={project.demoUrl}
          size="sm"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleDemoClick}
        >
          View Demo
        </Button>
        <Button
          href={project.githubUrl}
          variant="outline"
          size="sm"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleGitHubClick}
        >
          Source Code
        </Button>
      </div>
    </Card>
  );
}
