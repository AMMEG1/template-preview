/**
 * Strategy Pattern - Theme Strategy Interface
 *
 * Define la interfaz común para todas las estrategias de tema.
 * Cada preset (Zara, Temu, Tiendanube, Carey, Custom) implementa esta interfaz.
 */

import type { ThemePreset } from "@/components/puck/ThemeContext";

// ============================================
// Types for Strategy Methods
// ============================================

export type ButtonVariant = "primary" | "secondary" | "outline";

export type BadgeType = "discount" | "new" | "hot" | "limited" | "flash" | "bestseller" | "custom";

export type HeadingLevel = "h1" | "h2" | "h3" | "h4";

export interface ButtonStyles {
  primary: string;
  secondary: string;
  outline: string;
}

export interface BadgeStyles {
  discount: string;
  new: string;
  hot: string;
  limited: string;
  flash: string;
  bestseller: string;
  custom: string;
}

export interface PriceStyles {
  main: string;
  compare: string;
  discount: string;
}

export interface FooterStyles {
  bg: string;
  text: string;
  link: string;
}

export interface HeroStyles {
  button: {
    primary: string;
    secondary: string;
  };
  title: string;
  overlay: string;
}

export interface HeadingStyles {
  h1: string;
  h2: string;
  h3: string;
  h4: string;
}

export interface CardConfig {
  columnsMobile: 1 | 2;
  columnsTablet: 2 | 3 | 4;
  columnsDesktop: 2 | 3 | 4 | 5 | 6;
  gap: "none" | "xs" | "sm" | "md" | "lg" | "xl";
  containerClass: string;
  suggestedCardVariant: "minimal" | "standard" | "detailed" | "aggressive" | "carey";
  cardClass: string;
}

// ============================================
// Theme Strategy Interface
// ============================================

export interface ThemeStrategy {
  /** Nombre/identificador del preset */
  name: ThemePreset;

  /**
   * Estilos para botones (BuyButton, CTA buttons)
   * @param variant - primary | secondary | outline
   */
  getButtonStyles(): ButtonStyles;
  getButtonShapeStyles(): string;

  /**
   * Estilos para badges
   * @param type - discount | new | hot | limited | flash | bestseller | custom
   */
  getBadgeStyles(): BadgeStyles;
  getBadgeShapeStyles(): string;

  /**
   * Estilos para precios
   */
  getPriceStyles(): PriceStyles;

  /**
   * Estilos para footer
   */
  getFooterStyles(): FooterStyles;

  /**
   * Estilos para Hero section
   */
  getHeroStyles(): HeroStyles;

  /**
   * Estilos para headings por nivel
   */
  getHeadingStyles(): HeadingStyles;

  /**
   * Configuración de grid para ProductCard
   */
  getCardConfig(): CardConfig;

  /**
   * Color de subrayado para Heading style="underline"
   */
  getUnderlineColor(): string;

  /**
   * Color de highlight para Heading style="highlight"
   */
  getHighlightStyles(): string;
}
