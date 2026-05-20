import { HomeReveal } from "@/components/HomeReveal";
import { FIRM_NAME, LOGO_DIMENSIONS, LOGO_SRC } from "@/data/firm";
import { editorialWelcomeShell } from "@/lib/homepageEditorialLayout";

export function HomeWelcomeLogo({ id = "welcome" }: { id?: string }) {
  const { width, height } = LOGO_DIMENSIONS;

  return (
    <div
      id={id}
      className="flex min-h-0 flex-1 flex-col justify-start md:justify-center"
    >
      <div
        className={`${editorialWelcomeShell()} flex w-full flex-col items-center text-center`}
      >
        <HomeReveal delayMs={0}>
          <p className="text-sm font-medium uppercase tracking-[0.42em] text-[#b8a88a]/70 md:text-base">
            Welcome to
          </p>
        </HomeReveal>

        <HomeReveal delayMs={140}>
          <div className="mt-10 flex w-full justify-center md:mt-12">
            <img
              src={LOGO_SRC}
              width={width}
              height={height}
              alt={FIRM_NAME}
              decoding="async"
              className="h-auto w-full max-w-[min(88vw,20rem)] brightness-[1.12] contrast-[1.14] saturate-[1.05] sm:max-w-md md:max-w-lg lg:max-w-xl"
            />
          </div>
        </HomeReveal>
      </div>
    </div>
  );
}
