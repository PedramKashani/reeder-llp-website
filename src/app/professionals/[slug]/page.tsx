import { notFound } from "next/navigation";
import { professionals } from "@/data/professionals";

import { ProfileHero } from "@/component/profiles/ProfileHero";
import { BioShowMore } from "@/component/profiles/BioShowMore";
import { CredentialsAccordion } from "@/component/profiles/CredentialsAccordion";
import { MeetOthers } from "@/component/profiles/MeetOthers";
import { ProfileCTA } from "@/component/profiles/ProfileCTA";

type Props = {
  params: Promise<{ slug: string }>;
};

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

      <MeetOthers current={profile} others={others} />

      <ProfileCTA />
    </main>
  );
}
