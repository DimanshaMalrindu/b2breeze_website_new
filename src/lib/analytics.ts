/* Analytics utility: GA4 via gtag.js with safe no-ops in dev/missing ID */

export type AnalyticsEventParams = Record<string, string | number | boolean | undefined>;

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

declare global {
  interface Window {
  dataLayer: unknown[];
  gtag: (command: string, targetIdOrEventName: string, params?: Record<string, unknown>) => void;
  }
}

function hasGA() {
  return typeof window !== "undefined" && typeof window.gtag === "function" && !!GA_ID;
}

export function pageview(path: string) {
  if (hasGA()) {
    window.gtag("config", GA_ID!, {
      page_path: path,
    });
  } else if (process.env.NODE_ENV !== "production") {
    console.debug("[analytics] pageview", { path });
  }
}

export function trackEvent(action: string, params: AnalyticsEventParams = {}) {
  if (hasGA()) {
    window.gtag("event", action, params);
  } else if (process.env.NODE_ENV !== "production") {
    console.debug("[analytics] event", action, params);
  }
}

// Common events used in this site
export const Events = {
  CTA_CLICK: "cta_click",
  DEMO_WATCH: "demo_watch",
  CONTACT_SUBMIT: "contact_submit",
  SCROLL_DEPTH: "scroll_depth",
  TIME_ON_PAGE: "time_on_page",
} as const;
