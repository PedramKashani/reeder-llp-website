"use client";

import { useState } from "react";

const FALLBACK_HERO_IMAGE = "/images/chris-duncan/chris-duncan-2.webp";

export function PracticeHeroImage({
  src,
  alt = "",
}: {
  src: string;
  alt?: string;
}) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <img
      src={imgSrc}
      alt={alt}
      className="absolute inset-0 h-full w-full object-cover object-center"
      sizes="100vw"
      fetchPriority="high"
      onError={() => setImgSrc(FALLBACK_HERO_IMAGE)}
    />
  );
}
