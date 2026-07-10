import { createHmac, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const cookieName = "fp_admin_session";
const maxAgeSeconds = 60 * 60 * 8;

type AdminConfig =
  | {
      configured: false;
      reason: string;
    }
  | {
      configured: true;
      password: string;
      secret: string;
      username: string;
    };

export function getAdminConfig(): AdminConfig {
  const username = process.env.ADMIN_USERNAME;
  const password = process.env.ADMIN_PASSWORD;
  const secret = process.env.ADMIN_SESSION_SECRET;

  if (!username || !password || !secret) {
    return {
      configured: false,
      reason:
        "Admin is not configured. Set ADMIN_USERNAME, ADMIN_PASSWORD, and ADMIN_SESSION_SECRET.",
    };
  }

  if (isPlaceholder(username) || isPlaceholder(password) || isPlaceholder(secret)) {
    return {
      configured: false,
      reason: "Admin credentials still contain placeholder values.",
    };
  }

  if (secret.length < 32) {
    return {
      configured: false,
      reason: "ADMIN_SESSION_SECRET must be at least 32 characters.",
    };
  }

  if (password.length < 12) {
    return {
      configured: false,
      reason: "ADMIN_PASSWORD must be at least 12 characters.",
    };
  }

  return { configured: true, password, secret, username };
}

export async function isAdminAuthenticated() {
  const cookieStore = await cookies();
  const token = cookieStore.get(cookieName)?.value;

  return verifySession(token);
}

export function setAdminSession(response: NextResponse, username: string) {
  const expiresAt = Date.now() + maxAgeSeconds * 1000;
  const token = signSession(username, expiresAt);

  response.cookies.set(cookieName, token, {
    httpOnly: true,
    maxAge: maxAgeSeconds,
    path: "/",
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });
}

export function clearAdminSession(response: NextResponse) {
  response.cookies.set(cookieName, "", {
    httpOnly: true,
    maxAge: 0,
    path: "/",
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });
}

export function verifyAdminCredentials(username: string, password: string) {
  const config = getAdminConfig();

  if (!config.configured) {
    return false;
  }

  return safeEqual(username, config.username) && safeEqual(password, config.password);
}

export function requireAdminActionHeader(request: Request) {
  return request.headers.get("x-admin-action") === "true";
}

function signSession(username: string, expiresAt: number) {
  const config = getAdminConfig();

  if (!config.configured) {
    throw new Error(config.reason);
  }

  const payload = `${base64url(username)}.${expiresAt}`;
  const signature = createHmac("sha256", config.secret).update(payload).digest("base64url");

  return `${payload}.${signature}`;
}

function verifySession(token: string | undefined) {
  const config = getAdminConfig();

  if (!config.configured || !token) {
    return false;
  }

  const [encodedUsername, expiresAt, signature] = token.split(".");

  if (!encodedUsername || !expiresAt || !signature) {
    return false;
  }

  const expiry = Number(expiresAt);

  if (!Number.isFinite(expiry) || expiry < Date.now()) {
    return false;
  }

  const payload = `${encodedUsername}.${expiresAt}`;
  const expected = createHmac("sha256", config.secret).update(payload).digest("base64url");

  return safeEqual(signature, expected);
}

function safeEqual(left: string, right: string) {
  const leftBuffer = Buffer.from(left);
  const rightBuffer = Buffer.from(right);

  if (leftBuffer.length !== rightBuffer.length) {
    return false;
  }

  return timingSafeEqual(leftBuffer, rightBuffer);
}

function base64url(value: string) {
  return Buffer.from(value).toString("base64url");
}

function isPlaceholder(value: string) {
  const normalized = value.toLowerCase();

  return (
    normalized.includes("replace-with") ||
    normalized.includes("change-me") ||
    normalized.includes("placeholder")
  );
}
