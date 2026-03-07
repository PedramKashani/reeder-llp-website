"use client";

import { useRef, useState, useEffect, type ReactNode } from "react";

type AnimatedSectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  as?: "section" | "div";
  delay?: number;
};

export function AnimatedSection({
  children,
  className = "",
  id,
  as: Component = "section",
  delay = 0,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            timeoutId = setTimeout(() => setVisible(true), delay);
          } else {
            if (timeoutId) clearTimeout(timeoutId);
            setVisible(false);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -20% 0px" }
    );
    observer.observe(el);
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [delay]);

  const isVisible = visible;
  const cls = `${isVisible ? "animate-section-visible" : "animate-section-hidden"} ${className}`.trim();

  if (Component === "div") {
    return (
      <div ref={ref as React.RefObject<HTMLDivElement>} id={id} className={cls}>
        {children}
      </div>
    );
  }
  return (
    <section ref={ref} id={id} className={cls}>
      {children}
    </section>
  );
}
