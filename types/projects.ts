export interface Project {
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

interface MainTech {
    icon: React.ComponentType<{ height: number }>;
    url: string;
    title: string;
}