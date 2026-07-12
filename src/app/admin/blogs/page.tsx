import { redirect } from "next/navigation";

import { BlogEditor } from "@/components/admin/blog-editor";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { getBlogPosts } from "@/lib/blog-store";
import { getMongoConfigError } from "@/lib/mongodb";

export const metadata = {
  robots: {
    follow: false,
    index: false,
  },
  title: "Blog Admin",
};

export default async function AdminBlogsPage() {
  if (!(await isAdminAuthenticated())) {
    redirect("/admin/login");
  }

  const mongoError = getMongoConfigError();

  if (mongoError) {
    return (
      <main className="min-h-screen bg-[#f5f7fb] px-6 py-32">
        <section className="mx-auto max-w-2xl rounded-[28px] bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.06)] ring-1 ring-[#0f172c]/10">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-[#00a86b]">
            Database setup required
          </p>
          <h1 className="mt-3 text-3xl font-black text-[#0f172c]">
            MongoDB Atlas is not connected
          </h1>
          <p className="mt-4 text-sm leading-7 text-[#4a5874]">{mongoError}</p>
          <p className="mt-4 text-sm leading-7 text-[#4a5874]">
            Update <code className="rounded bg-[#eef2f8] px-1.5 py-1">.env.local</code>{" "}
            with your real Atlas URI and restart the dev server.
          </p>
        </section>
      </main>
    );
  }

  const posts = await getBlogPosts();

  return (
    <main className="min-h-screen bg-[#f5f7fb] px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <BlogEditor posts={posts} />
      </div>
    </main>
  );
}
