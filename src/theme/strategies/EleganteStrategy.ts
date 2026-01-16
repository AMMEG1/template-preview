/**
 * Strategy Pattern - Elegante Theme Strategy
 *
 * Estilo: Lifestyle, femenino, orgánico, cálido (inspirado en Acero Blanco)
 * Características:
 * - Color primario: Verde menta suave (#7CB69D)
 * - Color acento: Dorado suave (#D4A574)
 * - Fondo crema muy claro (#FDF8F3)
 * - Tipografía light con tracking wide
 * - Bordes rounded-xl
 * - Sombras muy suaves
 */

import type { ThemeStrategy } from "./ThemeStrategy";

export const EleganteStrategy: ThemeStrategy = {
  name: "elegante",

  getButtonStyles: () => ({
    primary: "bg-[#7CB69D] text-white hover:bg-[#6AA08A] font-medium shadow-sm",
    secondary: "bg-[#FDF8F3] text-[#3D3D3D] hover:bg-[#F5EFE8] font-medium border border-[#E8E0D8]",
    outline: "border-2 border-[#7CB69D] text-[#7CB69D] hover:bg-[#7CB69D] hover:text-white font-medium",
  }),

  getButtonShapeStyles: () => "rounded-xl py-3 px-8",

  getBadgeStyles: () => ({
    discount: "bg-[#7CB69D] text-white",
    new: "bg-[#D4A574] text-white",
    hot: "bg-[#7CB69D] text-white",
    limited: "bg-[#B8A99A] text-white",
    flash: "bg-[#D4A574] text-white",
    bestseller: "bg-[#7CB69D] text-white",
    custom: "",
  }),

  getBadgeShapeStyles: () => "rounded-lg font-medium",

  getPriceStyles: () => ({
    main: "text-xl md:text-2xl font-medium text-[#3D3D3D]",
    compare: "text-base text-[#8B8B8B] line-through",
    discount: "text-sm bg-[#7CB69D] text-white px-2 py-1 rounded-lg font-medium",
  }),

  getFooterStyles: () => ({
    bg: "bg-[#FDF8F3]",
    text: "text-[#8B8B8B] text-sm",
    link: "text-[#7CB69D] hover:text-[#6AA08A]",
  }),

  getHeroStyles: () => ({
    button: {
      primary: "bg-[#7CB69D] text-white font-medium rounded-xl shadow-sm hover:bg-[#6AA08A] transition-all duration-300",
      secondary: "bg-transparent text-white font-medium rounded-xl border-2 border-white/80 hover:bg-white/10 transition-all duration-300",
    },
    title: "font-light tracking-wide",
    overlay: "bg-gradient-to-b from-black/20 to-black/40",
  }),

  getHeadingStyles: () => ({
    h1: "text-3xl md:text-4xl lg:text-5xl font-light tracking-wide",
    h2: "text-2xl md:text-3xl lg:text-4xl font-light tracking-wide",
    h3: "text-xl md:text-2xl lg:text-3xl font-normal tracking-wide",
    h4: "text-lg md:text-xl lg:text-2xl font-normal tracking-wide",
  }),

  getCardConfig: () => ({
    columnsMobile: 2,
    columnsTablet: 3,
    columnsDesktop: 4,
    gap: "md",
    containerClass: "bg-[#FDF8F3]",
    suggestedCardVariant: "minimal",
    cardClass: "rounded-xl shadow-sm hover:scale-[1.02] transition-transform duration-300 bg-white",
  }),

  getUnderlineColor: () => "bg-[#7CB69D]",

  getHighlightStyles: () => "bg-[#7CB69D] text-white rounded-lg",
};
