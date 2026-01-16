/**
 * Strategy Pattern - Promocional Theme Strategy
 *
 * Estilo: Colorido, urgente, denso, ofertas, FOMO (estilo Temu)
 * Características:
 * - Color primario: Naranja fuerte (#FF4D00)
 * - Color secundario: Rojo (#DC2626)
 * - Color acento: Amarillo oro (#FFD700)
 * - Fondo crema naranja (#FFF8F0)
 * - Múltiples badges, animaciones
 * - Grid denso (5-6 cols), gap mínimo
 */

import type { ThemeStrategy } from "./ThemeStrategy";

export const PromocionalStrategy: ThemeStrategy = {
  name: "promocional",

  getButtonStyles: () => ({
    primary: "bg-gradient-to-r from-[#FF4D00] to-[#FF6D00] text-white hover:from-[#E54400] hover:to-[#E56000] font-bold shadow-lg shadow-orange-500/30",
    secondary: "bg-[#DC2626] text-white hover:bg-[#B91C1C] font-bold shadow-md",
    outline: "border-2 border-[#FF4D00] text-[#FF4D00] hover:bg-[#FF4D00] hover:text-white font-bold",
  }),

  getButtonShapeStyles: () => "rounded-full py-3 px-8",

  getBadgeStyles: () => ({
    discount: "bg-[#DC2626] text-white animate-pulse",
    new: "bg-[#FFD700] text-black",
    hot: "bg-gradient-to-r from-[#FF4D00] to-[#DC2626] text-white",
    limited: "bg-[#DC2626] text-white animate-pulse",
    flash: "bg-[#FFD700] text-black animate-bounce",
    bestseller: "bg-[#FF4D00] text-white",
    custom: "",
  }),

  getBadgeShapeStyles: () => "rounded-full font-extrabold text-xs shadow-md",

  getPriceStyles: () => ({
    main: "text-2xl md:text-3xl font-extrabold text-[#DC2626]",
    compare: "text-lg text-[#666666] line-through",
    discount: "text-sm bg-[#FFD700] text-black px-3 py-1 rounded-full font-extrabold animate-pulse",
  }),

  getFooterStyles: () => ({
    bg: "bg-gradient-to-b from-[#FFF8F0] to-white border-t border-orange-200",
    text: "text-[#666666] text-sm",
    link: "text-[#FF4D00] hover:text-[#DC2626] font-semibold",
  }),

  getHeroStyles: () => ({
    button: {
      primary: "bg-gradient-to-r from-[#FF4D00] to-[#FF6D00] text-white font-bold rounded-full shadow-lg shadow-orange-500/40 hover:shadow-orange-500/60 hover:scale-105 transition-all duration-200 animate-pulse",
      secondary: "bg-[#FFD700] text-black font-bold rounded-full shadow-md hover:bg-[#FFC000] hover:scale-105 transition-all duration-200",
    },
    title: "font-extrabold",
    overlay: "bg-gradient-to-b from-[#FF4D00]/20 to-black/50",
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
    cardClass: "shadow-md border border-orange-100 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all bg-white",
  }),

  getUnderlineColor: () => "bg-gradient-to-r from-[#FF4D00] to-[#DC2626]",

  getHighlightStyles: () => "bg-gradient-to-r from-[#FF4D00] to-[#DC2626] text-white rounded-lg shadow-lg",
};
