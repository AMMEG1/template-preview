"use client";

import Image from "next/image";
import type { ComponentConfig } from "@puckeditor/core";

export interface MasonryGridProps {
  items: {
    imageUrl: string;
    title: string;
    href?: string;
    height?: "sm" | "md" | "lg" | "xl";
  }[];
  columns?: 2 | 3 | 4;
  gap?: "xs" | "sm" | "md" | "lg";
  overlayStyle?: "none" | "gradient" | "solid" | "blur";
}

export function MasonryGrid({
  items = [],
  columns = 3,
  gap = "md",
  overlayStyle = "gradient",
}: MasonryGridProps) {
  const columnClasses = {
    2: "columns-2",
    3: "columns-2 md:columns-3",
    4: "columns-2 md:columns-4",
  };

  const gapClasses = {
    xs: "gap-1",
    sm: "gap-2",
    md: "gap-4",
    lg: "gap-6",
  };

  const heightClasses = {
    sm: "h-40",
    md: "h-56",
    lg: "h-72",
    xl: "h-96",
  };

  const overlayClasses = {
    none: "",
    gradient: "bg-gradient-to-t from-black/60 via-black/20 to-transparent",
    solid: "bg-black/40",
    blur: "bg-black/30 backdrop-blur-sm",
  };

  if (!items || items.length === 0) {
    return (
      <div className="p-8 text-center text-gray-400">
        Add masonry items
      </div>
    );
  }

  const content = items.map((item, index) => (
    <div
      key={index}
      className={`relative overflow-hidden rounded-lg mb-4 break-inside-avoid ${
        heightClasses[item.height || "md"]
      }`}
    >
      <Image
        src={item.imageUrl}
        alt={item.title}
        fill
        className="object-cover transition-transform duration-500 hover:scale-105"
      />
      {overlayStyle !== "none" && (
        <div className={`absolute inset-0 ${overlayClasses[overlayStyle]}`} />
      )}
      <div className="absolute inset-0 flex items-end p-4">
        <h3 className="text-white font-semibold text-lg">{item.title}</h3>
      </div>
      {item.href && item.href !== "#" && (
        <a
          href={item.href}
          className="absolute inset-0"
          aria-label={item.title}
        />
      )}
    </div>
  ));

  return (
    <div className={`${columnClasses[columns]} ${gapClasses[gap]}`}>
      {content}
    </div>
  );
}

export const MasonryGridConfig: ComponentConfig<MasonryGridProps> = {
  label: "Masonry Grid",
  fields: {
    items: {
      type: "array",
      label: "Items",
      arrayFields: {
        imageUrl: { type: "text", label: "Image URL" },
        title: { type: "text", label: "Title" },
        href: { type: "text", label: "Link (optional)" },
        height: {
          type: "select",
          label: "Height",
          options: [
            { label: "Small", value: "sm" },
            { label: "Medium", value: "md" },
            { label: "Large", value: "lg" },
            { label: "Extra Large", value: "xl" },
          ],
        },
      },
      defaultItemProps: {
        imageUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800",
        title: "Category",
        href: "#",
        height: "md",
      },
    },
    columns: {
      type: "select",
      label: "Columns",
      options: [
        { label: "2 Columns", value: 2 },
        { label: "3 Columns", value: 3 },
        { label: "4 Columns", value: 4 },
      ],
    },
    gap: {
      type: "select",
      label: "Gap",
      options: [
        { label: "Extra Small", value: "xs" },
        { label: "Small", value: "sm" },
        { label: "Medium", value: "md" },
        { label: "Large", value: "lg" },
      ],
    },
    overlayStyle: {
      type: "select",
      label: "Overlay Style",
      options: [
        { label: "None", value: "none" },
        { label: "Gradient", value: "gradient" },
        { label: "Solid", value: "solid" },
        { label: "Blur", value: "blur" },
      ],
    },
  },
  defaultProps: {
    items: [
      {
        imageUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800",
        title: "Accessories",
        href: "#",
        height: "lg",
      },
      {
        imageUrl: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800",
        title: "Clothing",
        href: "#",
        height: "md",
      },
      {
        imageUrl: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800",
        title: "Shoes",
        href: "#",
        height: "xl",
      },
      {
        imageUrl: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800",
        title: "Bags",
        href: "#",
        height: "md",
      },
    ],
    columns: 3,
    gap: "md",
    overlayStyle: "gradient",
  },
  render: (props) => <MasonryGrid {...props} />,
};
