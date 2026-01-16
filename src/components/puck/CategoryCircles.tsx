"use client";

import { cn } from "@/lib/utils/cn";
import { useThemePreset, type ThemePreset } from "./ThemeContext";
import Image from "next/image";

interface CategoryItem {
  id: string;
  name: string;
  image: string;
  link?: string;
}

interface Props {
  title?: string;
  categories?: CategoryItem[];
  size?: "sm" | "md" | "lg";
  shape?: "circle" | "square" | "rounded" | "pill" | "hexagon";
  showTitle?: boolean;
  titlePosition?: "below" | "overlay";
  gap?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: "w-16 h-16 md:w-20 md:h-20",
  md: "w-20 h-20 md:w-24 md:h-24",
  lg: "w-24 h-24 md:w-32 md:h-32",
};

const textSizeClasses = {
  sm: "text-xs",
  md: "text-sm",
  lg: "text-base",
};

const gapClasses = {
  sm: "gap-2",
  md: "gap-4",
  lg: "gap-6",
};

// Shape classes for different visual styles
const shapeClasses = {
  circle: "rounded-full aspect-square",
  square: "rounded-none aspect-square",
  rounded: "rounded-xl aspect-square",
  pill: "rounded-full aspect-[1.5/1]",
  hexagon: "aspect-square [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]",
};

// Size classes adjusted for different shapes
const sizeByShape = {
  circle: {
    sm: "w-16 h-16 md:w-20 md:h-20",
    md: "w-20 h-20 md:w-24 md:h-24",
    lg: "w-24 h-24 md:w-32 md:h-32",
  },
  square: {
    sm: "w-16 h-16 md:w-20 md:h-20",
    md: "w-20 h-20 md:w-24 md:h-24",
    lg: "w-24 h-24 md:w-32 md:h-32",
  },
  rounded: {
    sm: "w-16 h-16 md:w-20 md:h-20",
    md: "w-20 h-20 md:w-24 md:h-24",
    lg: "w-24 h-24 md:w-32 md:h-32",
  },
  pill: {
    sm: "w-24 h-16 md:w-28 md:h-20",
    md: "w-28 h-20 md:w-36 md:h-24",
    lg: "w-36 h-24 md:w-48 md:h-32",
  },
  hexagon: {
    sm: "w-18 h-16 md:w-22 md:h-20",
    md: "w-22 h-20 md:w-28 md:h-24",
    lg: "w-28 h-24 md:w-36 md:h-32",
  },
};

// Preset-specific styles
const presetStyles: Record<ThemePreset, { container: string; circle: string; text: string }> = {
  elegante: {
    container: "bg-[#FDF8F3]",
    circle: "border-2 border-[#E8E0D8] hover:border-[#7CB69D] shadow-sm",
    text: "text-[#3D3D3D] font-medium",
  },
  urbano: {
    container: "bg-[#0A0A0A]",
    circle: "border-2 border-white/20 hover:border-white",
    text: "text-white font-bold uppercase tracking-wide",
  },
  promocional: {
    container: "bg-gradient-to-r from-orange-50 to-yellow-50 p-4 rounded-2xl",
    circle: "border-3 border-[#FF4D00] hover:border-[#FFD700] shadow-md hover:shadow-lg hover:scale-105 transition-all",
    text: "text-[#1F1F1F] font-bold",
  },
  minimalista: {
    container: "bg-white",
    circle: "border border-gray-200 hover:border-black",
    text: "text-black font-light uppercase tracking-widest text-[10px]",
  },
  moderno: {
    container: "bg-[#FAFAFA] p-4 rounded-xl",
    circle: "border-2 border-gray-200 hover:border-[#0097AA] shadow-sm hover:shadow-md",
    text: "text-[#1A1A1A] font-semibold",
  },
  zara: {
    container: "bg-white",
    circle: "border border-gray-100",
    text: "text-black font-light uppercase tracking-wide",
  },
  temu: {
    container: "bg-gradient-to-r from-orange-50 to-yellow-50 p-4 rounded-2xl",
    circle: "border-2 border-orange-300 hover:border-orange-500 shadow-md",
    text: "text-gray-800 font-bold",
  },
  tiendanube: {
    container: "bg-gray-50 p-4 rounded-xl",
    circle: "border-2 border-gray-200 hover:border-blue-500 shadow-sm",
    text: "text-gray-800 font-medium",
  },
  carey: {
    container: "bg-[#FAFAFA] p-4 rounded-xl",
    circle: "border-2 border-gray-200 hover:border-[#0097aa] shadow-sm",
    text: "text-[#1a1a1a] font-medium",
  },
  custom: {
    container: "bg-gray-50 p-4 rounded-xl",
    circle: "border-2 border-gray-200 hover:border-[var(--theme-primary)] shadow-sm",
    text: "text-gray-800 font-medium",
  },
};

// Default categories for demo
const defaultCategories: CategoryItem[] = [
  { id: "1", name: "Ropa", image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=200&h=200&fit=crop" },
  { id: "2", name: "Zapatos", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&h=200&fit=crop" },
  { id: "3", name: "Accesorios", image: "https://images.unsplash.com/photo-1611923134239-b9be5816e23c?w=200&h=200&fit=crop" },
  { id: "4", name: "Bolsos", image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=200&h=200&fit=crop" },
  { id: "5", name: "Joyas", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=200&h=200&fit=crop" },
  { id: "6", name: "Hogar", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=200&h=200&fit=crop" },
];

export function CategoryCircles({
  title = "Categorias",
  categories = defaultCategories,
  size = "md",
  shape = "circle",
  showTitle = true,
  titlePosition = "below",
  gap = "md",
}: Props) {
  const themePreset = useThemePreset();
  const styles = presetStyles[themePreset];

  // Get size classes based on shape
  const currentSizeClasses = sizeByShape[shape]?.[size] || sizeClasses[size];

  return (
    <div className={cn("w-full py-4", styles.container)}>
      {title && themePreset === "promocional" && (
        <h3 className="text-center text-xl font-bold mb-4 text-[#1F1F1F]">
          {title}
        </h3>
      )}

      <div className={cn(
        "flex overflow-x-auto scrollbar-hide pb-2",
        gapClasses[gap],
        "justify-start md:justify-center"
      )}>
        {categories.map((category) => (
          <a
            key={category.id}
            href={category.link || "#"}
            className="flex flex-col items-center flex-shrink-0 group"
          >
            <div
              className={cn(
                "overflow-hidden transition-all duration-200",
                currentSizeClasses,
                shapeClasses[shape],
                styles.circle
              )}
            >
              <Image
                src={category.image}
                alt={category.name}
                width={128}
                height={128}
                className="w-full h-full object-cover"
              />
            </div>

            {showTitle && titlePosition === "below" && (
              <span
                className={cn(
                  "mt-2 text-center whitespace-nowrap",
                  textSizeClasses[size],
                  styles.text
                )}
              >
                {category.name}
              </span>
            )}
          </a>
        ))}
      </div>
    </div>
  );
}
