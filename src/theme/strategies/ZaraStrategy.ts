/**
 * Strategy Pattern - Zara Theme Strategy
 *
 * Estilo: Minimal, luxury, espacioso
 * Características:
 * - Tipografía light y tracking amplio
 * - Sin emojis ni badges llamativos
 * - Colores monocromáticos (negro/blanco/grises)
 * - Bordes rectos (sin rounded)
 */

import type { ThemeStrategy } from "./ThemeStrategy";

export const ZaraStrategy: ThemeStrategy = {
  name: "zara",

  getButtonStyles: () => ({
    primary: "bg-black text-white hover:bg-gray-900 uppercase tracking-[0.15em] font-light",
    secondary: "bg-white text-black hover:bg-gray-100 uppercase tracking-[0.1em] font-light border border-gray-200",
    outline: "border border-black text-black hover:bg-black hover:text-white uppercase tracking-[0.1em] font-light",
  }),

  getButtonShapeStyles: () => "rounded-none py-4 px-10",

  getBadgeStyles: () => ({
    discount: "bg-black text-white",
    new: "bg-black text-white",
    hot: "bg-black text-white",
    limited: "bg-black text-white",
    flash: "bg-black text-white",
    bestseller: "bg-black text-white",
    custom: "",
  }),

  getBadgeShapeStyles: () => "rounded-none uppercase tracking-wider font-normal text-[10px]",

  getPriceStyles: () => ({
    main: "text-xl md:text-2xl font-light tracking-wide text-black",
    compare: "text-base text-gray-400 line-through font-light",
    discount: "hidden", // Zara no muestra badges de descuento
  }),

  getFooterStyles: () => ({
    bg: "bg-white border-t border-gray-200",
    text: "text-gray-600 text-xs uppercase tracking-[0.15em] font-light",
    link: "text-gray-400 hover:text-black",
  }),

  getHeroStyles: () => ({
    button: {
      primary: "bg-transparent border border-white text-white font-light tracking-[0.15em] uppercase hover:bg-white hover:text-black transition-all duration-300",
      secondary: "bg-transparent border border-white/50 text-white font-light tracking-[0.1em] uppercase hover:border-white transition-all duration-300",
    },
    title: "font-serif font-light tracking-wide",
    overlay: "bg-black/20",
  }),

  getHeadingStyles: () => ({
    h1: "text-3xl md:text-4xl lg:text-5xl font-light tracking-wide",
    h2: "text-2xl md:text-3xl lg:text-4xl font-light tracking-wide",
    h3: "text-xl md:text-2xl lg:text-3xl font-normal tracking-wide",
    h4: "text-lg md:text-xl lg:text-2xl font-normal tracking-wide",
  }),

  getCardConfig: () => ({
    columnsMobile: 1,
    columnsTablet: 2,
    columnsDesktop: 3,
    gap: "xl",
    containerClass: "bg-white py-8",
    suggestedCardVariant: "minimal",
    cardClass: "shadow-none border-0 bg-white",
  }),

  getUnderlineColor: () => "bg-black h-px w-32",

  getHighlightStyles: () => "bg-black text-white",
};
