import Image from "next/image";
import type { Professional } from "@/types/professional";
import { ScrollDownButton } from "@/components/ScrollDownButton";

export function ProfileHero({ profile }: { profile: Professional }) {
  const photoUrl =
    profile.photo || profile.photoLarge || profile.photoSmall || "";

  return (
    <section
      className="profile-hero relative w-full overflow-hidden border-b border-neutral-200 bg-neutral-950"
      aria-label={`Profile: ${profile.name}`}
    >
      {/* Split layout: text left, portrait right — desktop; image top, text below — mobile */}
      <div className="relative mx-auto grid min-h-[min(88vh,880px)] max-w-[1600px] lg:grid-cols-2 lg:items-stretch">
        {/* Portrait — shows more upper body / shoulders; not full-bleed face crop */}
        <div className="relative order-1 min-h-[42vh] sm:min-h-[48vh] lg:order-2 lg:min-h-[min(88vh,880px)]">
          {photoUrl ? (
            <Image
              src={photoUrl}
              alt=""
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-[center_28%] sm:object-[center_26%]"
            />
          ) : null}
          {/* Mobile: subtle overlay so scroll cue / balance */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent lg:hidden"
            aria-hidden
          />
          {/* Desktop: soft edge toward text column */}
          <div
            className="absolute inset-y-0 left-0 hidden w-24 bg-gradient-to-r from-neutral-950 to-transparent lg:block"
            aria-hidden
          />
        </div>

        {/* Text block — owns the left column, does not sit on top of the face */}
        <div className="relative order-2 flex flex-col justify-end px-6 pb-12 pt-10 sm:px-8 sm:pb-14 lg:order-1 lg:justify-center lg:px-12 lg:py-16 xl:px-16">
          <div className="max-w-xl">
            <div className="mb-4 h-px w-12 bg-white/50" />
            <h1 className="text-3xl font-semibold tracking-[0.02em] text-white md:text-4xl lg:text-5xl xl:text-6xl">
              {profile.name}
            </h1>
            {profile.title ? (
              <p className="mt-3 text-[11px] font-medium uppercase tracking-[0.22em] text-white/80 sm:text-xs">
                {profile.title}
              </p>
            ) : null}

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/85 md:text-[15px]">
              {profile.officePhone ? (
                <span>Office: {profile.officePhone}</span>
              ) : null}
              {profile.directDial ? (
                <span>Direct: {profile.directDial}</span>
              ) : null}
              {profile.email ? (
                <a
                  className="border-b border-white/40 underline-offset-4 transition-colors hover:border-white hover:text-white"
                  href={`mailto:${profile.email}`}
                >
                  {profile.email}
                </a>
              ) : null}
            </div>

            {profile.links?.length ? (
              <div className="mt-6 flex flex-wrap gap-2.5">
                {profile.links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-md border border-white/35 bg-white/[0.06] px-3.5 py-2 text-xs font-medium tracking-wide text-white/95 transition hover:border-white/50 hover:bg-white/10 md:text-sm"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>

      <ScrollDownButton scrollToId="profile-content" />
    </section>
  );
}
