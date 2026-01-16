/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import type { Config, Fields } from "@puckeditor/core";
import {
  ProductImage,
  Price,
  BuyButton,
  Hero,
  Heading,
  Text,
  Spacer,
  Container,
  ProductCard,
  ProductGrid,
  Footer,
  Badge,
  Rating,
  StockIndicator,
  CountdownTimer,
  SectionHeader,
  PromoBar,
  ThemeProvider,
  CategoryCircles,
} from "@/components/puck";

import { ImageCarouselConfig } from "@/components/puck/ImageCarousel";
import { ImageGalleryConfig } from "@/components/puck/ImageGallery";
import { SplitLayoutConfig } from "@/components/puck/SplitLayout";
import { ProductTabsConfig } from "@/components/puck/ProductTabs";
import { AccordionSectionConfig } from "@/components/puck/AccordionSection";
import { TrustBadgesGridConfig } from "@/components/puck/TrustBadgesGrid";
import { MasonryGridConfig } from "@/components/puck/MasonryGrid";

// Imágenes de stock disponibles
const PRODUCT_IMAGES = [
  { label: "Ropa - Camiseta", value: "/images/products/product-1.jpg" },
  { label: "Electrónica - Auriculares", value: "/images/products/product-2.jpg" },
  { label: "Accesorios - Reloj", value: "/images/products/product-3.jpg" },
  { label: "Calzado - Zapatillas", value: "/images/products/product-4.jpg" },
  { label: "Hogar - Decoración", value: "/images/products/product-5.jpg" },
  { label: "Belleza - Productos", value: "/images/products/product-6.jpg" },
];

const HERO_IMAGES = [
  { label: "Lifestyle Ecommerce", value: "/images/heroes/hero-1.jpg" },
  { label: "Promocional", value: "/images/heroes/hero-2.jpg" },
];

// Opciones reutilizables
const CURRENCY_OPTIONS = [
  { label: "Peso Argentino (ARS)", value: "ARS" },
  { label: "Dólar (USD)", value: "USD" },
  { label: "Euro (EUR)", value: "EUR" },
];

const BORDER_RADIUS_OPTIONS = [
  { label: "Sin redondeo", value: "none" },
  { label: "Pequeño", value: "sm" },
  { label: "Mediano", value: "md" },
  { label: "Grande", value: "lg" },
  { label: "Extra grande", value: "xl" },
];

const SHADOW_OPTIONS = [
  { label: "Sin sombra", value: "none" },
  { label: "Pequeña", value: "sm" },
  { label: "Mediana", value: "md" },
  { label: "Grande", value: "lg" },
];

const HOVER_EFFECT_OPTIONS = [
  { label: "Ninguno", value: "none" },
  { label: "Levantar", value: "lift" },
  { label: "Brillo", value: "glow" },
  { label: "Escalar", value: "scale" },
];

const STOCK_LEVEL_OPTIONS = [
  { label: "En stock", value: "in_stock" },
  { label: "Pocas unidades", value: "low_stock" },
  { label: "¡Últimas unidades!", value: "very_low" },
  { label: "Agotado", value: "out_of_stock" },
];

const BADGE_TYPE_OPTIONS = [
  { label: "Descuento", value: "discount" },
  { label: "Nuevo", value: "new" },
  { label: "🔥 Hot", value: "hot" },
  { label: "Stock limitado", value: "limited" },
  { label: "⚡ Flash Sale", value: "flash" },
  { label: "★ Bestseller", value: "bestseller" },
  { label: "Personalizado", value: "custom" },
];

const ANIMATION_OPTIONS = [
  { label: "Ninguna", value: "none" },
  { label: "Pulso", value: "pulse" },
  { label: "Rebote", value: "bounce" },
  { label: "Vibrar", value: "shake" },
];

const YES_NO_OPTIONS = [
  { label: "Sí", value: true },
  { label: "No", value: false },
];

export const puckConfig: Config = {
  // ═══════════════════════════════════════════════════════════════════════════
  // ROOT - Configuración global de tema
  // ═══════════════════════════════════════════════════════════════════════════
  root: {
    resolveFields: (data: any): Fields => {
      const themePreset = data.props?.themePreset as string;

      const fields: Fields = {
        themePreset: {
          type: "select",
          label: "🎨 Estilo de tienda",
          options: [
            { label: "Tiendanube (Balanceado)", value: "tiendanube" },
            { label: "Zara (Minimal/Luxury)", value: "zara" },
            { label: "Temu (Agresivo/Urgente)", value: "temu" },
            { label: "Carey (Moderno/Cyan)", value: "carey" },
            { label: "Elegante (Lifestyle)", value: "elegante" },
            { label: "Urbano (Oscuro/Bold)", value: "urbano" },
            { label: "Promocional (Ofertas)", value: "promocional" },
            { label: "Minimalista (Editorial)", value: "minimalista" },
            { label: "Moderno (Tech/Trust)", value: "moderno" },
            { label: "Personalizado", value: "custom" },
          ],
        },
      };

      // Solo mostrar campos de color si el preset es "custom"
      if (themePreset === "custom") {
        fields.primaryColor = {
          type: "text",
          label: "🎨 Color primario (botones, CTAs)",
        };
        fields.secondaryColor = {
          type: "text",
          label: "🎨 Color secundario",
        };
        fields.accentColor = {
          type: "text",
          label: "🎨 Color de acento (badges)",
        };
        fields.backgroundColor = {
          type: "text",
          label: "🎨 Color de fondo",
        };
        fields.textColor = {
          type: "text",
          label: "🎨 Color de texto",
        };
        fields.mutedColor = {
          type: "text",
          label: "🎨 Color de texto secundario",
        };
      }

      return fields;
    },
    defaultProps: {
      themePreset: "tiendanube",
      primaryColor: "#2563EB",
      secondaryColor: "#4B5563",
      accentColor: "#10B981",
      backgroundColor: "#ffffff",
      textColor: "#1F2937",
      mutedColor: "#6B7280",
    },
    render: ({ children, themePreset, primaryColor, secondaryColor, accentColor, backgroundColor, textColor, mutedColor }: any) => {
      const customColors = themePreset === "custom" ? {
        primary: primaryColor,
        secondary: secondaryColor,
        accent: accentColor,
        background: backgroundColor,
        text: textColor,
        muted: mutedColor,
      } : undefined;

      return (
        <ThemeProvider preset={themePreset || "tiendanube"} customColors={customColors}>
          {children}
        </ThemeProvider>
      );
    },
  },
  categories: {
    comercio: {
      title: "🛒 Comercio",
      components: ["ProductCard", "ProductGrid", "ProductImage", "Price", "BuyButton", "ProductTabs"],
    },
    urgencia: {
      title: "⏰ Urgencia",
      components: ["Badge", "CountdownTimer", "StockIndicator", "Rating", "TrustBadgesGrid"],
    },
    contenido: {
      title: "📝 Contenido",
      components: ["Hero", "Heading", "Text", "SectionHeader", "PromoBar", "CategoryCircles", "Footer", "AccordionSection"],
    },
    layout: {
      title: "📐 Layout",
      components: ["Container", "Spacer", "SplitLayout", "MasonryGrid"],
    },
    media: {
      title: "🖼️ Media",
      components: ["ImageCarousel", "ImageGallery"],
    },
  },
  components: {
    // ═══════════════════════════════════════════════════════════════════════════
    // COMERCIO - ProductCard con resolveFields
    // ═══════════════════════════════════════════════════════════════════════════
    ProductCard: {
      label: "🛍️ Tarjeta de Producto",
      resolveFields: (data): Fields => {
        const variant = data.props.variant as string;

        // Campos base (siempre visibles)
        const fields: Fields = {
          variant: {
            type: "select",
            label: "🎨 Estilo de tarjeta",
            options: [
              { label: "Minimal (Zara style)", value: "minimal" },
              { label: "Standard", value: "standard" },
              { label: "Detailed (con descripción)", value: "detailed" },
              { label: "Aggressive (Temu/Shein)", value: "aggressive" },
            ],
          },
          // Grupo: Contenido
          image: {
            type: "select",
            label: "📷 Imagen",
            options: PRODUCT_IMAGES,
          },
          title: {
            type: "text",
            label: "Nombre del producto",
          },
          price: {
            type: "number",
            label: "💰 Precio",
          },
          comparePrice: {
            type: "number",
            label: "Precio anterior (tachado)",
          },
          currency: {
            type: "select",
            label: "Moneda",
            options: CURRENCY_OPTIONS,
          },
          productUrl: {
            type: "text",
            label: "🔗 Link del producto",
          },
          // Grupo: Estilos
          imageAspect: {
            type: "select",
            label: "Proporción de imagen",
            options: [
              { label: "Cuadrada (1:1)", value: "square" },
              { label: "Vertical (3:4)", value: "portrait" },
              { label: "Horizontal (4:3)", value: "landscape" },
            ],
          },
          imageZoom: {
            type: "radio",
            label: "Zoom en hover",
            options: YES_NO_OPTIONS,
          },
          borderRadius: {
            type: "select",
            label: "Bordes redondeados",
            options: BORDER_RADIUS_OPTIONS,
          },
          shadow: {
            type: "select",
            label: "Sombra",
            options: SHADOW_OPTIONS,
          },
          hoverEffect: {
            type: "select",
            label: "Efecto hover",
            options: HOVER_EFFECT_OPTIONS,
          },
          showWishlist: {
            type: "radio",
            label: "❤️ Botón favoritos",
            options: YES_NO_OPTIONS,
          },
        };

        // Campos para variante "standard" y superiores
        if (variant === "standard" || variant === "detailed" || variant === "aggressive") {
          fields.description = {
            type: "textarea",
            label: "Descripción (opcional)",
          };
        }

        // Campos para variante "detailed" y "aggressive"
        if (variant === "detailed" || variant === "aggressive") {
          fields.showRating = {
            type: "radio",
            label: "⭐ Mostrar rating",
            options: YES_NO_OPTIONS,
          };
          fields.rating = {
            type: "number",
            label: "Rating (0-5)",
          };
          fields.reviewCount = {
            type: "number",
            label: "Cantidad de reviews",
          };
          fields.showStock = {
            type: "radio",
            label: "📦 Mostrar stock",
            options: YES_NO_OPTIONS,
          };
          fields.stockLevel = {
            type: "select",
            label: "Nivel de stock",
            options: STOCK_LEVEL_OPTIONS,
          };
          fields.stockCount = {
            type: "number",
            label: "Cantidad en stock",
          };
        }

        // Campos exclusivos para variante "aggressive"
        if (variant === "aggressive") {
          fields.showTimer = {
            type: "radio",
            label: "⏱️ Mostrar countdown",
            options: YES_NO_OPTIONS,
          };
          fields.timerEndDate = {
            type: "text",
            label: "Fecha fin (YYYY-MM-DD)",
          };
          fields.badges = {
            type: "array",
            label: "🏷️ Etiquetas múltiples",
            arrayFields: {
              text: { type: "text", label: "Texto" },
              type: {
                type: "select",
                label: "Tipo",
                options: BADGE_TYPE_OPTIONS,
              },
            },
            getItemSummary: (item: { text?: string }) => item.text || "Badge",
            max: 4,
            defaultItemProps: {
              text: "OFERTA",
              type: "discount",
            },
          };
        }

        return fields;
      },
      defaultProps: {
        image: "/images/products/product-1.jpg",
        title: "Nombre del producto",
        price: 15000,
        currency: "ARS",
        variant: "standard",
        imageAspect: "square",
        imageZoom: true,
        showRating: false,
        rating: 4.5,
        reviewCount: 128,
        showStock: false,
        stockLevel: "in_stock",
        stockCount: 10,
        showTimer: false,
        showWishlist: true,
        borderRadius: "md",
        shadow: "sm",
        hoverEffect: "lift",
        productUrl: "#",
        badges: [],
      },
      render: ProductCard as any,
    },

    ProductGrid: {
      label: "📊 Grilla de Productos",
      resolveFields: (data): Fields => {
        const preset = data.props.preset as string;
        const isCustomizable = preset === "tiendanube" || preset === "custom";
        const showHeader = data.props.showHeader as boolean;

        // Campo de preset siempre visible
        const fields: Fields = {
          preset: {
            type: "select",
            label: "🎨 Estilo de tienda",
            options: [
              { label: "Tiendanube (Personalizable)", value: "tiendanube" },
              { label: "Zara (Minimal/Luxury)", value: "zara" },
              { label: "Temu (Agresivo/Denso)", value: "temu" },
              { label: "Carey (Moderno/Cyan)", value: "carey" },
              { label: "Elegante (Lifestyle)", value: "elegante" },
              { label: "Urbano (Oscuro/Bold)", value: "urbano" },
              { label: "Promocional (Ofertas)", value: "promocional" },
              { label: "Minimalista (Editorial)", value: "minimalista" },
              { label: "Moderno (Tech/Trust)", value: "moderno" },
              { label: "Personalizado", value: "custom" },
            ],
          },
        };

        // Campos de personalización para Tiendanube y Custom
        if (isCustomizable) {
          // === LAYOUT ===
          fields.columnsMobile = {
            type: "select",
            label: "📱 Columnas (móvil)",
            options: [
              { label: "1 columna", value: 1 },
              { label: "2 columnas", value: 2 },
            ],
          };
          fields.columnsTablet = {
            type: "select",
            label: "📱 Columnas (tablet)",
            options: [
              { label: "2 columnas", value: 2 },
              { label: "3 columnas", value: 3 },
              { label: "4 columnas", value: 4 },
            ],
          };
          fields.columnsDesktop = {
            type: "select",
            label: "🖥️ Columnas (desktop)",
            options: [
              { label: "3 columnas", value: 3 },
              { label: "4 columnas", value: 4 },
              { label: "5 columnas", value: 5 },
              { label: "6 columnas", value: 6 },
            ],
          };
          fields.gap = {
            type: "select",
            label: "📏 Espaciado",
            options: [
              { label: "Sin espacio", value: "none" },
              { label: "Muy pequeño", value: "xs" },
              { label: "Pequeño", value: "sm" },
              { label: "Mediano", value: "md" },
              { label: "Grande", value: "lg" },
              { label: "Extra grande", value: "xl" },
            ],
          };
          fields.layoutType = {
            type: "radio",
            label: "📊 Tipo de vista",
            options: [
              { label: "Grilla", value: "grid" },
              { label: "Lista", value: "list" },
            ],
          };

          // === CONTENEDOR ===
          fields.containerStyle = {
            type: "select",
            label: "🎨 Estilo contenedor",
            options: [
              { label: "Sin fondo", value: "none" },
              { label: "Sutil", value: "subtle" },
              { label: "Tarjeta", value: "card" },
              { label: "Gradiente", value: "gradient" },
            ],
          };

          // === TARJETAS ===
          fields.cardRadius = {
            type: "select",
            label: "⭕ Redondeo tarjetas",
            options: [
              { label: "Sin redondeo", value: "none" },
              { label: "Pequeño", value: "sm" },
              { label: "Mediano", value: "md" },
              { label: "Grande", value: "lg" },
              { label: "Extra grande", value: "xl" },
              { label: "Muy grande", value: "2xl" },
            ],
          };
          fields.cardShadow = {
            type: "select",
            label: "🌫️ Sombra tarjetas",
            options: [
              { label: "Sin sombra", value: "none" },
              { label: "Pequeña", value: "sm" },
              { label: "Mediana", value: "md" },
              { label: "Grande", value: "lg" },
            ],
          };
          fields.cardBorder = {
            type: "radio",
            label: "📦 Borde tarjetas",
            options: [
              { label: "Sí", value: true },
              { label: "No", value: false },
            ],
          };

          // === EFECTOS HOVER ===
          fields.hoverEffect = {
            type: "select",
            label: "✨ Efecto hover",
            options: [
              { label: "Ninguno", value: "none" },
              { label: "Levantar", value: "lift" },
              { label: "Escalar", value: "scale" },
              { label: "Brillo", value: "glow" },
              { label: "Borde color", value: "border" },
            ],
          };

          // === ENCABEZADO ===
          fields.showHeader = {
            type: "radio",
            label: "📌 Mostrar encabezado",
            options: [
              { label: "Sí", value: true },
              { label: "No", value: false },
            ],
          };

          if (showHeader) {
            fields.headerTitle = {
              type: "text",
              label: "Título",
            };
            fields.headerSubtitle = {
              type: "text",
              label: "Subtítulo",
            };
            fields.showViewAll = {
              type: "radio",
              label: "🔗 Link ver todos",
              options: [
                { label: "Sí", value: true },
                { label: "No", value: false },
              ],
            };
            if (data.props.showViewAll) {
              fields.viewAllLink = {
                type: "text",
                label: "URL ver todos",
              };
            }
          }

          // === ANIMACIONES ===
          fields.itemAnimation = {
            type: "select",
            label: "🎬 Animación items",
            options: [
              { label: "Ninguna", value: "none" },
              { label: "Aparecer", value: "fade" },
              { label: "Escalonado", value: "stagger" },
              { label: "Deslizar arriba", value: "slide-up" },
            ],
          };

          // === ALINEACIÓN ===
          fields.alignItems = {
            type: "select",
            label: "Alineación vertical",
            options: [
              { label: "Inicio", value: "start" },
              { label: "Centro", value: "center" },
              { label: "Fin", value: "end" },
              { label: "Estirar", value: "stretch" },
            ],
          };
        }

        return fields;
      },
      defaultProps: {
        preset: "tiendanube",
        columnsMobile: 2,
        columnsTablet: 3,
        columnsDesktop: 4,
        gap: "md",
        alignItems: "stretch",
        layoutType: "grid",
        containerStyle: "none",
        cardRadius: "lg",
        cardShadow: "sm",
        cardBorder: false,
        hoverEffect: "lift",
        showHeader: false,
        headerTitle: "Productos",
        headerSubtitle: "",
        showViewAll: false,
        viewAllLink: "#",
        itemAnimation: "none",
      },
      render: ProductGrid as any,
    },

    ProductImage: {
      label: "🖼️ Imagen de Producto",
      fields: {
        src: {
          type: "select",
          label: "Imagen",
          options: PRODUCT_IMAGES,
        },
        alt: {
          type: "text",
          label: "Texto alternativo",
        },
        size: {
          type: "select",
          label: "Tamaño",
          options: [
            { label: "Pequeño", value: "small" },
            { label: "Mediano", value: "medium" },
            { label: "Grande", value: "large" },
          ],
        },
      },
      defaultProps: {
        src: "/images/products/product-1.jpg",
        alt: "Producto",
        size: "large",
      },
      render: ProductImage as any,
    },

    Price: {
      label: "💰 Precio",
      fields: {
        amount: {
          type: "number",
          label: "Precio",
        },
        currency: {
          type: "select",
          label: "Moneda",
          options: CURRENCY_OPTIONS,
        },
        showCompare: {
          type: "radio",
          label: "Mostrar precio anterior",
          options: YES_NO_OPTIONS,
        },
        compareAmount: {
          type: "number",
          label: "Precio anterior",
        },
      },
      defaultProps: {
        amount: 15000,
        currency: "ARS",
        showCompare: false,
        compareAmount: 20000,
      },
      render: Price as any,
    },

    BuyButton: {
      label: "🛒 Botón de Compra",
      fields: {
        text: {
          type: "text",
          label: "Texto del botón",
        },
        variant: {
          type: "select",
          label: "Estilo",
          options: [
            { label: "Primario (negro)", value: "primary" },
            { label: "Secundario (gris)", value: "secondary" },
            { label: "Contorno", value: "outline" },
          ],
        },
      },
      defaultProps: {
        text: "Agregar al carrito",
        variant: "primary",
      },
      render: BuyButton as any,
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // URGENCIA
    // ═══════════════════════════════════════════════════════════════════════════
    Badge: {
      label: "🏷️ Badge/Etiqueta",
      fields: {
        text: {
          type: "text",
          label: "Texto",
        },
        type: {
          type: "select",
          label: "Tipo",
          options: BADGE_TYPE_OPTIONS,
        },
        size: {
          type: "select",
          label: "Tamaño",
          options: [
            { label: "Muy pequeño", value: "xs" },
            { label: "Pequeño", value: "sm" },
            { label: "Mediano", value: "md" },
            { label: "Grande", value: "lg" },
          ],
        },
        animation: {
          type: "select",
          label: "Animación",
          options: ANIMATION_OPTIONS,
        },
      },
      defaultProps: {
        text: "-50%",
        type: "discount",
        size: "md",
        animation: "none",
      },
      render: Badge as any,
    },

    CountdownTimer: {
      label: "⏱️ Contador Regresivo",
      fields: {
        variant: {
          type: "select",
          label: "Estilo",
          options: [
            { label: "Minimal", value: "minimal" },
            { label: "Standard", value: "standard" },
            { label: "Agresivo (urgente)", value: "aggressive" },
          ],
        },
        showDays: {
          type: "radio",
          label: "Mostrar días",
          options: YES_NO_OPTIONS,
        },
        showSeconds: {
          type: "radio",
          label: "Mostrar segundos",
          options: YES_NO_OPTIONS,
        },
        size: {
          type: "select",
          label: "Tamaño",
          options: [
            { label: "Pequeño", value: "sm" },
            { label: "Mediano", value: "md" },
            { label: "Grande", value: "lg" },
          ],
        },
      },
      defaultProps: {
        variant: "standard",
        showDays: true,
        showSeconds: true,
        size: "md",
      },
      render: CountdownTimer as any,
    },

    StockIndicator: {
      label: "📦 Indicador de Stock",
      fields: {
        level: {
          type: "select",
          label: "Nivel de stock",
          options: STOCK_LEVEL_OPTIONS,
        },
        quantity: {
          type: "number",
          label: "Cantidad",
        },
        showQuantity: {
          type: "radio",
          label: "Mostrar cantidad",
          options: YES_NO_OPTIONS,
        },
        showProgressBar: {
          type: "radio",
          label: "Mostrar barra de progreso",
          options: YES_NO_OPTIONS,
        },
        variant: {
          type: "select",
          label: "Estilo",
          options: [
            { label: "Minimal", value: "minimal" },
            { label: "Standard", value: "standard" },
            { label: "Urgente", value: "urgent" },
          ],
        },
        animation: {
          type: "select",
          label: "Animación",
          options: [
            { label: "Ninguna", value: "none" },
            { label: "Pulso", value: "pulse" },
          ],
        },
      },
      defaultProps: {
        level: "low_stock",
        quantity: 5,
        showQuantity: true,
        showProgressBar: true,
        variant: "standard",
        animation: "none",
      },
      render: StockIndicator as any,
    },

    Rating: {
      label: "⭐ Rating/Estrellas",
      fields: {
        rating: {
          type: "number",
          label: "Rating (0-5)",
        },
        reviewCount: {
          type: "number",
          label: "Cantidad de reviews",
        },
        showCount: {
          type: "radio",
          label: "Mostrar cantidad",
          options: YES_NO_OPTIONS,
        },
        size: {
          type: "select",
          label: "Tamaño",
          options: [
            { label: "Pequeño", value: "sm" },
            { label: "Mediano", value: "md" },
            { label: "Grande", value: "lg" },
          ],
        },
        variant: {
          type: "select",
          label: "Variante",
          options: [
            { label: "Estrellas completas", value: "stars" },
            { label: "Compacto", value: "compact" },
          ],
        },
      },
      defaultProps: {
        rating: 4.5,
        reviewCount: 128,
        showCount: true,
        size: "md",
        variant: "stars",
      },
      render: Rating as any,
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // CONTENIDO - Hero con resolveFields
    // ═══════════════════════════════════════════════════════════════════════════
    Hero: {
      label: "🎯 Hero Banner",
      resolveFields: (data): Fields => {
        const variant = data.props.variant as string;

        const fields: Fields = {
          variant: {
            type: "select",
            label: "🎨 Variante",
            options: [
              { label: "Simple (título + botón)", value: "simple" },
              { label: "Con 2 botones", value: "dual-cta" },
              { label: "Con badge promocional", value: "with-badge" },
              { label: "Con countdown", value: "with-timer" },
              { label: "Completo (todo)", value: "full" },
            ],
          },
          title: {
            type: "text",
            label: "Título",
          },
          subtitle: {
            type: "textarea",
            label: "Subtítulo",
          },
          backgroundImage: {
            type: "select",
            label: "Imagen de fondo",
            options: HERO_IMAGES,
          },
          // Botón principal (siempre visible)
          ctaText: {
            type: "text",
            label: "🔘 Texto botón principal",
          },
          ctaLink: {
            type: "text",
            label: "Link botón principal",
          },
          // Estilos
          height: {
            type: "select",
            label: "Altura",
            options: [
              { label: "Pequeña", value: "small" },
              { label: "Mediana", value: "medium" },
              { label: "Grande", value: "large" },
              { label: "Pantalla completa", value: "full" },
            ],
          },
          textAlign: {
            type: "select",
            label: "Alineación de texto",
            options: [
              { label: "Izquierda", value: "left" },
              { label: "Centro", value: "center" },
              { label: "Derecha", value: "right" },
            ],
          },
          showOverlay: {
            type: "radio",
            label: "Mostrar overlay oscuro",
            options: YES_NO_OPTIONS,
          },
        };

        // Botón secundario (dual-cta o full)
        if (variant === "dual-cta" || variant === "full") {
          fields.secondaryCtaText = {
            type: "text",
            label: "🔘 Texto botón secundario",
          };
          fields.secondaryCtaLink = {
            type: "text",
            label: "Link botón secundario",
          };
        }

        // Badge promocional (with-badge o full)
        if (variant === "with-badge" || variant === "full") {
          fields.badgeText = {
            type: "text",
            label: "🏷️ Texto del badge",
          };
          fields.badgeType = {
            type: "select",
            label: "Tipo de badge",
            options: BADGE_TYPE_OPTIONS,
          };
          fields.badgeAnimation = {
            type: "select",
            label: "Animación del badge",
            options: ANIMATION_OPTIONS,
          };
        }

        // Timer (with-timer o full)
        if (variant === "with-timer" || variant === "full") {
          fields.timerEndDate = {
            type: "text",
            label: "⏱️ Fecha fin countdown (YYYY-MM-DD)",
          };
          fields.timerVariant = {
            type: "select",
            label: "Estilo del timer",
            options: [
              { label: "Minimal", value: "minimal" },
              { label: "Standard", value: "standard" },
              { label: "Agresivo", value: "aggressive" },
            ],
          };
        }

        return fields;
      },
      defaultProps: {
        variant: "simple",
        title: "Bienvenido a nuestra tienda",
        subtitle: "Descubre los mejores productos con los mejores precios",
        backgroundImage: "/images/heroes/hero-1.jpg",
        ctaText: "Ver productos",
        ctaLink: "/catalogo",
        height: "large",
        textAlign: "center",
        showOverlay: true,
        secondaryCtaText: "Ofertas",
        secondaryCtaLink: "#ofertas",
        badgeText: "OFERTA ESPECIAL",
        badgeType: "flash",
        badgeAnimation: "pulse",
        timerEndDate: "",
        timerVariant: "standard",
      },
      render: Hero as any,
    },

    Heading: {
      label: "📌 Título",
      resolveFields: (data): Fields => {
        const style = data.props.style as string;

        const fields: Fields = {
          text: {
            type: "text",
            label: "Texto",
          },
          level: {
            type: "select",
            label: "Nivel",
            options: [
              { label: "H1 - Principal", value: "h1" },
              { label: "H2 - Secundario", value: "h2" },
              { label: "H3 - Terciario", value: "h3" },
              { label: "H4 - Cuaternario", value: "h4" },
            ],
          },
          align: {
            type: "select",
            label: "Alineación",
            options: [
              { label: "Izquierda", value: "left" },
              { label: "Centro", value: "center" },
              { label: "Derecha", value: "right" },
            ],
          },
          style: {
            type: "select",
            label: "🎨 Estilo visual",
            options: [
              { label: "Limpio (sin decoración)", value: "clean" },
              { label: "Con línea debajo", value: "underline" },
              { label: "Con subtítulo", value: "with-subtitle" },
              { label: "Fondo destacado", value: "highlight" },
              { label: "Con icono", value: "with-icon" },
            ],
          },
        };

        // Subtítulo (with-subtitle)
        if (style === "with-subtitle") {
          fields.subtitle = {
            type: "text",
            label: "Subtítulo",
          };
        }

        // Icono (with-icon)
        if (style === "with-icon") {
          fields.icon = {
            type: "text",
            label: "Emoji/Icono",
          };
        }

        // Color de fondo (highlight)
        if (style === "highlight") {
          fields.highlightColor = {
            type: "select",
            label: "Color de fondo",
            options: [
              { label: "Negro", value: "black" },
              { label: "Gris", value: "gray" },
              { label: "Rojo", value: "red" },
              { label: "Amarillo", value: "yellow" },
            ],
          };
        }

        return fields;
      },
      defaultProps: {
        text: "Título de sección",
        level: "h2",
        align: "center",
        style: "clean",
        subtitle: "",
        icon: "🔥",
        highlightColor: "black",
      },
      render: Heading as any,
    },

    Text: {
      label: "📝 Texto",
      fields: {
        content: {
          type: "textarea",
          label: "Contenido",
        },
        align: {
          type: "select",
          label: "Alineación",
          options: [
            { label: "Izquierda", value: "left" },
            { label: "Centro", value: "center" },
            { label: "Derecha", value: "right" },
          ],
        },
      },
      defaultProps: {
        content: "Escribe tu texto aquí...",
        align: "left",
      },
      render: Text as any,
    },

    Footer: {
      label: "🔻 Pie de página",
      fields: {
        text: {
          type: "text",
          label: "Texto del footer",
        },
        showSocial: {
          type: "radio",
          label: "Mostrar redes sociales",
          options: YES_NO_OPTIONS,
        },
      },
      defaultProps: {
        text: "© 2024 Mi Tienda. Todos los derechos reservados.",
        showSocial: true,
      },
      render: Footer as any,
    },

    SectionHeader: {
      label: "📋 Encabezado de Sección",
      resolveFields: (data): Fields => {
        const variant = data.props.variant as string;

        const fields: Fields = {
          variant: {
            type: "select",
            label: "🎨 Variante",
            options: [
              { label: "Simple (solo título)", value: "simple" },
              { label: "Con link Ver Todo", value: "with-link" },
              { label: "Con contador de items", value: "with-count" },
            ],
          },
          title: {
            type: "text",
            label: "Título",
          },
          subtitle: {
            type: "text",
            label: "Subtítulo (opcional)",
          },
          align: {
            type: "select",
            label: "Alineación",
            options: [
              { label: "Izquierda", value: "left" },
              { label: "Centro", value: "center" },
              { label: "Derecha", value: "right" },
            ],
          },
        };

        // Campos para variantes con link
        if (variant === "with-link" || variant === "with-count") {
          fields.viewAllLink = {
            type: "text",
            label: "🔗 Link Ver Todo",
          };
          fields.viewAllText = {
            type: "text",
            label: "Texto del link",
          };
        }

        // Campos para variante con contador
        if (variant === "with-count") {
          fields.itemCount = {
            type: "number",
            label: "Cantidad de items",
          };
        }

        return fields;
      },
      defaultProps: {
        variant: "simple",
        title: "Productos destacados",
        subtitle: "",
        align: "left",
        viewAllLink: "/catalogo",
        viewAllText: "Ver todo",
        itemCount: 12,
      },
      render: SectionHeader as any,
    },

    PromoBar: {
      label: "📢 Barra Promocional",
      resolveFields: (data): Fields => {
        const variant = data.props.variant as string;

        const fields: Fields = {
          variant: {
            type: "select",
            label: "🎨 Variante",
            options: [
              { label: "Simple (solo texto)", value: "simple" },
              { label: "Con icono", value: "with-icon" },
              { label: "Con countdown", value: "with-timer" },
              { label: "Texto animado (scroll)", value: "scrolling" },
            ],
          },
          text: {
            type: "text",
            label: "Texto promocional",
          },
          backgroundColor: {
            type: "text",
            label: "🎨 Color de fondo (hex)",
          },
          textColor: {
            type: "text",
            label: "🎨 Color del texto (hex)",
          },
        };

        // Icono (with-icon)
        if (variant === "with-icon") {
          fields.icon = {
            type: "select",
            label: "Icono",
            options: [
              { label: "🚚 Envío", value: "truck" },
              { label: "% Descuento", value: "percent" },
              { label: "🎁 Regalo", value: "gift" },
              { label: "🔥 Fuego", value: "fire" },
              { label: "⭐ Estrella", value: "star" },
            ],
          };
        }

        // Timer (with-timer)
        if (variant === "with-timer") {
          fields.timerEndDate = {
            type: "text",
            label: "⏱️ Fecha fin (YYYY-MM-DD)",
          };
        }

        // Scroll speed (scrolling)
        if (variant === "scrolling") {
          fields.scrollSpeed = {
            type: "select",
            label: "Velocidad de scroll",
            options: [
              { label: "Lento", value: "slow" },
              { label: "Normal", value: "normal" },
              { label: "Rápido", value: "fast" },
            ],
          };
        }

        return fields;
      },
      defaultProps: {
        variant: "simple",
        text: "Envío gratis en compras mayores a $50.000",
        backgroundColor: "#000000",
        textColor: "#ffffff",
        icon: "truck",
        timerEndDate: "",
        scrollSpeed: "normal",
      },
      render: PromoBar as any,
    },

    CategoryCircles: {
      label: "🔷 Categorías (Formas)",
      fields: {
        title: {
          type: "text",
          label: "Título",
        },
        size: {
          type: "select",
          label: "Tamaño",
          options: [
            { label: "Pequeño", value: "sm" },
            { label: "Mediano", value: "md" },
            { label: "Grande", value: "lg" },
          ],
        },
        shape: {
          type: "select",
          label: "Forma",
          options: [
            { label: "Círculo", value: "circle" },
            { label: "Cuadrado", value: "square" },
            { label: "Redondeado", value: "rounded" },
            { label: "Píldora (horizontal)", value: "pill" },
            { label: "Hexágono", value: "hexagon" },
          ],
        },
        showTitle: {
          type: "radio",
          label: "Mostrar nombres",
          options: [
            { label: "Sí", value: true },
            { label: "No", value: false },
          ],
        },
        gap: {
          type: "select",
          label: "Espaciado",
          options: [
            { label: "Pequeño", value: "sm" },
            { label: "Mediano", value: "md" },
            { label: "Grande", value: "lg" },
          ],
        },
      },
      defaultProps: {
        title: "Categorías",
        size: "md",
        shape: "circle",
        showTitle: true,
        gap: "md",
      },
      render: CategoryCircles as any,
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // LAYOUT
    // ═══════════════════════════════════════════════════════════════════════════
    Container: {
      label: "📦 Contenedor",
      fields: {
        maxWidth: {
          type: "select",
          label: "Ancho máximo",
          options: [
            { label: "Pequeño", value: "sm" },
            { label: "Mediano", value: "md" },
            { label: "Grande", value: "lg" },
            { label: "Extra grande", value: "xl" },
            { label: "Completo", value: "full" },
          ],
        },
        padding: {
          type: "select",
          label: "Padding",
          options: [
            { label: "Sin padding", value: "none" },
            { label: "Pequeño", value: "small" },
            { label: "Mediano", value: "medium" },
            { label: "Grande", value: "large" },
          ],
        },
      },
      defaultProps: {
        maxWidth: "lg",
        padding: "medium",
      },
      render: Container as any,
    },

    Spacer: {
      label: "↕️ Espaciador",
      fields: {
        height: {
          type: "select",
          label: "Altura",
          options: [
            { label: "Pequeño", value: "small" },
            { label: "Mediano", value: "medium" },
            { label: "Grande", value: "large" },
          ],
        },
      },
      defaultProps: {
        height: "medium",
      },
      render: Spacer as any,
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // NUEVOS COMPONENTES - Media y Layout avanzado
    // ═══════════════════════════════════════════════════════════════════════════
    ImageCarousel: ImageCarouselConfig,
    ImageGallery: ImageGalleryConfig,
    SplitLayout: SplitLayoutConfig,
    ProductTabs: ProductTabsConfig,
    AccordionSection: AccordionSectionConfig,
    TrustBadgesGrid: TrustBadgesGridConfig,
    MasonryGrid: MasonryGridConfig,
  },
};
