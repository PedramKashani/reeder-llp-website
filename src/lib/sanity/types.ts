import type { Professional, ProfessionalLink } from "@/types/professional";

export type SanityProfessional = {
  slug?: string;
  name?: string;
  legalName?: string;
  title?: string;
  order?: number;
  officePhone?: string;
  directDial?: string;
  email?: string;
  /** Projected CDN URLs from GROQ (`photo.asset->url`). */
  photo?: string;
  photoSmall?: string;
  photoLarge?: string;
  /** Projected CDN URLs from GROQ (`badgeImages[].asset->url`). */
  badgeImages?: string[];
  links?: ProfessionalLink[];
  relatedPracticeSlugs?: string[];
  sections?: Professional["sections"];
};
