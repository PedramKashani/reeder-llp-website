import type { Professional } from "@/types/professional";

/** Display name with optional legal name for meta descriptions (not page titles). */
export function professionalSeoName(profile: Professional): string {
  return profile.legalName
    ? `${profile.name} (${profile.legalName})`
    : profile.name;
}

export function buildProfessionalDescription(
  profile: Professional,
  firstSentence: string,
): string {
  const seoName = professionalSeoName(profile);
  const core = [profile.title, firstSentence].filter(Boolean).join(" — ");

  if (core) {
    return `${seoName} — ${core}`;
  }

  return `${seoName} is ${profile.title} at Reeder LLP.`;
}
