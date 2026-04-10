import Image from "next/image";

interface PageHeroProps {
  imageSrc: string;
  imageClassName?: string;
  className?: string;
  contentClassName?: string;
  subtitle: string;
  subtitleClassName?: string;
  title: string;
  titleClassName?: string;
}

export function PageHero({
  imageSrc,
  imageClassName = "object-cover object-top sm:object-center",
  className,
  contentClassName = "mx-auto w-full max-w-6xl px-8 pb-14 pt-20 md:px-12 md:pb-20 lg:px-16 lg:pb-24",
  subtitle,
  subtitleClassName = "text-[11px] font-medium uppercase tracking-[0.24em] text-white/70 md:text-[11px]",
  title,
  titleClassName = "mt-3 text-[clamp(2.35rem,4vw+1rem,3.5rem)] font-semibold tracking-tight text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.6)] md:text-[clamp(2.65rem,3.2vw+1.1rem,3.85rem)] lg:text-[clamp(2.75rem,2.6vw+1.15rem,4.25rem)]",
}: PageHeroProps) {
  return (
    <div
      className={[
        "relative min-h-[56vh] w-full overflow-hidden sm:min-h-[min(80svh,40rem)] md:min-h-[min(84svh,44rem)] lg:min-h-[min(88svh,48rem)]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <Image
        src={imageSrc}
        alt=""
        fill
        priority
        sizes="100vw"
        className={imageClassName}
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
      <div className="relative z-10 flex min-h-[56vh] flex-col justify-end sm:min-h-[min(80svh,40rem)] md:min-h-[min(84svh,44rem)] lg:min-h-[min(88svh,48rem)]">
        <div className={contentClassName}>
          <div className="mb-5 h-px w-14 bg-white/70" />
          <h6 className={subtitleClassName}>{subtitle}</h6>
          <h1 className={titleClassName}>{title}</h1>
        </div>
      </div>
    </div>
  );
}
