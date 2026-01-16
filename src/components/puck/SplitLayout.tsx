"use client";

import Image from "next/image";
import type { ComponentConfig } from "@puckeditor/core";
import { DropZone } from "@puckeditor/core";

export interface SplitLayoutProps {
  imageUrl: string;
  imageAlt?: string;
  imagePosition: "left" | "right";
  imageFit?: "cover" | "contain";
  backgroundColor?: string;
  verticalAlign?: "top" | "center" | "bottom";
  splitRatio?: "50-50" | "60-40" | "40-60" | "70-30" | "30-70";
  minHeight?: "auto" | "screen" | "half";
  padding?: "none" | "sm" | "md" | "lg" | "xl";
}

export function SplitLayout({
  imageUrl,
  imageAlt = "Image",
  imagePosition = "left",
  imageFit = "cover",
  backgroundColor = "#ffffff",
  verticalAlign = "center",
  splitRatio = "50-50",
  minHeight = "auto",
  padding = "lg",
}: SplitLayoutProps) {
  const ratioClasses = {
    "50-50": { image: "lg:w-1/2", content: "lg:w-1/2" },
    "60-40": { image: "lg:w-3/5", content: "lg:w-2/5" },
    "40-60": { image: "lg:w-2/5", content: "lg:w-3/5" },
    "70-30": { image: "lg:w-[70%]", content: "lg:w-[30%]" },
    "30-70": { image: "lg:w-[30%]", content: "lg:w-[70%]" },
  };

  const alignClasses = {
    top: "items-start",
    center: "items-center",
    bottom: "items-end",
  };

  const heightClasses = {
    auto: "",
    screen: "min-h-screen",
    half: "min-h-[50vh]",
  };

  const paddingClasses = {
    none: "p-0",
    sm: "p-4",
    md: "p-8",
    lg: "p-12",
    xl: "p-16",
  };

  const ImageSection = (
    <div className={`relative w-full ${ratioClasses[splitRatio].image} aspect-square lg:aspect-auto`}>
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          className={`${imageFit === "cover" ? "object-cover" : "object-contain"}`}
          priority
        />
      ) : (
        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
          <span className="text-gray-400">Add Image</span>
        </div>
      )}
    </div>
  );

  const ContentSection = (
    <div
      className={`w-full ${ratioClasses[splitRatio].content} ${paddingClasses[padding]} flex flex-col justify-center`}
      style={{ backgroundColor }}
    >
      <DropZone zone="content" />
    </div>
  );

  return (
    <div className={`flex flex-col lg:flex-row ${alignClasses[verticalAlign]} ${heightClasses[minHeight]}`}>
      {imagePosition === "left" ? (
        <>
          {ImageSection}
          {ContentSection}
        </>
      ) : (
        <>
          {ContentSection}
          {ImageSection}
        </>
      )}
    </div>
  );
}

export const SplitLayoutConfig: ComponentConfig<SplitLayoutProps> = {
  label: "Split Layout",
  fields: {
    imageUrl: {
      type: "text",
      label: "Image URL",
    },
    imageAlt: {
      type: "text",
      label: "Image Alt Text",
    },
    imagePosition: {
      type: "radio",
      label: "Image Position",
      options: [
        { label: "Left", value: "left" },
        { label: "Right", value: "right" },
      ],
    },
    imageFit: {
      type: "radio",
      label: "Image Fit",
      options: [
        { label: "Cover", value: "cover" },
        { label: "Contain", value: "contain" },
      ],
    },
    backgroundColor: {
      type: "text",
      label: "Content Background Color",
    },
    verticalAlign: {
      type: "select",
      label: "Vertical Alignment",
      options: [
        { label: "Top", value: "top" },
        { label: "Center", value: "center" },
        { label: "Bottom", value: "bottom" },
      ],
    },
    splitRatio: {
      type: "select",
      label: "Split Ratio",
      options: [
        { label: "50/50", value: "50-50" },
        { label: "60/40", value: "60-40" },
        { label: "40/60", value: "40-60" },
        { label: "70/30", value: "70-30" },
        { label: "30/70", value: "30-70" },
      ],
    },
    minHeight: {
      type: "select",
      label: "Minimum Height",
      options: [
        { label: "Auto", value: "auto" },
        { label: "Full Screen", value: "screen" },
        { label: "Half Screen", value: "half" },
      ],
    },
    padding: {
      type: "select",
      label: "Content Padding",
      options: [
        { label: "None", value: "none" },
        { label: "Small", value: "sm" },
        { label: "Medium", value: "md" },
        { label: "Large", value: "lg" },
        { label: "Extra Large", value: "xl" },
      ],
    },
  },
  defaultProps: {
    imageUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800",
    imageAlt: "Split layout image",
    imagePosition: "left",
    imageFit: "cover",
    backgroundColor: "#ffffff",
    verticalAlign: "center",
    splitRatio: "50-50",
    minHeight: "half",
    padding: "lg",
  },
  render: (props) => <SplitLayout {...props} />,
};
