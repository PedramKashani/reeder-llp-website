import { OurFavoriteThingsGrid } from "@/component/OurFavoriteThingsGrid";

export default function OurFavoriteThingsPage() {
  return (
    <main className="min-h-screen bg-black">
      <div className="relative h-[40svh] min-h-[320px] w-full overflow-hidden">
        <img
          src="https://cdn.lawlytics.com/law-media/uploads/830/334899/large/Chris_corporate.jpg?1752871243"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-6xl px-6 pb-16">
            <h6 className="text-xs font-semibold uppercase tracking-[0.28em] text-white/90">
              Who We Are
            </h6>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-6xl">
              Our Favorite Things
            </h1>
          </div>
        </div>
      </div>

      <OurFavoriteThingsGrid />
    </main>
  );
}
