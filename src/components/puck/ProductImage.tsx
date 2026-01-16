"use client";

import Image from "next/image";

interface Props {
  src?: string;
  alt?: string;
  size?: "small" | "medium" | "large";
}

const sizeClasses = {
  small: "w-32 h-32 md:w-40 md:h-40",
  medium: "w-48 h-48 md:w-64 md:h-64",
  large: "w-full h-64 md:h-80 lg:h-96",
};

export function ProductImage({ src = "/images/products/product-1.jpg", alt = "Producto", size = "large" }: Props) {
  return (
    <div className={`relative ${sizeClasses[size]} overflow-hidden rounded-lg`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
}
