/**
 * Strategy Pattern - Minimalista Theme Strategy
 *
 * Estilo: Editorial, silencioso, espacioso, premium (estilo Zara)
 * Características:
 * - Color primario: Negro puro (#000000)
 * - Fondo blanco puro (#FFFFFF)
 * - Tipografía font-light, tracking wide, uppercase
 * - SIN PromoBar - silencio total arriba
 * - Muchísimo espacio en blanco
 * - Cards: SOLO imagen + precio (sin título, sin badges)
 * - Sin sombras, sin bordes, sin efectos visuales
 */

import type { ThemeStrategy } from "./ThemeStrategy";

export const MinimalistaStrategy: ThemeStrategy = {
  name: "minimalista",

  getButtonStyles: () => ({
    primary: "bg-black text-white hover:bg-[#333333] font-light tracking-widest",
    secondary: "bg-white text-black hover:bg-gray-100 font-light tracking-widest border border-black",
    outline: "border border-black text-black hover:bg-black hover:text-white font-light tracking-widest",
  }),

  getButtonShapeStyles: () => "rounded-none py-4 px-12",

  getBadgeStyles: () => ({
    discount: "bg-black text-white",
    new: "bg-black text-white",
    hot: "bg-black text-white",
    limited: "bg-black text-white",
    flash: "bg-black text-white",
    bestseller: "bg-black text-white",
    custom: "",
  }),

  getBadgeShapeStyles: () => "rounded-none font-light tracking-widest text-[10px] uppercase",

  getPriceStyles: () => ({
    main: "text-sm md:text-base font-normal text-black tracking-wide",
    compare: "text-sm text-[#888888] line-through",
    discount: "text-xs bg-black text-white px-2 py-0.5 font-light tracking-wider",
  }),

  getFooterStyles: () => ({
    bg: "bg-white border-t border-gray-200",
    text: "text-[#888888] text-xs tracking-wider",
    link: "text-black hover:text-[#666666] tracking-wider",
  }),

  getHeroStyles: () => ({
    button: {
      primary: "bg-white text-black font-light tracking-[0.3em] uppercase py-4 px-12 hover:bg-black hover:text-white transition-colors duration-300",
      secondary: "bg-transparent text-white font-light tracking-[0.3em] uppercase py-4 px-12 border border-white hover:bg-white hover:text-black transition-colors duration-300",
    },
    title: "font-extralight tracking-[0.2em] uppercase",
    overlay: "bg-black/30",
  }),

  getHeadingStyles: () => ({
    h1: "text-2xl md:text-3xl lg:text-4xl font-extralight tracking-[0.2em] uppercase",
    h2: "text-xl md:text-2xl lg:text-3xl font-light tracking-[0.15em] uppercase",
    h3: "text-lg md:text-xl lg:text-2xl font-light tracking-[0.1em] uppercase",
    h4: "text-base md:text-lg lg:text-xl font-normal tracking-[0.1em] uppercase",
  }),

  getCardConfig: () => ({
    columnsMobile: 1,
    columnsTablet: 2,
    columnsDesktop: 3,
    gap: "xl",
    containerClass: "bg-white py-16",
    suggestedCardVariant: "minimal",
    cardClass: "shadow-none border-0 bg-white overflow-hidden group [&_img]:hover:scale-105 [&_img]:transition-transform [&_img]:duration-700",
  }),

  getUnderlineColor: () => "bg-black",

  getHighlightStyles: () => "bg-black text-white",
};
