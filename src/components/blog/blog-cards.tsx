import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Clock3 } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getBlogPosts } from "@/lib/blog-store";

export async function BlogCards() {
  const blogPosts = await getBlogPosts();

  return (
    <div className="grid gap-7 md:grid-cols-3">
      {blogPosts.map((post) => (
        <Link href={`/blog/${post.slug}`} key={post.title}>
          <Card className="h-full overflow-hidden rounded-[28px] border-0 bg-white py-0 shadow-[0_8px_30px_rgba(15,23,42,0.06)] ring-1 ring-[#0f172c]/10 transition hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(13,53,76,0.14)] dark:bg-white/[0.06] dark:ring-white/10">
            <div className="relative min-h-56">
              <Image
                alt={post.alt}
                className="object-cover"
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                src={post.image}
              />
              <Badge className="absolute left-4 top-4 bg-[#2f6df6] text-white">
                {post.category}
              </Badge>
            </div>
            <CardHeader className="pt-5">
              <div className="flex flex-wrap gap-4 text-xs font-semibold text-[#0f172c]/50 dark:text-white/45">
                <span className="flex items-center gap-1.5">
                  <CalendarDays className="size-4" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock3 className="size-4" />
                  {post.readTime}
                </span>
              </div>
              <CardTitle className="text-xl font-black leading-tight text-[#0f172c] dark:text-white">
                {post.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="pb-6">
              <CardDescription className="leading-7 text-[#4a5874] dark:text-white/60">
                {post.excerpt}
              </CardDescription>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
