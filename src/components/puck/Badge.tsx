"use client";

import { cn } from "@/lib/utils/cn";
import { useThemeStrategy } from "@/hooks/useThemeStrategy";
import { BADGE_ICONS } from "./constants/icons";
import type { BadgeType } from "./types";

interface Props {
  text?: string;
  type?: BadgeType;
  size?: "xs" | "sm" | "md" | "lg";
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "inline";
  animation?: "none" | "pulse" | "bounce" | "shake";
  customBgColor?: string;
  customTextColor?: string;
  // New props
  icon?: "fire" | "bolt" | "star" | "heart" | "tag" | "truck" | "check" | "none";
  iconPosition?: "before" | "after";
  borderStyle?: "none" | "solid" | "gradient";
  tooltip?: string;
  rotation?: number; // Degrees for ribbon-style badge
  showShadow?: boolean;
}

// Default type styles (fallback)
const typeStyles = {
  discount: "bg-red-500 text-white",
  new: "bg-green-500 text-white",
  hot: "bg-orange-500 text-white",
  limited: "bg-red-700 text-white",
  flash: "bg-gradient-to-r from-red-500 to-orange-500 text-white",
  bestseller: "bg-amber-400 text-amber-900",
  custom: "",
};

const sizeStyles = {
  xs: "text-[10px] px-1.5 py-0.5",
  sm: "text-xs px-2 py-0.5",
  md: "text-sm px-2.5 py-1",
  lg: "text-base px-3 py-1.5",
};

const positionStyles = {
  "top-left": "absolute top-2 left-2",
  "top-right": "absolute top-2 right-2",
  "bottom-left": "absolute bottom-2 left-2",
  "bottom-right": "absolute bottom-2 right-2",
  inline: "relative",
};

const animationStyles = {
  none: "",
  pulse: "animate-pulse",
  bounce: "animate-bounce",
  shake: "animate-[shake_0.5s_ease-in-out_infinite]",
};

// Border styles
const borderStyleClasses = {
  none: "",
  solid: "border-2 border-current",
  gradient: "border-2 border-transparent bg-clip-padding",
};

export function Badge({
  text = "NUEVO",
  type = "new",
  size = "sm",
  position = "inline",
  animation = "none",
  customBgColor,
  customTextColor,
  icon,
  iconPosition = "before",
  borderStyle = "none",
  tooltip,
  rotation = 0,
  showShadow = false,
}: Props) {
  // ✅ Strategy Pattern: usar estrategia en lugar de presetStyles
  const strategy = useThemeStrategy();
  const themePreset = strategy.name;

  const customStyles = type === "custom" && customBgColor
    ? { backgroundColor: customBgColor, color: customTextColor || "#fff" }
    : undefined;

  // Get preset-aware type style from strategy
  const badgeStyles = strategy.getBadgeStyles();
  const effectiveTypeStyle = badgeStyles[type] || typeStyles[type];
  const shapeStyle = strategy.getBadgeShapeStyles();
  const borderClass = borderStyleClasses[borderStyle];

  // Temu preset gets automatic animation for certain types
  const effectiveAnimation = themePreset === "temu" && animation === "none" && (type === "flash" || type === "hot" || type === "limited")
    ? "pulse"
    : animation;

  // Zara preset: no emojis (unless explicitly set)
  const showDefaultEmoji = themePreset !== "zara" && !icon;

  // Determine icon to show
  const iconToShow = icon && icon !== "none" ? BADGE_ICONS[icon] : null;

  // Default emoji based on type
  const defaultEmoji = showDefaultEmoji
    ? type === "hot"
      ? "🔥"
      : type === "flash"
        ? "⚡"
        : type === "bestseller"
          ? "★"
          : null
    : null;

  const finalIcon = iconToShow || defaultEmoji;

  // Rotation styles for ribbon effect
  const rotationStyles = rotation !== 0
    ? { transform: `rotate(${rotation}deg)`, transformOrigin: "center" }
    : undefined;

  const badge = (
    <span
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap z-10 gap-1",
        effectiveTypeStyle,
        sizeStyles[size],
        positionStyles[position],
        animationStyles[effectiveAnimation],
        shapeStyle,
        borderClass,
        showShadow && "shadow-md",
        rotation !== 0 && "absolute"
      )}
      style={{ ...customStyles, ...rotationStyles }}
      title={tooltip}
    >
      {finalIcon && iconPosition === "before" && <span>{finalIcon}</span>}
      <span>{text}</span>
      {finalIcon && iconPosition === "after" && <span>{finalIcon}</span>}
    </span>
  );

  // If tooltip is provided, wrap with a tooltip container
  if (tooltip) {
    return (
      <span className="relative group">
        {badge}
        <span className={cn(
          "absolute z-20 px-2 py-1 text-xs bg-gray-900 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none",
          position === "top-left" || position === "top-right" ? "top-full mt-1" : "bottom-full mb-1",
          "left-1/2 -translate-x-1/2"
        )}>
          {tooltip}
        </span>
      </span>
    );
  }

  return badge;
}
