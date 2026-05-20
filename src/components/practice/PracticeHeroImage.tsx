"use client";

import Image from "next/image";
import { useState } from "react";

const FALLBACK_HERO_IMAGE = "/images/team/team-outdoor.webp";

export function PracticeHeroImage({ src, alt = "" }: { src: string; alt?: string }) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      src={imgSrc}
      alt={alt}
      fill
      priority
      sizes="100vw"
      className="object-cover object-[50%_28%] sm:object-[50%_32%] md:object-center"
      onError={() => setImgSrc(FALLBACK_HERO_IMAGE)}
    />
  );
}
