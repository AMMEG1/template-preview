"use client";

interface Props {
  content?: string;
  align?: "left" | "center" | "right";
}

const alignClasses = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

export function Text({ content = "Texto aquí...", align = "left" }: Props) {
  return (
    <p className={`text-base md:text-lg text-gray-700 ${alignClasses[align]}`}>
      {content}
    </p>
  );
}
