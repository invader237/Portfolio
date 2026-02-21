import { media } from "./media.model";

export type  Project = {
    title: string;
    description: string;
    gradient: string;
    details: string;
    technologies: string[];
    thumbnail: media;
    thumbnailUrl?: string;
    functionalities?: string[];
    wip?: boolean;
    githubUrl?: string;
    siteUrl?: string;
}
