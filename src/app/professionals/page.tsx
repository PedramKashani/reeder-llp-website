import { TeamHero } from "@/component/team/TeamHero";
import { SectionHeading } from "@/component/SectionHeading";
import { MembersGrid } from "@/component/team/MembersGrid";
import { TeamCTA } from "@/component/team/TeamCTA";

export default function ProfessionalsPage() {
  return (
    <main>
      <TeamHero
        backgroundImageUrl="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=2400&q=80"
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
