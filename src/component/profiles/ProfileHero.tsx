import type { Professional } from "@/data/professionals";

export function ProfileHero({ profile }: { profile: Professional }) {
  const photoUrl = profile.photoLarge || profile.photoSmall || "";

  return (
    <section
      className="profile-hero relative w-full"
      aria-label={`Profile: ${profile.name}`}
    >
      {/* Cinematic luxury-law-firm hero: min 85vh / full screen, portrait fills section */}
      <div className="relative min-h-[85vh] w-full overflow-hidden sm:min-h-[90vh]">
        {/* Portrait: absolute, object-cover, face centered (center top) */}
        <img
          src={photoUrl}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-[center_top]"
          sizes="100vw"
        />

        {/* Overlay 1: general black transparency — background feels secondary */}
        <div className="absolute inset-0 bg-black/35" aria-hidden />

        {/* Overlay 2: left/right gradient — edges fade darker */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50"
          aria-hidden
        />

        {/* Overlay 3: bottom gradient — blends into next section */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"
          aria-hidden
        />

        {/* Name, title, contact on top of image — z-10, white text */}
        <div className="relative z-10 flex min-h-[85vh] flex-col justify-end sm:min-h-[90vh]">
          <div className="w-full px-6 pb-14 pt-20 md:px-12 md:pb-20 lg:px-16 lg:pb-24">
            <div className="mb-5 h-px w-14 bg-white/70" />
            <h1 className="text-4xl font-semibold tracking-tight text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.6)] md:text-5xl lg:text-6xl xl:text-7xl">
              {profile.name}
            </h1>
            {profile.title ? (
              <p className="mt-2.5 text-xs font-medium uppercase tracking-[0.26em] text-white/95 md:text-sm">
                {profile.title}
              </p>
            ) : null}

            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-1.5 text-sm text-white/95 md:text-base">
              {profile.officePhone ? (
                <span>Office: {profile.officePhone}</span>
              ) : null}
              {profile.directDial ? (
                <span>Direct: {profile.directDial}</span>
              ) : null}
              {profile.email ? (
                <a
                  className="border-b border-white/60 underline-offset-4 hover:border-white hover:text-white"
                  href={`mailto:${profile.email}`}
                >
                  {profile.email}
                </a>
              ) : null}
            </div>

            {profile.links?.length ? (
              <div className="mt-5 flex flex-wrap gap-3">
                {profile.links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-sm border border-white/50 bg-white/5 px-4 py-2.5 text-xs font-medium tracking-wide text-white hover:bg-white/10 md:text-sm"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            ) : null}
          </div>
        </div>

        <a
          href="#profile-content"
          className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 rounded-full border border-white/50 bg-white/5 px-3 py-2.5 text-white backdrop-blur-sm hover:bg-white/10"
          aria-label="Scroll to profile content"
        >
          ↓
        </a>
      </div>
    </section>
  );
}
