import { Experience, ExperienceType } from "@/types/experiences";
import javascript from "@/icons/javascript";
import typescript from "@/icons/typescript";
import python from "@/icons/python";
import cpp from "@/icons/cpp";
import java from "@/icons/java";
import csharp from "@/icons/csharp";
import github from "@/icons/github";
import react from "@/icons/react";
import nextjs from "@/icons/nextjs";
import tauri from "@/icons/tauri";
import tailwindcss from "@/icons/tailwindcss";
import svelte from "@/icons/svelte";
import vue from "@/icons/vue";
import deepseek from "@/icons/deepseek";
import windows from "@/icons/windows";
import linux from "@/icons/linux";
import openai from "@/icons/openai";
import claude from "@/icons/claude";
import apple from "@/icons/apple";
import postgresql from "@/icons/postgresql";
import git from "@/icons/git";
import vscode from "@/icons/vscode";
import unity from "@/icons/unity";
import mysql from "@/icons/mysql";
import sqlite from "@/icons/sqlite";
import prisma from "@/icons/prisma";
import socketio from "@/icons/socketio";
import shadcn from "@/icons/shadcn";
import express from "@/icons/express";
import twitter from "@/icons/twitter";
import bluesky from "@/icons/bluesky";
import twitch from "@/icons/twitch";
import discord from "@/icons/discord";
import reddit from "@/icons/reddit";
import discordjs from "@/icons/discordjs";
import drizzle from "@/icons/drizzle";
import turso from "@/icons/turso";
import cursor from "@/icons/cursor";
import betterauth from "@/icons/betterauth";

const languages: Experience[] = [
    {
        name: "JavaScript",
        description: "JavaScript is a programming language that is used to create interactive web pages.",
        type: ExperienceType.Language,
        startDate: "2021",
        icon: {
            default: javascript,
        },
    },
    {
        name: "TypeScript",
        description: "TypeScript is a programming language that is used to create interactive web pages.",
        type: ExperienceType.Language,
        startDate: "2024",
        icon: {
            default: typescript,
        },
    },
    {
        name: "Python",
        description: "Python is a programming language that is used to create interactive web pages.",
        type: ExperienceType.Language,
        startDate: "2020",
        icon: {
            default: python,
        },
    },
    {
        name: "C#",
        description: "C# is a programming language that is used to create interactive web pages.",
        type: ExperienceType.Language,
        startDate: "2016",
        endDate: "2024",
        icon: {
            default: csharp,
        },
    },
    {
        name: "C++",
        description: "C++ is a programming language that is used to create interactive web pages.",
        type: ExperienceType.Language,
        startDate: "2022",
        endDate: "2025",
        icon: {
            default: cpp,
        },
    },
    {
        name: "Java",
        description: "Java is a programming language that is used to create interactive web pages.",
        type: ExperienceType.Language,
        startDate: "2016",
        endDate: "2021",
        icon: {
            default: java,
        },
    }
]

const frameworks: Experience[] = [
    {
        name: "React",
        description: "React is a JavaScript library for building user interfaces. It is maintained by Meta and a community of individual developers and companies.",
        type: ExperienceType.Framework,
        startDate: "2024",
        icon: {
            default: react,
        },
    },
    {
        name: "Svelte",
        description: "Svelte is a JavaScript library for building user interfaces. It is maintained by Meta and a community of individual developers and companies.",
        type: ExperienceType.Framework,
        startDate: "2023",
        endDate: "2024",
        icon: {
            default: svelte,
        },
    },
    {
        name: "Vue",
        description: "Vue is a JavaScript library for building user interfaces. It is maintained by Meta and a community of individual developers and companies.",
        type: ExperienceType.Framework,
        startDate: "2021",
        endDate: "2023",
        icon: {
            default: vue,
        },
    },
    {
        name: "NextJS",
        description: "NextJS is a React framework for building server-side rendered (SSR) web applications.",
        type: ExperienceType.Frontend,
        startDate: "2024",
        icon: {
            default: nextjs,
        },
    },
    // {
    //     name: "SvelteKit",
    //     description: "SvelteKit is a framework for building server-side rendered (SSR) web applications.",
    //     type: ExperienceType.Frontend,
    //     startDate: "2020",
    //     endDate: "2021",
    // },
    {
        name: "Tauri",
        description: "Tauri is a framework for building desktop applications using Rust.",
        type: ExperienceType.Frontend,
        startDate: "2023",
        icon: {
            default: tauri,
        },
    },
    {
        name: "TailwindCSS",
        description: "TailwindCSS is a utility-first CSS framework for rapidly building custom designs.",
        type: ExperienceType.Frontend,
        startDate: "2022",
        icon: {
            default: tailwindcss,
        },
    },
    {
        name: "Express",
        description: "Express is a web application framework for Node.js.",
        type: ExperienceType.Backend,
        startDate: "2024",
        icon: {
            default: express,
        },
    },
    {
        name: "Auth.js",
        description: "Auth.js is an open-source authentication library for Node.js and TypeScript.",
        type: ExperienceType.Library,
        startDate: "2024",
    },
    {
        name: "Better-Auth",
        description: "Better-Auth is an open-source authentication library for Node.js and TypeScript.",
        type: ExperienceType.Library,
        startDate: "2025",
        icon: {
            default: betterauth,
        },
    }
]

const libraries: Experience[] = [
    {
        name: "Prisma",
        description: "Prisma is an open-source database toolkit for Node.js and TypeScript.",
        type: ExperienceType.Library,
        startDate: "2024",
        icon: {
            default: prisma,
        },
    },
    {
        name: "Drizzle",
        description: "Drizzle is an open-source database toolkit for Node.js and TypeScript.",
        type: ExperienceType.Library,
        startDate: "2025",
        icon: {
            default: drizzle,
        },
    },
    {
        name: "Socket.io",
        description: "Socket.io is a library for managing server state in React.",
        type: ExperienceType.Library,
        startDate: "2024",
        icon: {
            default: socketio,
        },
    },
    {
        name: "shadcn/ui",
        description: "shadcn/ui is a library for managing server state in React.",
        type: ExperienceType.Library,
        startDate: "2024",
        icon: {
            default: shadcn,
        },
    },
    {
        name: "Discord.js",
        description: "Discord.js is a library for managing server state in Discord.",
        type: ExperienceType.Library,
        startDate: "2022",
        icon: {
            default: discordjs,
        },
    }
]

const databases: Experience[] = [
    {
        name: "PostgreSQL",
        description: "PostgreSQL is a powerful, open source object-relational database system.",
        type: ExperienceType.Database,
        startDate: "2024",
        icon: {
            default: postgresql,
        },
    },
    {
        name: "SQLite",
        description: "SQLite is a C library that provides a SQL database engine. It is a lightweight, serverless, and zero-configuration database engine.",
        type: ExperienceType.Database,
        startDate: "2021",
        icon: {
            default: sqlite,
        },
    },
    {
        name: "MySQL",
        description: "MySQL is a relational database management system. It is a popular choice for web applications.",
        type: ExperienceType.Database,
        startDate: "2020",
        endDate: "2021",
        icon: {
            default: mysql,
        },
    },
    {
        name: "Turso",
        description: "Turso is a relational database management system. It is a popular choice for web applications.",
        type: ExperienceType.Database,
        startDate: "2025",
        icon: {
            default: turso,
        },
    }
]

const tools: Experience[] = [
    {
        name: "Git",
        description: "Git is a distributed version control system.",
        type: ExperienceType.Tool,
        startDate: "2016",
        icon: {
            default: git,
        },
    },
    {
        name: "VSCode",
        description: "VSCode is a code editor.",
        type: ExperienceType.Tool,
        startDate: "2018",
        icon: {
            default: vscode,
        },
    },
    {
        name: "Cursor",
        description: "Cursor is a code editor.",
        type: ExperienceType.Tool,
        startDate: "2024",
        icon: {
            default: cursor,
        },
    },
    {
        name: "Unity",
        description: "Unity is a game engine.",
        type: ExperienceType.Tool,
        startDate: "2022",
        icon: {
            default: unity,
        },
    },
    {
        name: "GitHub",
        description: "GitHub is a web-based Git repository hosting service.",
        type: ExperienceType.Tool,
        startDate: "2016",
        icon: {
            default: github,
        },
    },
]

const other: Experience[] = [
    {
        name: "Windows",
        description: "Windows is a operating system.",
        type: ExperienceType.OS,
        startDate: "2008",
        icon: {
            default: windows,
        },
    },
    {
        name: "Linux",
        description: "Linux is a operating system.",
        type: ExperienceType.OS,
        startDate: "2021",
        icon: {
            default: linux,
        },  
    },
    {
        name: "macOS",
        description: "macOS is a operating system.",
        type: ExperienceType.OS,
        startDate: "2022",
        icon: {
            default: apple,
        },
    },
    {
        name: "Arduino",
        description: "Arduino is a microcontroller platform.",
        type: ExperienceType.Other,
        startDate: "2022",
        endDate: "2023",
    }
]

const ais: Experience[] = [
    {
        name: "ChatGPT",
        description: "OpenAI is a company that provides a range of AI services.",
        type: ExperienceType.AI,
        startDate: "2022",
        icon: {
            default: openai,
        },
    },
    {
        name: "Claude",
        description: "Claude is a company that provides a range of AI services.",
        type: ExperienceType.AI,
        startDate: "2024",
        icon: {
            default: claude,
        },
    },
    {
        name: "DeepSeek",
        description: "DeepSeek is a company that provides a range of AI services.",
        type: ExperienceType.AI,
        startDate: "2024",
        icon: {
            default: deepseek,
        },
    }
]

export const experiences: Experience[] = [
    ...languages,
    ...frameworks,
    ...libraries,
    ...databases,
    ...tools,
    ...other,
    ...ais
]

export const apis: Experience[] = [
    {
        name: "Twitter API",
        description: "Twitter API is a API for the Twitter service.",
        type: ExperienceType.API,
        startDate: "2020",
        icon: {
            default: twitter,
        },
    },
    {
        name: "Bluesky API",
        description: "Bluesky API is a API for the Bluesky service.",
        type: ExperienceType.API,
        startDate: "2024",
        icon: {
            default: bluesky,
        },
    },
    {
        name: "Twitch API",
        description: "Twitch API is a API for the Twitch service.",
        type: ExperienceType.API,
        startDate: "2022",
        icon: {
            default: twitch,
        },
    },
    {
        name: "Discord API",
        description: "Discord API is a API for the Discord service.",
        type: ExperienceType.API,
        startDate: "2022",
        icon: {
            default: discord,
        },
    },
    {
        name: "Reddit API",
        description: "Reddit API is a API for the Reddit service.",
        type: ExperienceType.API,
        startDate: "2024",
        endDate: "2025",
        icon: {
            default: reddit,
        },
    }
]

export const software: Experience[] = [
    {
        name: "Premiere Pro",
        description: "Premiere Pro is a video editing software.",
        type: ExperienceType.Software,
        startDate: "2022",
        // icon: {
        //     // default: premiere,
        // },
    },
    {
        name: "Photoshop",
        description: "Photoshop is a image editing software.",
        type: ExperienceType.Software,
        startDate: "2022",
        // icon: {
        //     default: photoshop,
        // },
    },
    {
        name: "Word",
        description: "Word is a word processing software.",
        type: ExperienceType.Software,
        startDate: "2022",
        // icon: {
        //     default: word,
        // },
    },
    {
        name: "Excel",
        description: "Excel is a spreadsheet software.",
        type: ExperienceType.Software,
        startDate: "2022",
        // icon: {
        //     default: excel,
        // },
    },
    {
        name: "PowerPoint",
        description: "PowerPoint is a presentation software.",
        type: ExperienceType.Software,
        startDate: "2022",
        // icon: {
        //     default: powerpoint,
        // },
    }
]
