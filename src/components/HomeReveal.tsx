"use client";

import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

type HomeRevealProps = {
  children: ReactNode;
  className?: string;
  /** After the block enters the viewport, wait this long before fading in (stagger siblings). */
  delayMs?: number;
};

/**
 * Minimal scroll reveal: small lift + opacity. Pair with `.homepage-scroll-reveal` in CSS.
 */
export function HomeReveal({
  children,
  className = "",
  delayMs = 0,
}: HomeRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      const timeoutId = window.setTimeout(() => {
        setVisible(true);
      }, 0);
      return () => window.clearTimeout(timeoutId);
    }

    let timeoutId: number | undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.unobserve(entry.target);
        timeoutId = window.setTimeout(() => setVisible(true), delayMs);
      },
      { threshold: 0.1, rootMargin: "0px 0px -5% 0px" },
    );
    observer.observe(node);
    return () => {
      observer.disconnect();
      if (timeoutId !== undefined) window.clearTimeout(timeoutId);
    };
  }, [delayMs]);

  return (
    <div
      ref={ref}
      className={`home-reveal ${visible ? "home-reveal--visible" : ""} ${className}`.trim()}
    >
      {children}
    </div>
  );
}
