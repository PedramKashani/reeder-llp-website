"use client";

import { useState } from "react";

const FALLBACK_HERO_IMAGE =
  "https://cdn.lawlytics.com/law-media/uploads/830/230565/large/IMG_9313-1.jpg?1680286844";

export function PracticeHeroImage({ src, alt = "" }: { src: string; alt?: string }) {
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
