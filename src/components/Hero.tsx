"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Events, trackEvent } from "@/lib/analytics";

export default function Hero() {
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
        <section className="relative overflow-hidden">
            <div className="absolute inset-0 grid-bg" aria-hidden />
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-24">
                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.6 }}
                        transition={{ duration: 0.8 }}
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-xs text-muted mb-6"
                    >
                        <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-teal-500" />
                        Business, as smooth as a breeze.
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: 0.05 }}
                        className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight"
                    >
                        Streamline Your Business Operations
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: 0.1 }}
                        className="mt-5 text-lg text-muted max-w-2xl"
                    >
                        Welcome to B2Breeze—business, as smooth as a breeze. All‑in‑one platform for modern business management.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: 0.15 }}
                        className="mt-8 flex flex-col sm:flex-row gap-3"
                    >
                        <Button asChild variant="primary">
                            <Link
                                href={appHref}
                                aria-label="Try Scanner Now"
                                onClick={() => trackEvent(Events.CTA_CLICK, { label: "try_scanner_now", location: "hero" })}
                            >
                                Try Scanner Now
                            </Link>
                        </Button>
                        <Button asChild variant="outline">
                            <Link
                                href="#demo"
                                aria-label="Watch Demo"
                                onClick={() => trackEvent(Events.DEMO_WATCH, { label: "watch_demo_click", location: "hero" })}
                            >
                                Watch Demo
                            </Link>
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
