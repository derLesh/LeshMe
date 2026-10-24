import { Project } from "@/types/projects";
import nextjs from "@/icons/nextjs";
import python from "@/icons/python";
import Android from "@/icons/android";
export const projects: Project[] = [
    // {
    //     title: "kurz",
    //     description: "🔗 URL shortening and text sharing service.",
    //     url: "https://kurz.lesh.me",
    //     githubUrl: "https://github.com/derLesh/kurz",
    //     tags: ["NextJS", "TailwindCSS", "Drizzle", "Turso"],
    //     mainTech: {
    //         icon: nextjs,
    //         url: "https://nextjs.org/",
    //         title: "NextJS"
    //     },
    // },
    {
        title: "Chatter",
        description: "💬 An alternative Twitch chat client for Android",
        url: "",
        githubUrl: "https://github.com/derLesh/Chatter",
        tags: ["Android", "Kotlin", "Jetpack Compose"],
        mainTech: {
            icon: Android,
            url: "https://developer.android.com/",
            title: "Android"
        }
    },
    {
        title: "Merge7TV",
        description: "🔗 Combine two 7TV emote sets together.",
        url: "https://merge7tv.lesh.me",
        githubUrl: "https://github.com/derLesh/Merge7TV",
        tags: ["NextJS", "TailwindCSS", "GraphQL"],
        mainTech: {
            icon: nextjs,
            url: "https://nextjs.org/",
            title: "NextJS"
        }
    },
    {
        title: "Schedulr",
        description: "📅 GamesDoneQuick event scheduler with reminders",
        url: "https://schedulr.lesh.me",
        // githubUrl: "https://github.com/derLesh/Schedulr",
        tags: ["NextJS", "TailwindCSS", "Prisma", "PostgreSQL"],
        mainTech: {
            icon: nextjs,
            url: "https://nextjs.org/",
            title: "NextJS"
        }
    },
    {
        title: "SimpsonsOnAir",
        description: "⏰ Sends a notification every day at 12:00 PM EST to the user on social media what episodes are airing today on ProSieben.",
        url: "https://twitter.com/SimpsonsOnAir",
        // githubUrl: "https://github.com/derLesh/SimpsonsOnAir",
        tags: ["Python", "BS4", "SQLite"],
        mainTech: {
            icon: python,
            url: "https://www.python.org/",
            title: "Python"
        }
    },
    {
        title: "ComfyLog",
        description: "✍ Twitch Chat Logger for Moderators and Broadcasters",
        url: "https://log.lesh.me",
        // githubUrl: "https://github.com/derLesh/ComfyLog",
        tags: ["NextJS", "TailwindCSS", "TMI.JS", "PostgreSQL"],
        mainTech: {
            icon: nextjs,
            url: "https://nextjs.org/",
            title: "NextJS"
        }
    },
    {
        title: "Autonomous Robot",
        description: "🤖 A university project in which a mobile robot was developed.",
        // url: "https://lesh.me",
        // githubUrl: "https://github.com/derLesh/",
        tags: ["Arduino"],
        // mainTech: {
        //     icon: python,
        //     url: "https://www.python.org/",
        //     title: "Python"
        // }
    }
]
