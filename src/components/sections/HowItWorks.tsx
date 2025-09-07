import { Scan, FolderDown, CheckCircle2 } from "lucide-react";

const steps = [
    {
        icon: Scan,
        title: "Capture",
        desc: "Scan business cards and import contacts instantly with OCR.",
    },
    {
        icon: FolderDown,
        title: "Organize",
        desc: "Save to Wallet and Directory, tag and segment for action.",
    },
    {
        icon: CheckCircle2,
        title: "Act",
        desc: "Plan tasks and campaigns, invoice clients, and track performance.",
    },
];

export function HowItWorks() {
    return (
        <section id="how-it-works" className="py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl sm:text-3xl font-semibold">How it works</h2>
                <div className="mt-8 grid gap-6 sm:grid-cols-3">
                    {steps.map(({ icon: Icon, title, desc }) => (
                        <div key={title} className="glass rounded-2xl p-5 h-full">
                            <div className="h-9 w-9 rounded-lg bg-white/5 flex items-center justify-center mb-4" aria-hidden>
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
