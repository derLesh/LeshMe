"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";
import { analyticsEnabled, analyticsSections, trackEvent } from "@/lib/analytics";

/** Loads Umami and records each section once when at least half its heading is visible. */
export function UmamiAnalytics() {
  const [ready, setReady] = useState(false);
  const viewedSections = useRef(new Set<(typeof analyticsSections)[number]>());

  useEffect(() => {
    if (!ready || typeof IntersectionObserver === "undefined") return;

    const sections = new Map<Element, (typeof analyticsSections)[number]>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const section = sections.get(entry.target);
          if (!entry.isIntersecting || entry.intersectionRatio < 0.5 || !section) continue;
          if (viewedSections.current.has(section)) continue;

          trackEvent("section-view", { section });
          viewedSections.current.add(section);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 },
    );

    for (const section of analyticsSections) {
      const heading = document.querySelector(`[data-analytics-section="${section}"]`);
      if (!heading || viewedSections.current.has(section)) continue;

      sections.set(heading, section);
      observer.observe(heading);
    }

    return () => observer.disconnect();
  }, [ready]);

  if (!analyticsEnabled) return null;

  return (
    <Script
      id="umami-analytics"
      src="https://stats.lesh.me/script.js"
      strategy="afterInteractive"
      data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
      data-domains="lesh.me"
      data-exclude-search="true"
      data-exclude-hash="true"
      data-do-not-track="true"
      onReady={() => setReady(true)}
    />
  );
}
