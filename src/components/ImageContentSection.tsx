import Image from "next/image";
import Link from "next/link";
import { HomeReveal } from "@/components/HomeReveal";
import {
  EDITORIAL_BLOCK_Y_FIRST,
  EDITORIAL_BLOCK_Y_FOLLOWING,
  EDITORIAL_GUTTER,
  EDITORIAL_MAX,
} from "@/lib/homepageEditorialLayout";

type ImageContentSectionProps = {
  title: string;
  body: string;
  imageUrl: string;
  alt: string;
  ctaLabel: string;
  ctaHref: string;
  reverse?: boolean;
  withTopRule?: boolean;
};

export function ImageContentSection({
  title,
  body,
  imageUrl,
  alt,
  ctaLabel,
  ctaHref,
  reverse = false,
  withTopRule = false,
}: ImageContentSectionProps) {
  const blockY = withTopRule ? EDITORIAL_BLOCK_Y_FOLLOWING : EDITORIAL_BLOCK_Y_FIRST;

  const gridGapX = reverse
    ? "lg:gap-x-12 xl:gap-x-16"
    : "lg:gap-x-14 xl:gap-x-20";

  return (
    <div className="homepage-practice-panel">
      <div
        className={
          `section-content-in mx-auto w-full ${EDITORIAL_MAX} ${EDITORIAL_GUTTER} ${blockY} ` +
          `grid grid-cols-1 items-center gap-y-12 lg:grid-cols-2 lg:gap-y-0 lg:items-stretch ${gridGapX}`
        }
      >
        <HomeReveal
          delayMs={0}
          className={
            "section-picture-in flex min-w-0 flex-col justify-center " +
            (reverse ? "lg:order-2 lg:items-center" : "items-start lg:items-center")
          }
        >
          <div className="relative aspect-[4/5] w-full max-w-[min(100%,24rem)] pr-2.5 pb-2.5 sm:max-w-[26rem] md:max-w-[27rem] lg:max-w-[min(100%,28rem)] xl:max-w-[min(100%,30rem)]">
            {/* Gutter shadow: soft fill between photo edge and L-line (under the lines, z-2) */}
            <div
              className="pointer-events-none absolute top-5 right-0 bottom-0 z-[2] w-[clamp(2.25rem,18%,4rem)] bg-gradient-to-l from-[#040405]/[0.82] via-[#0a0a0c]/[0.38] to-transparent"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute bottom-0 left-5 right-0 z-[2] h-[clamp(2rem,14%,3.5rem)] bg-gradient-to-t from-[#040405]/[0.82] via-[#0a0a0c]/[0.38] to-transparent"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute bottom-0 right-0 z-[2] h-[clamp(3.5rem,28%,6rem)] w-[clamp(3.5rem,28%,6rem)] bg-[radial-gradient(ellipse_115%_115%_at_100%_100%,rgba(2,2,4,0.92)_0%,rgba(10,10,12,0.35)_42%,transparent_72%)]"
              aria-hidden
            />

            <div
              className="pointer-events-none absolute bottom-0 right-0 top-5 z-[3] w-px bg-gradient-to-b from-transparent via-white/[0.14] to-white/[0.08]"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute bottom-0 left-5 right-0 z-[3] h-px bg-gradient-to-r from-white/[0.08] via-white/[0.12] to-transparent"
              aria-hidden
            />

            <div className="relative z-10 aspect-[4/5] w-full overflow-hidden bg-[#080808] ring-1 ring-inset ring-white/[0.06]">
              <Image
                src={imageUrl}
                alt={alt}
                fill
                sizes="(max-width: 1024px) min(100vw - 3rem, 432px), min(480px, calc(50vw - 5rem))"
                className="object-cover object-center brightness-[0.9] contrast-[1.04] saturate-[0.85]"
              />
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(165deg, rgba(10, 9, 8, 0.35) 0%, rgba(8, 8, 10, 0.05) 42%, rgba(5, 5, 8, 0.45) 100%)",
                }}
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#060606]/50 via-transparent to-[#0c0b09]/25"
                aria-hidden
              />
            </div>
          </div>
        </HomeReveal>

        <HomeReveal
          delayMs={200}
          className={
            "section-text-in flex min-w-0 flex-col justify-center lg:max-w-[min(100%,31rem)] xl:max-w-[33rem] " +
            (reverse ? "lg:order-1 lg:pl-16 xl:pl-20" : "")
          }
        >
          <h3 className="font-[family-name:var(--font-firm-serif),Georgia,serif] text-[clamp(1.95rem,3.2vw+0.85rem,2.65rem)] font-light leading-[1.1] tracking-[-0.02em] text-[#ebe7df]/95 sm:text-[clamp(2.1rem,2.8vw+0.9rem,2.85rem)] md:text-[clamp(2.2rem,2.4vw+0.95rem,3rem)] lg:text-[clamp(2.35rem,2vw+1rem,3.15rem)] xl:text-[clamp(2.45rem,1.6vw+1.05rem,3.25rem)]">
            {title}
          </h3>
          <p className="mt-7 max-w-[34rem] text-[1rem] font-light leading-[1.8] tracking-[0.01em] text-white/[0.64] md:mt-8 md:text-[1.0625rem] md:leading-[1.78] lg:text-[1.125rem] lg:leading-[1.76]">
            {body}
          </p>

          <div className="mt-11 md:mt-12">
            <Link
              href={ctaHref}
              className="group inline-flex items-center gap-4 text-[11px] font-medium uppercase tracking-[0.28em] text-white/45 transition-colors duration-500 hover:text-[#c9b896]/85 md:text-xs md:tracking-[0.3em]"
            >
              <span
                className="h-px w-11 bg-gradient-to-r from-white/25 to-white/10 transition-all duration-500 group-hover:w-[3.25rem] group-hover:from-[#c9b896]/35 group-hover:to-[#c9b896]/10"
                aria-hidden
              />
              <span>{ctaLabel}</span>
            </Link>
          </div>
        </HomeReveal>
      </div>
    </div>
  );
}
