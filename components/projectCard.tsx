'use client';

import { useState, useRef, type MouseEvent } from 'react';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

interface Position {
  x: number;
  y: number;
}

interface MainTech {
  icon: React.ComponentType<{ height: number }>;
  url: string;
  title: string;
}

interface ProjectProps {
  title: string;
  description: string;
  icon?: string;
  url?: string;
  githubUrl?: string;
  mainTech?: MainTech;
  tags: string[];
  latest?: boolean;
  updated?: boolean;
}

const ProjectCard = ({
  title,
  description,
  icon,
  url,
  githubUrl,
  mainTech,
  tags,
  latest,
  updated
}: ProjectProps) => {
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
  };

  return (
    <div
      ref={divRef}
      role="contentinfo"
      onMouseMove={handleMouseMove}
      onFocus={() => {
        setFocused(true);
        setOpacity(1);
      }}
      onBlur={() => {
        setFocused(false);
        setOpacity(0);
      }}
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

      <div className="relative flex flex-col space-y-3">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center space-x-[10px]">
            {icon && (
              <Image src={icon} alt={title} width={24} height={24} className="h-6 w-6" />
            )}
            {url ? (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-[6px] font-bold decoration-neutral-500 decoration-dotted underline-offset-[5px] hover:underline"
                data-umami-event={`clicked-${title}-project-link`}
              >
                <span>{title}</span>
                <ArrowUpRight
                  size={13}
                  strokeWidth={2}
                  className="opacity-50 duration-200 group-hover:translate-x-[1.5px] group-hover:opacity-100"
                />
              </a>
            ) : (
              <p className="font-medium">{title}</p>
            )}
          </div>
          <div className="flex items-center gap-2">
            {(latest || updated) && (
              <span className="rounded-full bg-gradient-to-r from-[#D14D72] to-[#FCC8D1] px-2 py-0.5 text-xs font-medium text-white">
                {latest ? 'latest' : 'updated'}
              </span>
            )}
            <a
              href={githubUrl}
              title={`View ${title} repository on GitHub`}
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-75 transition-opacity duration-100 hover:opacity-100"
              data-umami-event={`clicked-${title}-github-link`}
            >
              {githubUrl && (
                <GithubIcon height={16} />
              )}
            </a>
          </div>
        </div>
        <p className="truncate text-sm dark:text-neutral-400">{description}</p>
        <div className="hidden items-center space-x-2 overflow-x-auto md:flex">
          {mainTech && (
            <a
              href={mainTech.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mr-1"
              title={mainTech.title}
            >
              <mainTech.icon height={17} />
            </a>
          )}
          <div className="flex items-center space-x-1">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="rounded-full bg-neutral-100 px-2 py-0.5 text-xs font-mono dark:bg-neutral-800"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const GithubIcon = ({ height }: { height: number }) => (
  <svg height={height} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

export default ProjectCard;
