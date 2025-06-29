import Hero from "@/components/start/hero";
import Projects from "@/components/start/projects";
import Experiences from "@/components/start/experiences";
import Contact from "@/components/start/contact";
export default function Home() {
    return (
        <div className="flex flex-col gap-10 overflow-hidden">
            <Hero />
            <Projects />
            <Experiences />
            <Contact />
        </div>
    )
}
