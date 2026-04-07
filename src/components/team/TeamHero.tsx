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
    <section className="relative min-h-[60vh] overflow-hidden md:min-h-[calc(100vh-72px)]">
      <div className="absolute inset-0">
        <Image
          src={backgroundImageUrl}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-top md:object-center"
        />
        <div className="absolute inset-0 bg-neutral-950/45" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="flex min-h-[60vh] items-end py-20 md:min-h-[calc(100vh-72px)] md:py-24">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/85">
              {subtitle}
            </div>
            <h1 className="mt-3 text-5xl font-semibold tracking-tight text-white md:text-7xl">
              {title}
            </h1>
          </div>
        </div>
      </div>

      <ScrollDownButton scrollToId={scrollToId} />
    </section>
  );
}
