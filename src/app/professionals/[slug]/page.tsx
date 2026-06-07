import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { practiceAreas } from "@/data/practiceAreas";
import { buildPageSocialMetadata } from "@/lib/metadata";
import { getProfessionalPhotoUrl } from "@/lib/professionalPhoto";

import { ProfileHero } from "@/components/profiles/ProfileHero";
import { ProfessionalPersonJsonLd } from "@/components/profiles/ProfessionalPersonJsonLd";
import { BioShowMore } from "@/components/profiles/BioShowMore";
import { CredentialsAccordion } from "@/components/profiles/CredentialsAccordion";
import { MeetOthers } from "@/components/profiles/MeetOthers";
import { CTABand } from "@/components/CTABand";
import { RelatedPracticeAreas } from "@/components/profiles/RelatedPracticeAreas";
import { getProfessionalBySlug, getProfessionals } from "@/lib/sanity/professionals";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const profile = await getProfessionalBySlug(slug);
  if (!profile) return {};

  const firstBioParagraph = profile.sections.background?.[0]?.trim() ?? "";
  const firstSentenceMatch = firstBioParagraph.match(/[^.!?]+[.!?]/);
  const firstSentence = firstSentenceMatch
    ? firstSentenceMatch[0].trim()
    : firstBioParagraph;

  const title = `${profile.name} | ${profile.title}`;
  const description =
    [profile.title, firstSentence].filter(Boolean).join(" — ") ||
    `${profile.name} is ${profile.title} at Reeder LLP.`;
  const ogImage = getProfessionalPhotoUrl(profile) || undefined;
  const social = buildPageSocialMetadata({
    title,
    description,
    path: `/professionals/${slug}`,
    image: ogImage,
  });

  return {
    title,
    description,
    alternates: {
      canonical: `/professionals/${slug}`,
    },
    ...social,
  };
}

export async function generateStaticParams() {
  const professionals = await getProfessionals();
  return professionals.map((p) => ({ slug: p.slug }));
}

export default async function ProfilePage({ params }: Props) {
  const { slug } = await params;

  const profile = await getProfessionalBySlug(slug);
  if (!profile) return notFound();

  const professionals = await getProfessionals();
  const others = professionals.filter((p) => p.slug !== profile.slug);

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <ProfessionalPersonJsonLd profile={profile} />
      <ProfileHero profile={profile} />

      {/* The “scroll target” (the arrow scrolls here) */}
      <div id="profile-content" />

      <BioShowMore profile={profile} />

      <CredentialsAccordion profile={profile} />

      <RelatedPracticeAreas profile={profile} practiceAreas={practiceAreas} />

      <MeetOthers current={profile} others={others} />

      <CTABand
        variant="dark"
        title="Need Legal Advice?"
        buttonLabel="Contact Us"
        buttonHref="/contact"
      />
    </main>
  );
}
