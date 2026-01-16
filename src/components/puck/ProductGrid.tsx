"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";
import { ProductGridContext, type ProductGridContextType } from "./ProductGridContext";
import type { ThemePreset } from "./ThemeContext";
import type { SortOption, FilterOption } from "./types";

type Preset = ThemePreset;
type Gap = "none" | "xs" | "sm" | "md" | "lg" | "xl";
type MobileCols = 1 | 2;
type TabletCols = 2 | 3 | 4;
type DesktopCols = 2 | 3 | 4 | 5 | 6;
type CardVariant = "minimal" | "standard" | "detailed" | "aggressive" | "carey";
type LayoutType = "grid" | "list";
type LoadingState = "idle" | "loading" | "error";
type ItemAnimation = "none" | "fade" | "stagger" | "slide-up";
type ContainerStyle = "none" | "subtle" | "card" | "gradient";
type CardRadius = "none" | "sm" | "md" | "lg" | "xl" | "2xl";
type CardShadow = "none" | "sm" | "md" | "lg";
type HoverEffect = "none" | "lift" | "scale" | "glow" | "border";

interface Props {
  // Preset de estilo
  preset?: Preset;

  // Columnas responsive (para preset "custom" y "tiendanube")
  columnsMobile?: MobileCols;
  columnsTablet?: TabletCols;
  columnsDesktop?: DesktopCols;

  // Espaciado
  gap?: Gap;

  // Layout
  alignItems?: "start" | "center" | "end" | "stretch";
  layoutType?: LayoutType;

  // === NUEVAS PROPS: Personalización Tiendanube ===
  // Container
  containerStyle?: ContainerStyle;

  // Cards
  cardRadius?: CardRadius;
  cardShadow?: CardShadow;
  cardBorder?: boolean;

  // Hover Effects
  hoverEffect?: HoverEffect;

  // Filtering & Sorting
  enableFiltering?: boolean;
  filterOptions?: FilterOption[];
  activeFilter?: string;
  enableSorting?: boolean;
  sortOptions?: SortOption[];
  activeSort?: string;

  // States
  loadingState?: LoadingState;
  emptyStateText?: string;
  errorStateText?: string;

  // Animations
  itemAnimation?: ItemAnimation;

  // Header
  showHeader?: boolean;
  headerTitle?: string;
  headerSubtitle?: string;
  showViewAll?: boolean;
  viewAllLink?: string;

  // Puck drop zone (editor mode)
  puck?: { renderDropZone: (props: { zone: string }) => ReactNode };

  // Children (render mode - Puck passes zone content as children)
  children?: ReactNode;
}

// Configuraciones completas por preset
interface PresetConfig {
  // Layout
  columnsMobile: MobileCols;
  columnsTablet: TabletCols;
  columnsDesktop: DesktopCols;
  gap: Gap;
  // Contenedor
  containerClass: string;
  // Cards
  suggestedCardVariant: CardVariant;
  cardClass: string;
}

const PRESET_CONFIG: Record<Exclude<Preset, "custom">, PresetConfig> = {
  // ZARA: Minimal, luxury, espacioso
  zara: {
    columnsMobile: 1,
    columnsTablet: 2,
    columnsDesktop: 3,
    gap: "xl",
    containerClass: "bg-white py-8",
    suggestedCardVariant: "minimal",
    cardClass: "shadow-none border-0 bg-white",
  },
  // TEMU: Agresivo, denso, urgencia
  temu: {
    columnsMobile: 2,
    columnsTablet: 4,
    columnsDesktop: 5,
    gap: "xs",
    containerClass: "bg-gradient-to-b from-orange-50 to-white p-4 rounded-2xl",
    suggestedCardVariant: "aggressive",
    cardClass: "shadow-md border border-gray-200 rounded-xl bg-white",
  },
  // TIENDANUBE: Balanceado, PYME
  tiendanube: {
    columnsMobile: 2,
    columnsTablet: 3,
    columnsDesktop: 4,
    gap: "md",
    containerClass: "",
    suggestedCardVariant: "standard",
    cardClass: "shadow-sm",
  },
  // CAREY: Moderno, confianza, cyan accents
  carey: {
    columnsMobile: 2,
    columnsTablet: 3,
    columnsDesktop: 4,
    gap: "md",
    containerClass: "bg-[#fafafa] p-4 rounded-2xl",
    suggestedCardVariant: "detailed",
    cardClass: "shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 rounded-2xl border border-gray-100",
  },
  // ELEGANTE: Lifestyle, femenino, orgánico (Acero Blanco)
  elegante: {
    columnsMobile: 2,
    columnsTablet: 3,
    columnsDesktop: 4,
    gap: "md",
    containerClass: "bg-[#FDF8F3]",
    suggestedCardVariant: "minimal",
    cardClass: "rounded-xl shadow-sm hover:scale-[1.02] transition-transform duration-300 bg-white",
  },
  // URBANO: Oscuro, edgy, bold (Bershka)
  urbano: {
    columnsMobile: 2,
    columnsTablet: 3,
    columnsDesktop: 4,
    gap: "sm",
    containerClass: "bg-[#0A0A0A]",
    suggestedCardVariant: "minimal",
    cardClass: "bg-[#111111] border border-transparent hover:border-white transition-colors duration-200",
  },
  // PROMOCIONAL: Colorido, urgente, ofertas (Temu)
  promocional: {
    columnsMobile: 2,
    columnsTablet: 4,
    columnsDesktop: 5,
    gap: "xs",
    containerClass: "bg-gradient-to-b from-orange-50 to-white p-4 rounded-2xl",
    suggestedCardVariant: "aggressive",
    cardClass: "shadow-md border border-orange-100 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all bg-white",
  },
  // MINIMALISTA: Editorial, silencioso, premium (Zara)
  minimalista: {
    columnsMobile: 1,
    columnsTablet: 2,
    columnsDesktop: 3,
    gap: "xl",
    containerClass: "bg-white py-8",
    suggestedCardVariant: "minimal",
    cardClass: "shadow-none border-0 bg-white overflow-hidden [&_img]:hover:scale-105 [&_img]:transition-transform [&_img]:duration-700",
  },
  // MODERNO: Tecnológico, confiable, cyan (Carey)
  moderno: {
    columnsMobile: 2,
    columnsTablet: 3,
    columnsDesktop: 4,
    gap: "md",
    containerClass: "bg-[#fafafa] p-6 rounded-2xl",
    suggestedCardVariant: "detailed",
    cardClass: "rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-[0_8px_24px_rgba(0,151,170,0.15)] hover:-translate-y-1 hover:border-[#0097aa] transition-all duration-200",
  },
};

const gapClasses: Record<Gap, string> = {
  none: "gap-0",
  xs: "gap-1 md:gap-2",
  sm: "gap-2 md:gap-3",
  md: "gap-4 md:gap-6",
  lg: "gap-6 md:gap-8",
  xl: "gap-8 md:gap-12",
};

const alignClasses = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
};

// Mobile columns
const mobileColClasses: Record<MobileCols, string> = {
  1: "grid-cols-1",
  2: "grid-cols-2",
};

// Tablet columns (sm breakpoint)
const tabletColClasses: Record<TabletCols, string> = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-3",
  4: "sm:grid-cols-4",
};

// Desktop columns (lg breakpoint)
const desktopColClasses: Record<DesktopCols, string> = {
  2: "lg:grid-cols-2",
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
  5: "lg:grid-cols-5",
  6: "lg:grid-cols-6",
};

// === CLASES PARA PERSONALIZACIÓN TIENDANUBE ===

// Container styles
const containerStyleClasses: Record<ContainerStyle, string> = {
  none: "",
  subtle: "bg-gray-50/50",
  card: "bg-white p-4 rounded-xl shadow-sm",
  gradient: "bg-gradient-to-b from-gray-50 to-white p-4 rounded-xl",
};

// Card border radius
const cardRadiusClasses: Record<CardRadius, string> = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
};

// Card shadow
const cardShadowClasses: Record<CardShadow, string> = {
  none: "shadow-none",
  sm: "shadow-sm",
  md: "shadow-md",
  lg: "shadow-lg",
};

// Hover effects
const hoverEffectClasses: Record<HoverEffect, string> = {
  none: "",
  lift: "hover:-translate-y-1 hover:shadow-lg transition-all duration-200",
  scale: "hover:scale-[1.02] transition-transform duration-200",
  glow: "hover:shadow-[0_8px_24px_rgba(37,99,235,0.15)] transition-shadow duration-200",
  border: "hover:border-blue-500 transition-colors duration-200 border border-transparent",
};

export function ProductGrid({
  preset = "tiendanube",
  columnsMobile = 2,
  columnsTablet = 3,
  columnsDesktop = 4,
  gap = "md",
  alignItems = "stretch",
  layoutType = "grid",
  // === NUEVAS PROPS CON DEFAULTS ===
  containerStyle = "none",
  cardRadius = "lg",
  cardShadow = "sm",
  cardBorder = false,
  hoverEffect = "lift",
  // === FIN NUEVAS PROPS ===
  enableFiltering = false,
  filterOptions = [],
  activeFilter,
  enableSorting = false,
  sortOptions = [],
  activeSort,
  loadingState = "idle",
  emptyStateText = "No hay productos para mostrar",
  errorStateText = "Error al cargar los productos",
  itemAnimation = "none",
  showHeader = false,
  headerTitle = "Productos",
  headerSubtitle,
  showViewAll = false,
  viewAllLink = "#",
  puck,
  children,
}: Props) {
  // Determinar configuración según preset
  const isCustom = preset === "custom";
  const isTiendanube = preset === "tiendanube";
  const isCustomizable = isCustom || isTiendanube;
  const config = isCustomizable ? null : PRESET_CONFIG[preset];

  // Para tiendanube/custom: usar valores de props, para otros: usar preset
  const finalColumnsMobile = config?.columnsMobile ?? columnsMobile;
  const finalColumnsTablet = config?.columnsTablet ?? columnsTablet;
  const finalColumnsDesktop = config?.columnsDesktop ?? columnsDesktop;
  const finalGap = config?.gap ?? gap;

  // Container class: para tiendanube usar containerStyle, para otros presets usar config
  const containerClass = isCustomizable
    ? containerStyleClasses[containerStyle]
    : config?.containerClass ?? "";

  // Card classes: para tiendanube construir dinámicamente, para otros usar config
  const dynamicCardClass = isCustomizable
    ? cn(
        cardRadiusClasses[cardRadius],
        cardShadowClasses[cardShadow],
        cardBorder && "border border-gray-100",
        hoverEffectClasses[hoverEffect]
      )
    : config?.cardClass ?? "";

  // Contexto para las ProductCards
  const contextValue: ProductGridContextType = {
    preset: preset as ProductGridContextType["preset"],
    suggestedCardVariant: config?.suggestedCardVariant ?? "standard",
    cardClass: dynamicCardClass,
  };

  // Clase específica del preset para CSS targeting
  const presetClass = !isCustom ? `preset-${preset}` : "";

  // Animation classes
  const animationClass =
    itemAnimation === "fade"
      ? "animate-[fadeIn_0.5s_ease-out_forwards]"
      : itemAnimation === "stagger"
        ? "[&>*]:animate-[fadeIn_0.5s_ease-out_forwards] [&>*:nth-child(1)]:delay-0 [&>*:nth-child(2)]:delay-75 [&>*:nth-child(3)]:delay-150 [&>*:nth-child(4)]:delay-200"
        : itemAnimation === "slide-up"
          ? "animate-[slideUp_0.6s_ease-out_forwards]"
          : "";

  // List layout class
  const listLayoutClass = layoutType === "list" ? "!grid-cols-1 [&_.product-card]:flex [&_.product-card]:flex-row" : "";

  // Loading state
  if (loadingState === "loading") {
    return (
      <ProductGridContext.Provider value={contextValue}>
        <div className={cn("w-full", containerClass)}>
          {showHeader && (
            <div className="mb-6 animate-pulse">
              <div className="h-8 w-48 bg-gray-200 rounded mb-2"></div>
              {headerSubtitle && <div className="h-4 w-64 bg-gray-100 rounded"></div>}
            </div>
          )}
          <div className={cn(
            "grid w-full",
            mobileColClasses[finalColumnsMobile],
            tabletColClasses[finalColumnsTablet],
            desktopColClasses[finalColumnsDesktop],
            gapClasses[finalGap]
          )}>
            {[...Array(6)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="aspect-square bg-gray-200 rounded-lg mb-3"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-100 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </ProductGridContext.Provider>
    );
  }

  // Error state
  if (loadingState === "error") {
    return (
      <ProductGridContext.Provider value={contextValue}>
        <div className={cn("w-full py-12 text-center", containerClass)}>
          <p className="text-red-500 mb-4">{errorStateText}</p>
          <button
            className={cn(
              "px-4 py-2 rounded-lg font-medium transition-colors",
              preset === "carey"
                ? "bg-[#0097aa] text-white hover:bg-[#007a8a]"
                : "bg-gray-900 text-white hover:bg-gray-800"
            )}
            onClick={() => window.location.reload()}
          >
            Reintentar
          </button>
        </div>
      </ProductGridContext.Provider>
    );
  }

  return (
    <ProductGridContext.Provider value={contextValue}>
      <div className={cn("w-full", containerClass)}>
        {/* Header */}
        {showHeader && (
          <div className={cn(
            "flex items-center justify-between mb-6",
            preset === "carey" && "pb-4 border-b border-gray-100"
          )}>
            <div>
              <h2 className={cn(
                "text-2xl font-bold",
                preset === "carey" && "text-[#1a1a1a]",
                preset === "zara" && "font-light tracking-wide uppercase",
                preset === "temu" && "font-extrabold"
              )}>
                {headerTitle}
              </h2>
              {headerSubtitle && (
                <p className={cn(
                  "text-sm mt-1",
                  preset === "carey" ? "text-[#666666]" : "text-gray-500"
                )}>
                  {headerSubtitle}
                </p>
              )}
            </div>
            {showViewAll && viewAllLink && viewAllLink !== "#" && (
              <a
                href={viewAllLink}
                className={cn(
                  "text-sm font-medium transition-colors",
                  preset === "carey"
                    ? "text-[#0097aa] hover:text-[#007a8a]"
                    : preset === "temu"
                      ? "bg-orange-500 text-white px-4 py-2 rounded-full"
                      : "text-gray-600 hover:text-gray-900"
                )}
              >
                Ver todos →
              </a>
            )}
          </div>
        )}

        {/* Filters & Sort Bar */}
        {(enableFiltering || enableSorting) && (
          <div className={cn(
            "flex flex-wrap gap-3 mb-6",
            preset === "carey" && "p-3 bg-white rounded-xl border border-gray-100"
          )}>
            {/* Filters */}
            {enableFiltering && filterOptions.length > 0 && (
              <div className="flex flex-wrap gap-2">
                <button
                  className={cn(
                    "px-3 py-1.5 text-sm rounded-lg transition-colors",
                    !activeFilter
                      ? preset === "carey"
                        ? "bg-[#0097aa] text-white"
                        : "bg-gray-900 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  )}
                >
                  Todos
                </button>
                {filterOptions.map((option) => (
                  <button
                    key={option.value}
                    className={cn(
                      "px-3 py-1.5 text-sm rounded-lg transition-colors",
                      activeFilter === option.value
                        ? preset === "carey"
                          ? "bg-[#0097aa] text-white"
                          : "bg-gray-900 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    )}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}

            {/* Sort */}
            {enableSorting && sortOptions.length > 0 && (
              <div className="ml-auto">
                <select
                  className={cn(
                    "px-3 py-1.5 text-sm rounded-lg border bg-white",
                    preset === "carey" ? "border-gray-200 focus:border-[#0097aa]" : "border-gray-300"
                  )}
                  defaultValue={activeSort}
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>
        )}

        {/* Grid */}
        <div
          className={cn(
            "product-grid grid w-full",
            presetClass,
            mobileColClasses[finalColumnsMobile],
            tabletColClasses[finalColumnsTablet],
            desktopColClasses[finalColumnsDesktop],
            gapClasses[finalGap],
            alignClasses[alignItems],
            animationClass,
            listLayoutClass
          )}
        >
          {/* Editor mode: use DropZone, Render mode: use children */}
          {puck?.renderDropZone({ zone: "products" }) || children}
        </div>

        {/* Empty State */}
        {!puck && !children && (
          <div className="py-12 text-center">
            <p className={cn(
              "text-lg",
              preset === "carey" ? "text-[#666666]" : "text-gray-500"
            )}>
              {emptyStateText}
            </p>
          </div>
        )}
      </div>
    </ProductGridContext.Provider>
  );
}
