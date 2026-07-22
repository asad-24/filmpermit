import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getBlogPosts } from "@/lib/blog-store";

type BlogCardsProps = {
  limit?: number;
};

export async function BlogCards({ limit }: BlogCardsProps = {}) {
  const allBlogPosts = await getBlogPosts();
  const blogPosts =
    typeof limit === "number" ? allBlogPosts.slice(0, limit) : allBlogPosts;

  return (
    <div className="grid gap-5 sm:gap-7 md:grid-cols-3">
      {blogPosts.map((post) => (
        <Link href={`/blog/${post.slug}`} key={post.title}>
          <Card className="group h-full overflow-hidden rounded-3xl border-0 bg-white py-0 shadow-[0_18px_60px_rgba(15,23,42,0.08)] ring-1 ring-[#0f172c]/10 transition hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(13,53,76,0.16)] dark:bg-white/[0.06] dark:ring-white/10">
            <div className="relative min-h-52 overflow-hidden sm:min-h-64">
              <Image
                alt={post.alt}
                className="object-cover transition duration-700 group-hover:scale-105"
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                src={post.image}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050915]/56 via-transparent to-transparent" />
              <Badge className="absolute left-4 top-4 rounded-full bg-[#00a86b] px-3 py-1 text-white">
                {post.category}
              </Badge>
            </div>
            <CardHeader className="pt-4 sm:pt-5">
              <CardTitle className="text-lg font-black leading-tight text-[#0f172c] sm:text-xl dark:text-white">
                {post.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="pb-5 sm:pb-6">
              <CardDescription className="text-sm leading-7 text-[#4a5874] dark:text-white/60">
                {post.excerpt}
              </CardDescription>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
