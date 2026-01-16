/**
 * Strategy Pattern - Carey Theme Strategy
 *
 * Estilo: Moderno, confianza, cyan accents
 * Características:
 * - Color primario: cyan (#0097aa)
 * - Color acento: lime (#d4f769)
 * - Bordes muy redondeados (rounded-xl, rounded-2xl)
 * - Shadows suaves con hover effects
 * - Tipografía semibold con tracking tight
 */

import type { ThemeStrategy } from "./ThemeStrategy";

export const CareyStrategy: ThemeStrategy = {
  name: "carey",

  getButtonStyles: () => ({
    primary: "bg-[#0097aa] text-white hover:bg-[#007a8a] hover:-translate-y-0.5 hover:shadow-lg font-semibold shadow-md",
    secondary: "bg-[#fafafa] text-[#1a1a1a] hover:bg-gray-100 font-medium border border-gray-200",
    outline: "border-2 border-[#0097aa] text-[#0097aa] hover:bg-[#0097aa] hover:text-white hover:-translate-y-0.5 font-medium",
  }),

  getButtonShapeStyles: () => "rounded-xl py-3 px-8",

  getBadgeStyles: () => ({
    discount: "bg-[#d4f769] text-[#1a1a1a]",
    new: "bg-[#0097aa] text-white",
    hot: "bg-[#d4f769] text-[#1a1a1a]",
    limited: "bg-[#d63384] text-white",
    flash: "bg-[#d4f769] text-[#1a1a1a]",
    bestseller: "bg-[#0097aa] text-white",
    custom: "",
  }),

  getBadgeShapeStyles: () => "rounded-lg font-bold shadow-sm",

  getPriceStyles: () => ({
    main: "text-2xl md:text-3xl font-semibold text-[#1a1a1a]",
    compare: "text-lg text-[#666666] line-through",
    discount: "text-sm bg-[#d4f769] text-[#1a1a1a] px-2 py-1 rounded-lg font-bold",
  }),

  getFooterStyles: () => ({
    bg: "bg-[#fafafa] border-t border-gray-200",
    text: "text-[#666666] text-sm",
    link: "text-[#0097aa] hover:text-[#007a8a]",
  }),

  getHeroStyles: () => ({
    button: {
      primary: "bg-[#0097aa] text-white font-semibold rounded-xl shadow-md hover:bg-[#007a8a] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200",
      secondary: "bg-transparent text-white font-semibold rounded-xl border-2 border-white/80 hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-200",
    },
    title: "font-semibold tracking-tight",
    overlay: "bg-gradient-to-b from-black/25 to-[#0097aa]/20",
  }),

  getHeadingStyles: () => ({
    h1: "text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight",
    h2: "text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight",
    h3: "text-xl md:text-2xl lg:text-3xl font-medium",
    h4: "text-lg md:text-xl lg:text-2xl font-medium",
  }),

  getCardConfig: () => ({
    columnsMobile: 2,
    columnsTablet: 3,
    columnsDesktop: 4,
    gap: "md",
    containerClass: "bg-[#fafafa] p-4 rounded-2xl",
    suggestedCardVariant: "carey",
    cardClass: "shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 rounded-2xl border border-gray-100",
  }),

  getUnderlineColor: () => "bg-[#0097aa]",

  getHighlightStyles: () => "bg-[#0097aa] text-white rounded-lg",
};
