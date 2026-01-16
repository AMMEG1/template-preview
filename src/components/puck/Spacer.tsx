"use client";

interface Props {
  height?: "small" | "medium" | "large";
}

const heightClasses = {
  small: "h-4 md:h-6",
  medium: "h-8 md:h-12",
  large: "h-16 md:h-24",
};

export function Spacer({ height = "medium" }: Props) {
  return <div className={heightClasses[height]} />;
}
