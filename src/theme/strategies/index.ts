/**
 * Strategy Pattern - Theme Strategies Index
 *
 * Exporta todas las estrategias y proporciona la función getStrategy()
 * para obtener la estrategia correcta basada en el preset activo.
 */

import type { ThemePreset } from "@/components/puck/ThemeContext";
import type { ThemeStrategy } from "./ThemeStrategy";
import { ZaraStrategy } from "./ZaraStrategy";
import { TemuStrategy } from "./TemuStrategy";
import { TiendanubeStrategy } from "./TiendanubeStrategy";
import { CareyStrategy } from "./CareyStrategy";
import { CustomStrategy } from "./CustomStrategy";
import { EleganteStrategy } from "./EleganteStrategy";
import { UrbanoStrategy } from "./UrbanoStrategy";
import { PromocionalStrategy } from "./PromocionalStrategy";
import { MinimalistaStrategy } from "./MinimalistaStrategy";
import { ModernoStrategy } from "./ModernoStrategy";

// ============================================
// Strategy Registry
// ============================================

const strategies: Record<ThemePreset, ThemeStrategy> = {
  zara: ZaraStrategy,
  temu: TemuStrategy,
  tiendanube: TiendanubeStrategy,
  carey: CareyStrategy,
  custom: CustomStrategy,
  elegante: EleganteStrategy,
  urbano: UrbanoStrategy,
  promocional: PromocionalStrategy,
  minimalista: MinimalistaStrategy,
  moderno: ModernoStrategy,
};

// ============================================
// Factory Function
// ============================================

/**
 * Obtiene la estrategia de tema correspondiente al preset
 * @param preset - El preset de tema activo
 * @returns La estrategia de tema correspondiente
 */
export function getStrategy(preset: ThemePreset): ThemeStrategy {
  return strategies[preset] || strategies.tiendanube;
}

// ============================================
// Re-exports
// ============================================

export type { ThemeStrategy } from "./ThemeStrategy";
export type {
  ButtonVariant,
  BadgeType,
  HeadingLevel,
  ButtonStyles,
  BadgeStyles,
  PriceStyles,
  FooterStyles,
  HeroStyles,
  HeadingStyles,
  CardConfig,
} from "./ThemeStrategy";

export { ZaraStrategy } from "./ZaraStrategy";
export { TemuStrategy } from "./TemuStrategy";
export { TiendanubeStrategy } from "./TiendanubeStrategy";
export { CareyStrategy } from "./CareyStrategy";
export { CustomStrategy } from "./CustomStrategy";
export { EleganteStrategy } from "./EleganteStrategy";
export { UrbanoStrategy } from "./UrbanoStrategy";
export { PromocionalStrategy } from "./PromocionalStrategy";
export { MinimalistaStrategy } from "./MinimalistaStrategy";
export { ModernoStrategy } from "./ModernoStrategy";
