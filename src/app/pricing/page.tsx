export const metadata = {
    title: "B2Breeze Pricing — Start free, grow with your team",
    description: "Simple plans while pricing finalizes. Contact us for details.",
};

export default function PricingPage() {
    return (
        <section className="py-12">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-semibold tracking-tight">Pricing</h1>
                <p className="mt-2 text-muted">Starter (Free), Pro, and Team — feature checklist coming soon. Contact Sales for custom needs.</p>
                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                    {["Starter (Free)", "Pro", "Team"].map((p) => (
                        <div key={p} className="glass rounded-xl p-5">
                            <h2 className="font-medium">{p}</h2>
                            <ul className="mt-3 text-sm text-muted">
                                <li>• Key features</li>
                                <li>• Support</li>
                                <li>• More soon</li>
                            </ul>
                            <button className="mt-4 px-4 py-2 rounded bg-primary text-primary-foreground">Contact Sales</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
