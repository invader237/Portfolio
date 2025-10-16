import { image } from 'framer-motion/client';
import React from 'react';

export interface ProjectCardProps {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    projectUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl, projectUrl }) => {
    return (
        <a href={projectUrl} target="_blank" rel="noopener noreferrer" className="
            block rounded-2xl shadow-lg overflow-hidden backdrop-blur-3xl border border-[#272727]
        ">
            <div className="h-48 w-full overflow-hidden">
                <img src={imageUrl} alt={title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>
                <div className="p-4">
                    <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
                    <p className="text-white/80">{description}</p>
                </div>
        </a>
    );
};

export default ProjectCard;
