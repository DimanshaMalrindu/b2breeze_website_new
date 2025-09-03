import { BarChart3, CheckSquare, Megaphone, Mic, Receipt, Scan, Users, Wallet } from "lucide-react";

const features = [
    {
        icon: Scan,
        title: "Business Card Scanner (OCR)",
        desc: "Instant OCR to capture names, titles, emails, and phone numbers.",
    },
    {
        icon: Wallet,
        title: "Business Card Wallet",
        desc: "A searchable, organized library of every card you’ve scanned.",
    },
    {
        icon: Users,
        title: "Customer Directory",
        desc: "Rich profiles, history, and quick filters.",
    },
    {
        icon: CheckSquare,
        title: "Task Planner",
        desc: "Stay on top of priorities, deadlines, and follow‑ups.",
    },
    {
        icon: Megaphone,
        title: "Campaign Planner",
        desc: "Plan campaigns, assign tasks, and measure impact.",
    },
    {
        icon: Receipt,
        title: "Invoice Generator",
        desc: "Create professional invoices in minutes.",
    },
    {
        icon: BarChart3,
        title: "Analytics Dashboard",
        desc: "See what matters with clean, visual insights.",
    },
    {
        icon: Mic,
        title: "Conversation Recorder",
        desc: "Record, transcribe, and summarize client calls.",
    },
];

export function KeyFeatures() {
    return (
        <section id="features" className="py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl sm:text-3xl font-semibold">Key Features</h2>
                <p className="text-muted mt-2 max-w-2xl">
                    AI‑assisted where helpful. Fast, simple, and privacy‑conscious.
                </p>
                <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {features.map(({ icon: Icon, title, desc }) => (
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
