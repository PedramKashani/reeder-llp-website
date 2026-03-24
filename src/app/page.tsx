import type { CSSProperties } from "react";
import { HeroRotatingWords } from "@/component/HeroRotatingWords";
import { SectionHeading } from "@/component/SectionHeading";
import { ImageContentSection } from "@/component/ImageContentSection";
import { CTASection } from "@/component/CTASection";

export default function HomePage() {
  const homeAnimStyle = {
    ["--sectionFadeUpDuration" as unknown as keyof CSSProperties]: "1.1s",
    ["--sectionContentRevealDuration" as unknown as keyof CSSProperties]:
      "1.3s",
    ["--sectionPictureInDuration" as unknown as keyof CSSProperties]: "2s",
    ["--sectionTextInDuration" as unknown as keyof CSSProperties]: "2s",
  } as unknown as CSSProperties;

  return (
    <main className="homepage-no-scroll-effects" style={homeAnimStyle}>
      <HeroRotatingWords
        // Use a Reeder image if you want; keeping placeholder for now
        backgroundImageUrl="/images/team/team-outdoor.webp"
        kicker="We were born to be"
        words={["Litigators", "Deal Makers", "Trial Lawyers"]}
        scrollToId="welcome"
      />

      <div className="relative z-20 flex flex-col gap-16 bg-[#0a0a0a] pb-16 md:gap-24 md:pb-20 lg:gap-28 lg:pb-24">
        <div className="snap-section flex min-h-screen flex-col justify-center">
          <SectionHeading
            id="welcome"
            kicker="Welcome to"
            title="Reeder McCreary, LLP"
            center
          />
        </div>

        <div className="homepage-practice-row">
          <ImageContentSection
            title="Litigation"
            body="Successful litigation requires focus, strategy, direction, and knowledge. With a wealth of legal knowledge, tight team, and a unique litigation strategy, we charge hard, don’t pull punches, and are goal oriented. We don’t need to turn over every stone because we know what we are doing and what it takes to succeed. The results speak for themselves."
            imageUrl="/images/chris-duncan/chris-duncan-1.webp"
            ctaLabel="Learn More"
            ctaHref="/practice-areas/trials-commercial-litigation"
          />
        </div>

        <div className="homepage-practice-row">
          <ImageContentSection
            reverse
            title="Corporate"
            body="We make deals – we don’t break them. We solve problems – we don’t create them. From company sales and real estate transactions, to regulatory, corporate, and intellectual property compliance, to consulting on a business/legal issue, we are your go-to in-house counsel."
            imageUrl="/images/chris/chris-reeder-Corporate.webp"
            ctaLabel="Learn More"
            ctaHref="/about"
          />
        </div>

        <div className="homepage-practice-row">
          <ImageContentSection
            title="Trials"
            body="At trial, winning is everything and losing is not an option. Whether it is a bet-the-company or any other case, we try every case like it is our own. With our unique trial preparation method, creativity, and human touch, we deliver."
            imageUrl="/images/duncan/Ducan.webp"
            ctaLabel="Learn More"
            ctaHref="/practice-areas/trials-commercial-litigation"
          />
        </div>

        <div className="snap-section flex flex-col">
          <CTASection
            title="Need Counsel?"
            buttonLabel="Request a Consultation"
            buttonHref="/contact"
          />
        </div>
      </div>
    </main>
  );
}
