import { Shield, Zap, Gauge, Sparkles } from "lucide-react";

const items = [
    {
        icon: Zap,
        title: "Educate & Showcase",
        desc: "Clear feature overviews: Scanner, Wallet, Directory, Tasks, Campaigns, Invoices, Analytics, Recorder.",
    },
    {
        icon: Gauge,
        title: "Drive Conversions",
        desc: "Focused CTAs to Try Free or Watch Demo, with analytics to measure engagement.",
    },
    {
        icon: Shield,
        title: "Privacy‑conscious",
        desc: "Respectful tracking, accessible UI, and transparent policies.",
    },
    {
        icon: Sparkles,
        title: "Shareable & SEO‑ready",
        desc: "Optimized titles, meta, and social cards for organic reach.",
    },
];

export function Features() {
    return (
        <section id="site-features" className="py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl sm:text-3xl font-semibold">What this site helps you do</h2>
                <p className="text-muted mt-2 max-w-2xl">
                    Communicate value, showcase features, and convert visitors into trials and demos.
                </p>
                <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {items.map(({ icon: Icon, title, desc }) => (
                        <div key={title} className="glass rounded-2xl p-5 h-full">
                            <div className="h-9 w-9 rounded-lg bg-white/5 flex items-center justify-center mb-4">
                                <Icon size={18} />
                            </div>
                            <h3 className="font-medium">{title}</h3>
                            <p className="text-sm text-muted mt-2">{desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
