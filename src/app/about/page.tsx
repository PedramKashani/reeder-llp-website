import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { FIRM_NAME } from "@/data/firm";
import { KICKER_LUXURY, SECTION_PAD_MAJOR } from "@/lib/luxuryLayout";

const aboutBody =
  "text-lg leading-[1.82] text-white/[0.82] md:text-xl md:leading-[1.78]";
const aboutBlockGap = "space-y-4 md:space-y-5";
const aboutRhythm = "space-y-14 md:space-y-16";

export const metadata: Metadata = {
  title: `About the Firm | ${FIRM_NAME}`,
  description: `Learn about ${FIRM_NAME}—a Los Angeles business litigation firm led by trial lawyer Chris Reeder, focused on strategic, results-driven representation for companies, entrepreneurs, and individuals.`,
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <PageHero
        imageSrc="/images/team/team-in-office-1.webp"
        subtitle="About the Firm"
        title={FIRM_NAME}
      />

      <section
        className={`border-b border-white/10 bg-neutral-950 ${SECTION_PAD_MAJOR}`}
      >
        <div className="mx-auto w-full max-w-7xl px-8 md:px-12 lg:px-16">
          <div
            className={`mx-auto w-full max-w-[50rem] lg:max-w-[54rem] ${aboutRhythm} text-center md:text-left`}
          >
            <div className={aboutBlockGap}>
              <h2 className={`${KICKER_LUXURY} text-balance`}>Overview</h2>
              <div className={`${aboutBlockGap} pt-1`}>
                <p className={`${aboutBody} text-balance`}>
                  With Chris Reeder serving as lead trial lawyer, {FIRM_NAME} is
                  a full-service business litigation firm dedicated to
                  delivering strategic, results-driven representation.
                </p>
                <p className={`${aboutBody} text-balance`}>
                  The firm’s professionals are focused, disciplined, and
                  client-oriented, utilizing a highly collaborative, team-based
                  approach to litigation, trial preparation, and tailored legal
                  strategy. {FIRM_NAME} represents a broad range of clients,
                  from entrepreneurs and emerging businesses to large
                  international corporations across numerous industries.
                </p>
              </div>
            </div>

            <div
              className={`${aboutBlockGap} border-t border-white/[0.06] pt-12 md:pt-14`}
            >
              <h2 className={`${KICKER_LUXURY} text-balance`}>Counsel</h2>
              <div className={`${aboutBlockGap} pt-1`}>
                <p className={`${aboutBody} text-balance`}>
                  Chris Reeder also serves as general counsel to several
                  companies and high-net-worth individuals, advising clients on
                  a wide range of business and legal matters. His experience
                  includes mergers and acquisitions, dispositions, financing,
                  government investigations, franchising matters, and real
                  estate transactions.
                </p>
                <p className={`${aboutBody} text-balance`}>
                  {FIRM_NAME} also provides day-to-day general counsel services,
                  including trademark registration, corporate compliance, real
                  estate tax assessments, franchise transactions, and contractor
                  licensing matters.
                </p>
              </div>
            </div>

            <div
              className={`${aboutBlockGap} border-t border-white/[0.06] pt-12 md:pt-14`}
            >
              <h2 className={`${KICKER_LUXURY} text-balance`}>Commitment</h2>
              <p
                className={`pt-1 text-lg font-medium leading-[1.82] text-white md:text-xl md:leading-[1.78] text-balance`}
              >
                At {FIRM_NAME}, the goal is simple: to win for the client. The
                firm’s results speak for themselves.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-5 border-t border-white/10 pt-14 md:justify-start md:pt-16">
              <Link
                href="/professionals"
                className="inline-flex items-center justify-center rounded-full bg-white px-10 py-4 text-base font-semibold text-neutral-900 transition hover:bg-white/90"
              >
                Meet Our Team
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/40 px-10 py-4 text-base font-semibold text-white transition hover:bg-white/10"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
