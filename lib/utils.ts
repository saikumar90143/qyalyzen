/**
 * Utility helper functions used across the application.
 */

/** Combines class names, filtering falsy values */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

/** Formats the current year dynamically, safe for SSR prerendering */
export function getCurrentYear(): number {
  if (typeof window !== "undefined") {
    return new Date().getFullYear();
  }
  return 2025;
}

/** Truncates text to a max length with ellipsis */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength - 3) + "...";
}

/** Simple rate-limit helper — tracks IP submissions in memory (dev only).
 *  For production, replace with Redis/Upstash-backed implementation.
 */
const submissionMap = new Map<string, { count: number; resetAt: number }>();
const WINDOW_MS = 60 * 60 * 1000; // 1 hour
const MAX_SUBMISSIONS = 5;

export function checkRateLimit(ip: string): {
  allowed: boolean;
  remaining: number;
} {
  const now = Date.now();
  const entry = submissionMap.get(ip);

  if (!entry || now > entry.resetAt) {
    submissionMap.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return { allowed: true, remaining: MAX_SUBMISSIONS - 1 };
  }

  if (entry.count >= MAX_SUBMISSIONS) {
    return { allowed: false, remaining: 0 };
  }

  entry.count += 1;
  return { allowed: true, remaining: MAX_SUBMISSIONS - entry.count };
}

/** Sanitises string input for safe logging (strips line breaks etc.) */
export function sanitizeForLog(value: string): string {
  return value.replace(/[\r\n\t]/g, " ").slice(0, 200);
}
