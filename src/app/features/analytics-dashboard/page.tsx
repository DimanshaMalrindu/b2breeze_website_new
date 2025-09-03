import Link from "next/link";

export const metadata = {
    title: "Analytics Dashboard — Clean, visual insights",
    description: "See what matters with clean, visual insights.",
};

export default function AnalyticsFeature() {
    return (
        <section className="py-12">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-semibold tracking-tight">Analytics Dashboard</h1>
                <p className="mt-2 text-muted max-w-2xl">See what matters with clean, visual insights.</p>
                <ul className="mt-6 grid gap-3 text-sm">
                    <li>• KPIs at a glance.</li>
                    <li>• Trends and breakdowns.</li>
                    <li>• Export charts and data.</li>
                </ul>
                <div className="mt-8 flex items-center gap-3">
                    <Link href="/app" className="px-4 py-2 rounded bg-primary text-primary-foreground">Open Analytics</Link>
                    <Link href="/features" className="text-sm text-muted hover:text-foreground">Back to all features</Link>
                </div>
            </div>
        </section>
    );
}
