"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import Link from "next/link";

export default function Hero() {
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
                        Welcome to the future of B2B web
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: 0.05 }}
                        className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight"
                    >
                        Build breathtaking experiences for serious business.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: 0.1 }}
                        className="mt-5 text-lg text-muted max-w-2xl"
                    >
                        Lightning-fast, visually striking, and conversion-ready websites powered by Next.js, Tailwind, and world-class engineering.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: 0.15 }}
                        className="mt-8 flex flex-col sm:flex-row gap-3"
                    >
                        <Button asChild variant="primary">
                            <Link href="#contact">Start a project</Link>
                        </Button>
                        <Button asChild variant="outline">
                            <Link href="#work">See our work</Link>
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
