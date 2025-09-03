import Link from "next/link";

export const metadata = {
    title: "Customer Directory — Profiles and history",
    description: "Rich profiles, history, and quick filters.",
};

export default function DirectoryFeature() {
    return (
        <section className="py-12">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-semibold tracking-tight">Customer Directory</h1>
                <p className="mt-2 text-muted max-w-2xl">Rich profiles, history, and quick filters.</p>
                <ul className="mt-6 grid gap-3 text-sm">
                    <li>• Full contact details and activity.</li>
                    <li>• Powerful filters and segments.</li>
                    <li>• One‑click actions and notes.</li>
                </ul>
                <div className="mt-8 flex items-center gap-3">
                    <Link href="/app" className="px-4 py-2 rounded bg-primary text-primary-foreground">Open Directory</Link>
                    <Link href="/features" className="text-sm text-muted hover:text-foreground">Back to all features</Link>
                </div>
            </div>
        </section>
    );
}
