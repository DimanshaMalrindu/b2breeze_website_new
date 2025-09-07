"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { useSearchParams } from "next/navigation";
import { Events, trackEvent } from "@/lib/analytics";

export function CTABand() {
    const searchParams = useSearchParams();
    const utm = searchParams.toString();
    const appBase = process.env.NEXT_PUBLIC_APP_URL || "/app";
    const appHref = (() => {
        if (!utm) return appBase;
        const hasQuery = appBase.includes("?");
        const joiner = hasQuery ? "&" : "?";
        return `${appBase}${joiner}${utm}`;
    })();

    return (
        <section aria-labelledby="cta-band" className="py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="glass rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                        <h2 id="cta-band" className="text-xl sm:text-2xl font-semibold">Ready to move faster?</h2>
                        <p className="text-muted mt-1">Get started free or schedule a live demo.</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <Button asChild variant="primary">
                            <Link href={appHref} aria-label="Get Started Free" onClick={() => trackEvent(Events.CTA_CLICK, { label: "get_started_free", location: "cta_band" })}>
                                Get Started Free
                            </Link>
                        </Button>
                        <Button asChild variant="outline">
                            <Link href="/demo" aria-label="Schedule Demo" onClick={() => trackEvent(Events.CTA_CLICK, { label: "schedule_demo", location: "cta_band" })}>
                                Schedule Demo
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
