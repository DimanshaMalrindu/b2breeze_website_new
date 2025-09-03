export const metadata = {
    title: "Contact — B2Breeze",
    description: "Get in touch.",
};

export default function ContactPage() {
    return (
        <section className="py-12">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>
                <form className="mt-6 glass rounded-xl p-5 grid gap-4">
                    <div className="grid gap-1 text-sm">
                        <label htmlFor="name">Name</label>
                        <input id="name" name="name" className="rounded bg-white/5 px-3 py-2 outline-none focus:ring-2 focus:ring-primary" placeholder="Your name" />
                    </div>
                    <div className="grid gap-1 text-sm">
                        <label htmlFor="email">Email</label>
                        <input id="email" name="email" type="email" className="rounded bg-white/5 px-3 py-2 outline-none focus:ring-2 focus:ring-primary" placeholder="you@example.com" />
                    </div>
                    <div className="grid gap-1 text-sm">
                        <label htmlFor="company">Company</label>
                        <input id="company" name="company" className="rounded bg-white/5 px-3 py-2 outline-none focus:ring-2 focus:ring-primary" placeholder="Company Inc." />
                    </div>
                    <div className="grid gap-1 text-sm">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" className="rounded bg-white/5 px-3 py-2 outline-none focus:ring-2 focus:ring-primary" rows={4} placeholder="How can we help?" />
                    </div>
                    <div className="sr-only" aria-hidden="true">
                        <label htmlFor="website">Leave this field empty</label>
                        <input id="website" name="website" tabIndex={-1} autoComplete="off" title="Leave this field empty" />
                    </div>
                    <button type="submit" className="mt-2 px-4 py-2 rounded bg-primary text-primary-foreground">Send</button>
                </form>
            </div>
        </section>
    );
}
