"use client";
import LandingPageSection from "@/components/landing-page/landing-page-section";
import ProjectCard, { ProjectCardProps } from "@/components/project-card";

interface ProjectsSectionProps {
  projects: ProjectCardProps[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <LandingPageSection sectionId="my-projects">
        <h2 className="text-5xl font-bold text-white">My projects</h2>
        <p className="text-white/70">
          Here are some of my personal projects that I&apos;ve worked on to sharpen my skills and explore new technologies.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {projects.map(p => (
            <ProjectCard key={p.id} {...p} />
          ))}
        </div>
    </LandingPageSection>
  );
}
