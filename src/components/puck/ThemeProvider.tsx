"use client";

import { ReactNode, useMemo } from "react";
import {
  ThemeContext,
  ThemePreset,
  ThemeColors,
  getPresetColors,
} from "./ThemeContext";

interface ThemeProviderProps {
  preset: ThemePreset;
  customColors?: Partial<ThemeColors>;
  children: ReactNode;
}

export function ThemeProvider({
  preset,
  customColors,
  children,
}: ThemeProviderProps) {
  // Calcular los colores finales basados en preset y customColors
  const colors = useMemo(
    () => getPresetColors(preset, customColors),
    [preset, customColors]
  );

  // Generar CSS variables inline
  const cssVariables = useMemo(() => ({
    "--theme-primary": colors.primary,
    "--theme-secondary": colors.secondary,
    "--theme-accent": colors.accent,
    "--theme-background": colors.background,
    "--theme-text": colors.text,
    "--theme-muted": colors.muted,
  } as React.CSSProperties), [colors]);

  const contextValue = useMemo(
    () => ({ preset, colors }),
    [preset, colors]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      <div
        style={cssVariables}
        className="theme-root"
        data-theme-preset={preset}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
}
