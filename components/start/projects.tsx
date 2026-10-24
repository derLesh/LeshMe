import { projects } from "@/data/projects";
import ProjectCard from "../projectCard";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { eventAttributes } from "@/lib/analytics";

export default function Projects() {
    return (
        <div id="projects" className="flex flex-col gap-10 mx-auto container">
            <div>
                <h1 className="text-4xl font-inter-sans font-bold" data-analytics-section="projects">Projects</h1>
                <h2 className="text-lg font-mono text-neutral-300">I worked on these projects</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">  
                {projects.map((project) => (
                    <ProjectCard key={project.title} {...project} />
                ))}
            </div>
            <Button asChild variant="link" className="group w-fit mb-5 font-bold text-neutral-500 hover:text-white translate-x-1 transition-colors duration-300">
                <Link href="https://github.com/derlesh?tab=repositories" target="_blank" rel="noopener noreferrer" className="flex items-center" {...eventAttributes("more-projects-click", { location: "projects" })}>
                    More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
            </Button>
        </div>
    )
}
