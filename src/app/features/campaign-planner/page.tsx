import Link from "next/link";

export const metadata = {
    title: "Campaign Planner — Orchestrate marketing",
    description: "Plan campaigns, assign tasks, and measure impact.",
};

export default function CampaignPlannerFeature() {
    return (
        <section className="py-12">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-semibold tracking-tight">Campaign Planner</h1>
                <p className="mt-2 text-muted max-w-2xl">Plan campaigns, assign tasks, and measure impact.</p>
                <ul className="mt-6 grid gap-3 text-sm">
                    <li>• Campaign goals and timelines.</li>
                    <li>• Roles, assignments, and tasks.</li>
                    <li>• Performance tracking and insights.</li>
                </ul>
                <div className="mt-8 flex items-center gap-3">
                    <Link href="/app" className="px-4 py-2 rounded bg-primary text-primary-foreground">Open Campaigns</Link>
                    <Link href="/features" className="text-sm text-muted hover:text-foreground">Back to all features</Link>
                </div>
            </div>
        </section>
    );
}
