"use client";

import Link from "next/link";
import { Button } from "./ui/Button";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { Events, trackEvent } from "@/lib/analytics";

const links = [
    { href: "/features", label: "Features" },
    { href: "/pricing", label: "Pricing" },
    { href: "/demo", label: "Demo" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
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
        <header className="sticky top-0 z-50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
                <div className="glass noisy rounded-2xl px-4 py-3 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2">
                        <span className="inline-block h-6 w-6 rounded bg-gradient-to-br from-indigo-500 via-teal-500 to-pink-500 animate-float" />
                        <span className="font-semibold tracking-tight">B2Breeze</span>
                    </Link>
                    <nav className="hidden md:flex items-center gap-6 text-sm text-muted">
                        {links.map((l) => (
                            <Link key={l.href} href={l.href} className="hover:text-foreground transition-colors">
                                {l.label}
                            </Link>
                        ))}
                    </nav>
                    <div className="hidden md:block">
                        <Button asChild variant="primary">
                            <Link
                                href={appHref}
                                aria-label="Try Free"
                                onClick={() => trackEvent(Events.CTA_CLICK, { label: "try_free", location: "navbar" })}
                            >
                                Try Free
                            </Link>
                        </Button>
                    </div>
                    <button className="md:hidden p-2 rounded hover:bg-white/5" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
                        {open ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>
            {open && (
                <div className="md:hidden mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="glass rounded-2xl p-4 mt-2 flex flex-col gap-3">
                        {links.map((l) => (
                            <Link key={l.href} href={l.href} className="py-2 text-muted hover:text-foreground" onClick={() => setOpen(false)}>
                                {l.label}
                            </Link>
                        ))}
                        <Button asChild variant="primary" className="mt-2">
                            <Link
                                href={appHref}
                                onClick={() => {
                                    setOpen(false);
                                    trackEvent(Events.CTA_CLICK, { label: "try_free", location: "navbar_mobile" });
                                }}
                                aria-label="Try Free"
                            >
                                Try Free
                            </Link>
                        </Button>
                    </div>
                </div>
            )}
        </header>
    );
}
