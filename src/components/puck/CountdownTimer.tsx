"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils/cn";

interface Props {
  endDate?: string; // ISO date string
  variant?: "minimal" | "standard" | "aggressive";
  showDays?: boolean;
  showSeconds?: boolean;
  size?: "sm" | "md" | "lg";
  backgroundColor?: string;
  textColor?: string;
  onComplete?: "hide" | "show_expired" | "show_message";
  expiredMessage?: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  expired: boolean;
}

function calculateTimeLeft(endDate: string): TimeLeft {
  const difference = new Date(endDate).getTime() - new Date().getTime();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
    expired: false,
  };
}

const sizeStyles = {
  sm: "text-xs",
  md: "text-sm",
  lg: "text-base",
};

const variantStyles = {
  minimal: "text-gray-600",
  standard: "text-gray-800 font-medium",
  aggressive: "text-red-600 font-bold",
};

export function CountdownTimer({
  endDate,
  variant = "standard",
  showDays = true,
  showSeconds = true,
  size = "md",
  backgroundColor,
  textColor,
  onComplete = "show_expired",
  expiredMessage = "¡Oferta terminada!",
}: Props) {
  // Default to 24 hours from now if no endDate provided
  const targetDate = endDate || new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString();

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (timeLeft.expired) {
    if (onComplete === "hide") return null;
    if (onComplete === "show_message") {
      return (
        <div className={cn(sizeStyles[size], "text-gray-500")}>
          {expiredMessage}
        </div>
      );
    }
    return (
      <div className={cn(sizeStyles[size], "text-gray-500")}>
        Oferta finalizada
      </div>
    );
  }

  const pad = (n: number) => n.toString().padStart(2, "0");

  const customStyles = backgroundColor || textColor
    ? { backgroundColor, color: textColor }
    : undefined;

  // Minimal variant: just numbers
  if (variant === "minimal") {
    return (
      <span
        className={cn(sizeStyles[size], variantStyles[variant], "font-mono")}
        style={customStyles}
      >
        {showDays && timeLeft.days > 0 && `${timeLeft.days}d `}
        {pad(timeLeft.hours)}:{pad(timeLeft.minutes)}
        {showSeconds && `:${pad(timeLeft.seconds)}`}
      </span>
    );
  }

  // Standard variant: with labels
  if (variant === "standard") {
    return (
      <div
        className={cn("flex items-center gap-1", sizeStyles[size], variantStyles[variant])}
        style={customStyles}
      >
        <span>⏱️</span>
        {showDays && timeLeft.days > 0 && <span>{timeLeft.days}d</span>}
        <span>{pad(timeLeft.hours)}h</span>
        <span>{pad(timeLeft.minutes)}m</span>
        {showSeconds && <span>{pad(timeLeft.seconds)}s</span>}
      </div>
    );
  }

  // Aggressive variant: with emphasis and animation
  return (
    <div
      className={cn(
        "flex items-center gap-1 px-2 py-1 rounded",
        sizeStyles[size],
        variantStyles[variant],
        "animate-pulse bg-red-50"
      )}
      style={customStyles}
    >
      <span>🔥</span>
      <span>TERMINA EN</span>
      {showDays && timeLeft.days > 0 && (
        <span className="font-mono bg-red-600 text-white px-1 rounded">{timeLeft.days}d</span>
      )}
      <span className="font-mono bg-red-600 text-white px-1 rounded">{pad(timeLeft.hours)}</span>
      <span>:</span>
      <span className="font-mono bg-red-600 text-white px-1 rounded">{pad(timeLeft.minutes)}</span>
      {showSeconds && (
        <>
          <span>:</span>
          <span className="font-mono bg-red-600 text-white px-1 rounded">{pad(timeLeft.seconds)}</span>
        </>
      )}
      <span>🔥</span>
    </div>
  );
}
