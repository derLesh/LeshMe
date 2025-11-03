import Script from "next/script";

export const UmamiAnalytics = () => {
    const websiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;
    if (!websiteId) {
        return <></>;
    }
  return (
    <Script defer src="https://stats.lesh.me/script.js" data-website-id={websiteId} />
  );
};

export type UmamiEventData = Record<string, unknown>;

type UmamiWindow = Window & {
  umami?: {
    track: (name: string, data?: UmamiEventData) => void;
  };
};

export function trackEvent(eventName: string, data?: UmamiEventData): void {
  if (typeof window === "undefined") return;
  const w = window as unknown as UmamiWindow;
  if (w.umami?.track) {
    w.umami.track(eventName, data);
    return;
  }
  if (process.env.NODE_ENV !== "production") {
    // Fallback im Dev-Modus, falls Umami noch nicht geladen ist
    // eslint-disable-next-line no-console
    console.debug("[umami.trackEvent]", eventName, data);
  }
}