import type { Professional } from "@/types/professional";
import {
  MEET_OTHERS_HEADING_ID,
  MeetOthersClient,
  type MeetOthersCard,
} from "@/components/profiles/MeetOthersClient";
import { getProfessionalCardPhotoUrl } from "@/lib/professionalPhoto";

export function MeetOthers({
  others,
}: {
  current: Professional;
  others: Professional[];
}) {
  if (!others.length) return null;

  const cards: MeetOthersCard[] = others.map((p) => ({
    slug: p.slug,
    name: p.name,
    title: p.title,
    photoUrl: getProfessionalCardPhotoUrl(p),
  }));

  return (
    <section
      className="border-b border-white/10 bg-neutral-950"
      aria-labelledby={MEET_OTHERS_HEADING_ID}
    >
      <div className="mx-auto w-full max-w-7xl px-8 py-16 md:px-12 md:py-20 lg:px-16">
        <MeetOthersClient others={cards} />
      </div>
    </section>
  );
}
