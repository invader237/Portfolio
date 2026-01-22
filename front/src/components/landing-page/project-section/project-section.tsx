"use client";
import LandingPageSection from "@/components/landing-page/landing-page-section";
import ProjectCard, { ProjectCardProps } from "@/components/project-card";

interface ProjectsSectionProps {
  projects: ProjectCardProps[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <LandingPageSection sectionId="my-projects">
      <h2 className="text-5xl font-bold text-white">
        My projects
      </h2>

      <p className="text-white/70 max-w-3xl">
        Here are some of my personal projects that I&apos;ve worked on
        to sharpen my skills and explore new technologies.
      </p>

      <div className="
          grid w-full
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-[repeat(3,minmax(420px,1fr))]
          gap-10
      ">
        {projects.map(project => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </LandingPageSection>
  );
}
