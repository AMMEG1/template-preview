"use client";

import { cn } from "@/lib/utils/cn";
import { CountdownTimer } from "./CountdownTimer";
import { useThemePreset, useThemeColors, type ThemePreset } from "./ThemeContext";

interface Props {
  variant?: "simple" | "with-icon" | "with-timer" | "scrolling";
  text?: string;
  backgroundColor?: string;
  textColor?: string;
  icon?: "truck" | "percent" | "gift" | "fire" | "star";
  timerEndDate?: string;
  scrollSpeed?: "slow" | "normal" | "fast";
}

const iconMap = {
  truck: "🚚",
  percent: "%",
  gift: "🎁",
  fire: "🔥",
  star: "⭐",
};

const scrollSpeedClasses = {
  slow: "animate-[scroll_30s_linear_infinite]",
  normal: "animate-[scroll_20s_linear_infinite]",
  fast: "animate-[scroll_10s_linear_infinite]",
};

// Preset-specific default colors
const presetDefaultColors: Record<ThemePreset, { bg: string; text: string }> = {
  zara: { bg: "#000000", text: "#ffffff" },
  temu: { bg: "#FF6D00", text: "#ffffff" },
  tiendanube: { bg: "#2563EB", text: "#ffffff" },
  custom: { bg: "#000000", text: "#ffffff" },
  carey: { bg: "#d4f769", text: "#1a1a1a" },
  elegante: { bg: "#7CB69D", text: "#ffffff" },
  urbano: { bg: "#000000", text: "#ffffff" },
  promocional: { bg: "#DC2626", text: "#ffffff" },
  minimalista: { bg: "#ffffff", text: "#000000" },
  moderno: { bg: "#0097AA", text: "#ffffff" },
};

// Preset-specific text styles
const presetTextStyles: Record<ThemePreset, string> = {
  zara: "text-xs uppercase tracking-[0.2em] font-light",
  temu: "text-sm font-bold",
  tiendanube: "text-sm font-medium",
  custom: "text-sm font-medium",
  carey: "text-xs uppercase tracking-wide font-semibold",
  elegante: "text-sm font-medium tracking-wide",
  urbano: "text-xs uppercase tracking-widest font-bold",
  promocional: "text-sm font-extrabold",
  minimalista: "text-xs uppercase tracking-[0.2em] font-light",
  moderno: "text-sm font-semibold",
};

export function PromoBar({
  variant = "simple",
  text = "Envío gratis en compras mayores a $50.000",
  backgroundColor,
  textColor,
  icon = "truck",
  timerEndDate = "",
  scrollSpeed = "normal",
}: Props) {
  const themePreset = useThemePreset();
  const themeColors = useThemeColors();

  // Use preset colors if custom colors not provided
  const effectiveBgColor = backgroundColor || (themePreset === "custom" ? themeColors.primary : presetDefaultColors[themePreset].bg);
  const effectiveTextColor = textColor || presetDefaultColors[themePreset].text;
  const textStyle = presetTextStyles[themePreset];

  const showIcon = variant === "with-icon";
  const showTimer = variant === "with-timer" && timerEndDate;
  const isScrolling = variant === "scrolling";

  // Scrolling variant
  if (isScrolling) {
    return (
      <div
        className={cn(
          "overflow-hidden py-2",
          themePreset === "temu" && "py-3"
        )}
        style={{ backgroundColor: effectiveBgColor }}
      >
        <div
          className={cn(
            "flex whitespace-nowrap",
            scrollSpeedClasses[scrollSpeed]
          )}
          style={{ color: effectiveTextColor }}
        >
          {/* Repeat text multiple times for seamless scroll */}
          {[...Array(4)].map((_, i) => (
            <span key={i} className={cn("mx-8", textStyle)}>
              {text} • {text} • {text} •
            </span>
          ))}
        </div>
        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </div>
    );
  }

  // Static variants
  return (
    <div
      className={cn(
        "py-2 px-4",
        themePreset === "temu" && "py-3"
      )}
      style={{ backgroundColor: effectiveBgColor }}
    >
      <div
        className={cn(
          "flex items-center justify-center gap-3",
          textStyle
        )}
        style={{ color: effectiveTextColor }}
      >
        {/* Icon */}
        {showIcon && (
          <span className={cn(
            "text-lg",
            themePreset === "temu" && "animate-bounce"
          )}>{iconMap[icon]}</span>
        )}

        {/* Text */}
        <span>{text}</span>

        {/* Timer */}
        {showTimer && (
          <div className="ml-2">
            <CountdownTimer
              endDate={timerEndDate}
              variant={themePreset === "temu" ? "aggressive" : "minimal"}
              size="sm"
              showDays={false}
              showSeconds={true}
            />
          </div>
        )}
      </div>
    </div>
  );
}
