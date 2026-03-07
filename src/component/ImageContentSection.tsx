import Link from "next/link";
import { AnimatedSection } from "@/component/AnimatedSection";

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
    <AnimatedSection className="flex min-h-0 flex-1 flex-col">
      <div
        className={
          "section-content-in mx-auto grid min-h-0 w-full max-w-[88rem] flex-1 grid-cols-1 gap-8 px-6 py-6 md:grid-cols-[1fr_1.15fr] md:items-stretch md:gap-16 md:px-10 md:py-8 " +
          (reverse ? "md:[&>*:first-child]:order-2" : "")
        }
      >
        <div className="section-picture-in flex min-h-[200px] min-w-0 flex-1 flex-col items-center justify-center md:min-h-0">
          <div className="relative aspect-square w-full max-w-[594px] pr-5 pb-5 md:max-w-[530px]">
            {/* Frame accent – right and bottom only, ends inset so they don’t run full length */}
            <div className="absolute right-0 top-6 bottom-0 w-5 border-r-2 border-slate-500 pointer-events-none" aria-hidden />
            <div className="absolute bottom-0 left-6 right-0 h-5 border-b-2 border-slate-500 pointer-events-none" aria-hidden />
            {/* Image */}
            <div className="relative z-10 aspect-square w-full overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100">
              <img
                src={imageUrl}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="section-text-in flex min-h-0 min-w-0 flex-1 flex-col justify-center">
          <h3 className="text-5xl font-extrabold tracking-tight text-white md:text-6xl lg:text-7xl xl:text-8xl">
            {title}
          </h3>
          <p className="mt-6 text-2xl font-medium leading-relaxed text-white md:text-3xl md:leading-[1.55]">
            {body}
          </p>

          <div className="mt-10">
            <Link
              href={ctaHref}
              className="inline-flex items-center justify-center rounded-xl bg-white px-10 py-5 text-xl font-bold text-neutral-900 transition hover:bg-neutral-100"
            >
              {ctaLabel}
            </Link>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
