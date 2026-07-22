import type { MetadataRoute } from "next";

import { getBlogPosts } from "@/lib/blog-store";
import { site } from "@/lib/site-data";

const routes = [
  "",
  "/services",
  "/apply-permit",
  "/contact",
  "/blog",
  "/faq",
  "/about",
  "/privacy",
  "/terms",
  "/policy",
  "/ad-policy",
  "/cookies",
];

export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages = routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? ("weekly" as const) : ("monthly" as const),
    priority: route === "" ? 1 : 0.8,
  }));

  const blogPosts = await getBlogPosts();
  const posts = blogPosts.map((post) => ({
    url: `${site.url}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...pages, ...posts];
}
