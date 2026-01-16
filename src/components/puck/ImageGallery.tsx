"use client";

import { useState } from "react";
import Image from "next/image";
import type { ComponentConfig } from "@puckeditor/core";

export interface ImageGalleryProps {
  images: { url: string; alt: string }[];
  variant: "thumbnails-bottom" | "thumbnails-left" | "dots" | "stack";
  thumbnailSize?: "sm" | "md" | "lg";
  mainAspectRatio?: "square" | "portrait" | "landscape";
  className?: string;
}

export function ImageGallery({
  images = [],
  variant = "thumbnails-bottom",
  thumbnailSize = "md",
  mainAspectRatio = "square",
  className = "",
}: ImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const thumbnailSizes = {
    sm: "w-12 h-12",
    md: "w-16 h-16",
    lg: "w-20 h-20",
  };

  const aspectRatios = {
    square: "aspect-square",
    portrait: "aspect-[3/4]",
    landscape: "aspect-[4/3]",
  };

  if (!images || images.length === 0) {
    return (
      <div className={`${aspectRatios[mainAspectRatio]} bg-gray-100 flex items-center justify-center ${className}`}>
        <span className="text-gray-400">No images</span>
      </div>
    );
  }

  // Stack variant - vertical scroll of images
  if (variant === "stack") {
    return (
      <div className={`flex flex-col gap-4 ${className}`}>
        {images.map((image, index) => (
          <div key={index} className={`relative ${aspectRatios[mainAspectRatio]} w-full`}>
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
    );
  }

  // Dots variant - main image with dot indicators
  if (variant === "dots") {
    return (
      <div className={`relative ${className}`}>
        <div className={`relative ${aspectRatios[mainAspectRatio]} overflow-hidden`}>
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-300 ${
                index === selectedIndex ? "opacity-100" : "opacity-0 pointer-events-none"
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
        <div className="flex justify-center gap-2 mt-4">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === selectedIndex
                  ? "bg-black"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`View image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    );
  }

  // Thumbnails variants
  const isLeftThumbnails = variant === "thumbnails-left";

  return (
    <div className={`flex ${isLeftThumbnails ? "flex-row gap-4" : "flex-col gap-4"} ${className}`}>
      {/* Thumbnails for left variant */}
      {isLeftThumbnails && (
        <div className="flex flex-col gap-2 overflow-auto max-h-[500px]">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`relative ${thumbnailSizes[thumbnailSize]} flex-shrink-0 overflow-hidden rounded-md transition-all ${
                index === selectedIndex
                  ? "ring-2 ring-black ring-offset-2"
                  : "opacity-60 hover:opacity-100"
              }`}
            >
              <Image
                src={image.url}
                alt={image.alt}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {/* Main Image */}
      <div className={`relative ${aspectRatios[mainAspectRatio]} ${isLeftThumbnails ? "flex-1" : "w-full"} overflow-hidden`}>
        <Image
          src={images[selectedIndex]?.url || ""}
          alt={images[selectedIndex]?.alt || ""}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Thumbnails for bottom variant */}
      {!isLeftThumbnails && (
        <div className="flex gap-2 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`relative ${thumbnailSizes[thumbnailSize]} flex-shrink-0 overflow-hidden rounded-md transition-all ${
                index === selectedIndex
                  ? "ring-2 ring-black ring-offset-2"
                  : "opacity-60 hover:opacity-100"
              }`}
            >
              <Image
                src={image.url}
                alt={image.alt}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export const ImageGalleryConfig: ComponentConfig<ImageGalleryProps> = {
  label: "Image Gallery",
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
    variant: {
      type: "select",
      label: "Variant",
      options: [
        { label: "Thumbnails Bottom", value: "thumbnails-bottom" },
        { label: "Thumbnails Left", value: "thumbnails-left" },
        { label: "Dots", value: "dots" },
        { label: "Stack (Scroll)", value: "stack" },
      ],
    },
    thumbnailSize: {
      type: "select",
      label: "Thumbnail Size",
      options: [
        { label: "Small", value: "sm" },
        { label: "Medium", value: "md" },
        { label: "Large", value: "lg" },
      ],
    },
    mainAspectRatio: {
      type: "select",
      label: "Aspect Ratio",
      options: [
        { label: "Square (1:1)", value: "square" },
        { label: "Portrait (3:4)", value: "portrait" },
        { label: "Landscape (4:3)", value: "landscape" },
      ],
    },
  },
  defaultProps: {
    images: [
      { url: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800", alt: "Product 1" },
      { url: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800", alt: "Product 2" },
      { url: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800", alt: "Product 3" },
      { url: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800", alt: "Product 4" },
    ],
    variant: "thumbnails-bottom",
    thumbnailSize: "md",
    mainAspectRatio: "square",
  },
  render: (props) => <ImageGallery {...props} />,
};
