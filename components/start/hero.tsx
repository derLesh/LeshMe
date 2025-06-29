import { ChevronsDown } from 'lucide-react';
import AsciiBackdrop from './ascii-backdrop';

export default function Hero() {
    return (
        <div className="flex flex-col items-center justify-center h-screen relative overflow-hidden">
            <AsciiBackdrop />
            <h1 className="text-hero font-black font-inter-sans relative z-10 cursor-default select-none">LESH</h1>
            <h2 className="text-xs md:text-hero-sub font-black font-mono relative z-10 cursor-default select-none">Hobby Developer | Computer Science Student | Game Enthusiast</h2>
            <div className="absolute bottom-0 w-full h-64 bg-gradient-to-b from-transparent to-background">
                <div className="absolute left-1/2 bottom-8 -translate-x-1/2">
                    <ChevronsDown className="w-6 h-6" />
                </div>
            </div>
        </div>
    )
}
