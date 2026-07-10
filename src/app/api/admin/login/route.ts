import { NextResponse } from "next/server";

import {
  getAdminConfig,
  setAdminSession,
  verifyAdminCredentials,
} from "@/lib/admin-auth";

const attempts = new Map<string, { count: number; resetAt: number }>();
const windowMs = 15 * 60 * 1000;
const maxAttempts = 8;

export async function POST(request: Request) {
  const config = getAdminConfig();

  if (!config.configured) {
    return NextResponse.json({ error: config.reason }, { status: 503 });
  }

  const key = clientKey(request);
  const limit = attempts.get(key);

  if (limit && limit.count >= maxAttempts && limit.resetAt > Date.now()) {
    return NextResponse.json(
      { error: "Too many login attempts. Try again later." },
      { status: 429 }
    );
  }

  const body = (await request.json().catch(() => null)) as
    | {
        password?: string;
        username?: string;
      }
    | null;

  if (!body?.username || !body.password) {
    return NextResponse.json({ error: "Username and password are required." }, { status: 400 });
  }

  if (!verifyAdminCredentials(body.username, body.password)) {
    registerFailure(key);
    return NextResponse.json({ error: "Invalid admin credentials." }, { status: 401 });
  }

  attempts.delete(key);
  const response = NextResponse.json({ ok: true });
  setAdminSession(response, body.username);

  return response;
}

function clientKey(request: Request) {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "local"
  );
}

function registerFailure(key: string) {
  const now = Date.now();
  const current = attempts.get(key);

  if (!current || current.resetAt <= now) {
    attempts.set(key, { count: 1, resetAt: now + windowMs });
    return;
  }

  attempts.set(key, { count: current.count + 1, resetAt: current.resetAt });
}
