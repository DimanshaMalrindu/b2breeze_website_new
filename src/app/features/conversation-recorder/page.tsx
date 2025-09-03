import Link from "next/link";

export const metadata = {
    title: "Conversation Recorder — Record, transcribe, summarize",
    description: "Record, transcribe, and summarize client calls.",
};

export default function RecorderFeature() {
    return (
        <section className="py-12">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-semibold tracking-tight">Conversation Recorder</h1>
                <p className="mt-2 text-muted max-w-2xl">Record, transcribe, and summarize client calls.</p>
                <ul className="mt-6 grid gap-3 text-sm">
                    <li>• One‑click recording with privacy notices.</li>
                    <li>• Accurate transcription.</li>
                    <li>• AI‑assisted summaries and next steps.</li>
                </ul>
                <div className="mt-8 flex items-center gap-3">
                    <Link href="/app" className="px-4 py-2 rounded bg-primary text-primary-foreground">Start Recording</Link>
                    <Link href="/features" className="text-sm text-muted hover:text-foreground">Back to all features</Link>
                </div>
            </div>
        </section>
    );
}
