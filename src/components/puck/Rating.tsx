"use client";

import { cn } from "@/lib/utils/cn";

interface Props {
  rating?: number; // 0-5
  reviewCount?: number;
  showCount?: boolean;
  size?: "sm" | "md" | "lg";
  variant?: "stars" | "compact";
}

const sizeStyles = {
  sm: "text-xs gap-0.5",
  md: "text-sm gap-1",
  lg: "text-base gap-1",
};

const starSizes = {
  sm: "w-3 h-3",
  md: "w-4 h-4",
  lg: "w-5 h-5",
};

function StarIcon({ filled, half, size }: { filled: boolean; half?: boolean; size: string }) {
  if (half) {
    return (
      <svg className={cn(size, "text-amber-400")} viewBox="0 0 20 20" fill="currentColor">
        <defs>
          <linearGradient id="halfFill">
            <stop offset="50%" stopColor="currentColor" />
            <stop offset="50%" stopColor="#d1d5db" />
          </linearGradient>
        </defs>
        <path
          fill="url(#halfFill)"
          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
        />
      </svg>
    );
  }

  return (
    <svg
      className={cn(size, filled ? "text-amber-400" : "text-gray-300")}
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

export function Rating({
  rating = 0,
  reviewCount = 0,
  showCount = true,
  size = "md",
  variant = "stars",
}: Props) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  if (variant === "compact") {
    return (
      <div className={cn("flex items-center", sizeStyles[size])}>
        <StarIcon filled={true} size={starSizes[size]} />
        <span className="font-medium text-gray-700 ml-1">{rating.toFixed(1)}</span>
        {showCount && reviewCount > 0 && (
          <span className="text-gray-500 ml-1">({reviewCount.toLocaleString()})</span>
        )}
      </div>
    );
  }

  return (
    <div className={cn("flex items-center", sizeStyles[size])}>
      <div className="flex">
        {[...Array(fullStars)].map((_, i) => (
          <StarIcon key={`full-${i}`} filled={true} size={starSizes[size]} />
        ))}
        {hasHalfStar && <StarIcon filled={false} half={true} size={starSizes[size]} />}
        {[...Array(emptyStars)].map((_, i) => (
          <StarIcon key={`empty-${i}`} filled={false} size={starSizes[size]} />
        ))}
      </div>
      {showCount && reviewCount > 0 && (
        <span className="text-gray-500 ml-1.5">({reviewCount.toLocaleString()})</span>
      )}
    </div>
  );
}
