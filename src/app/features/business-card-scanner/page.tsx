import Link from "next/link";

export const metadata = {
    title: "Digitize Business Cards Instantly — B2Breeze Scanner",
    description: "Fast OCR, auto‑fields, error fixing, save to Wallet/Directory.",
};

export default function ScannerFeature() {
    return (
        <section className="py-12">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-semibold tracking-tight">Digitize Business Cards Instantly</h1>
                <p className="mt-2 text-muted max-w-2xl">Fast OCR, auto‑fields, error fixing, and one‑click save to Wallet and Directory.</p>
                <ul className="mt-6 grid gap-3 text-sm">
                    <li>• Capture names, titles, emails, and phones in seconds.</li>
                    <li>• Review and fix suggestions with minimal typing.</li>
                    <li>• Save to your Wallet and Directory automatically.</li>
                </ul>
                <div className="mt-8 flex items-center gap-3">
                    <Link href="/app" className="px-4 py-2 rounded bg-primary text-primary-foreground">Try Scanner Now</Link>
                    <Link href="/features" className="text-sm text-muted hover:text-foreground">Back to all features</Link>
                </div>
            </div>
        </section>
    );
}
