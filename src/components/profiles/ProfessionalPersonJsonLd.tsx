import type { Professional } from "@/types/professional";
import { FIRM_NAME, SITE_URL } from "@/data/firm";
import { getProfessionalPhotoUrl } from "@/lib/professionalPhoto";
import { resolveOgImageUrl } from "@/lib/metadata";

export function ProfessionalPersonJsonLd({
  profile,
}: {
  profile: Professional;
}) {
  const photo = getProfessionalPhotoUrl(profile);
  const imageUrl = photo ? resolveOgImageUrl(photo) : undefined;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    ...(profile.legalName ? { alternateName: profile.legalName } : {}),
    jobTitle: profile.title,
    url: new URL(`/professionals/${profile.slug}`, SITE_URL).toString(),
    ...(imageUrl ? { image: imageUrl } : {}),
    worksFor: {
      "@type": "Organization",
      name: FIRM_NAME,
      url: SITE_URL,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
