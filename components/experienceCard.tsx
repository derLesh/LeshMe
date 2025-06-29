"use client"

import { Experience } from "@/types/experiences";
import { useRef, useState, type MouseEvent } from "react";

interface Position {
    x: number;
    y: number;
}

export default function ExperienceCard({ name, description, type, startDate, endDate, icon }: Experience) {
    const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);
    const [focused, setFocused] = useState(false);
    const divRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: MouseEvent) => {
        if (!divRef.current || focused) return;
        const rect = divRef.current.getBoundingClientRect();
        setPosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        });
        setOpacity(1);
    };
    
    const experienceYears = () => {
        const start = new Date(startDate);
        const end = endDate ? new Date(endDate) : new Date();
        const years = end.getFullYear() - start.getFullYear();
        return years;
    }

    return (
        <div
            ref={divRef}
            onFocus={() => { setFocused(true); setOpacity(1)} }
            onBlur={() => { setFocused(false); setOpacity(0)} }
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setOpacity(1)}
            onMouseLeave={() => setOpacity(0)}
            className="group relative flex flex-col rounded-md border-[1px] border-neutral-300 px-3 py-4 shadow-sm transition-colors duration-300 hover:border-neutral-400 dark:border-neutral-800 dark:hover:border-neutral-700"
        >
            <div
                className="pointer-events-none absolute -inset-px rounded-md transition duration-300"
                style={{
                opacity: opacity,
                background: `
                    radial-gradient(
                    800px circle at ${position.x}px ${position.y}px,
                    rgba(255,255,255,0.01),
                    transparent 90%
                    )
                `
                }}
            />
            
            <div
                className="pointer-events-none absolute -inset-px rounded-md opacity-0 transition duration-300"
                style={{
                opacity: opacity,
                background: `
                    radial-gradient(
                    300px circle at ${position.x}px ${position.y}px,
                    rgba(255,255,255,0.06),
                    transparent 60%
                    )
                `
                }}
            />

            <div className="flex flex-row items-center gap-2">
                <div>
                    {icon && (
                        <icon.default className="w-6 h-6 md:w-12 md:h-12" />
                    )}
                </div>
                <div className="flex flex-col gap-1">
                    <div className="flex flex-row flex-wrap items-center gap-x-4 gap-y-1">
                        <h1 className="text-lg font-medium">{name}</h1>
                        <span
                            className="rounded-full bg-neutral-100 px-2 text-xs font-mono dark:bg-neutral-800"
                        >
                            {type}
                        </span>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                        <p className="whitespace-nowrap text-base text-neutral-500 group-hover:text-neutral-200 group-hover:font-semibold transition-colors duration-200">{experienceYears()} years</p>
                        <p className="text-sm text-neutral-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200">{startDate} - {endDate ? endDate : "Present"}</p>
                        {description && (
                            <></>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
