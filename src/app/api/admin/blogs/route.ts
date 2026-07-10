import { NextResponse } from "next/server";

import {
  isAdminAuthenticated,
  requireAdminActionHeader,
} from "@/lib/admin-auth";
import { createBlogPost, getBlogPosts } from "@/lib/blog-store";

export async function GET() {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  return NextResponse.json({ posts: await getBlogPosts() });
}

export async function POST(request: Request) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  if (!requireAdminActionHeader(request)) {
    return NextResponse.json({ error: "Missing admin action header." }, { status: 403 });
  }

  const body = await request.json().catch(() => null);

  try {
    const post = await createBlogPost(body ?? {});

    return NextResponse.json({ post }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unable to create post." },
      { status: 400 }
    );
  }
}
