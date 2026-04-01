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

  return (
    <div className="w-full h-screen overflow-y-scroll snap-y snap-proximity scroll-smooth m-0 p-0">
      <Tooltip.Provider delayDuration={500}>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <div className="fixed top-4 left-4 cursor-pointer z-50">
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
            <Tooltip.Arrow className="fill-white/20" />
          </Tooltip.Content>
        </Tooltip.Root>
      </Tooltip.Provider>

      <SocialLink />

      <div className="flex flex-col w-full items-center">
        <div className="w-full max-w-4xl px-4">
          <SectionDisplay sections={["Home", "About me", "My experiences", "My Projects", "My skills"]} />

          <HeroSection scrollToId="about-me" />
          <AboutMeSection />
          <ExperienceSection/>
          <ProjectsSection />
          <SkillSection />
        </div>
      </div>
    </div>
  );
}
