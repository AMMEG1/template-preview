/**
 * Strategy Pattern - Urbano Theme Strategy
 *
 * Estilo: Oscuro, edgy, bold, urbano, Gen-Z (inspirado en Bershka)
 * Características:
 * - Fondo negro (#0A0A0A)
 * - Texto blanco sobre negro
 * - Acento rojo (#FF0000) para highlights
 * - Tipografía bold/extrabold, uppercase
 * - Sin sombras visibles
 * - Hover: borde blanco aparece
 */

import type { ThemeStrategy } from "./ThemeStrategy";

export const UrbanoStrategy: ThemeStrategy = {
  name: "urbano",

  getButtonStyles: () => ({
    primary: "bg-white text-black hover:bg-gray-100 font-bold uppercase tracking-wider",
    secondary: "bg-[#1A1A1A] text-white hover:bg-[#2A2A2A] font-bold uppercase tracking-wider border border-white/20",
    outline: "border-2 border-white text-white hover:bg-white hover:text-black font-bold uppercase tracking-wider",
  }),

  getButtonShapeStyles: () => "rounded-none py-4 px-10",

  getBadgeStyles: () => ({
    discount: "bg-white text-black",
    new: "bg-[#FF0000] text-white",
    hot: "bg-[#FF0000] text-white",
    limited: "bg-white text-black",
    flash: "bg-[#FF0000] text-white",
    bestseller: "bg-white text-black",
    custom: "",
  }),

  getBadgeShapeStyles: () => "rounded-none font-bold uppercase text-xs tracking-widest",

  getPriceStyles: () => ({
    main: "text-xl md:text-2xl font-bold text-white",
    compare: "text-base text-[#666666] line-through",
    discount: "text-sm bg-[#FF0000] text-white px-2 py-1 font-bold uppercase",
  }),

  getFooterStyles: () => ({
    bg: "bg-black border-t border-white/10",
    text: "text-[#666666] text-sm",
    link: "text-white hover:text-[#FF0000]",
  }),

  getHeroStyles: () => ({
    button: {
      primary: "bg-white text-black font-bold uppercase tracking-widest py-4 px-10 hover:bg-gray-100 transition-colors duration-200",
      secondary: "bg-transparent text-white font-bold uppercase tracking-widest py-4 px-10 border-2 border-white hover:bg-white hover:text-black transition-colors duration-200",
    },
    title: "font-extrabold uppercase tracking-widest",
    overlay: "bg-black/60",
  }),

  getHeadingStyles: () => ({
    h1: "text-3xl md:text-4xl lg:text-6xl font-extrabold uppercase tracking-widest",
    h2: "text-2xl md:text-3xl lg:text-4xl font-extrabold uppercase tracking-wider",
    h3: "text-xl md:text-2xl lg:text-3xl font-bold uppercase tracking-wider",
    h4: "text-lg md:text-xl lg:text-2xl font-bold uppercase tracking-wide",
  }),

  getCardConfig: () => ({
    columnsMobile: 2,
    columnsTablet: 3,
    columnsDesktop: 4,
    gap: "sm",
    containerClass: "bg-[#0A0A0A]",
    suggestedCardVariant: "minimal",
    cardClass: "bg-[#111111] border border-transparent hover:border-white transition-colors duration-200",
  }),

  getUnderlineColor: () => "bg-white",

  getHighlightStyles: () => "bg-[#FF0000] text-white",
};
