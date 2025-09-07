export const metadata = {
    title: "B2Breeze Demo — Watch and try it now",
    description: "Watch the product demo and book a session.",
};

export default function DemoPage() {
    return (
        <section className="py-12">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-semibold tracking-tight">Demo</h1>
                <div className="mt-4 aspect-video w-full rounded-xl overflow-hidden">
                    <iframe
                        className="h-full w-full"
                        src={process.env.NEXT_PUBLIC_DEMO_VIDEO_URL || "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0"}
                        title="B2Breeze Demo"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
                <div className="mt-6 glass rounded-xl p-5">
                    <h2 className="text-xl font-medium">Book a live session</h2>
                    <p className="text-muted text-sm mt-1">Pick a time that works for you.</p>
                    <div className="mt-4 rounded-xl bg-white/5 p-3 min-h-40 text-sm text-muted">
                        {/* Replace with Calendly embed */}
                        Calendly embed placeholder
                    </div>
                </div>
            </div>
        </section>
    );
}
