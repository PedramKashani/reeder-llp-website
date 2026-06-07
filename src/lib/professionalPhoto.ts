import type { Professional } from "@/types/professional";

/** Canonical profile photo — prefer large headshot used for hero and social previews. */
export function getProfessionalPhotoUrl(profile: Professional): string {
  return profile.photoLarge || profile.photoSmall || profile.photo || "";
}
