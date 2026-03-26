import type { Metadata } from "next";
import { professionals } from "@/data/professionals";
import { TeamHero } from "@/src/components/team/TeamHero";
import { SectionHeading } from "@/src/components/SectionHeading";
import { MembersGrid } from "@/src/components/team/MembersGrid";
import { TeamCTA } from "@/src/components/team/TeamCTA";

export const metadata: Metadata = {
  title: "Attorneys & Professionals | Reeder McCreary, LLP",
  description:
    "Meet the attorneys and professionals of Reeder McCreary, LLP—experienced trial lawyers and counsel serving clients in litigation, transactions, and ongoing business matters.",
  alternates: {
    canonical: "/professionals",
  },
};

export default function ProfessionalsPage() {
  return (
    <main>
      <TeamHero
        backgroundImageUrl="/images/team/team-in-office-2.webp"
        subtitle="Los Angeles"
        title="Professionals"
        scrollToId="team"
      />

      <SectionHeading id="team" kicker="Meet our" title="Legal Team" />

      <MembersGrid professionals={professionals} />

      <TeamCTA
        title="Need Counsel?"
        buttonLabel="Request a Consultation"
        buttonHref="/contact"
      />
    </main>
  );
}
