import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { practiceAreas } from "@/data/practiceAreas";

import { ProfileHero } from "@/components/profiles/ProfileHero";
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

  return {
    title: `${profile.name} | Reeder McCreary, LLP`,
    description: [profile.title, firstSentence].filter(Boolean).join(" — "),
    alternates: {
      canonical: `/professionals/${slug}`,
    },
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
