"use client";

import LandingPageSection from "@/components/landing-page/landing-page-section";
import { useProjects } from "./project-section.hook";
import ProjectCard from "@/components/project-card";

export default function ProjectsSection() {
  const { projects, loading, error } = useProjects();

  if (loading) {
    return <p className="text-white">Loading projects...</p>;
  }

  if (error) {
    return <p className="text-red-400">Failed to load projects</p>;
  }

  return (
    <LandingPageSection sectionId="my-projects">
      <h2 className="text-5xl font-bold text-white">
        My projects
      </h2>

      <p className="text-white/70 max-w-3xl">
        Here are some of my personal projects that I've worked on
        to sharpen my skills and explore new technologies.
      </p>

      <div
        className="
          grid w-full
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-[repeat(3,minmax(420px,1fr))]
          gap-10
        "
      >
        {projects.map(project => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </LandingPageSection>
  );
}
