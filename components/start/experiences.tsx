import { apis, experiences } from "@/data/experiences";
import ExperienceCard from "@/components/experienceCard";
import GitHubContributions from "@/components/GitHubContributions";

export default function Experiences() {
    return (
        <div id="experiences" className="flex flex-col gap-10 mx-auto container">
            <div className="relative">
                <div className="absolute -my-5 -mx-5 inset-0 opacity-20 overflow-hidden">
                    <GitHubContributions />
                </div>
                <div className="relative">
                    <h1 className="text-4xl font-inter-sans font-bold">Experiences</h1>
                    <h2 className="text-lg font-mono text-neutral-300">Everything I have ever used</h2>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">  
                {experiences.map((experience) => (
                    <ExperienceCard key={experience.name} {...experience} />
                ))}
            </div>

            <div>
                <h2 className="text-xl font-inter-sans font-bold">APIs</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">  
                {apis.map((api) => (
                    <ExperienceCard key={api.name} {...api} />
                ))}
            </div>
        </div>
    )
}
