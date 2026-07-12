"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LogOut, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BlogPost } from "@/lib/blog-store";

export function BlogEditor({ posts }: { posts: BlogPost[] }) {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setLoading(true);

    const form = new FormData(event.currentTarget);
    const response = await fetch("/api/admin/blogs", {
      body: JSON.stringify({
        alt: form.get("alt"),
        category: form.get("category"),
        content: form.get("content"),
        date: form.get("date"),
        excerpt: form.get("excerpt"),
        image: form.get("image"),
        readTime: form.get("readTime"),
        title: form.get("title"),
      }),
      headers: {
        "Content-Type": "application/json",
        "x-admin-action": "true",
      },
      method: "POST",
    });
    const payload = (await response.json().catch(() => null)) as
      | { error?: string; post?: BlogPost }
      | null;

    setLoading(false);

    if (!response.ok) {
      setError(payload?.error ?? "Unable to create blog post.");
      return;
    }

    event.currentTarget.reset();
    router.refresh();
  }

  async function logout() {
    await fetch("/api/admin/logout", {
      headers: { "x-admin-action": "true" },
      method: "POST",
    });
    router.replace("/admin/login");
    router.refresh();
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr]">
      <section className="rounded-[28px] bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.06)] ring-1 ring-[#0f172c]/10">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#00a86b]">
              Admin
            </p>
            <h1 className="mt-2 text-3xl font-black text-[#0f172c]">
              Add Blog Post
            </h1>
          </div>
          <Button
            className="rounded-full"
            onClick={logout}
            type="button"
            variant="outline"
          >
            <LogOut className="size-4" />
            Logout
          </Button>
        </div>

        <form className="mt-8 grid gap-4" onSubmit={handleSubmit}>
          <label className="grid gap-2 text-sm font-black text-[#0f172c]">
            Title
            <Input className="h-11 bg-white" name="title" required />
          </label>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-black text-[#0f172c]">
              Category
              <Input className="h-11 bg-white" name="category" required />
            </label>
            <label className="grid gap-2 text-sm font-black text-[#0f172c]">
              Date
              <Input className="h-11 bg-white" name="date" placeholder="Jan 1, 2026" />
            </label>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-black text-[#0f172c]">
              Read time
              <Input className="h-11 bg-white" name="readTime" placeholder="Quick read" />
            </label>
            <label className="grid gap-2 text-sm font-black text-[#0f172c]">
              Image path
              <Input
                className="h-11 bg-white"
                name="image"
                placeholder="/images/hero-dubai-film-production.png"
              />
            </label>
          </div>
          <label className="grid gap-2 text-sm font-black text-[#0f172c]">
            Image alt text
            <Input className="h-11 bg-white" name="alt" />
          </label>
          <label className="grid gap-2 text-sm font-black text-[#0f172c]">
            Excerpt
            <textarea
              className="min-h-24 rounded-xl border border-[#0f172c]/15 bg-white px-3 py-3 text-sm outline-none focus:border-[#00a86b] focus:ring-2 focus:ring-[#00a86b]/20"
              name="excerpt"
              required
            />
          </label>
          <label className="grid gap-2 text-sm font-black text-[#0f172c]">
            Content
            <textarea
              className="min-h-56 rounded-xl border border-[#0f172c]/15 bg-white px-3 py-3 text-sm outline-none focus:border-[#00a86b] focus:ring-2 focus:ring-[#00a86b]/20"
              name="content"
              placeholder="Use blank lines between paragraphs."
              required
            />
          </label>
          {error ? <p className="text-sm font-semibold text-red-600">{error}</p> : null}
          <Button
            className="h-11 rounded-full bg-[#00a86b] font-black text-white hover:bg-[#18c987]"
            disabled={loading}
            type="submit"
          >
            <Plus className="size-4" />
            {loading ? "Publishing..." : "Publish Blog"}
          </Button>
        </form>
      </section>

      <aside className="rounded-[28px] bg-[#0f172c] p-6 text-white shadow-[0_18px_50px_rgba(13,53,76,0.22)]">
        <h2 className="text-2xl font-black">Published Blogs</h2>
        <div className="mt-6 grid gap-4">
          {posts.map((post) => (
            <Link
              className="rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
              href={`/blog/${post.slug}`}
              key={post.slug}
              target="_blank"
            >
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#00a86b]">
                {post.category}
              </p>
              <h3 className="mt-2 font-black">{post.title}</h3>
              <p className="mt-2 text-sm text-white/60">{post.date}</p>
            </Link>
          ))}
        </div>
      </aside>
    </div>
  );
}
