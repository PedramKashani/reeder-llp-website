import { OurFavoriteThingsGrid } from "@/component/OurFavoriteThingsGrid";

export default function OurFavoriteThingsPage() {
  return (
    <main className="min-h-screen bg-black">
      <div className="relative min-h-[85vh] w-full overflow-hidden sm:min-h-[90vh]">
        <img
          src="/images/chris/chris-reeder-Corporate.webp"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-top"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/35" aria-hidden />
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"
          aria-hidden
        />
        <div className="relative z-10 flex min-h-[85vh] flex-col justify-end sm:min-h-[90vh]">
          <div className="w-full px-6 pb-14 pt-20 md:px-12 md:pb-20 lg:px-16 lg:pb-24">
            <div className="mb-5 h-px w-14 bg-white/70" />
            <h6 className="text-xs font-semibold uppercase tracking-[0.28em] text-white/90 md:text-sm">
              Who We Are
            </h6>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.6)] md:text-5xl lg:text-6xl xl:text-7xl">
              Our Favorite Things
            </h1>
          </div>
        </div>
      </div>

      <OurFavoriteThingsGrid />
    </main>
  );
}
