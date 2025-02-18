"use client"

import { useEffect, useState } from 'react';

interface ContributionDay {
    contributionCount: number;
    date: string;
}

export default function GitHubContributions() {
    const [contributions, setContributions] = useState<ContributionDay[]>([]);

    useEffect(() => {
        const fetchContributions = async () => {
            try {
                const response = await fetch('/api/github-contributions');
                const data = await response.json();
                const weeks = data.data.user.contributionsCollection.contributionCalendar.weeks;
                const allDays = weeks.flatMap((week: { contributionDays: ContributionDay[] }) => week.contributionDays);
                
                // Nur die letzten 365 Tage filtern
                const today = new Date();
                const oneYearAgo = new Date(today);
                oneYearAgo.setDate(today.getDate() - 365);
                
                const last365Days = allDays.filter((day: ContributionDay) => {
                    const contributionDate = new Date(day.date);
                    return contributionDate >= oneYearAgo && contributionDate <= today;
                });
                
                setContributions(last365Days);
            } catch (error) {
                console.error('Fehler beim Laden der GitHub-Contributions:', error);
            }
        };

        fetchContributions();
    }, []);

    const getColorByCount = (count: number): string => {
        if (count === 0) return 'bg-neutral-700/70';
        if (count <= 3) return 'bg-green-900/70';
        if (count <= 6) return 'bg-green-700/70';
        if (count <= 9) return 'bg-green-500/70';
        return 'bg-green-300/70';
    };

    return (
        <div className="grid grid-cols-[repeat(53,1fr)] gap-1">
            {contributions.map((day) => (
                <div
                    key={day.date}
                    className={`
                        w-3 h-3 rounded-sm 
                        ${getColorByCount(day.contributionCount)}
                        transition-all duration-200 ease-in-out
                        hover:opacity-100 hover:scale-110
                    `}
                />
            ))}
        </div>
    );
} 