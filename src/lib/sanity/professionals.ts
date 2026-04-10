import type { Professional, ProfessionalLink } from "@/types/professional";
import { professionals as professionalsFallback } from "@/data/professionals";
import { getSanityClient } from "@/lib/sanity/client";
import type { SanityProfessional } from "@/lib/sanity/types";

export const PROFESSIONALS_QUERY = /* groq */ `
  *[_type == "professional" && defined(slug.current)] | order(name asc) {
    "slug": slug.current,
    name,
    title,
    officePhone,
    directDial,
    email,
    photo,
    photoSmall,
    photoLarge,
    badgeImages,
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

  return {
    slug: input.slug,
    name: input.name,
    title: input.title,
    officePhone: input.officePhone,
    directDial: input.directDial,
    email: input.email,
    photo: input.photo,
    photoSmall: input.photoSmall,
    photoLarge: input.photoLarge,
    badgeImages: sanitizeStringArray(input.badgeImages),
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

    const mapped = rows
      .map(mapSanityProfessional)
      .filter((item): item is Professional => item !== null);

    return mapped.length ? mapped : null;
  } catch {
    return null;
  }
}

export async function getProfessionals(): Promise<Professional[]> {
  const fromSanity = await fetchSanityProfessionals();
  return fromSanity ?? professionalsFallback;
}

export async function getProfessionalBySlug(
  slug: string,
): Promise<Professional | undefined> {
  const all = await getProfessionals();
  return all.find((profile) => profile.slug === slug);
}
