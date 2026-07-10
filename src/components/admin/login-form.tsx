"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function LoginForm() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setLoading(true);

    const form = new FormData(event.currentTarget);
    const response = await fetch("/api/admin/login", {
      body: JSON.stringify({
        password: form.get("password"),
        username: form.get("username"),
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    const payload = (await response.json().catch(() => null)) as { error?: string } | null;

    setLoading(false);

    if (!response.ok) {
      setError(payload?.error ?? "Login failed.");
      return;
    }

    router.replace("/admin/blogs");
    router.refresh();
  }

  return (
    <form className="mt-8 grid gap-4" onSubmit={handleSubmit}>
      <label className="grid gap-2 text-sm font-black text-[#0f172c]">
        Username
        <Input className="h-11 bg-white" name="username" required />
      </label>
      <label className="grid gap-2 text-sm font-black text-[#0f172c]">
        Password
        <Input className="h-11 bg-white" name="password" required type="password" />
      </label>
      {error ? <p className="text-sm font-semibold text-red-600">{error}</p> : null}
      <Button
        className="h-11 rounded-full bg-[#2f6df6] font-black text-white hover:bg-[#5b8cff]"
        disabled={loading}
        type="submit"
      >
        {loading ? "Signing in..." : "Sign In"}
      </Button>
    </form>
  );
}
