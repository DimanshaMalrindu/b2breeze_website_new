"use client";

import { Button } from "@/components/ui/Button";
import { FormEvent, useState } from "react";
import { Events, trackEvent } from "@/lib/analytics";

export function Contact() {
    const [submitting, setSubmitting] = useState(false);
    function onSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = e.currentTarget as HTMLFormElement;
        const elements = form.elements as unknown as Record<string, HTMLInputElement | HTMLTextAreaElement | undefined> & {
            namedItem?: (name: string) => Element | null;
        };
        // Honeypot field named company_website (hidden)
        const honey = (elements.namedItem?.("company_website") as HTMLInputElement | null)?.value;
        if (honey) return; // bot
        setSubmitting(true);
        try {
            const name = (elements.namedItem?.("name") as HTMLInputElement | null)?.value;
            const email = (elements.namedItem?.("email") as HTMLInputElement | null)?.value;
            trackEvent(Events.CONTACT_SUBMIT, { name, email });
            // TODO: integrate server action or API route
        } finally {
            setTimeout(() => setSubmitting(false), 400); // brief UX pause
        }
    }
    return (
        <section id="contact" className="py-24">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                <div className="glass rounded-2xl p-6 sm:p-8">
                    <h2 className="text-2xl font-semibold">Tell us about your project</h2>
                    <p className="text-muted mt-2">We’ll get back within one business day.</p>
                    <form className="mt-6 grid gap-4 sm:grid-cols-2" onSubmit={onSubmit}>
                        {/* Honeypot */}
                        <input
                            type="text"
                            name="company_website"
                            className="sr-only"
                            tabIndex={-1}
                            aria-hidden="true"
                            title="Do not fill"
                        />
                        <div className="sm:col-span-1">
                            <label className="text-sm text-muted">Name</label>
                            <input name="name" className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500/50" placeholder="Jane Doe" />
                        </div>
                        <div className="sm:col-span-1">
                            <label className="text-sm text-muted">Email</label>
                            <input name="email" type="email" className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500/50" placeholder="jane@company.com" />
                        </div>
                        <div className="sm:col-span-2">
                            <label className="text-sm text-muted">Project details</label>
                            <textarea name="message" rows={4} className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500/50 [background:rgba(255,255,255,.05)]" placeholder="Timeline, scope, goals" />
                        </div>
                        <div className="sm:col-span-2">
                            <Button disabled={submitting} variant="primary" className="w-full sm:w-auto" type="submit">
                                {submitting ? "Sending..." : "Send inquiry"}
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
