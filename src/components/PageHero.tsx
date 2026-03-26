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
  imageClassName = "object-cover object-center",
  className,
  contentClassName = "mx-auto w-full max-w-6xl px-8 pb-14 pt-20 md:px-12 md:pb-20 lg:px-16 lg:pb-24",
  subtitle,
  subtitleClassName = "text-sm font-semibold uppercase tracking-[0.28em] text-white/95 md:text-base",
  title,
  titleClassName = "mt-3 text-5xl font-semibold tracking-tight text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.6)] md:text-6xl lg:text-7xl",
}: PageHeroProps) {
  return (
    <div
      className={[
        "relative min-h-[85vh] w-full overflow-hidden sm:min-h-[90vh]",
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
      <div className="relative z-10 flex min-h-[85vh] flex-col justify-end sm:min-h-[90vh]">
        <div className={contentClassName}>
          <div className="mb-5 h-px w-14 bg-white/70" />
          <h6 className={subtitleClassName}>{subtitle}</h6>
          <h1 className={titleClassName}>{title}</h1>
        </div>
      </div>
    </div>
  );
}
