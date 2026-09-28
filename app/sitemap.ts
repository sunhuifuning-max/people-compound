import type { MetadataRoute } from "next";

const base = process.env.NEXT_PUBLIC_SITE_URL || "https://www.peoplecompound.com";
const slugs = [
  "people-strategy-for-whats-next",
  "stop-rolling-the-dice-on-quality-of-hire",
  "when-hr-needs-to-scale",
  "from-founder-led-to-leader-led",
  "culture-is-a-system",
  "the-people-operating-system",
  "leadership-capability-compounds",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/solutions", "/services", "/leadership", "/assessments", "/insights", "/about", "/contact", "/privacy", "/terms", "/assessments/leadership", "/assessments/organization-health"];
  return [
    ...pages.map(path => ({ url: `${base}${path}`, changeFrequency: path === "/insights" ? "weekly" as const : "monthly" as const, priority: path === "" ? 1 : path === "/insights" || path === "/assessments" ? 0.9 : 0.7 })),
    ...slugs.map(slug => ({ url: `${base}/insights/${slug}`, changeFrequency: "monthly" as const, priority: 0.7 })),
  ];
}
