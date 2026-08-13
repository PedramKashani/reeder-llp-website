import type { Professional } from "@/types/professional";
import { FIRM_NAME, SITE_URL } from "@/data/firm";
import {
  getProfessionalPhotoAlt,
  getProfessionalPhotoUrl,
} from "@/lib/professionalPhoto";
import { resolveOgImageUrl } from "@/lib/metadata";

export function ProfessionalPersonJsonLd({
  profile,
}: {
  profile: Professional;
}) {
  const canonicalUrl = new URL(
    `/professionals/${profile.slug}`,
    SITE_URL,
  ).toString();
  const photo = getProfessionalPhotoUrl(profile);
  const imageUrl = photo ? resolveOgImageUrl(photo) : undefined;
  const sameAs = profile.links
    ?.map((link) => link.href.trim())
    .filter((href) => href.startsWith("https://") || href.startsWith("http://"));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${canonicalUrl}#person`,
    name: profile.name,
    ...(profile.legalName ? { alternateName: profile.legalName } : {}),
    jobTitle: profile.title,
    url: canonicalUrl,
    mainEntityOfPage: canonicalUrl,
    ...(imageUrl
      ? {
          image: {
            "@type": "ImageObject",
            url: imageUrl,
            contentUrl: imageUrl,
            name: profile.name,
            caption: getProfessionalPhotoAlt(profile),
          },
        }
      : {}),
    ...(sameAs?.length ? { sameAs } : {}),
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
