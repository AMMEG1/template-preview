/**
 * Strategy Pattern - Temu Theme Strategy
 *
 * Estilo: Agresivo, denso, urgencia
 * Características:
 * - Colores vibrantes (naranja, rojo)
 * - Gradientes y animaciones
 * - Badges llamativos con emojis
 * - Bordes redondeados (rounded-full)
 * - Shadows prominentes
 */

import type { ThemeStrategy } from "./ThemeStrategy";

export const TemuStrategy: ThemeStrategy = {
  name: "temu",

  getButtonStyles: () => ({
    primary: "bg-gradient-to-r from-orange-500 to-orange-400 text-white hover:from-orange-600 hover:to-orange-500 font-bold shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50",
    secondary: "bg-white text-orange-600 hover:bg-orange-50 font-bold border-2 border-orange-500",
    outline: "border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-bold",
  }),

  getButtonShapeStyles: () => "rounded-full py-4 px-8",

  getBadgeStyles: () => ({
    discount: "bg-gradient-to-r from-red-600 to-orange-500 text-white",
    new: "bg-gradient-to-r from-green-500 to-emerald-400 text-white",
    hot: "bg-gradient-to-r from-orange-600 to-yellow-500 text-white",
    limited: "bg-gradient-to-r from-red-700 to-red-500 text-white",
    flash: "bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 text-white",
    bestseller: "bg-gradient-to-r from-amber-500 to-yellow-400 text-amber-900",
    custom: "",
  }),

  getBadgeShapeStyles: () => "rounded-full font-extrabold shadow-lg",

  getPriceStyles: () => ({
    main: "text-2xl md:text-3xl font-extrabold text-red-600",
    compare: "text-lg text-gray-400 line-through",
    discount: "text-xs bg-gradient-to-r from-red-500 to-orange-500 text-white px-2 py-1 rounded-full font-bold animate-pulse",
  }),

  getFooterStyles: () => ({
    bg: "bg-gradient-to-r from-orange-600 to-orange-500",
    text: "text-white text-sm font-medium",
    link: "text-orange-200 hover:text-white",
  }),

  getHeroStyles: () => ({
    button: {
      primary: "bg-gradient-to-r from-orange-500 to-orange-400 text-white font-bold rounded-full shadow-lg shadow-orange-500/40 hover:shadow-orange-500/60 transition-all duration-200 animate-pulse",
      secondary: "bg-white text-orange-500 font-bold rounded-full border-2 border-orange-500 hover:bg-orange-50 transition-colors",
    },
    title: "font-bold",
    overlay: "bg-gradient-to-b from-black/30 via-transparent to-orange-900/40",
  }),

  getHeadingStyles: () => ({
    h1: "text-3xl md:text-4xl lg:text-5xl font-extrabold",
    h2: "text-2xl md:text-3xl lg:text-4xl font-extrabold",
    h3: "text-xl md:text-2xl lg:text-3xl font-bold",
    h4: "text-lg md:text-xl lg:text-2xl font-bold",
  }),

  getCardConfig: () => ({
    columnsMobile: 2,
    columnsTablet: 4,
    columnsDesktop: 5,
    gap: "xs",
    containerClass: "bg-gradient-to-b from-orange-50 to-white p-4 rounded-2xl",
    suggestedCardVariant: "aggressive",
    cardClass: "shadow-md border border-gray-200 rounded-xl bg-white",
  }),

  getUnderlineColor: () => "bg-gradient-to-r from-orange-500 to-orange-400",

  getHighlightStyles: () => "bg-gradient-to-r from-orange-500 to-orange-400 text-white rounded-lg shadow-lg",
};
