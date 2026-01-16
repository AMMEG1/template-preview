/**
 * Strategy Pattern - Custom Theme Strategy
 *
 * Estilo: Personalizable vía CSS variables
 * Usa las mismas variables que Tiendanube pero permite
 * personalización completa a través de --theme-* variables.
 */

import type { ThemeStrategy } from "./ThemeStrategy";

export const CustomStrategy: ThemeStrategy = {
  name: "custom",

  getButtonStyles: () => ({
    primary: "bg-[var(--theme-primary)] text-white hover:brightness-90 font-semibold",
    secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200 font-medium",
    outline: "border-2 border-[var(--theme-primary)] text-[var(--theme-primary)] hover:bg-[var(--theme-primary)] hover:text-white font-medium",
  }),

  getButtonShapeStyles: () => "rounded-lg py-3 px-8",

  getBadgeStyles: () => ({
    discount: "bg-red-500 text-white",
    new: "bg-green-500 text-white",
    hot: "bg-orange-500 text-white",
    limited: "bg-red-700 text-white",
    flash: "bg-gradient-to-r from-red-500 to-orange-500 text-white",
    bestseller: "bg-amber-400 text-amber-900",
    custom: "",
  }),

  getBadgeShapeStyles: () => "rounded-md font-bold",

  getPriceStyles: () => ({
    main: "text-2xl md:text-3xl font-bold text-[var(--theme-text)]",
    compare: "text-lg text-[var(--theme-muted)] line-through",
    discount: "text-sm bg-[var(--theme-accent)] text-white px-2 py-1 rounded font-medium",
  }),

  getFooterStyles: () => ({
    bg: "bg-gray-900",
    text: "text-gray-400 text-sm",
    link: "text-gray-400 hover:text-white",
  }),

  getHeroStyles: () => ({
    button: {
      primary: "bg-[var(--theme-primary)] text-white font-semibold rounded-lg hover:brightness-90 transition-all duration-200",
      secondary: "bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white/10 transition-colors",
    },
    title: "font-bold",
    overlay: "bg-black/40",
  }),

  getHeadingStyles: () => ({
    h1: "text-3xl md:text-4xl lg:text-5xl font-bold",
    h2: "text-2xl md:text-3xl lg:text-4xl font-bold",
    h3: "text-xl md:text-2xl lg:text-3xl font-semibold",
    h4: "text-lg md:text-xl lg:text-2xl font-semibold",
  }),

  getCardConfig: () => ({
    columnsMobile: 2,
    columnsTablet: 3,
    columnsDesktop: 4,
    gap: "md",
    containerClass: "",
    suggestedCardVariant: "standard",
    cardClass: "shadow-sm",
  }),

  getUnderlineColor: () => "bg-[var(--theme-primary)]",

  getHighlightStyles: () => "bg-[var(--theme-primary)] text-white",
};
