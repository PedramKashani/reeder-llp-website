export function InfoCard({
  title,
  body,
  cta,
  className = "",
}: {
  title: string;
  body: React.ReactNode;
  cta: {
    label: string;
    href: string;
    onClick?: () => void;
    variant?: "solid" | "ghost";
  };
  className?: string;
}) {
  const isGhost = cta.variant === "ghost";

  return (
    <div
      className={[
        "rounded-2xl border border-neutral-200 bg-white p-7 shadow-[0_12px_40px_rgba(0,0,0,0.06)]",
        className,
      ].join(" ")}
    >
      <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-neutral-900">
        {title}
      </h3>
      <div className="mt-4 text-neutral-700">{body}</div>
      <div className="mt-6">
        <a
          href={cta.href}
          onClick={(e) => {
            if (!cta.onClick) return;
            e.preventDefault();
            cta.onClick();
          }}
          className={[
            "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition",
            isGhost
              ? "border border-neutral-300 bg-transparent text-neutral-950 hover:bg-neutral-50"
              : "bg-neutral-950 text-white hover:bg-neutral-800",
          ].join(" ")}
        >
          {cta.label}
        </a>
      </div>
    </div>
  );
}
