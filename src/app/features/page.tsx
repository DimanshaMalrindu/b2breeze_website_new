export const metadata = {
    title: "B2Breeze Features — Scanner, Wallet, Directory, Tasks, Campaigns, Invoices, Analytics, Recorder",
    description:
        "Explore all features of B2Breeze: Business Card Scanner, Wallet, Customer Directory, Task & Campaign Planner, Invoices, Analytics, and Conversation Recorder.",
};

export default function FeaturesPage() {
    const features = [
        { href: "/features/business-card-scanner", title: "Business Card Scanner", desc: "Instant OCR to capture names, titles, emails, and phone numbers." },
        { href: "/features/business-card-wallet", title: "Business Card Wallet", desc: "A searchable, organized library of every card you’ve scanned." },
        { href: "/features/customer-directory", title: "Customer Directory", desc: "Rich profiles, history, and quick filters." },
        { href: "/features/task-planner", title: "Task Planner", desc: "Stay on top of priorities, deadlines, and follow‑ups." },
        { href: "/features/campaign-planner", title: "Campaign Planner", desc: "Plan campaigns, assign tasks, and measure impact." },
        { href: "/features/invoice-generator", title: "Invoice Generator", desc: "Create professional invoices in minutes." },
        { href: "/features/analytics-dashboard", title: "Analytics Dashboard", desc: "See what matters with clean, visual insights." },
        { href: "/features/conversation-recorder", title: "Conversation Recorder", desc: "Record, transcribe, and summarize client calls." },
    ];
    return (
        <section className="py-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-semibold tracking-tight">Powerful features for modern business</h1>
                <p className="mt-2 text-muted max-w-2xl">Explore the full suite of tools to capture contacts, organize work, and move faster.</p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((f) => (
                        <a key={f.href} href={f.href} className="glass rounded-xl p-5 hover:bg-white/[0.06] transition-colors">
                            <h2 className="font-medium">{f.title}</h2>
                            <p className="mt-1 text-sm text-muted">{f.desc}</p>
                            <span className="mt-3 inline-block text-xs text-primary">Learn more →</span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
