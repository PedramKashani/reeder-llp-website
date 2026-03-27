import Link from "next/link";

export function ScrollDownButton({ scrollToId }: { scrollToId: string }) {
  return (
    <Link
      href={`#${scrollToId}`}
      className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 rounded-full border border-white/30 bg-white/10 p-3 text-white backdrop-blur hover:bg-white/15"
      aria-label="Scroll to next section"
    >
      <span className="block text-xl leading-none">↓</span>
    </Link>
  );
}
