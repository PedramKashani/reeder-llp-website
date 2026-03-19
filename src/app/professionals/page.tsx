import { TeamHero } from "@/component/team/TeamHero";
import { SectionHeading } from "@/component/SectionHeading";
import { MembersGrid } from "@/component/team/MembersGrid";
import { TeamCTA } from "@/component/team/TeamCTA";

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

      <MembersGrid />

      <TeamCTA
        title="Need Counsel?"
        buttonLabel="Request a Consultation"
        buttonHref="/contact"
      />
    </main>
  );
}
