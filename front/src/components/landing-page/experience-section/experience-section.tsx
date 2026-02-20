"use client";

import { useState, useLayoutEffect, useRef } from "react";
import { ToggleGroup } from "radix-ui";
import LandingPageSection from "@/components/landing-page/landing-page-section";
import { useExperiences } from "./experience-section.hook";

export default function ExperienceSection() {
  const { experiences, loading, error } = useExperiences();

  const [selectedId, setSelectedId] = useState(
    experiences.length ? String(experiences[0].id) : ""
  );
  const [itemHeight, setItemHeight] = useState(0);
  const firstItemRef = useRef<HTMLButtonElement>(null);

  useLayoutEffect(() => {
    if (experiences.length && !selectedId) {
      setSelectedId(String(experiences[0].id));
    }
  }, [experiences, selectedId]);

  useLayoutEffect(() => {
    if (firstItemRef.current) setItemHeight(firstItemRef.current.offsetHeight);
  }, [experiences]);

  if (loading) return <p className="text-white">Loading experiences...</p>;
  if (error) return <p className="text-red-400">{error}</p>;
  if (!experiences.length) return null;

  const selectedExperience = experiences.find((experience) => String(experience.id) === selectedId);

  return (
    <LandingPageSection sectionId="my-experiences">
      <h2 className="text-5xl font-bold text-white">My experiences</h2>

      <div className="relative inline-flex flex-row">
        <span
          className="absolute left-0 w-1 bg-pink-500/80 transition-all duration-300"
          style={{
            top: `${experiences.findIndex((experience) => String(experience.id) === selectedId) * itemHeight}px`,
            height: `${itemHeight}px`,
          }}
        />

        <ToggleGroup.Root
          type="single"
          value={selectedId}
          onValueChange={(val) => val && setSelectedId(val)}
          className="flex-col inline-flex"
        >
          {experiences.map((experience, idx) => (
            <ToggleGroup.Item
              key={experience.id}
              value={String(experience.id)}
              ref={idx === 0 ? firstItemRef : null}
              className="px-4 py-8 text-left border-l-4 border-gray-300 data-[state=on]:text-pink-500/80"
            >
              {experience.company ?? "Unknown Company"}
            </ToggleGroup.Item>
          ))}
        </ToggleGroup.Root>

        {selectedExperience && (
        <div className="ml-8 mt-4 flex flex-col">
          <h3 className="text-2xl font-bold text-white">
            {selectedExperience?.title}
          </h3>

          <p className="text-md text-white/70">
          {selectedExperience
            ? `${new Date(selectedExperience.startDate).toLocaleDateString("en-US", {
                month: "long",
                year: "numeric",
              })} - ${
                selectedExperience.endDate
                  ? new Date(selectedExperience.endDate).toLocaleDateString("en-US", {
                      month: "long",
                      year: "numeric",
                    })
                  : "Present"
              }`
            : ""}
          </p>

          <p className="mt-2 text-white/60">
            {selectedExperience.description}
          </p>
        </div>
        )}
      </div>
    </LandingPageSection>
  );
}
