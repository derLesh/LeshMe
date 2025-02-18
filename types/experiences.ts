export interface Experience {
    name: string;
    description: string;
    type: ExperienceType;
    references?: string[];
    startDate: string;
    endDate?: string;
    icon?: {
        default: React.ComponentType<{ height?: number; className?: string }>;
    };
    url?: string;
}

export enum ExperienceType {
    Language = "language",
    Framework = "framework",
    Frontend = "frontend",
    Backend = "backend",
    Library = "library",
    Database = "database",
    Tool = "tool",
    Other = "other",
    OS = "os",
    AI = "ai",
    API = "api",
    Software = "software"
}
