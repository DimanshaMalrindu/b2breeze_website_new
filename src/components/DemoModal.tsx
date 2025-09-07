"use client";

import { useEffect, useRef, useState } from "react";

export default function DemoModal() {
    const [open, setOpen] = useState(false);
    const overlayRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        function onHashChange() {
            if (typeof window === "undefined") return;
            const hash = window.location.hash;
            if (hash === "#demo") setOpen(true);
        }
        function onKey(e: KeyboardEvent) {
            if (e.key === "Escape") setOpen(false);
        }
        onHashChange();
        window.addEventListener("hashchange", onHashChange);
        window.addEventListener("keydown", onKey);
        return () => {
            window.removeEventListener("hashchange", onHashChange);
            window.removeEventListener("keydown", onKey);
        };
    }, []);

    useEffect(() => {
        if (!open) return;
        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = prevOverflow;
        };
    }, [open]);

    if (!open) return null;
    return (
        <div
            ref={overlayRef}
            onClick={(e) => {
                if (e.target === overlayRef.current) setOpen(false);
            }}
            className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
            aria-modal
            role="dialog"
            aria-label="Demo video"
        >
            <div className="relative w-full max-w-3xl aspect-video bg-black rounded-xl overflow-hidden">
                <iframe
                    className="absolute inset-0 h-full w-full"
                    src={
                        process.env.NEXT_PUBLIC_DEMO_VIDEO_URL ||
                        "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0"
                    }
                    title="B2Breeze Demo"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>
        </div>
    );
}
