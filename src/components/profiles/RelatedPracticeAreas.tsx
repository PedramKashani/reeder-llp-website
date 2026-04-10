import type { PracticeArea } from "@/types/practiceArea";
import type { Professional } from "@/types/professional";
import {
  PROFILE_PRACTICE_AREAS_HEADING_ID,
  ProfilePracticeAreasCarousel,
} from "@/components/profiles/ProfilePracticeAreasCarousel";

export function RelatedPracticeAreas({
  profile,
  practiceAreas,
}: {
  profile: Professional;
  practiceAreas: PracticeArea[];
}) {
  const slugs = profile.relatedPracticeSlugs;
  if (!slugs?.length) return null;

  const areas = slugs
    .map((s) => practiceAreas.find((a) => a.slug === s))
    .filter((a): a is PracticeArea => Boolean(a));

  if (!areas.length) return null;

  return (
    <section
      className="border-b border-white/10 bg-neutral-950"
      aria-labelledby={PROFILE_PRACTICE_AREAS_HEADING_ID}
    >
      <div className="mx-auto w-full max-w-7xl px-8 py-12 md:px-12 md:py-16 lg:px-16">
        <ProfilePracticeAreasCarousel areas={areas} />
      </div>
    </section>
  );
}
