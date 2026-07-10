import { redirect } from "next/navigation";

import { LoginForm } from "@/components/admin/login-form";
import { getAdminConfig, isAdminAuthenticated } from "@/lib/admin-auth";

export const metadata = {
  robots: {
    follow: false,
    index: false,
  },
  title: "Admin Login",
};

export default async function AdminLoginPage() {
  if (await isAdminAuthenticated()) {
    redirect("/admin/blogs");
  }

  const config = getAdminConfig();

  return (
    <main className="min-h-screen bg-[#f5f7fb] px-6 py-32">
      <section className="mx-auto max-w-md rounded-[28px] bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.06)] ring-1 ring-[#0f172c]/10">
        <p className="text-xs font-black uppercase tracking-[0.22em] text-[#2f6df6]">
          FilmPermit Admin
        </p>
        <h1 className="mt-3 text-3xl font-black text-[#0f172c]">Sign in</h1>
        <p className="mt-3 text-sm leading-7 text-[#4a5874]">
          Use your private admin credentials to manage blog posts.
        </p>
        {!config.configured ? (
          <div className="mt-6 rounded-2xl border border-amber-300 bg-amber-50 p-4 text-sm leading-6 text-amber-900">
            {config.reason}
          </div>
        ) : (
          <LoginForm />
        )}
      </section>
    </main>
  );
}
