import { Shield, Zap, Gauge, Sparkles } from "lucide-react";

const items = [
    {
        icon: Zap,
        title: "Blazing Performance",
        desc: "Next.js 15 with Turbopack and RSC for instant loads and stellar Core Web Vitals.",
    },
    {
        icon: Gauge,
        title: "Conversion-Driven",
        desc: "Crafted UX flows, motion, and copy to guide enterprise buyers to action.",
    },
    {
        icon: Shield,
        title: "Secure & Scalable",
        desc: "Hardened stack, best practices, and cloud-native patterns for peace of mind.",
    },
    {
        icon: Sparkles,
        title: "Premium Aesthetics",
        desc: "Futuristic design system with glass, grids, gradients, and micro-interactions.",
    },
];

export function Features() {
    return (
        <section id="features" className="py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl sm:text-3xl font-semibold">Capabilities engineered for results</h2>
                <p className="text-muted mt-2 max-w-2xl">
                    A practical, future-proof stack tailored for high-stakes B2B experiences.
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
