"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils/cn";
import { useThemeStrategy } from "@/hooks/useThemeStrategy";
import { ACTION_ICONS } from "./constants/icons";

interface Props {
  text?: string;
  variant?: "primary" | "secondary" | "outline";
  // Link support - when provided, button acts as a link
  href?: string;
  // New props
  size?: "sm" | "md" | "lg";
  icon?: "cart" | "heart" | "check" | "plus" | "none";
  iconPosition?: "before" | "after";
  isLoading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  // Quantity selector
  showQuantity?: boolean;
  quantity?: number;
  minQuantity?: number;
  maxQuantity?: number;
  // Feedback
  showSuccessFeedback?: boolean;
  successMessage?: string;
  successDuration?: number;
}

// Default variant classes (fallback)
const variantClasses = {
  primary: "bg-black text-white hover:bg-gray-800",
  secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
  outline: "border-2 border-black text-black hover:bg-black hover:text-white",
};

// Size styles
const sizeStyles = {
  sm: "text-sm py-2 px-4",
  md: "text-base py-3 px-6",
  lg: "text-lg py-4 px-8",
};

export function BuyButton({
  text = "Agregar al carrito",
  variant = "primary",
  href,
  size = "md",
  icon,
  iconPosition = "before",
  isLoading = false,
  disabled = false,
  fullWidth = false,
  showQuantity = false,
  quantity: initialQuantity = 1,
  minQuantity = 1,
  maxQuantity = 99,
  showSuccessFeedback = false,
  successMessage = "¡Agregado!",
  successDuration = 2000,
}: Props) {
  // ✅ Strategy Pattern: usar estrategia en lugar de presetStyles
  const strategy = useThemeStrategy();
  const themePreset = strategy.name;
  const [qty, setQty] = useState(initialQuantity);
  const [showSuccess, setShowSuccess] = useState(false);

  // Get styles from strategy
  const buttonStyles = strategy.getButtonStyles();
  const effectiveVariantStyle = buttonStyles[variant] || variantClasses[variant];
  const shapeStyle = strategy.getButtonShapeStyles();
  const sizeClass = sizeStyles[size];

  // Determine icon - use prop or default based on preset/variant
  const effectiveIcon = icon === "none"
    ? null
    : icon
      ? ACTION_ICONS[icon]
      : themePreset === "temu" && variant === "primary"
        ? "🛒"
        : null;

  const handleClick = () => {
    if (disabled || isLoading) return;

    if (showSuccessFeedback) {
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), successDuration);
    }
    alert(`Agregado al carrito: ${qty} unidad(es)`);
  };

  const handleQtyChange = (delta: number) => {
    setQty((prev) => Math.min(Math.max(prev + delta, minQuantity), maxQuantity));
  };

  // Success state
  if (showSuccess) {
    return (
      <div
        className={cn(
          "inline-flex items-center justify-center gap-2 transition-all duration-200",
          effectiveVariantStyle,
          shapeStyle,
          sizeClass,
          fullWidth ? "w-full" : "w-auto",
          "bg-green-500 text-white"
        )}
      >
        <span>✓</span>
        <span>{successMessage}</span>
      </div>
    );
  }

  return (
    <div className={cn(
      "inline-flex items-center gap-2",
      fullWidth && "w-full"
    )}>
      {/* Quantity Selector */}
      {showQuantity && (
        <div className={cn(
          "inline-flex items-center border rounded-lg overflow-hidden",
          themePreset === "carey" ? "border-gray-200" : "border-gray-300"
        )}>
          <button
            className={cn(
              "px-3 py-2 hover:bg-gray-100 transition-colors",
              qty <= minQuantity && "opacity-50 cursor-not-allowed"
            )}
            onClick={() => handleQtyChange(-1)}
            disabled={qty <= minQuantity}
          >
            −
          </button>
          <span className="px-3 py-2 min-w-[2.5rem] text-center font-medium">
            {qty}
          </span>
          <button
            className={cn(
              "px-3 py-2 hover:bg-gray-100 transition-colors",
              qty >= maxQuantity && "opacity-50 cursor-not-allowed"
            )}
            onClick={() => handleQtyChange(1)}
            disabled={qty >= maxQuantity}
          >
            +
          </button>
        </div>
      )}

      {/* Main Button - render as Link if href provided, otherwise button */}
      {href ? (
        <Link
          href={href}
          className={cn(
            "transition-all duration-200 inline-flex items-center justify-center gap-2",
            effectiveVariantStyle,
            shapeStyle,
            sizeClass,
            fullWidth && !showQuantity ? "w-full" : fullWidth ? "flex-1" : "w-auto"
          )}
        >
          {/* Icon Before */}
          {effectiveIcon && iconPosition === "before" && (
            <span>{effectiveIcon}</span>
          )}

          {/* Text */}
          <span>{text}</span>

          {/* Icon After */}
          {effectiveIcon && iconPosition === "after" && (
            <span>{effectiveIcon}</span>
          )}
        </Link>
      ) : (
        <button
          className={cn(
            "transition-all duration-200 inline-flex items-center justify-center gap-2",
            effectiveVariantStyle,
            shapeStyle,
            sizeClass,
            fullWidth && !showQuantity ? "w-full" : fullWidth ? "flex-1" : "w-auto",
            themePreset === "temu" && variant === "primary" && !disabled && !isLoading && "animate-pulse hover:animate-none",
            disabled && "opacity-50 cursor-not-allowed",
            isLoading && "opacity-75 cursor-wait"
          )}
          onClick={handleClick}
          disabled={disabled || isLoading}
        >
          {/* Loading Spinner */}
          {isLoading && (
            <svg
              className="animate-spin h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          )}

          {/* Icon Before */}
          {!isLoading && effectiveIcon && iconPosition === "before" && (
            <span>{effectiveIcon}</span>
          )}

          {/* Text */}
          <span>{isLoading ? "Agregando..." : text}</span>

          {/* Icon After */}
          {!isLoading && effectiveIcon && iconPosition === "after" && (
            <span>{effectiveIcon}</span>
          )}
        </button>
      )}
    </div>
  );
}
