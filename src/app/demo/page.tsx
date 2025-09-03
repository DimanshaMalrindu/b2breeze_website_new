export const metadata = {
    title: "B2Breeze Demo — Watch and try it now",
    description: "Watch the product demo and book a session.",
};

export default function DemoPage() {
    return (
        <section className="py-12">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-semibold tracking-tight">Demo</h1>
                <div className="mt-4 aspect-video w-full rounded-xl glass flex items-center justify-center text-muted">
                    Video placeholder
                </div>
                <div className="mt-6 glass rounded-xl p-5">
                    Booking form placeholder (Calendly)
                </div>
            </div>
        </section>
    );
}
