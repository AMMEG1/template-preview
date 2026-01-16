"use client";

import { createContext, useContext } from "react";

// Tipos de colores del tema
export interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
  muted: string;
}

// Tipos de presets disponibles
export type ThemePreset =
  | "zara"
  | "temu"
  | "tiendanube"
  | "carey"
  | "custom"
  | "elegante"
  | "urbano"
  | "promocional"
  | "minimalista"
  | "moderno";

// Contexto del tema
export interface ThemeContextType {
  preset: ThemePreset;
  colors: ThemeColors;
}

// Presets de colores predefinidos
export const THEME_PRESETS: Record<Exclude<ThemePreset, "custom">, ThemeColors> = {
  // ZARA: Minimal, luxury, black & white
  zara: {
    primary: "#000000",
    secondary: "#666666",
    accent: "#000000",
    background: "#ffffff",
    text: "#111111",
    muted: "#888888",
  },
  // TEMU: Aggressive, orange, urgency
  temu: {
    primary: "#FF6D00",
    secondary: "#DC2626",
    accent: "#FBBF24",
    background: "#FFFBF5",
    text: "#374151",
    muted: "#6B7280",
  },
  // TIENDANUBE: Balanced, blue, PYME-friendly
  tiendanube: {
    primary: "#2563EB",
    secondary: "#4B5563",
    accent: "#10B981",
    background: "#ffffff",
    text: "#1F2937",
    muted: "#6B7280",
  },
  // CAREY: Modern, cyan, trust-building
  carey: {
    primary: "#0097aa",
    secondary: "#007a8a",
    accent: "#d4f769",
    background: "#fafafa",
    text: "#1a1a1a",
    muted: "#666666",
  },
  // ELEGANTE: Lifestyle, femenino, orgánico (Acero Blanco)
  elegante: {
    primary: "#7CB69D",
    secondary: "#B8A99A",
    accent: "#D4A574",
    background: "#FDF8F3",
    text: "#3D3D3D",
    muted: "#8B8B8B",
  },
  // URBANO: Oscuro, edgy, bold (Bershka)
  urbano: {
    primary: "#FFFFFF",
    secondary: "#888888",
    accent: "#FF0000",
    background: "#0A0A0A",
    text: "#FFFFFF",
    muted: "#666666",
  },
  // PROMOCIONAL: Colorido, urgente, ofertas (Temu)
  promocional: {
    primary: "#FF4D00",
    secondary: "#DC2626",
    accent: "#FFD700",
    background: "#FFF8F0",
    text: "#1F1F1F",
    muted: "#666666",
  },
  // MINIMALISTA: Editorial, silencioso, premium (Zara)
  minimalista: {
    primary: "#000000",
    secondary: "#666666",
    accent: "#000000",
    background: "#FFFFFF",
    text: "#111111",
    muted: "#888888",
  },
  // MODERNO: Tecnológico, confiable, cyan (Carey)
  moderno: {
    primary: "#0097AA",
    secondary: "#007A8A",
    accent: "#D4F769",
    background: "#FAFAFA",
    text: "#1A1A1A",
    muted: "#666666",
  },
};

// Crear el contexto
export const ThemeContext = createContext<ThemeContextType | null>(null);

// Hook para usar el tema
export function useTheme(): ThemeContextType | null {
  return useContext(ThemeContext);
}

// Hook que devuelve los colores (con fallback a tiendanube)
export function useThemeColors(): ThemeColors {
  const theme = useContext(ThemeContext);
  return theme?.colors ?? THEME_PRESETS.tiendanube;
}

// Hook que devuelve el preset actual
export function useThemePreset(): ThemePreset {
  const theme = useContext(ThemeContext);
  return theme?.preset ?? "tiendanube";
}

// Helper para obtener colores de un preset
export function getPresetColors(preset: ThemePreset, customColors?: Partial<ThemeColors>): ThemeColors {
  if (preset === "custom") {
    return {
      ...THEME_PRESETS.tiendanube, // Fallback base
      ...customColors,
    };
  }
  return THEME_PRESETS[preset];
}
