import Link from "next/link";

export const metadata = {
    title: "Invoice Generator — Professional invoices in minutes",
    description: "Create professional invoices in minutes.",
};

export default function InvoiceFeature() {
    return (
        <section className="py-12">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-semibold tracking-tight">Invoice Generator</h1>
                <p className="mt-2 text-muted max-w-2xl">Create professional invoices in minutes.</p>
                <ul className="mt-6 grid gap-3 text-sm">
                    <li>• Templates and branding.</li>
                    <li>• Tax, discounts, and exports.</li>
                    <li>• Status tracking and reminders.</li>
                </ul>
                <div className="mt-8 flex items-center gap-3">
                    <Link href="/app" className="px-4 py-2 rounded bg-primary text-primary-foreground">Create Invoice</Link>
                    <Link href="/features" className="text-sm text-muted hover:text-foreground">Back to all features</Link>
                </div>
            </div>
        </section>
    );
}
