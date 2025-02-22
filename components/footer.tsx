import Twitter from "@/icons/twitter"
import GitHub from "@/icons/github"
import Bluesky from "@/icons/bluesky";
import Link from "next/link";

export default function Footer() {

    const currentYear = new Date().getFullYear();

    return (
        <footer className="my-10">
            <div className="container mx-auto px-4 md:px-0">
                <div className="flex justify-between items-center gap-2">
                    <p className="text-center text-sm">{currentYear} • Lesh</p>
                    <div className="flex justify-center items-center gap-4">
                        <Link href="https://twitter.com/derlesh" target="_blank" className="text-neutral-500 hover:text-[#1DA1F2] transition-colors duration-300">
                            <Twitter color="currentColor" className="w-6 h-6" />
                        </Link>
                        <Link href="https://bsky.app/profile/lesh.me" target="_blank" className="text-neutral-500 hover:text-[#1185FE] transition-colors duration-300">
                            <Bluesky color="currentColor" className="w-6 h-6" />
                        </Link>
                        <Link href="https://github.com/derlesh" target="_blank" className="text-neutral-500 hover:text-black dark:hover:text-white transition-colors duration-300">
                            <GitHub color="currentColor" className="w-6 h-6" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
