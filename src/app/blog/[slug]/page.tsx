import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { CTA } from "@/components/sections/cta";
import { buttonVariants } from "@/components/ui/button";
import { getBlogPost, getBlogPosts } from "@/lib/blog-store";
import { article } from "@/lib/site-data";
import { cn } from "@/lib/utils";

type BlogDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamic = "force-dynamic";
export const dynamicParams = true;

export async function generateStaticParams() {
  const posts = await getBlogPosts();

  return posts
    .filter((post) => post.slug !== article.slug)
    .map((post) => ({
      slug: post.slug,
    }));
}

export async function generateMetadata({
  params,
}: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <main className="bg-[#f5f7fb] px-6 pb-20 pt-36 dark:bg-[#0f172c]">
        <article className="mx-auto max-w-4xl">
          <Link
            className="inline-flex items-center gap-2 text-sm font-black text-[#24304a] hover:text-[#0a1024] dark:text-white/70 dark:hover:text-white"
            href="/blog"
          >
            <ArrowLeft className="size-4" />
            Back to articles
          </Link>

          <p className="mt-8 text-sm font-semibold text-[#647086] dark:text-white/55">
            {post.category} · {post.date}
          </p>
          <h1 className="mt-5 text-4xl font-black leading-tight tracking-normal text-[#0a1024] md:text-5xl dark:text-white">
            {post.title}
          </h1>
          <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-lg shadow-2xl shadow-slate-950/10">
            <Image
              alt={post.alt}
              className="object-cover"
              fill
              priority
              sizes="(min-width: 1024px) 896px, 100vw"
              src={post.image}
            />
          </div>

          <div className="mt-12 space-y-8 text-lg leading-9 text-[#4a5874] dark:text-white/68">
            <p>{post.excerpt}</p>
            {post.content
              .split(/\n{2,}/)
              .filter(Boolean)
              .map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
          </div>

          <Link
            className={cn(buttonVariants({ size: "lg" }), "mt-10")}
            href="/contact?type=permit"
          >
            Apply for Permit
            <ArrowRight className="size-4" />
          </Link>
        </article>
      </main>
      <CTA />
    </>
  );
}
