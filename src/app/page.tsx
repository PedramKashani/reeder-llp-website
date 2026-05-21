import type { Metadata } from "next";
import { HeroRotatingWords } from "@/components/HeroRotatingWords";
import { HomeWelcomeLogo } from "@/components/home/HomeWelcomeLogo";
import { ImageContentSection } from "@/components/ImageContentSection";
import { CTABand } from "@/components/CTABand";

export const metadata: Metadata = {
  title:
    "Business Litigation, Trials & Corporate Counsel | Reeder LLP",
  description:
    "Los Angeles trial lawyers and strategic business counsel for complex litigation, high-stakes trials, and transactions. Reeder LLP serves companies, investors, and individuals with a focused, results-driven approach.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <main className="homepage-scroll-reveal">
      <HeroRotatingWords
        // Use a Reeder image if you want; keeping placeholder for now
        backgroundImageUrl="/images/team/outdoor_professional_portrait_3_people.webp"
        kicker="We were born to be"
        words={["Litigators", "Deal Makers", "Trial Lawyers"]}
        scrollToId="welcome"
      />

      <div className="relative z-20 flex flex-col gap-0 bg-[#0a0a0a] pb-20 md:pb-24 lg:pb-28">
        <div className="snap-section flex flex-col justify-start md:min-h-[min(100svh,56rem)] md:justify-center">
          <HomeWelcomeLogo id="welcome" />
        </div>

        <div className="homepage-practice-row">
          <ImageContentSection
            title="Litigation"
            body="Successful litigation requires focus, strategy, direction, and knowledge. With a wealth of legal knowledge, tight team, and a unique litigation strategy, we charge hard, don’t pull punches, and are goal oriented. We don’t need to turn over every stone because we know what we are doing and what it takes to succeed. The results speak for themselves."
            imageUrl="/images/chris/chrisOutside.webp"
            alt="Chris Reeder, trial and litigation counsel"
            imageAspect="aspect-[3/4]"
            imageClassName="object-cover object-[center_88%] brightness-[0.9] contrast-[1.04] saturate-[0.85]"
            ctaLabel="Learn More"
            ctaHref="/practice-areas/trials-commercial-litigation"
          />
        </div>

        <div className="homepage-practice-row">
          <ImageContentSection
            withTopRule
            reverse
            title="Corporate"
            body="We make deals – we don’t break them. We solve problems – we don’t create them. From company sales and real estate transactions, to regulatory, corporate, and intellectual property compliance, to consulting on a business/legal issue, we are your go-to in-house counsel."
            imageUrl="/images/chris/chris-reeder-Corporate.webp"
            alt="Chris Reeder, corporate and business counsel"
            ctaLabel="Learn More"
            ctaHref="/practice-areas/corporate"
          />
        </div>

        <div className="homepage-practice-row">
          <ImageContentSection
            withTopRule
            title="Trials"
            body="At trial, winning is everything and losing is not an option. Whether it is a bet-the-company or any other case, we try every case like it is our own. With our unique trial preparation method, creativity, and human touch, we deliver."
            imageUrl="/images/chris/chris-studio-portrait.webp"
            alt="Chris Reeder, trial attorney"
            imageAspect="aspect-[3/4]"
            imageClassName="object-cover object-[center_88%] brightness-[0.9] contrast-[1.04] saturate-[0.85]"
            ctaLabel="Learn More"
            ctaHref="/practice-areas/trials-commercial-litigation"
          />
        </div>

        <div className="snap-section mt-20 flex flex-col md:mt-28 lg:mt-32">
          <CTABand
            variant="animated"
            title="Need Counsel?"
            buttonLabel="Request a Consultation"
            buttonHref="/contact"
            secondaryButtonLabel="Meet the Team"
            secondaryButtonHref="/professionals"
            scrollReveal
          />
        </div>
      </div>
    </main>
  );
}
