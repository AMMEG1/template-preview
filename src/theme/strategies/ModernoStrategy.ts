/**
 * Strategy Pattern - Moderno Theme Strategy
 *
 * Estilo: Tecnológico, confiable, profesional, cyan/turquesa (estilo Carey)
 * Características:
 * - Color primario: Cyan/turquesa (#0097AA)
 * - Color acento: Lima brillante (#D4F769)
 * - Fondo gris muy claro (#FAFAFA)
 * - Trust badges prominentes
 * - Cards con TODA la información (rating, stock, cuotas, envío)
 * - Footer completo
 * - Bordes redondeados 2xl
 */

import type { ThemeStrategy } from "./ThemeStrategy";

export const ModernoStrategy: ThemeStrategy = {
  name: "moderno",

  getButtonStyles: () => ({
    primary: "bg-[#0097AA] text-white hover:bg-[#007A8A] font-semibold shadow-md shadow-cyan-500/20",
    secondary: "bg-[#D4F769] text-black hover:bg-[#C5E85A] font-semibold",
    outline: "border-2 border-[#0097AA] text-[#0097AA] hover:bg-[#0097AA] hover:text-white font-semibold",
  }),

  getButtonShapeStyles: () => "rounded-2xl py-3 px-8",

  getBadgeStyles: () => ({
    discount: "bg-[#D4F769] text-black",
    new: "bg-[#0097AA] text-white",
    hot: "bg-[#FF6B35] text-white",
    limited: "bg-[#007A8A] text-white",
    flash: "bg-[#D4F769] text-black",
    bestseller: "bg-[#0097AA] text-white",
    custom: "",
  }),

  getBadgeShapeStyles: () => "rounded-full font-semibold text-xs px-3",

  getPriceStyles: () => ({
    main: "text-xl md:text-2xl font-bold text-[#0097AA]",
    compare: "text-base text-[#888888] line-through",
    discount: "text-sm bg-[#D4F769] text-black px-3 py-1 rounded-full font-bold",
  }),

  getFooterStyles: () => ({
    bg: "bg-[#1A1A1A]",
    text: "text-gray-400 text-sm",
    link: "text-[#0097AA] hover:text-[#D4F769]",
  }),

  getHeroStyles: () => ({
    button: {
      primary: "bg-[#0097AA] text-white font-semibold rounded-2xl shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:bg-[#007A8A] transition-all duration-200",
      secondary: "bg-[#D4F769] text-black font-semibold rounded-2xl shadow-md hover:bg-[#C5E85A] transition-all duration-200",
    },
    title: "font-bold",
    overlay: "bg-gradient-to-r from-[#0097AA]/40 to-black/50",
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
    containerClass: "bg-[#fafafa] p-6 rounded-2xl",
    suggestedCardVariant: "carey",
    cardClass: "rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-[0_8px_24px_rgba(0,151,170,0.15)] hover:-translate-y-1 hover:border-[#0097aa] transition-all duration-200",
  }),

  getUnderlineColor: () => "bg-[#0097AA]",

  getHighlightStyles: () => "bg-[#0097AA] text-white rounded-xl",
};
