"use client";

import Image from "next/image";
import { ScrollDownButton } from "@/components/ScrollDownButton";

type Props = {
  backgroundImageUrl: string;
  subtitle: string; // "Toronto" / "Los Angeles"
  title: string; // "Legal Team" / "Professionals"
  scrollToId?: string;
};

export function TeamHero({
  backgroundImageUrl,
  subtitle,
  title,
  scrollToId = "team",
}: Props) {
  return (
    <section className="relative min-h-[56vh] overflow-hidden md:min-h-[min(calc(100vh-72px),46rem)] lg:min-h-[min(calc(100vh-72px),52rem)]">
      <div className="absolute inset-0 overflow-hidden bg-neutral-950">
        {/* Oversized canvas: image covers a larger box than the visible hero so the same viewport shows more of the photo */}
        <div className="absolute -inset-[9%]">
          <Image
            src={backgroundImageUrl}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[50%_46%] md:object-[50%_48%] lg:object-[50%_50%]"
          />
        </div>
        <div className="absolute inset-0 bg-neutral-950/45" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="flex min-h-[56vh] items-end py-20 md:min-h-[min(calc(100vh-72px),46rem)] md:py-24 lg:min-h-[min(calc(100vh-72px),52rem)]">
          <div className="max-w-2xl">
            <div className="text-[11px] font-medium uppercase tracking-[0.24em] text-white/80 md:text-[11px]">
              {subtitle}
            </div>
            <h1 className="mt-3 text-[clamp(2.35rem,4vw+0.9rem,3.35rem)] font-semibold tracking-tight text-white md:text-[clamp(2.65rem,3vw+1rem,3.85rem)] lg:text-[clamp(2.75rem,2.4vw+1.05rem,4.25rem)]">
              {title}
            </h1>
          </div>
        </div>
      </div>

      <ScrollDownButton scrollToId={scrollToId} />
    </section>
  );
}
