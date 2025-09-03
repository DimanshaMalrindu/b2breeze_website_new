export const metadata = {
    title: "About — B2Breeze",
    description: "Mission, who it’s for, brief story.",
};

export default function AboutPage() {
    return (
        <section className="py-12">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-semibold tracking-tight">About B2Breeze</h1>
                <p className="mt-3 text-muted">We’re building a simple, fast, privacy‑conscious toolkit to help small teams move faster.</p>
            </div>
        </section>
    );
}
