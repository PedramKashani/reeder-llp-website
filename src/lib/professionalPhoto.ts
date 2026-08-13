import type { Professional } from "@/types/professional";
import { getResizedSanityImageUrl } from "@/lib/sanity/imageUrl";

/** Canonical profile photo — prefer large headshot used for hero and social previews. */
export function getProfessionalPhotoUrl(profile: Professional): string {
  return profile.photoLarge || profile.photoSmall || profile.photo || "";
}

/** Resized listing/card URL so crawlers do not see full-resolution originals. */
export function getProfessionalCardPhotoUrl(profile: Professional): string {
  const url = getProfessionalPhotoUrl(profile);
  return url ? getResizedSanityImageUrl(url) : "";
}

export function getProfessionalPhotoAlt(
  profile: Pick<Professional, "name" | "title">,
): string {
  return profile.title ? `${profile.name}, ${profile.title}` : profile.name;
}
