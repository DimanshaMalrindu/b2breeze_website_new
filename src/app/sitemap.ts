import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";
  const paths = [
    "",
    "features",
    "features/business-card-scanner",
    "features/business-card-wallet",
    "features/customer-directory",
    "features/task-planner",
    "features/campaign-planner",
    "features/invoice-generator",
    "features/analytics-dashboard",
    "features/conversation-recorder",
    "pricing",
    "demo",
    "about",
    "blog",
    "contact",
    "legal/privacy",
    "legal/terms",
  ];
  const now = new Date();
  return paths.map((p) => ({
    url: `${base}/${p}`.replace(/\/$/, ""),
    lastModified: now,
    changeFrequency: "weekly",
    priority: p === "" ? 1 : 0.7,
  }));
}
