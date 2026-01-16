"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import type { ComponentConfig } from "@puckeditor/core";

export interface ImageCarouselProps {
  images: { url: string; alt: string }[];
  autoplay?: boolean;
  autoplayInterval?: number;
  showArrows?: boolean;
  showDots?: boolean;
  aspectRatio?: "square" | "video" | "portrait" | "wide";
  className?: string;
}

export function ImageCarousel({
  images = [],
  autoplay = false,
  autoplayInterval = 3000,
  showArrows = true,
  showDots = true,
  aspectRatio = "video",
  className = "",
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const aspectRatioClasses = {
    square: "aspect-square",
    video: "aspect-video",
    portrait: "aspect-[3/4]",
    wide: "aspect-[21/9]",
  };

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!autoplay || isHovered || images.length <= 1) return;

    const interval = setInterval(goToNext, autoplayInterval);
    return () => clearInterval(interval);
  }, [autoplay, autoplayInterval, isHovered, images.length, goToNext]);

  if (!images || images.length === 0) {
    return (
      <div className={`${aspectRatioClasses[aspectRatio]} bg-gray-100 flex items-center justify-center ${className}`}>
        <span className="text-gray-400">No images</span>
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`relative ${aspectRatioClasses[aspectRatio]}`}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image.url}
              alt={image.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {showArrows && images.length > 1 && (
        <>
          <button
            onClick={goToPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all opacity-0 group-hover:opacity-100 hover:opacity-100"
            aria-label="Previous image"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all opacity-0 group-hover:opacity-100 hover:opacity-100"
            aria-label="Next image"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {showDots && images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-white w-4"
                  : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export const ImageCarouselConfig: ComponentConfig<ImageCarouselProps> = {
  label: "Image Carousel",
  fields: {
    images: {
      type: "array",
      label: "Images",
      arrayFields: {
        url: { type: "text", label: "Image URL" },
        alt: { type: "text", label: "Alt Text" },
      },
      defaultItemProps: {
        url: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800",
        alt: "Product image",
      },
    },
    autoplay: {
      type: "radio",
      label: "Autoplay",
      options: [
        { label: "Yes", value: true },
        { label: "No", value: false },
      ],
    },
    autoplayInterval: {
      type: "number",
      label: "Autoplay Interval (ms)",
    },
    showArrows: {
      type: "radio",
      label: "Show Arrows",
      options: [
        { label: "Yes", value: true },
        { label: "No", value: false },
      ],
    },
    showDots: {
      type: "radio",
      label: "Show Dots",
      options: [
        { label: "Yes", value: true },
        { label: "No", value: false },
      ],
    },
    aspectRatio: {
      type: "select",
      label: "Aspect Ratio",
      options: [
        { label: "Square (1:1)", value: "square" },
        { label: "Video (16:9)", value: "video" },
        { label: "Portrait (3:4)", value: "portrait" },
        { label: "Wide (21:9)", value: "wide" },
      ],
    },
  },
  defaultProps: {
    images: [
      { url: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800", alt: "Product 1" },
      { url: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800", alt: "Product 2" },
      { url: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800", alt: "Product 3" },
    ],
    autoplay: false,
    autoplayInterval: 3000,
    showArrows: true,
    showDots: true,
    aspectRatio: "video",
  },
  render: (props) => <ImageCarousel {...props} />,
};
