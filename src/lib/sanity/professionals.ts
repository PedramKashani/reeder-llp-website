import type { Professional, ProfessionalLink } from "@/types/professional";
import { professionals as professionalsFallback } from "@/data/professionals";
import { getSanityClient } from "@/lib/sanity/client";
import type { SanityProfessional } from "@/lib/sanity/types";

export const PROFESSIONALS_QUERY = /* groq */ `
  *[_type == "professional" && defined(slug.current)] | order(coalesce(order, 9999) asc, name asc) {
    "slug": slug.current,
    name,
    legalName,
    title,
    order,
    officePhone,
    directDial,
    email,
    "photo": photo.asset->url,
    "photoSmall": photo.asset->url,
    "photoLarge": photo.asset->url,
    "badgeImages": badgeImages[].asset->url,
    links,
    relatedPracticeSlugs,
    sections
  }
`;

function sanitizeStringArray(value: unknown): string[] | undefined {
  if (!Array.isArray(value)) return undefined;
  const out = value.filter((item): item is string => typeof item === "string");
  return out.length ? out : undefined;
}

function mapSanityProfessional(input: SanityProfessional): Professional | null {
  if (!input.slug || !input.name || !input.title) return null;

  const photoUrl = input.photo ?? input.photoLarge ?? input.photoSmall;
  const badgeImages = sanitizeStringArray(input.badgeImages);

  return {
    slug: input.slug,
    name: input.name,
    legalName: input.legalName,
    title: input.title,
    order: input.order,
    officePhone: input.officePhone,
    directDial: input.directDial,
    email: input.email,
    ...(photoUrl
      ? { photo: photoUrl, photoSmall: photoUrl, photoLarge: photoUrl }
      : {}),
    ...(badgeImages ? { badgeImages } : {}),
    links: Array.isArray(input.links)
      ? input.links.filter(
          (link): link is ProfessionalLink =>
            typeof link?.label === "string" && typeof link?.href === "string",
        )
      : undefined,
    relatedPracticeSlugs: sanitizeStringArray(input.relatedPracticeSlugs),
    sections: {
      background: sanitizeStringArray(input.sections?.background),
      winningResults: sanitizeStringArray(input.sections?.winningResults),
      winningTrialLitigation: sanitizeStringArray(
        input.sections?.winningTrialLitigation,
      ),
      winningTransaction: sanitizeStringArray(input.sections?.winningTransaction),
      education: sanitizeStringArray(input.sections?.education),
      associations: sanitizeStringArray(input.sections?.associations),
      admissions: sanitizeStringArray(input.sections?.admissions),
      publications: sanitizeStringArray(input.sections?.publications),
      awards: sanitizeStringArray(input.sections?.awards),
      speakingEngagements: sanitizeStringArray(input.sections?.speakingEngagements),
    },
  };
}

async function fetchSanityProfessionals(): Promise<Professional[] | null> {
  const client = getSanityClient();
  if (!client) return null;

  try {
    const rows = await client.fetch<SanityProfessional[]>(
      PROFESSIONALS_QUERY,
      {},
      {
        next: { revalidate: 300, tags: ["professionals"] },
      },
    );

    return rows
      .map(mapSanityProfessional)
      .filter((item): item is Professional => item !== null);
  } catch {
    return null;
  }
}

const EXCLUDED_PROFESSIONAL_SLUGS = new Set([
  "duncan-j-mccreary",
  "john-meadows",
]);

function withoutExcluded(profiles: Professional[]): Professional[] {
  return profiles.filter((p) => !EXCLUDED_PROFESSIONAL_SLUGS.has(p.slug));
}

function sortProfessionals(profiles: Professional[]): Professional[] {
  return [...profiles].sort(
    (a, b) =>
      (a.order ?? 9999) - (b.order ?? 9999) || a.name.localeCompare(b.name),
  );
}

function assignFallbackOrder(profiles: Professional[]): Professional[] {
  return sortProfessionals(
    profiles.map((profile, index) => ({
      ...profile,
      order: profile.order ?? index,
    })),
  );
}

const SECTION_KEYS = [
  "background",
  "winningTrialLitigation",
  "winningTransaction",
  "winningResults",
  "education",
  "associations",
  "admissions",
  "publications",
  "awards",
  "speakingEngagements",
] as const satisfies readonly (keyof Professional["sections"])[];

function hasSectionContent(
  value: string[] | undefined,
): value is string[] {
  return Array.isArray(value) && value.length > 0;
}

function mergeSections(
  fallback: Professional["sections"],
  cms: Professional["sections"],
): Professional["sections"] {
  const merged: Professional["sections"] = { ...fallback };

  for (const key of SECTION_KEYS) {
    if (hasSectionContent(cms[key])) {
      merged[key] = cms[key];
    }
  }

  return merged;
}

function mergeProfessionalsBySlug(
  fallback: Professional[],
  fromSanity: Professional[],
): Professional[] {
  const sanityBySlug = new Map(fromSanity.map((p) => [p.slug, p]));
  const merged: Professional[] = [];

  fallback.forEach((fb, index) => {
    const cms = sanityBySlug.get(fb.slug);
    if (cms) sanityBySlug.delete(fb.slug);
    merged.push(
      cms
        ? {
            ...fb,
            ...cms,
            order: cms.order ?? fb.order ?? index,
            sections: mergeSections(fb.sections, cms.sections),
          }
        : { ...fb, order: fb.order ?? index },
    );
  });

  for (const extra of sanityBySlug.values()) {
    merged.push(extra);
  }

  return sortProfessionals(merged);
}

export async function getProfessionals(): Promise<Professional[]> {
  const fromSanity = await fetchSanityProfessionals();
  if (fromSanity === null) {
    return withoutExcluded(assignFallbackOrder(professionalsFallback));
  }
  return withoutExcluded(
    mergeProfessionalsBySlug(professionalsFallback, fromSanity),
  );
}

export async function getProfessionalBySlug(
  slug: string,
): Promise<Professional | undefined> {
  const all = await getProfessionals();
  return all.find((profile) => profile.slug === slug);
}
