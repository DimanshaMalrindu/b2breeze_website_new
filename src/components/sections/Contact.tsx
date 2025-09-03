import { Button } from "@/components/ui/Button";

export function Contact() {
    return (
        <section id="contact" className="py-24">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                <div className="glass rounded-2xl p-6 sm:p-8">
                    <h2 className="text-2xl font-semibold">Tell us about your project</h2>
                    <p className="text-muted mt-2">We’ll get back within one business day.</p>
                    <form className="mt-6 grid gap-4 sm:grid-cols-2">
                        <div className="sm:col-span-1">
                            <label className="text-sm text-muted">Name</label>
                            <input className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500/50" placeholder="Jane Doe" />
                        </div>
                        <div className="sm:col-span-1">
                            <label className="text-sm text-muted">Email</label>
                            <input type="email" className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500/50" placeholder="jane@company.com" />
                        </div>
                        <div className="sm:col-span-2">
                            <label className="text-sm text-muted">Project details</label>
                            <textarea rows={4} className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500/50 [background:rgba(255,255,255,.05)]" placeholder="Timeline, scope, goals" />
                        </div>
                        <div className="sm:col-span-2">
                            <Button variant="primary" className="w-full sm:w-auto">Send inquiry</Button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
