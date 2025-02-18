import { NextResponse } from 'next/server';

// Cache-Variable für die Daten
let cachedData: any = null;
let lastCacheTime: number | null = null;

// 24 Stunden in Millisekunden
const CACHE_DURATION = 24 * 60 * 60 * 1000;

export async function GET() {
    // Prüfen ob Cache noch gültig ist
    const now = Date.now();
    if (cachedData && lastCacheTime && (now - lastCacheTime) < CACHE_DURATION) {
        return NextResponse.json(cachedData);
    }

    const query = `
        query {
            user(login: "derLesh") {
                contributionsCollection {
                    contributionCalendar {
                        totalContributions
                        weeks {
                            contributionDays {
                                contributionCount
                                date
                            }
                        }
                    }
                }
            }
        }
    `;

    try {
        const response = await fetch('https://api.github.com/graphql', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ query }),
        });

        const data = await response.json();
        
        // Cache aktualisieren
        cachedData = data;
        lastCacheTime = now;

        return NextResponse.json(data);
    } catch (error) {
        console.error('Fehler beim Laden der GitHub-Contributions:', error);
        return NextResponse.json({ error: 'Failed to fetch contributions' }, { status: 500 });
    }
} 