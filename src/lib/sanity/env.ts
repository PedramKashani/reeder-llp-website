export const SANITY_PROJECT_ID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID?.trim() ?? "";
export const SANITY_DATASET = process.env.NEXT_PUBLIC_SANITY_DATASET?.trim() ?? "";

export const SANITY_API_VERSION =
  process.env.SANITY_API_VERSION?.trim() || "2025-01-01";

export function isSanityConfigured(): boolean {
  return SANITY_PROJECT_ID.length > 0 && SANITY_DATASET.length > 0;
}
