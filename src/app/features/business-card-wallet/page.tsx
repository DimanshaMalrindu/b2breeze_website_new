import Link from "next/link";

export const metadata = {
    title: "Business Card Wallet — Organized storage",
    description: "A searchable, organized library of every card you’ve scanned.",
};

export default function WalletFeature() {
    return (
        <section className="py-12">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-semibold tracking-tight">Business Card Wallet</h1>
                <p className="mt-2 text-muted max-w-2xl">A searchable, organized library of every card you’ve scanned.</p>
                <ul className="mt-6 grid gap-3 text-sm">
                    <li>• Quick filters and search.</li>
                    <li>• Bulk actions and exports.</li>
                    <li>• Syncs with Directory.</li>
                </ul>
                <div className="mt-8 flex items-center gap-3">
                    <Link href="/app" className="px-4 py-2 rounded bg-primary text-primary-foreground">Open Wallet</Link>
                    <Link href="/features" className="text-sm text-muted hover:text-foreground">Back to all features</Link>
                </div>
            </div>
        </section>
    );
}
