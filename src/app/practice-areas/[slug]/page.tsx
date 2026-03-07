import { notFound } from "next/navigation";
import Link from "next/link";
import { practiceAreas } from "@/data/practiceAreas";

type Props = { params: Promise<{ slug: string }> };

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
    area.sections?.map((s) => ({
      heading: s.heading,
      paragraphs: s.paragraphs,
    })) ??
    (area.paragraphs?.length
      ? [{ heading: undefined, paragraphs: area.paragraphs }]
      : []);

  return (
    <div className="main min-h-screen bg-neutral-950 text-white">
      {/* Hero - full height */}
      <div className="hero relative min-h-[100svh] w-full overflow-hidden">
        <img
          src={area.heroImage}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
          sizes="100vw"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl items-end px-6">
          <div className="hero__content w-full max-w-4xl pb-20 md:pb-24">
            <div className="hero__subtitle">
              <h6 className="text-sm font-medium uppercase tracking-[0.28em] text-white/90 md:text-base">
                {area.heroSubtitle ?? "Practice Areas"}
              </h6>
            </div>
            <div className="hero__title mt-4">
              <h1 className="text-5xl font-semibold tracking-tight md:text-6xl lg:text-7xl xl:text-8xl">
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
        className="section-base border-b border-white/10 bg-neutral-950 py-20 md:py-28"
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="section__inner wysiwyg max-w-4xl space-y-10 text-lg leading-[1.75] text-white/90 md:text-xl md:leading-[1.8]">
            {contentBlocks.map((block, i) => (
              <div key={i}>
                {block.heading && (
                  <h6 className="mb-5 text-base font-semibold uppercase tracking-[0.18em] text-white md:text-lg">
                    {block.heading}
                  </h6>
                )}
                <div className="space-y-6">
                  {block.paragraphs.map((p, j) => (
                    <p
                      key={j}
                      className="text-[1.0625rem] leading-[1.8] md:text-[1.125rem] md:leading-[1.85]"
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

      {/* CTA section */}
      <section className="section-cta border-t border-white/10 bg-neutral-950 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="section__inner flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
            <h4 className="text-2xl font-semibold tracking-tight text-white md:text-3xl lg:text-4xl">
              Need a Lawyer?
            </h4>
            <div className="section__actions">
              <Link
                href="/contact"
                className="btn inline-flex items-center justify-center rounded-full bg-white px-10 py-4 text-base font-semibold uppercase tracking-[0.2em] text-neutral-900 transition hover:bg-white/90"
              >
                Request Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
