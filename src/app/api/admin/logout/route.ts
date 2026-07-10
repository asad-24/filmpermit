import { NextResponse } from "next/server";

import { clearAdminSession, requireAdminActionHeader } from "@/lib/admin-auth";

export async function POST(request: Request) {
  if (!requireAdminActionHeader(request)) {
    return NextResponse.json({ error: "Missing admin action header." }, { status: 403 });
  }

  const response = NextResponse.json({ ok: true });
  clearAdminSession(response);

  return response;
}
