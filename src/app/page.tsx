import { HeroRotatingWords } from "@/component/HeroRotatingWords";
import { SectionHeading } from "@/component/SectionHeading";
import { ImageContentSection } from "@/component/ImageContentSection";
import { CTASection } from "@/component/CTASection";

export default function HomePage() {
  return (
    <main>
      <HeroRotatingWords
        // Use a Reeder image if you want; keeping placeholder for now
        backgroundImageUrl="https://cdn.lawlytics.com/law-media/uploads/830/230565/large/IMG_9313-1.jpg?1680286844"
        kicker="We were born to be"
        words={["Litigators", "Deal Makers", "Trial Lawyers"]}
        scrollToId="welcome"
      />

      <div className="snap-section flex flex-col">
        <SectionHeading
          id="welcome"
          kicker="Welcome to"
          title="Reeder McCreary, LLP"
        />
      </div>

      <div className="snap-section flex flex-col">
        <ImageContentSection
          title="Litigation"
        body="Successful litigation requires focus, strategy, direction, and knowledge. With a wealth of legal knowledge, tight team, and a unique litigation strategy, we charge hard, don’t pull punches, and are goal oriented. We don’t need to turn over every stone because we know what we are doing and what it takes to succeed. The results speak for themselves."
        imageUrl="https://cdn.lawlytics.com/law-media/uploads/830/230563/large/IMG_9203-1.jpg?1680286838"
        ctaLabel="Learn More"
        ctaHref="/trials-and-commercial-litigation"
        />
      </div>

      <div className="snap-section flex flex-col">
        <ImageContentSection
          reverse
          title="Corporate"
        body="We make deals – we don’t break them. We solve problems – we don’t create them. From company sales and real estate transactions, to regulatory, corporate, and intellectual property compliance, to consulting on a business/legal issue, we are your go-to in-house counsel."
        imageUrl="https://cdn.lawlytics.com/law-media/uploads/830/334899/large/Chris_corporate.jpg?1752871243"
        ctaLabel="Learn More"
        ctaHref="/about"
        />
      </div>

      <div className="snap-section flex flex-col">
        <ImageContentSection
          title="Trials"
        body="At trial, winning is everything and losing is not an option. Whether it is a bet-the-company or any other case, we try every case like it is our own. With our unique trial preparation method, creativity, and human touch, we deliver."
        imageUrl="https://cdn.lawlytics.com/law-media/uploads/830/230565/large/IMG_9313-1.jpg?1680286844"
        ctaLabel="Learn More"
        ctaHref="/trials-and-commercial-litigation"
        />
      </div>

      <div className="snap-section flex flex-col">
        <CTASection
          title="Need Counsel?"
          buttonLabel="Request a Consultation"
          buttonHref="/contact"
        />
      </div>
    </main>
  );
}
