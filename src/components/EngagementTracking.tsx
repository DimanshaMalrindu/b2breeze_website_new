"use client";

import { useEffect } from "react";
import { Events, pageview, trackEvent } from "@/lib/analytics";

export default function EngagementTracking() {
    // Track pageview on mount
    useEffect(() => {
        pageview(window.location.pathname + window.location.search);
    }, []);

    // Scroll depth: fire at 25/50/75/100 once
    useEffect(() => {
        const marks = new Set<number>();
        function onScroll() {
            const scrolled = window.scrollY + window.innerHeight;
            const total = document.documentElement.scrollHeight;
            const depth = Math.min(100, Math.round((scrolled / total) * 100));
            [25, 50, 75, 100].forEach((m) => {
                if (depth >= m && !marks.has(m)) {
                    marks.add(m);
                    trackEvent(Events.SCROLL_DEPTH, { value: m });
                }
            });
        }
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Time on page: fire at 30s and 60s
    useEffect(() => {
        const timers: number[] = [];
        [30, 60].forEach((s) => {
            const id = window.setTimeout(() => trackEvent(Events.TIME_ON_PAGE, { value: s }), s * 1000);
            timers.push(id);
        });
        return () => timers.forEach((id) => window.clearTimeout(id));
    }, []);

    return null;
}
