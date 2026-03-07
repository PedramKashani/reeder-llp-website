import { AnimatedSection } from "@/component/AnimatedSection";

type SectionHeadingProps = {
  kicker: string;
  title: string;
  id?: string;
};

export function SectionHeading({ kicker, title, id }: SectionHeadingProps) {
  return (
    <AnimatedSection
      id={id}
      className="flex min-h-0 flex-1 flex-col justify-center"
    >
      <div className="section-content-in mx-auto w-full max-w-[88rem] px-8 py-12 md:px-12 md:py-16">
        <div className="text-xl font-bold uppercase tracking-[0.32em] text-white md:text-2xl">
          {kicker}
        </div>
        <h2 className="mt-6 text-7xl font-extrabold tracking-tight text-white md:text-8xl lg:text-9xl">
          {title}
        </h2>
      </div>
    </AnimatedSection>
  );
}
