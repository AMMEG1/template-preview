"use client";

import type { ReactNode } from "react";

interface Props {
  maxWidth?: "sm" | "md" | "lg" | "xl" | "full";
  padding?: "none" | "small" | "medium" | "large";
  children?: ReactNode;
  puck?: { renderDropZone: (props: { zone: string }) => ReactNode };
}

const maxWidthClasses = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-4xl",
  xl: "max-w-6xl",
  full: "max-w-full",
};

const paddingClasses = {
  none: "p-0",
  small: "p-2 md:p-4",
  medium: "p-4 md:p-6",
  large: "p-6 md:p-8 lg:p-12",
};

export function Container({ maxWidth = "lg", padding = "medium", puck, children }: Props) {
  return (
    <div className={`mx-auto ${maxWidthClasses[maxWidth]} ${paddingClasses[padding]}`}>
      {/* Editor mode: use DropZone, Render mode: use children */}
      {puck?.renderDropZone({ zone: "content" }) || children}
    </div>
  );
}
