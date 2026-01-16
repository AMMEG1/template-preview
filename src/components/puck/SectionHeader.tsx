"use client";

import { cn } from "@/lib/utils/cn";
import { useThemePreset, type ThemePreset } from "./ThemeContext";

interface Props {
  variant?: "simple" | "with-link" | "with-count";
  title?: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  viewAllLink?: string;
  viewAllText?: string;
  itemCount?: number;
}

const alignClasses = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

// Preset-specific title styles
const presetTitleStyles: Record<ThemePreset, string> = {
  zara: "font-light tracking-wide uppercase text-xl md:text-2xl",
  temu: "font-extrabold text-2xl md:text-3xl",
  tiendanube: "font-bold text-2xl md:text-3xl",
  custom: "font-bold text-2xl md:text-3xl",
  carey: "font-semibold text-2xl md:text-3xl tracking-tight",
  elegante: "font-light tracking-wide text-2xl md:text-3xl",
  urbano: "font-extrabold uppercase tracking-widest text-2xl md:text-3xl",
  promocional: "font-extrabold text-2xl md:text-3xl",
  minimalista: "font-light uppercase tracking-[0.15em] text-xl md:text-2xl",
  moderno: "font-bold text-2xl md:text-3xl",
};

// Preset-specific link styles
const presetLinkStyles: Record<ThemePreset, string> = {
  zara: "text-xs uppercase tracking-[0.15em] text-gray-600 hover:text-black border-b border-transparent hover:border-black pb-1",
  temu: "bg-gradient-to-r from-orange-500 to-orange-400 text-white text-sm font-bold px-4 py-1.5 rounded-full shadow-md hover:shadow-lg transition-shadow",
  tiendanube: "text-[var(--theme-primary)] font-medium hover:underline",
  custom: "text-[var(--theme-primary)] font-medium hover:underline",
  carey: "text-[#0097aa] font-medium hover:text-[#007a8a] hover:underline transition-colors",
  elegante: "text-[#7CB69D] font-medium hover:text-[#6AA08A] transition-colors",
  urbano: "text-white font-bold uppercase tracking-wide hover:text-[#FF0000] transition-colors",
  promocional: "bg-gradient-to-r from-[#FF4D00] to-[#FF6D00] text-white text-sm font-bold px-4 py-1.5 rounded-full shadow-md hover:shadow-lg transition-shadow",
  minimalista: "text-xs uppercase tracking-[0.15em] text-gray-500 hover:text-black border-b border-transparent hover:border-black pb-1",
  moderno: "text-[#0097AA] font-semibold hover:text-[#007A8A] transition-colors",
};

export function SectionHeader({
  variant = "simple",
  title = "Sección",
  subtitle,
  align = "left",
  viewAllLink = "#",
  viewAllText = "Ver todo",
  itemCount = 0,
}: Props) {
  const themePreset = useThemePreset();
  const showLink = variant === "with-link" || variant === "with-count";
  const showCount = variant === "with-count";

  const titleStyle = presetTitleStyles[themePreset];
  const linkStyle = presetLinkStyles[themePreset];
  const textColorClass = "text-[var(--theme-text)]";
  const mutedColorClass = "text-[var(--theme-muted)]";

  // Simple variant - just title and optional subtitle
  if (variant === "simple") {
    return (
      <div className={cn("py-4", alignClasses[align])}>
        <h2 className={cn(titleStyle, textColorClass)}>{title}</h2>
        {subtitle && (
          <p className={cn("mt-1", mutedColorClass)}>{subtitle}</p>
        )}
      </div>
    );
  }

  // With link / with count variants
  return (
    <div className={cn(
      "py-4 flex items-center",
      align === "center" && "justify-center",
      align === "right" && "justify-end",
      align === "left" && "justify-between"
    )}>
      <div className={align === "left" ? "" : alignClasses[align]}>
        <h2 className={cn(titleStyle, textColorClass)}>
          {title}
          {showCount && itemCount > 0 && (
            <span className={cn(
              "ml-2 text-lg font-normal",
              mutedColorClass,
              themePreset === "temu" && "bg-orange-100 text-orange-600 px-2 py-0.5 rounded-full text-sm font-bold"
            )}>
              {themePreset === "temu" ? itemCount : `(${itemCount})`}
            </span>
          )}
        </h2>
        {subtitle && (
          <p className={cn("mt-1", mutedColorClass)}>{subtitle}</p>
        )}
      </div>

      {showLink && align === "left" && (
        <a
          href={viewAllLink}
          className={cn(
            "section-header-link flex items-center gap-1 transition-all",
            linkStyle
          )}
        >
          <span>{viewAllText}</span>
          {themePreset !== "temu" && (
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          )}
        </a>
      )}
    </div>
  );
}
