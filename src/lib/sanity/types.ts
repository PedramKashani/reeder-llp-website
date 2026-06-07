import type { Professional, ProfessionalLink } from "@/types/professional";

export type SanityProfessional = {
  slug?: string;
  name?: string;
  legalName?: string;
  title?: string;
  officePhone?: string;
  directDial?: string;
  email?: string;
  photo?: string;
  photoSmall?: string;
  photoLarge?: string;
  badgeImages?: string[];
  links?: ProfessionalLink[];
  relatedPracticeSlugs?: string[];
  sections?: Professional["sections"];
};
