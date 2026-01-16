"use client";

import { cn } from "@/lib/utils/cn";
import { formatPrice } from "@/lib/utils/formatPrice";
import { useThemeStrategy } from "@/hooks/useThemeStrategy";
import type { Installment, PriceRange } from "./types";

interface Props {
  amount?: number;
  currency?: string;
  showCompare?: boolean;
  compareAmount?: number;
  // New props
  size?: "sm" | "md" | "lg";
  layout?: "inline" | "stacked";
  // Price range
  showRange?: boolean;
  priceRange?: PriceRange;
  // Installments
  showInstallments?: boolean;
  installments?: Installment;
  // Subscription/billing
  billingCycle?: "one-time" | "monthly" | "yearly";
  // Shipping
  showFreeShipping?: boolean;
  freeShippingThreshold?: number;
  // Savings
  showSavings?: boolean;
  // Tax info
  showTaxInfo?: boolean;
  taxIncluded?: boolean;
}

// Size styles
const sizeStyles = {
  sm: {
    main: "text-lg md:text-xl",
    compare: "text-sm",
    secondary: "text-xs",
  },
  md: {
    main: "text-2xl md:text-3xl",
    compare: "text-lg",
    secondary: "text-sm",
  },
  lg: {
    main: "text-3xl md:text-4xl",
    compare: "text-xl",
    secondary: "text-base",
  },
};

// Billing cycle labels
const billingCycleLabels = {
  "one-time": "",
  monthly: "/mes",
  yearly: "/año",
};

export function Price({
  amount = 15000,
  currency = "ARS",
  showCompare = false,
  compareAmount,
  size = "md",
  layout = "inline",
  showRange = false,
  priceRange,
  showInstallments = false,
  installments,
  billingCycle = "one-time",
  showFreeShipping = false,
  freeShippingThreshold = 50000,
  showSavings = false,
  showTaxInfo = false,
  taxIncluded = true,
}: Props) {
  // ✅ Strategy Pattern: usar estrategia en lugar de presetPriceStyles
  const strategy = useThemeStrategy();
  const themePreset = strategy.name;
  const styles = strategy.getPriceStyles();
  const sizeStyle = sizeStyles[size];

  const hasDiscount = showCompare && compareAmount && compareAmount > amount;
  const discountPercent = hasDiscount ? Math.round(((compareAmount - amount) / compareAmount) * 100) : 0;
  const savings = hasDiscount ? compareAmount - amount : 0;

  // Price range display
  if (showRange && priceRange) {
    return (
      <div className={cn(layout === "stacked" ? "flex flex-col gap-1" : "flex items-center gap-2 flex-wrap")}>
        <span className={cn(styles.main, sizeStyle.main)}>
          {formatPrice(priceRange.min, currency)} - {formatPrice(priceRange.max, currency)}
        </span>
        {billingCycle !== "one-time" && (
          <span className={cn(sizeStyle.secondary, "text-gray-500")}>
            {billingCycleLabels[billingCycle]}
          </span>
        )}
      </div>
    );
  }

  return (
    <div className={cn(layout === "stacked" ? "flex flex-col gap-1" : "flex items-center gap-2 flex-wrap")}>
      {/* Main Price Row */}
      <div className="flex items-center gap-2 flex-wrap">
        <span className={cn(
          styles.main,
          sizeStyle.main,
          hasDiscount && themePreset === "carey" && "text-[#d63384]"
        )}>
          {formatPrice(amount, currency)}
          {billingCycle !== "one-time" && (
            <span className={cn(sizeStyle.secondary, "text-gray-500 font-normal ml-1")}>
              {billingCycleLabels[billingCycle]}
            </span>
          )}
        </span>

        {hasDiscount && (
          <span className={cn(styles.compare, sizeStyle.compare)}>
            {formatPrice(compareAmount, currency)}
          </span>
        )}

        {hasDiscount && themePreset !== "zara" && (
          <span className={styles.discount}>
            -{discountPercent}%
          </span>
        )}
      </div>

      {/* Savings Row */}
      {hasDiscount && (showSavings || themePreset === "temu" || themePreset === "carey") && (
        <div className="w-full">
          <span className={cn(
            sizeStyle.secondary,
            "font-medium",
            themePreset === "carey" ? "text-[#0097aa]" : "text-green-600"
          )}>
            Ahorrás {formatPrice(savings, currency)}
          </span>
        </div>
      )}

      {/* Installments Row */}
      {showInstallments && installments && (
        <div className="w-full">
          <span className={cn(
            sizeStyle.secondary,
            installments.interestFree
              ? themePreset === "carey"
                ? "text-[#0097aa] font-medium"
                : "text-green-600 font-medium"
              : "text-gray-600"
          )}>
            {installments.count}x {formatPrice(installments.amount, currency)}
            {installments.interestFree && " sin interés"}
          </span>
        </div>
      )}

      {/* Free Shipping */}
      {showFreeShipping && amount >= freeShippingThreshold && (
        <div className="w-full">
          <span className={cn(
            sizeStyle.secondary,
            "flex items-center gap-1 font-medium",
            themePreset === "carey" ? "text-[#0097aa]" : "text-green-600"
          )}>
            <span>🚚</span>
            <span>Envío gratis</span>
          </span>
        </div>
      )}

      {/* Tax Info */}
      {showTaxInfo && (
        <div className="w-full">
          <span className={cn(sizeStyle.secondary, "text-gray-500")}>
            {taxIncluded ? "IVA incluido" : "+ IVA"}
          </span>
        </div>
      )}
    </div>
  );
}
