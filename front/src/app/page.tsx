"use client";

import React, {useState, useLayoutEffect} from "react";
import "./globals.css";
import { motion, useScroll, useTransform } from "framer-motion";
import { ToggleGroup, Tooltip } from "radix-ui";
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SectionDisplay from "@/components/section-display";
import ProjectCard, { ProjectCardProps } from "@/components/project-card";

export default function LandingPage() {

  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]); 
  const [myExperiencesItemHeight, setMyExperiencesItemHeight] = useState(0);
  const ref = React.useRef<HTMLButtonElement>(null);

  const [value, setValue] = useState('Sogeti2');
  const myExperiencesItems = [
    { value: 'Sogeti2', label: 'Sogeti', title: 'Fullstack development job', subtitle: 'June 2025 - July 2025', description: 'Deployed the application developed during the previous internship at Sogeti in a test environment, conducted application testing, and managed its deployment to production.' },
    { value: 'Sogeti1', label: 'Sogeti', title: 'Fullstack development internship', subtitle: 'April 2025 - May 2025', description: 'Designed and implemented a custom ticketing application to replace Jira within a client project’s production workflow, streamlining processes by adapting to complex business logic requirements.' },
    ];

    const projects: ProjectCardProps[] = [
      {
        id: 1,
        title: "Portfolio Personnel",
        description: "Un site web pour présenter mes projets, mes compétences et mon parcours.",
        imageUrl: "https://placehold.co/100x100",
        projectUrl: "https://monportfolio.com",
      },
      {
        id: 2,
        title: "Application Météo",
        description: "Application web affichant la météo actuelle et les prévisions en temps réel.",
        imageUrl: "https://placehold.co/100x100",
        projectUrl: "https://github.com/monprofil/meteo-app",
      },
      {
        id: 3,
        title: "Gestionnaire de tâches",
        description: "Une application de gestion de tâches avec React et TypeScript.",
        imageUrl: "https://placehold.co/100x100",
        projectUrl: "https://todoapp.example.com",
      },
      {
        id: 4,
        title: "API de recommandations",
        description: "Backend Spring Boot pour recommander des vêtements selon la météo.",
        imageUrl: "https://placehold.co/100x100",
        projectUrl: "https://github.com/monprofil/clothing-api",
      },
      {
        id: 5,
        title: "Jeu Pokémon Battle",
        description: "Un jeu web où les utilisateurs peuvent créer et combattre des Pokémon personnalisés.",
        imageUrl: "https://placehold.co/100x100",
        projectUrl: "https://pokemonbattle.example.com",
      },
    ];

  useLayoutEffect(() => {
    if (ref.current) {
      setMyExperiencesItemHeight(ref.current.offsetHeight);
    }
  }, []);

  return (
    <div>
        <SectionDisplay sections={["Home", "About me", "My experience", "My Projects"]} />
        <div className="w-full h-full">

            <Tooltip.Provider delayDuration={500}>
                <Tooltip.Root>
                    <Tooltip.Trigger asChild>
                        <div className="fixed top-4 left-4 cursor-pointer">
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

            <div className="flex flex-col w-full items-center">
                <div className="w-full max-w-4xl flex flex-col">

                    <section id="home" className="m-0 p-0">
                      <div className="flex flex-col justify-center items-left min-h-screen">
                        <div className="flex flex-col md:flex-row justify-left gap-8">
                            <h1 className="text-7xl font-bold text-white">
                              Hi, I&apos;m Diego, <br />a{" "} <span className="relative inline-block">
                                <motion.div
                                  className="absolute left-0 bottom-1 h-[12px] bg-pink-500/80 z-0"
                                  initial={{ scaleX: 0 }}
                                  whileInView={{ scaleX: 1 }}
                                  viewport={{ once: false, amount: 0.6 }}
                              transition={{ duration: 0.6, ease: "easeOut" }}
                                  style={{ transformOrigin: "left", width: "100%" }}
                                />
                                <span className="relative z-10">Fullstack</span>
                              </span>{" "}
                              developer
                            </h1>

                          <div className="flex flex-col justify-center items-center gap-4">
                          </div>
                        </div>

                        <motion.div
                          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                          style={{ opacity }}
                        >
                          <button className="px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-md hover:bg-white/20 transition text-white"
                            onClick={() => {
                              document.getElementById("about-me")?.scrollIntoView({
                                behavior: "smooth", 
                                block: "start"
                              });
                            }}
                          >
                            <ExpandMoreIcon className="animate-bounce" />
                          </button>
                        </motion.div>
                      </div>
                    </section>

                    <section id="about-me" className="m-0 p-0">
                        <motion.div
                            className="flex flex-col justify-center items-start gap-8 min-h-screen pt-0 mt-0"
                            initial={{ opacity: 0.1, y: 100 }} 
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.1 }} 
                            transition={{ duration: 0.5, ease: "easeIn" }}
                        >
                            <h1 className="text-5xl font-bold text-white">About me</h1>
                            <p className="text-white/70">
                                I’m Diego T., a passionate and curious full-stack developer currently completing my third year of a Bachelor’s degree in Computer Science, specialized in application development. I enjoy turning ideas into functional and user-friendly web experiences, exploring both frontend and backend aspects of development. Beyond software creation, I’m deeply interested in everything related to the tech world and how it evolves. I’m currently looking for an internship starting in February to keep learning, growing, and contributing to meaningful projects.
                            </p>
                        </motion.div>

                    </section>

                    <section id="my-experience" className="m-0 p-0">
                          <motion.div
                            className="flex flex-col justify-center items-start gap-8 min-h-screen pt-0 mt-0"
                            initial={{ opacity: 0.1, y: 100 }} 
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.1 }} 
                            transition={{ duration: 0.5, ease: "easeIn" }}
                          >
                            <h1 className="text-5xl font-bold text-white">My experiences</h1>

                            <div className="relative inline-flex flex-row">
                              <span
                                className="absolute left-0 w-1 bg-pink-500/80 transition-all duration-300"
                                style={{
                                  top: `${myExperiencesItems.findIndex((i) => i.value === value) * myExperiencesItemHeight}px`,
                                  height: `${myExperiencesItemHeight}px`,
                                }}
                              />
                              <ToggleGroup.Root
                                type="single"
                                value={value}
                                onValueChange={(val) => val && setValue(val)}
                                className="flex-col inline-flex"
                              >
                                {myExperiencesItems.map((item, idx) => (
                                  <ToggleGroup.Item
                                    key={item.value}
                                    value={item.value}
                                    ref={idx === 0 ? ref : null}
                                    className="px-4 py-8 text-left border-l-4 border-gray-300 data-[state=on]:text-pink-500/80"
                                  >
                                    {item.label}
                                  </ToggleGroup.Item>
                                ))}
                              </ToggleGroup.Root>
                              <div className="ml-8 mt-4 flex flex-col">
                                <text className="text-2xl font-bold text-white">{myExperiencesItems.find((i) => i.value === value)?.title}</text>
                                <text className="text-md text-white/70">{myExperiencesItems.find((i) => i.value === value)?.subtitle}</text>
                                <text className="mt-2 text-white/60">{myExperiencesItems.find((i) => i.value === value)?.description}</text>
                              </div>
                            </div>

                          </motion.div>
                    </section>

                    <section id="my-projects" className="m-0 p-0">
                      <motion.div
                        className="flex flex-col justify-center items-start gap-8 min-h-screen pt-0 mt-0 mb-16 w-full"
                        initial={{ opacity: 0.1, y: 100 }} 
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.1 }} 
                        transition={{ duration: 0.5, ease: "easeIn" }}
                      >
                        <h1 className="text-5xl font-bold text-white">My projects</h1>
                        <p className="text-white/70">
                          Here are some of my personal projects that I&apos;ve worked on to sharpen my skills and explore new technologies.
                        </p>

                        <div className="grid grid-cols-3 gap-6">
                          {projects.map((project) => (
                            <ProjectCard
                              key={project.id}
                              id={project.id}
                              title={project.title}
                              description={project.description}
                              imageUrl={project.imageUrl}
                              projectUrl={project.projectUrl}
                            />
                          ))}
                        </div>
                      </motion.div>
                    </section>

                
                </div>
            </div>

        </div>
    </div>
  );
}
