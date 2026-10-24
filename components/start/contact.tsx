import Bluesky from "@/icons/bluesky";
import Twitter from "@/icons/twitter";
import Link from "next/link";
import AsciiBackdrop from "@/components/start/ascii-backdrop";
import { eventAttributes } from "@/lib/analytics";

export default function Contact() {
    return (
        <div id="contact" className="relative flex flex-col items-center justify-center my-44">
            <div className="absolute inset-x-0 -top-32 -bottom-32 opacity-60 -z-10">
                <AsciiBackdrop />
            </div>
            <div className="mx-auto container relative z-10">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-6xl font-bold font-inter-sans uppercase" data-analytics-section="contact">Contact</h1>
                    <h2 className="text-2xl font-mono text-neutral-300">Send me a direct message</h2>
                </div>
                <div className="flex flex-row items-center justify-center gap-8 mt-8">
                    <Link href="https://bsky.app/profile/lesh.me" target="_blank" rel="noopener noreferrer" aria-label="Contact me on Bluesky" className="text-white hover:text-[#1185FE] duration-300 transition-all hover:rotate-12 hover:scale-110" {...eventAttributes("social-click", { platform: "bluesky", location: "contact" })}>
                        <Bluesky color="currentColor" className="w-8 h-8"/>
                    </Link>
                    <Link href="https://twitter.com/derlesh" target="_blank" rel="noopener noreferrer" aria-label="Contact me on Twitter" className="text-white hover:text-[#1DA1F2] duration-300 transition-all hover:rotate-12 hover:scale-110" {...eventAttributes("social-click", { platform: "twitter", location: "contact" })}>
                        <Twitter color="currentColor" className="w-8 h-8"/>
                    </Link>
                </div>
            </div>
        </div>
    )
}
