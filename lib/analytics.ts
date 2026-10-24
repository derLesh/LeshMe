export const analyticsSections = ["projects", "experiences", "contact"] as const;

type AnalyticsEvents = {
  "navigation-click": { destination: "home"; location: "navbar" };
  "project-click": { project: string; destination: "website" | "repository" };
  "technology-click": { project: string; technology: string };
  "social-click": {
    platform: "bluesky" | "twitter" | "github";
    location: "contact" | "footer";
  };
  "more-projects-click": { location: "projects" };
  "source-click": { location: "footer" };
  "section-view": { section: (typeof analyticsSections)[number] };
};

type EventAttributes = {
  "data-umami-event": keyof AnalyticsEvents;
  [key: `data-umami-event-${string}`]: string;
};

declare global {
  interface Window {
    umami?: {
      track: (name: string, data: Record<string, string>) => Promise<unknown> | void;
    };
  }
}

export const analyticsEnabled =
  process.env.NODE_ENV === "production" &&
  Boolean(process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID);

/** Adds typed Umami click attributes without turning server components into client components. */
export function eventAttributes<Name extends keyof AnalyticsEvents>(
  name: Name,
  data: AnalyticsEvents[Name],
): EventAttributes {
  const attributes: EventAttributes = { "data-umami-event": name };

  for (const [key, value] of Object.entries(data)) {
    attributes[`data-umami-event-${key}`] = value;
  }

  return attributes;
}

/** Sends a custom event when analytics is available; failures never interrupt the page. */
export function trackEvent<Name extends keyof AnalyticsEvents>(
  name: Name,
  data: AnalyticsEvents[Name],
): void {
  if (!analyticsEnabled || typeof window === "undefined" || !window.umami) return;

  try {
    void Promise.resolve(window.umami.track(name, data)).catch(() => {});
  } catch {
    // Analytics may be blocked or unavailable without affecting the site.
  }
}
