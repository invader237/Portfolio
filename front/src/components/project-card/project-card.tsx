"use client";
import React, { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

export interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  projectUrl,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-50, 50], [2, -2]);
  const rotateY = useTransform(mouseX, [-50, 50], [-2, 2]);

  function handleMouseMove(e: React.MouseEvent) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    mouseX.set(x);
    mouseY.set(y);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 800,
      }}
      className="w-full"
    >
      <motion.a
        href={projectUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="
          block w-full
          rounded-2xl
          bg-white/5 backdrop-blur-none
          border border-white/10
          shadow-xl
          overflow-hidden
          transition-shadow duration-300
          hover:shadow-2xl
        "
      >
        <div className="h-56 w-full overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 text-white">
            {title}
          </h3>
          <p className="text-white/80 leading-relaxed">
            {description}
          </p>
        </div>
      </motion.a>
    </motion.div>
  );
};

export default ProjectCard;
