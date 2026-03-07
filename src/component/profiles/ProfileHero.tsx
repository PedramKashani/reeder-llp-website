import type { Professional } from "@/data/professionals";

export function ProfileHero({ profile }: { profile: Professional }) {
  return (
    <section className="relative">
      {/* Background image */}
      <div className="relative h-[640px] w-full overflow-hidden">
        <img
          src={profile.photoLarge || profile.photoSmall || ""}
          alt={profile.name}
          className="h-full w-full object-cover"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Content */}
        <div className="absolute inset-0">
          <div className="mx-auto flex h-full max-w-6xl items-end px-6 pb-16">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
                {profile.name}
              </h1>
              {profile.title ? (
                <p className="mt-3 text-sm font-medium uppercase tracking-[0.2em] text-white/85">
                  {profile.title}
                </p>
              ) : null}

              {/* Contact row (optional) */}
              <div className="mt-6 flex flex-wrap gap-3 text-sm text-white/90">
                {profile.officePhone ? (
                  <span>Office: {profile.officePhone}</span>
                ) : null}
                {profile.directDial ? (
                  <span>Direct: {profile.directDial}</span>
                ) : null}
                {profile.email ? (
                  <a
                    className="underline underline-offset-4"
                    href={`mailto:${profile.email}`}
                  >
                    {profile.email}
                  </a>
                ) : null}
              </div>

              {/* External links */}
              {profile.links?.length ? (
                <div className="mt-5 flex flex-wrap gap-3">
                  {profile.links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-medium text-white backdrop-blur hover:bg-white/15"
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </div>

        {/* Scroll down button */}
        <a
          href="#profile-content"
          className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full border border-white/25 bg-white/10 p-3 text-white backdrop-blur hover:bg-white/15"
          aria-label="Scroll to profile content"
        >
          ↓
        </a>
      </div>
    </section>
  );
}
