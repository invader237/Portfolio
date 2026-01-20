"use client";
import { motion } from "framer-motion";
import ProjectCard, { ProjectCardProps } from "@/components/project-card";

interface ProjectsSectionProps {
  projects: ProjectCardProps[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="my-projects" className="min-h-screen flex flex-col gap-8 mb-32 w-full">
      <motion.div
        className="flex flex-col justify-center items-start gap-8 w-full"
        initial={{ opacity: 0.1, y: 100 }} 
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }} 
        transition={{ duration: 0.5, ease: "easeIn" }}
      >
        <h1 className="text-5xl font-bold text-white">My projects</h1>
        <p className="text-white/70">
          Here are some of my personal projects that I&apos;ve worked on to sharpen my skills and explore new technologies.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {projects.map(p => (
            <ProjectCard key={p.id} {...p} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
