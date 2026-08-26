// Prefixes local asset paths (images, etc.) with the configured basePath so they
// resolve correctly when the site is hosted under a subdirectory (GitHub Pages).
// next/link and _next assets are prefixed automatically by Next.js, but raw
// <img src="/..."> strings are NOT, so use asset() for those.
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function asset(path: string): string {
  if (/^https?:\/\//.test(path)) return path;
  return `${BASE_PATH}${path.startsWith("/") ? path : `/${path}`}`;
}
