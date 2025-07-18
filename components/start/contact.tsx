import Bluesky from "@/icons/bluesky";
import Twitter from "@/icons/twitter";
import Link from "next/link";
import AsciiBackdrop from "@/components/start/ascii-backdrop";

export default function Contact() {
    return (
        <div className="relative flex flex-col items-center justify-center my-44">
            <div className="absolute inset-x-0 -top-32 -bottom-32 opacity-60 -z-10">
                <AsciiBackdrop />
            </div>
            <div className="mx-auto container relative z-10">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-6xl font-bold font-inter-sans uppercase">Contact</h1>
                    <h2 className="text-2xl font-mono text-neutral-300">Send me a direct message</h2>
                </div>
                <div className="flex flex-row items-center justify-center gap-8 mt-8">
                    <Link href="https://bsky.app/profile/lesh.me" target="_blank" className="text-white hover:text-[#1185FE] duration-300 transition-all hover:rotate-12 hover:scale-110">
                        <Bluesky color="currentColor" className="w-8 h-8"/>
                    </Link>
                    <Link href="https://x.com/lesh_me" target="_blank" className="text-white hover:text-[#1DA1F2] duration-300 transition-all hover:rotate-12 hover:scale-110">
                        <Twitter color="currentColor" className="w-8 h-8"/>
                    </Link>
                </div>
            </div>
        </div>
    )
}
