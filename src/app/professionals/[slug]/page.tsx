import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { professionals } from "@/data/professionals";
import { practiceAreas } from "@/data/practiceAreas";

import { ProfileHero } from "@/component/profiles/ProfileHero";
import { BioShowMore } from "@/component/profiles/BioShowMore";
import { CredentialsAccordion } from "@/component/profiles/CredentialsAccordion";
import { MeetOthers } from "@/component/profiles/MeetOthers";
import { ProfileCTA } from "@/component/profiles/ProfileCTA";
import { RelatedPracticeAreas } from "@/component/profiles/RelatedPracticeAreas";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const profile = professionals.find((p) => p.slug === slug);
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

export default async function ProfilePage({ params }: Props) {
  const { slug } = await params;

  const profile = professionals.find((p) => p.slug === slug);
  if (!profile) return notFound();

  const others = professionals.filter((p) => p.slug !== profile.slug);

  return (
    <main className="min-h-screen bg-white text-black">
      <ProfileHero profile={profile} />

      {/* The “scroll target” (the arrow scrolls here) */}
      <div id="profile-content" />

      <BioShowMore profile={profile} />

      <CredentialsAccordion profile={profile} />

      <RelatedPracticeAreas profile={profile} practiceAreas={practiceAreas} />

      <MeetOthers current={profile} others={others} />

      <ProfileCTA />
    </main>
  );
}
