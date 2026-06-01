"use client";

import Image from "next/image";
import { useState } from "react";

type ProductImageProps = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes: string;
};

export function ProductImage({ src, alt, className = "", imageClassName = "", priority = false, sizes }: ProductImageProps) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`relative overflow-hidden rounded-lg bg-neutral-100 ${className}`}>
      {!failed ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={`object-contain ${imageClassName}`}
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-neutral-100 to-white p-5 text-center">
          <span className="text-sm font-semibold leading-6 text-neutral-700">{alt}</span>
        </div>
      )}
    </div>
  );
}
