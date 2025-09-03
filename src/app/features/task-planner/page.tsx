import Link from "next/link";

export const metadata = {
    title: "Task Planner — Priorities, due dates, status",
    description: "Stay on top of priorities, deadlines, and follow‑ups.",
};

export default function TaskPlannerFeature() {
    return (
        <section className="py-12">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-semibold tracking-tight">Task Planner</h1>
                <p className="mt-2 text-muted max-w-2xl">Stay on top of priorities, deadlines, and follow‑ups.</p>
                <ul className="mt-6 grid gap-3 text-sm">
                    <li>• Priorities and due dates.</li>
                    <li>• Assignments and statuses.</li>
                    <li>• Notifications and reminders.</li>
                </ul>
                <div className="mt-8 flex items-center gap-3">
                    <Link href="/app" className="px-4 py-2 rounded bg-primary text-primary-foreground">Open Tasks</Link>
                    <Link href="/features" className="text-sm text-muted hover:text-foreground">Back to all features</Link>
                </div>
            </div>
        </section>
    );
}
