import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { practiceAreas } from "@/data/practiceAreas";
import { buildPageSocialMetadata } from "@/lib/metadata";
import { CTABand } from "@/components/CTABand";
import { PracticeHeroImage } from "@/components/practice/PracticeHeroImage";
import { SECTION_PAD_MAJOR, STACK_SECTION } from "@/lib/luxuryLayout";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = practiceAreas.find((a) => a.slug === slug);
  if (!area) {
    return {};
  }
  const title = area.metaTitle ?? `${area.title} | Reeder LLP`;
  const description =
    area.metaDescription ?? area.excerpt ?? `${area.title} at Reeder LLP.`;
  const social = buildPageSocialMetadata({
    title,
    description,
    path: `/practice-areas/${slug}`,
    image: area.heroImage,
  });

  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: `/practice-areas/${slug}`,
    },
    ...social,
  };
}

export function generateStaticParams() {
  return practiceAreas.map((a) => ({ slug: a.slug }));
}

function ArrowDownIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-white"
    >
      <path
        d="M12 5v14M19 12l-7 7-7-7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default async function PracticeAreaPage({ params }: Props) {
  const { slug } = await params;
  const area = practiceAreas.find((a) => a.slug === slug);
  if (!area) return notFound();

  const contentBlocks =
    area.sections && area.sections.length > 0
      ? area.sections.map((s) => ({
          heading: s.heading,
          paragraphs: s.paragraphs,
        }))
      : area.paragraphs?.length
        ? [{ heading: undefined, paragraphs: area.paragraphs }]
        : [];

  return (
    <div className="main min-h-screen bg-neutral-950 text-white">
      {/* Hero - full height */}
      <div className="hero relative min-h-[56vh] w-full overflow-hidden md:min-h-[min(88svh,48rem)] lg:min-h-[min(92svh,52rem)] xl:min-h-[100svh]">
        <PracticeHeroImage src={area.heroImage} alt={area.heroImageAlt ?? ""} />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 mx-auto flex min-h-[56vh] max-w-6xl items-end px-6 md:min-h-[min(88svh,48rem)] lg:min-h-[min(92svh,52rem)] xl:min-h-[100svh]">
          <div className="hero__content w-full max-w-4xl pb-16 md:pb-20">
            <div className="hero__subtitle">
              <h6 className="text-[11px] font-medium uppercase tracking-[0.24em] text-white/85 md:text-[11px]">
                {area.heroSubtitle ?? "Practice Areas"}
              </h6>
            </div>
            <div className="hero__title mt-3 md:mt-4">
              <h1 className="text-[clamp(2.15rem,4vw+1rem,3.25rem)] font-semibold tracking-tight text-white md:text-[clamp(2.35rem,3.2vw+1.1rem,3.65rem)] lg:text-[clamp(2.5rem,2.6vw+1.2rem,4rem)] xl:text-[clamp(2.65rem,2.2vw+1.25rem,4.5rem)]">
                {area.title}
              </h1>
            </div>
          </div>
        </div>

        <a
          href="#content"
          className="btn-scroll-to-next-section absolute bottom-8 left-1/2 z-10 -translate-x-1/2 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/30 backdrop-blur-sm transition hover:bg-black/50"
          aria-label="Scroll to content"
        >
          <ArrowDownIcon />
        </a>
      </div>

      {/* Content section */}
      <section
        id="content"
        className={`section-base border-b border-white/10 bg-neutral-950 ${SECTION_PAD_MAJOR}`}
      >
        <div className="mx-auto w-full px-8 md:px-16 lg:px-24">
          <div
            className={`section__inner wysiwyg mx-auto w-full max-w-[50rem] lg:max-w-[54rem] ${STACK_SECTION} text-white`}
          >
            {contentBlocks.map((block, i) => (
              <div key={i}>
                {block.heading && (
                  <h2 className="mb-5 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/55 md:mb-6 md:text-xs">
                    {block.heading}
                  </h2>
                )}
                <div className="space-y-6 md:space-y-7">
                  {block.paragraphs.map((p, j) => (
                    <p
                      key={j}
                      className="text-lg leading-[1.82] text-white/[0.82] md:text-xl md:leading-[1.8]"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        variant="dark"
        title="Need a Lawyer?"
        buttonLabel="Request Consultation"
        buttonHref="/contact"
      />
    </div>
  );
}
