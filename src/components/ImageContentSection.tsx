import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "@/src/components/AnimatedSection";

type ImageContentSectionProps = {
  title: string;
  body: string;
  imageUrl: string;
  ctaLabel: string;
  ctaHref: string;
  reverse?: boolean;
};

export function ImageContentSection({
  title,
  body,
  imageUrl,
  ctaLabel,
  ctaHref,
  reverse = false,
}: ImageContentSectionProps) {
  return (
    <AnimatedSection className="homepage-practice-panel">
      <div
        className={
          "section-content-in mx-auto grid w-full max-w-none grid-cols-1 items-center gap-10 px-6 py-20 md:py-24 lg:grid-cols-2 lg:gap-16 lg:px-10 xl:px-16 " +
          (reverse ? "lg:[&>*:first-child]:order-2" : "")
        }
      >
        <div className="section-picture-in flex min-w-0 flex-col items-center justify-center">
          <div className="relative aspect-[4/5] w-full max-w-[540px] pr-4 pb-4">
            <div
              className="pointer-events-none absolute bottom-0 right-0 top-5 w-4 border-r border-white/30"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute bottom-0 left-5 right-0 h-4 border-b border-white/30"
              aria-hidden
            />
            <div className="relative z-10 aspect-[4/5] w-full overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100">
              <Image
                src={imageUrl}
                alt=""
                fill
                sizes="(max-width: 1024px) min(100vw - 3rem, 540px), min(540px, calc(50vw - 4rem))"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>

        <div
          className={
            "section-text-in flex min-w-0 flex-col justify-center lg:max-w-[42rem] " +
            (reverse ? "lg:justify-self-end" : "lg:justify-self-start")
          }
        >
          <h3 className="text-4xl font-bold tracking-[0.04em] text-white md:text-5xl lg:text-6xl">
            {title}
          </h3>
          <p className="mt-5 text-xl font-medium leading-relaxed text-white md:text-2xl md:leading-[1.55]">
            {body}
          </p>

          <div className="mt-8">
            <Link
              href={ctaHref}
              className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-3.5 text-lg font-semibold text-neutral-900 transition hover:bg-neutral-100"
            >
              {ctaLabel}
            </Link>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
