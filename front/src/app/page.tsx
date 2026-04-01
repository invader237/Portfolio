"use client";

import React from "react";
import "./globals.css";
import HeroSection from "@/components/landing-page/hero-section";
import AboutMeSection from "@/components/landing-page/about-me-section";
import ExperienceSection from "@/components/landing-page/experience-section";
import ProjectsSection from "@/components/landing-page/project-section";
import SectionDisplay from "@/components/section-display";
import SkillSection from "@/components/landing-page/skills-section";
import FloatingActions from "@/components/floating-actions";

import { Tooltip } from "radix-ui";
import MenuIcon from '@mui/icons-material/Menu';

export default function LandingPage() {

  return (
    <div id="landing-scroll-container" className="w-full h-screen overflow-y-scroll snap-none md:snap-y md:snap-proximity scroll-smooth m-0 p-0">
      <Tooltip.Provider delayDuration={500}>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <button
              type="button"
              className="fixed top-4 left-4 z-50 cursor-pointer rounded-xl border border-white/20 bg-white/10 p-2 shadow-md backdrop-blur-md transition hover:bg-white/20"
              aria-label="Menu"
            >
              <MenuIcon className="text-white text-2xl" />
            </button>
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

      <FloatingActions />

      <div className="flex flex-col w-full items-center">
        <div className="w-full max-w-4xl px-4">
          <SectionDisplay
            scrollContainerId="landing-scroll-container"
            sections={[
              { label: 'Home', id: 'home' },
              { label: 'About me', id: 'about-me' },
              { label: 'My experiences', id: 'my-experiences' },
              { label: 'My Projects', id: 'my-projects' },
              { label: 'My skills', id: 'my-skills' },
            ]}
          />

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
