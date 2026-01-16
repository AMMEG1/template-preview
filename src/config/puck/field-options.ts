/**
 * Shared field options for Puck editor configuration
 * Centralizes dropdown/select options to avoid duplication
 */

// ============================================
// Image Options
// ============================================

export const PRODUCT_IMAGES = [
  { label: "Ropa - Camiseta", value: "/images/products/product-1.jpg" },
  { label: "Electrónica - Auriculares", value: "/images/products/product-2.jpg" },
  { label: "Accesorios - Reloj", value: "/images/products/product-3.jpg" },
  { label: "Calzado - Zapatillas", value: "/images/products/product-4.jpg" },
  { label: "Hogar - Decoración", value: "/images/products/product-5.jpg" },
  { label: "Belleza - Productos", value: "/images/products/product-6.jpg" },
] as const;

export const HERO_IMAGES = [
  { label: "Lifestyle Ecommerce", value: "/images/heroes/hero-1.jpg" },
  { label: "Promocional", value: "/images/heroes/hero-2.jpg" },
] as const;

// ============================================
// Currency Options
// ============================================

export const CURRENCY_OPTIONS = [
  { label: "Peso Argentino (ARS)", value: "ARS" },
  { label: "Dólar (USD)", value: "USD" },
  { label: "Euro (EUR)", value: "EUR" },
] as const;

// ============================================
// Size & Spacing Options
// ============================================

export const SIZE_OPTIONS = [
  { label: "Extra pequeño", value: "xs" },
  { label: "Pequeño", value: "sm" },
  { label: "Mediano", value: "md" },
  { label: "Grande", value: "lg" },
  { label: "Extra grande", value: "xl" },
] as const;

export const BORDER_RADIUS_OPTIONS = [
  { label: "Sin redondeo", value: "none" },
  { label: "Pequeño", value: "sm" },
  { label: "Mediano", value: "md" },
  { label: "Grande", value: "lg" },
  { label: "Extra grande", value: "xl" },
] as const;

export const SHADOW_OPTIONS = [
  { label: "Sin sombra", value: "none" },
  { label: "Pequeña", value: "sm" },
  { label: "Mediana", value: "md" },
  { label: "Grande", value: "lg" },
] as const;

export const SPACER_SIZE_OPTIONS = [
  { label: "Extra pequeño (8px)", value: "xs" },
  { label: "Pequeño (16px)", value: "sm" },
  { label: "Mediano (32px)", value: "md" },
  { label: "Grande (48px)", value: "lg" },
  { label: "Extra grande (64px)", value: "xl" },
] as const;

// ============================================
// Animation Options
// ============================================

export const ANIMATION_OPTIONS = [
  { label: "Ninguna", value: "none" },
  { label: "Pulso", value: "pulse" },
  { label: "Rebote", value: "bounce" },
  { label: "Vibrar", value: "shake" },
] as const;

export const HOVER_EFFECT_OPTIONS = [
  { label: "Ninguno", value: "none" },
  { label: "Levantar", value: "lift" },
  { label: "Brillo", value: "glow" },
  { label: "Escalar", value: "scale" },
] as const;

export const TEXT_ANIMATION_OPTIONS = [
  { label: "Ninguna", value: "none" },
  { label: "Aparecer", value: "fade-in" },
  { label: "Deslizar arriba", value: "slide-up" },
  { label: "Deslizar abajo", value: "slide-down" },
] as const;

// ============================================
// Badge & Label Options
// ============================================

export const BADGE_TYPE_OPTIONS = [
  { label: "Descuento", value: "discount" },
  { label: "Nuevo", value: "new" },
  { label: "🔥 Hot", value: "hot" },
  { label: "Stock limitado", value: "limited" },
  { label: "⚡ Flash Sale", value: "flash" },
  { label: "★ Bestseller", value: "bestseller" },
  { label: "Personalizado", value: "custom" },
] as const;

export const BADGE_ICON_OPTIONS = [
  { label: "Ninguno", value: "none" },
  { label: "🔥 Fuego", value: "fire" },
  { label: "⚡ Rayo", value: "bolt" },
  { label: "★ Estrella", value: "star" },
  { label: "❤️ Corazón", value: "heart" },
  { label: "🏷️ Etiqueta", value: "tag" },
  { label: "🚚 Envío", value: "truck" },
  { label: "✓ Check", value: "check" },
] as const;

// ============================================
// Stock Options
// ============================================

export const STOCK_LEVEL_OPTIONS = [
  { label: "En stock", value: "in_stock" },
  { label: "Pocas unidades", value: "low_stock" },
  { label: "¡Últimas unidades!", value: "very_low" },
  { label: "Agotado", value: "out_of_stock" },
] as const;

// ============================================
// Layout Options
// ============================================

export const TEXT_ALIGN_OPTIONS = [
  { label: "Izquierda", value: "left" },
  { label: "Centro", value: "center" },
  { label: "Derecha", value: "right" },
] as const;

export const HEIGHT_OPTIONS = [
  { label: "Pequeño", value: "small" },
  { label: "Mediano", value: "medium" },
  { label: "Grande", value: "large" },
  { label: "Pantalla completa", value: "full" },
] as const;

export const ASPECT_RATIO_OPTIONS = [
  { label: "Cuadrado (1:1)", value: "square" },
  { label: "Vertical (3:4)", value: "portrait" },
  { label: "Horizontal (4:3)", value: "landscape" },
  { label: "3:4", value: "3:4" },
] as const;

// ============================================
// Variant Options
// ============================================

export const BUTTON_VARIANT_OPTIONS = [
  { label: "Primario", value: "primary" },
  { label: "Secundario", value: "secondary" },
  { label: "Outline", value: "outline" },
] as const;

export const HERO_VARIANT_OPTIONS = [
  { label: "Simple", value: "simple" },
  { label: "Dos CTAs", value: "dual-cta" },
  { label: "Con badge", value: "with-badge" },
  { label: "Con timer", value: "with-timer" },
  { label: "Completo", value: "full" },
  { label: "Video de fondo", value: "video" },
] as const;

export const FOOTER_VARIANT_OPTIONS = [
  { label: "Simple", value: "simple" },
  { label: "Con columnas", value: "with-columns" },
  { label: "Completo", value: "full" },
] as const;

export const PRODUCT_CARD_VARIANT_OPTIONS = [
  { label: "Mínimo", value: "minimal" },
  { label: "Estándar", value: "standard" },
  { label: "Detallado", value: "detailed" },
  { label: "Agresivo", value: "aggressive" },
  { label: "Carey", value: "carey" },
] as const;

export const HEADING_STYLE_OPTIONS = [
  { label: "H1", value: "h1" },
  { label: "H2", value: "h2" },
  { label: "H3", value: "h3" },
  { label: "H4", value: "h4" },
] as const;

// ============================================
// Grid Options
// ============================================

export const GRID_PRESET_OPTIONS = [
  { label: "Tiendanube (Balanceado)", value: "tiendanube" },
  { label: "Zara (Minimal)", value: "zara" },
  { label: "Temu (Agresivo)", value: "temu" },
  { label: "Carey (Moderno)", value: "carey" },
  { label: "Personalizado", value: "custom" },
] as const;

export const GRID_GAP_OPTIONS = [
  { label: "Sin espacio", value: "none" },
  { label: "Extra pequeño", value: "xs" },
  { label: "Pequeño", value: "sm" },
  { label: "Mediano", value: "md" },
  { label: "Grande", value: "lg" },
  { label: "Extra grande", value: "xl" },
] as const;

// ============================================
// Yes/No Options
// ============================================

export const YES_NO_OPTIONS = [
  { label: "Sí", value: true },
  { label: "No", value: false },
] as const;

// ============================================
// Theme Options
// ============================================

export const THEME_PRESET_OPTIONS = [
  { label: "Tiendanube", value: "tiendanube" },
  { label: "Zara (Luxury)", value: "zara" },
  { label: "Temu (Agresivo)", value: "temu" },
  { label: "Carey (Moderno)", value: "carey" },
  { label: "Personalizado", value: "custom" },
] as const;

export const OVERLAY_GRADIENT_OPTIONS = [
  { label: "Por defecto", value: "default" },
  { label: "Oscuro", value: "dark" },
  { label: "Claro", value: "light" },
  { label: "Marca", value: "brand" },
  { label: "Ninguno", value: "none" },
] as const;
