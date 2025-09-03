import { Users, Target, Quote, Sparkles } from "lucide-react";

export function TargetAudiencePositioning() {
    return (
        <section id="audience-positioning" aria-labelledby="audience-positioning-title" className="py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 id="audience-positioning-title" className="text-2xl sm:text-3xl font-semibold">
                    Target Audience & Positioning
                </h2>
                <p className="text-muted mt-2 max-w-2xl">
                    Who we serve, what we stand for, and the core value you get from B2Breeze.
                </p>

                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Audience */}
                    <div className="glass rounded-2xl p-5 h-full">
                        <div className="h-9 w-9 rounded-lg bg-white/5 flex items-center justify-center mb-4" aria-hidden>
                            <Users size={18} />
                        </div>
                        <h3 className="font-medium">Audience</h3>
                        <p className="text-sm text-muted mt-2">
                            Solo operators, SMB teams, and sales/marketing pros who need lightweight tooling to capture leads,
                            manage contacts, plan tasks/campaigns, and generate invoices.
                        </p>
                    </div>

                    {/* Positioning */}
                    <div className="glass rounded-2xl p-5 h-full">
                        <div className="h-9 w-9 rounded-lg bg-white/5 flex items-center justify-center mb-4" aria-hidden>
                            <Target size={18} />
                        </div>
                        <h3 className="font-medium">Positioning</h3>
                        <p className="text-sm text-muted mt-2">
                            All‑in‑one business workflow hub combining OCR, contact management, analytics, and automation—fast,
                            simple, privacy‑conscious.
                        </p>
                    </div>

                    {/* Tagline */}
                    <div className="glass rounded-2xl p-5 h-full">
                        <div className="h-9 w-9 rounded-lg bg-white/5 flex items-center justify-center mb-4" aria-hidden>
                            <Quote size={18} />
                        </div>
                        <h3 className="font-medium">Tagline</h3>
                        <p className="text-sm mt-2">
                            <span className="text-muted">“</span>
                            <span className="font-medium">Business, as smooth as a breeze.</span>
                            <span className="text-muted">”</span>
                        </p>
                    </div>

                    {/* Primary value props */}
                    <div className="glass rounded-2xl p-5 h-full">
                        <div className="h-9 w-9 rounded-lg bg-white/5 flex items-center justify-center mb-4" aria-hidden>
                            <Sparkles size={18} />
                        </div>
                        <h3 className="font-medium">Primary value props</h3>
                        <ul className="mt-2 space-y-2 text-sm text-muted list-disc pl-5">
                            <li>Digitize business cards instantly with OCR; never lose a contact again.</li>
                            <li>Unified customer directory, tasks, campaigns, and invoicing in one place.</li>
                            <li>Insights and summaries with AI (transcription, analysis, and smart follow‑ups).</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
