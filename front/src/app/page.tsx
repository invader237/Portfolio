"use client";

import React from "react";
import "./globals.css";
import HeroSection from "@/components/landing-page/hero-section";
import AboutMeSection from "@/components/landing-page/about-me-section";
import ExperienceSection from "@/components/landing-page/experience-section";
import ProjectsSection from "@/components/landing-page/project-section";
import SectionDisplay from "@/components/section-display";
import SkillSection from "@/components/landing-page/skills-section";
import SocialLink from "@/components/social-link";
import { ProjectCardProps } from "@/components/project-card";

import { Tooltip } from "radix-ui";
import MenuIcon from '@mui/icons-material/Menu';

export default function LandingPage() {

  const myExperiencesItems = [
    { value: 'Sogeti2', label: 'Sogeti', title: 'Fullstack development job', subtitle: 'June 2025 - July 2025', description: 'Deployed the application developed during the previous internship at Sogeti in a test environment, conducted application testing, and managed its deployment to production.' },
    { value: 'Sogeti1', label: 'Sogeti', title: 'Fullstack development internship', subtitle: 'April 2025 - May 2025', description: 'Designed and implemented a custom ticketing application to replace Jira within a client project’s production workflow, streamlining processes by adapting to complex business logic requirements.' },
    ];

    const projects: ProjectCardProps[] = [
      {
        id: 1,
        title: "Personal Portfolio (WIP)",
        description: "A personal website designed to showcase my projects, skills, and background, while also serving as a tool to streamline and simplify the recruitment process.",
        imageUrl: "https://placehold.co/100x100",
        projectUrl: "https://trivino.info",
      },
      {
        id: 2,
        title: "Neuroom (WIP)",
        description: "An application that uses convolutional neural networks (CNNs) to recognize and classify university rooms, with an automated pipeline for dataset creation and model training.",
        imageUrl: "https://placehold.co/100x100",
        projectUrl: "https://neuroom.fr",
      },
    ];

  return (
    <div className="w-full h-full">
        <Tooltip.Provider delayDuration={500}>
            <Tooltip.Root>
                <Tooltip.Trigger asChild>
                    <div className="fixed top-4 left-4 cursor-pointer z-999">
                      <div className="p-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-md hover:bg-white/20 transition">
                        <MenuIcon className="text-white text-2xl" />
                      </div>
                    </div>
                </Tooltip.Trigger>
                <Tooltip.Content
                    sideOffset={8}
                    side="right"
                    className="
                      bg-white/20 text-white text-sm rounded-md px-3 py-1
                      shadow-lg
                    "
                >
                    Menu (not implemented yet)
                    <Tooltip.Arrow 
                        className="fill-white/20"
                    />
                </Tooltip.Content>
            </Tooltip.Root>
        </Tooltip.Provider>
        <SocialLink/>
      <div className="flex flex-col w-full items-center">
        <div className="w-full max-w-4xl flex flex-col gap-4 px-4">
        <SectionDisplay sections={["Home", "About me", "My experience", "My Projects", "My skills"]} />
        <HeroSection scrollToId="about-me" />
        <AboutMeSection />
        <ExperienceSection items={myExperiencesItems} />
        <ProjectsSection projects={projects} />
        <SkillSection />
        </div>
      </div>
    </div>
  );
}
