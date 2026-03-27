import Image from "next/image";
import Link from "next/link";

export function Logo({
  heroMode,
  subtleShrink,
}: {
  heroMode: boolean;
  subtleShrink: boolean;
}) {
  return (
    <Link
      href="/"
      className={
        "relative inline-flex items-center transition-all duration-500 " +
        (heroMode ? "-ml-2 gap-3 sm:-ml-3" : "-ml-3 gap-2 sm:-ml-4")
      }
    >
      <div
        className={
          "grid place-items-center rounded-xl logo-animate-in transition-all duration-500 " +
          (heroMode
            ? (subtleShrink ? "h-12 w-36" : "h-14 w-40") +
              " border border-transparent bg-transparent"
            : "border border-neutral-200 bg-white h-12 w-36")
        }
      >
        <div
          className={
            "relative transition-all duration-500 " +
            (heroMode
              ? subtleShrink
                ? "h-10 w-32"
                : "h-12 w-36"
              : "h-10 w-32")
          }
        >
          <Image
            src="/images/logos/rmc-gold-logo.webp"
            alt="Reeder McCreary"
            fill
            priority
            sizes="(max-width: 640px) 128px, 144px"
            className="object-contain"
          />
        </div>
      </div>
      <div
        className={
          "absolute left-full top-1/2 ml-3 hidden -translate-y-1/2 whitespace-nowrap leading-tight transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] sm:block " +
          (heroMode
            ? subtleShrink
              ? "translate-x-2 opacity-0 blur-[2px]"
              : "translate-x-0 opacity-100 blur-0"
            : "translate-x-0 opacity-100 blur-0")
        }
      >
        <div
          className={
            "font-semibold " +
            (heroMode
              ? "text-white drop-shadow-[0_1px_8px_rgba(0,0,0,0.45)]"
              : "text-neutral-900")
          }
          style={
            heroMode
              ? {
                  fontSize: subtleShrink
                    ? "clamp(1.05rem, 1.2vw, 1.35rem)"
                    : "clamp(1.15rem, 1.45vw, 1.55rem)",
                  letterSpacing: "0.04em",
                }
              : undefined
          }
        >
          Reeder McCreary
        </div>
        {!heroMode && (
          <div className="text-[9px] uppercase tracking-[0.18em] text-neutral-600">
            Attorneys at Law
          </div>
        )}
      </div>
    </Link>
  );
}
