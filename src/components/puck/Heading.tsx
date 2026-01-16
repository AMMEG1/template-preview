"use client";

import { cn } from "@/lib/utils/cn";
import { useThemeStrategy } from "@/hooks/useThemeStrategy";

interface Props {
  text?: string;
  level?: "h1" | "h2" | "h3" | "h4";
  align?: "left" | "center" | "right";
  style?: "clean" | "underline" | "with-subtitle" | "highlight" | "with-icon";
  subtitle?: string;
  icon?: string;
  highlightColor?: "black" | "gray" | "red" | "yellow";
}

// Default level classes (fallback)
const levelClasses = {
  h1: "text-3xl md:text-4xl lg:text-5xl font-bold",
  h2: "text-2xl md:text-3xl lg:text-4xl font-bold",
  h3: "text-xl md:text-2xl lg:text-3xl font-semibold",
  h4: "text-lg md:text-xl lg:text-2xl font-semibold",
};

const alignClasses = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

const highlightColorClasses = {
  black: "bg-black text-white",
  gray: "bg-gray-100 text-gray-900",
  red: "bg-red-600 text-white",
  yellow: "bg-yellow-400 text-black",
};

export function Heading({
  text = "Título",
  level = "h2",
  align = "center",
  style = "clean",
  subtitle = "",
  icon = "🔥",
  highlightColor = "black",
}: Props) {
  const Tag = level;
  // ✅ Strategy Pattern: usar estrategia en lugar de presetLevelClasses
  const strategy = useThemeStrategy();
  const themePreset = strategy.name;

  // Get preset-specific level classes from strategy
  const headingStyles = strategy.getHeadingStyles();
  const levelClass = headingStyles[level] || levelClasses[level];

  // Preset-specific text color
  const textColorClass = themePreset === "zara" ? "text-black" : "text-[var(--theme-text)]";
  const subtitleColorClass = themePreset === "zara" ? "text-gray-500 font-light" : "text-[var(--theme-muted)]";

  // Underline color from strategy
  const underlineColorClass = strategy.getUnderlineColor();

  // Clean style
  if (style === "clean") {
    return (
      <Tag className={cn(levelClass, alignClasses[align], textColorClass)}>
        {text}
      </Tag>
    );
  }

  // Underline style
  if (style === "underline") {
    return (
      <div className={alignClasses[align]}>
        <Tag className={cn(levelClass, textColorClass, "inline-block")}>
          {text}
        </Tag>
        <div
          className={cn(
            "h-1 mt-2",
            underlineColorClass,
            align === "center" && "mx-auto w-24",
            align === "left" && "w-24",
            align === "right" && "ml-auto w-24",
            themePreset === "zara" && "h-px w-32"
          )}
        />
      </div>
    );
  }

  // With subtitle style
  if (style === "with-subtitle") {
    return (
      <div className={alignClasses[align]}>
        <Tag className={cn(levelClass, textColorClass)}>
          {text}
        </Tag>
        {subtitle && (
          <p className={cn("mt-2 text-base md:text-lg", subtitleColorClass)}>
            {subtitle}
          </p>
        )}
      </div>
    );
  }

  // Highlight style
  if (style === "highlight") {
    const presetHighlightClasses = strategy.getHighlightStyles() || highlightColorClasses[highlightColor];

    return (
      <div className={alignClasses[align]}>
        <Tag
          className={cn(
            levelClass,
            presetHighlightClasses,
            "inline-block px-4 py-2",
            themePreset === "temu" && "rounded-lg shadow-lg"
          )}
        >
          {text}
        </Tag>
      </div>
    );
  }

  // With icon style
  if (style === "with-icon") {
    return (
      <div className={cn(alignClasses[align], "flex items-center gap-3", align === "center" && "justify-center")}>
        <span className={cn(
          "text-2xl md:text-3xl",
          themePreset === "temu" && "animate-bounce"
        )}>{icon}</span>
        <Tag className={cn(levelClass, textColorClass)}>
          {text}
        </Tag>
      </div>
    );
  }

  // Default (fallback to clean)
  return (
    <Tag className={cn(levelClass, alignClasses[align], textColorClass)}>
      {text}
    </Tag>
  );
}
