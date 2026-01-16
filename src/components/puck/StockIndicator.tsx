"use client";

import { cn } from "@/lib/utils/cn";

interface Props {
  level?: "in_stock" | "low_stock" | "very_low" | "out_of_stock";
  quantity?: number;
  showQuantity?: boolean;
  showProgressBar?: boolean;
  variant?: "minimal" | "standard" | "urgent";
  animation?: "none" | "pulse";
}

const levelConfig = {
  in_stock: {
    color: "text-green-600",
    bgColor: "bg-green-500",
    icon: "●",
    text: "En stock",
  },
  low_stock: {
    color: "text-amber-600",
    bgColor: "bg-amber-500",
    icon: "⚠️",
    text: "Pocas unidades",
  },
  very_low: {
    color: "text-red-600",
    bgColor: "bg-red-500",
    icon: "🚨",
    text: "¡Últimas unidades!",
  },
  out_of_stock: {
    color: "text-gray-500",
    bgColor: "bg-gray-400",
    icon: "✕",
    text: "Agotado",
  },
};

const variantStyles = {
  minimal: "text-xs",
  standard: "text-sm",
  urgent: "text-sm font-bold",
};

export function StockIndicator({
  level = "in_stock",
  quantity,
  showQuantity = true,
  showProgressBar = false,
  variant = "standard",
  animation = "none",
}: Props) {
  const config = levelConfig[level];
  const isUrgent = variant === "urgent" && (level === "low_stock" || level === "very_low");

  // Calculate progress (assuming max stock is 100)
  const progress = quantity ? Math.min((quantity / 20) * 100, 100) : 50;

  return (
    <div className="space-y-1">
      <div
        className={cn(
          "flex items-center gap-1.5",
          config.color,
          variantStyles[variant],
          animation === "pulse" && isUrgent && "animate-pulse"
        )}
      >
        <span>{config.icon}</span>
        <span>
          {showQuantity && quantity !== undefined && quantity > 0 ? (
            level === "very_low" || level === "low_stock" ? (
              <>¡Solo quedan {quantity}!</>
            ) : (
              <>{config.text} ({quantity})</>
            )
          ) : (
            config.text
          )}
        </span>
      </div>

      {showProgressBar && level !== "out_of_stock" && (
        <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
          <div
            className={cn(
              "h-full rounded-full transition-all duration-300",
              config.bgColor,
              isUrgent && "animate-pulse"
            )}
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
    </div>
  );
}
