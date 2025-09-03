export const metadata = {
    title: "Blog — B2Breeze",
    description: "Product updates and ideas.",
};

export default function BlogPage() {
    return (
        <section className="py-12">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-semibold tracking-tight">Blog</h1>
                <p className="mt-3 text-muted">No posts yet. Markdown/MDX support can be added later.</p>
            </div>
        </section>
    );
}
