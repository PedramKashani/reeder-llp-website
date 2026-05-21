import type { Metadata } from "next";
import { TeamHero } from "@/components/team/TeamHero";
import { SectionHeading } from "@/components/SectionHeading";
import { MembersGrid } from "@/components/team/MembersGrid";
import { CTABand } from "@/components/CTABand";
import { getProfessionals } from "@/lib/sanity/professionals";

export const metadata: Metadata = {
  title: "Attorneys & Professionals | Reeder LLP",
  description:
    "Meet the attorneys and professionals of Reeder LLP—experienced trial lawyers and counsel serving clients in litigation, transactions, and ongoing business matters.",
  alternates: {
    canonical: "/professionals",
  },
};

export default async function ProfessionalsPage() {
  const professionals = await getProfessionals();

  return (
    <main>
      <TeamHero
        backgroundImageUrl="/images/team/team-in-office-2-photoshopped.webp"
        subtitle="Los Angeles"
        title="Professionals"
        scrollToId="team"
      />

      <SectionHeading id="team" kicker="Meet our" title="Legal Team" />

      <MembersGrid professionals={professionals} />

      <CTABand
        variant="light"
        title="Need Counsel?"
        subtitle="Get in touch with our team to discuss your matter."
        buttonLabel="Request a Consultation"
        buttonHref="/contact"
      />
    </main>
  );
}
