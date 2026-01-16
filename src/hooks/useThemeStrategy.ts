/**
 * Custom Hook - useThemeStrategy
 *
 * Hook que combina useThemePreset() con getStrategy() para
 * proporcionar acceso directo a la estrategia de tema actual.
 *
 * Uso:
 * const strategy = useThemeStrategy();
 * const buttonStyles = strategy.getButtonStyles();
 */

import { useMemo } from "react";
import { useThemePreset } from "@/components/puck/ThemeContext";
import { getStrategy, type ThemeStrategy } from "@/theme/strategies";

/**
 * Hook que retorna la estrategia de tema actual basada en el preset activo
 * @returns La estrategia de tema con todos sus métodos
 */
export function useThemeStrategy(): ThemeStrategy {
  const preset = useThemePreset();
  return useMemo(() => getStrategy(preset), [preset]);
}
