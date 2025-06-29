import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-0">
                <Link href="/" className="text-2xl font-bold font-inter-sans">
                    Lesh
                </Link>
                <div className="flex items-center space-x-4">
                    <Link href="#projects" className="font-inter-sans hover:text-neutral-300 transition-colors duration-300">
                        Projects
                    </Link>
                    <Link href="#experiences" className="font-inter-sans hover:text-neutral-300 transition-colors duration-300">
                        Experiences
                    </Link>
                </div>
            </div>
        </nav>
    );
}
