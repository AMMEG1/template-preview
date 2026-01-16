/**
 * Template: Minimalista
 * ESTÉTICA: Editorial de lujo silencioso, galería de arte, quiet luxury
 *
 * VISIÓN: Una experiencia visual que evoca revistas de moda high-end,
 * con muchísimo espacio en blanco, tipografía ultralight con tracking amplio,
 * y un enfoque en la imagen como protagonista absoluta.
 * Inspirado en: COS, Aesop, The Row, Celine
 *
 * MORFOLOGÍA ÚNICA:
 * - SIN PromoBar - entrada completamente limpia
 * - Hero con título minimalista, subtítulo apenas visible
 * - Grid de 2 columnas con gaps ENORMES
 * - Cards sin bordes, sin sombras, solo imagen + precio
 * - Todo el énfasis en el espacio negativo
 * - Footer ultra discreto
 */

import type { Data } from "@puckeditor/core";

export const minimalistaTemplate: Data = {
  content: [
    // SIN PROMOBAR - silencio absoluto
    // HERO: Minimalista, tipografía light
    {
      type: "Hero",
      props: {
        id: "min-hero",
        variant: "simple",
        title: "COLLECTION",
        subtitle: "Spring/Summer",
        backgroundImage: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200",
        ctaText: "EXPLORE",
        ctaLink: "/catalogo",
        height: "full",
        textAlign: "center",
        showOverlay: true,
        overlayGradient: "light",
        textAnimation: "fade-in",
      },
    },
    {
      type: "Spacer",
      props: { id: "min-spacer-1", height: "large" },
    },
    {
      type: "Spacer",
      props: { id: "min-spacer-1b", height: "large" },
    },
    // SECCIÓN 1: New Arrivals - Grid 2 columnas con gaps enormes
    {
      type: "Container",
      props: {
        id: "min-section-1",
        maxWidth: "lg",
        padding: "large",
      },
    },
    {
      type: "Spacer",
      props: { id: "min-spacer-2", height: "large" },
    },
    {
      type: "Spacer",
      props: { id: "min-spacer-2b", height: "large" },
    },
    // SECCIÓN 2: Essentials
    {
      type: "Container",
      props: {
        id: "min-section-2",
        maxWidth: "lg",
        padding: "large",
      },
    },
    {
      type: "Spacer",
      props: { id: "min-spacer-3", height: "large" },
    },
    {
      type: "Spacer",
      props: { id: "min-spacer-3b", height: "large" },
    },
    // SECCIÓN 3: Editorial split
    {
      type: "SplitLayout",
      props: {
        id: "min-editorial",
        imageUrl: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800",
        imageAlt: "Editorial fashion",
        imagePosition: "right",
        imageFit: "cover",
        backgroundColor: "#FAFAFA",
        verticalAlign: "center",
        splitRatio: "40-60",
        minHeight: "half",
        padding: "xl",
      },
    },
    {
      type: "Spacer",
      props: { id: "min-spacer-4", height: "large" },
    },
    {
      type: "Spacer",
      props: { id: "min-spacer-4b", height: "large" },
    },
    // FOOTER: Ultra discreto
    {
      type: "Footer",
      props: {
        id: "min-footer",
        text: "© 2024",
        showSocial: false,
      },
    },
  ],
  root: {
    props: {
      themePreset: "minimalista",
    } as Record<string, unknown>,
  },
  zones: {
    // New Arrivals
    "min-section-1:content": [
      {
        type: "Heading",
        props: {
          id: "min-heading-1",
          text: "New Arrivals",
          level: "h2",
          align: "center",
          style: "clean",
        },
      },
      {
        type: "Spacer",
        props: { id: "min-h1-spacer", height: "large" },
      },
      {
        type: "ProductGrid",
        props: {
          id: "min-grid-1",
          preset: "minimalista",
          columnsDesktop: 2,
          columnsTablet: 2,
          columnsMobile: 1,
          gap: "xl",
        },
      },
    ],
    // Essentials
    "min-section-2:content": [
      {
        type: "Heading",
        props: {
          id: "min-heading-2",
          text: "Essentials",
          level: "h2",
          align: "center",
          style: "clean",
        },
      },
      {
        type: "Spacer",
        props: { id: "min-h2-spacer", height: "large" },
      },
      {
        type: "ProductGrid",
        props: {
          id: "min-grid-2",
          preset: "minimalista",
          columnsDesktop: 2,
          columnsTablet: 2,
          columnsMobile: 1,
          gap: "xl",
        },
      },
    ],
    // Editorial content
    "min-editorial:content": [
      {
        type: "Text",
        props: {
          id: "min-edit-tag",
          content: "The Edit",
          align: "left",
        },
      },
      {
        type: "Heading",
        props: {
          id: "min-edit-title",
          text: "Quiet Luxury",
          level: "h2",
          align: "left",
          style: "clean",
        },
      },
      {
        type: "Spacer",
        props: { id: "min-edit-spacer", height: "small" },
      },
      {
        type: "Text",
        props: {
          id: "min-edit-text",
          content: "Timeless pieces crafted with intention. Quality over quantity. Designed to last beyond seasons.",
          align: "left",
        },
      },
      {
        type: "Spacer",
        props: { id: "min-edit-spacer-2", height: "medium" },
      },
      {
        type: "BuyButton",
        props: {
          id: "min-edit-cta",
          text: "Discover",
          variant: "outline",
          href: "/catalogo",
        },
      },
    ],
    // Productos New Arrivals - muy minimalistas
    "min-grid-1:products": [
      {
        type: "ProductCard",
        props: {
          id: "min-card-1",
          image: "/images/products/product-1.jpg",
          title: "Oversized Wool Coat",
          price: 185000,
          currency: "ARS",
          variant: "minimal",
          productUrl: "/producto/1",
          showWishlist: false,
          imageZoom: true,
        },
      },
      {
        type: "ProductCard",
        props: {
          id: "min-card-2",
          image: "/images/products/product-2.jpg",
          title: "Cashmere Sweater",
          price: 125000,
          currency: "ARS",
          variant: "minimal",
          productUrl: "/producto/2",
          showWishlist: false,
          imageZoom: true,
        },
      },
      {
        type: "ProductCard",
        props: {
          id: "min-card-3",
          image: "/images/products/product-3.jpg",
          title: "Silk Blouse",
          price: 95000,
          currency: "ARS",
          variant: "minimal",
          productUrl: "/producto/3",
          showWishlist: false,
          imageZoom: true,
        },
      },
      {
        type: "ProductCard",
        props: {
          id: "min-card-4",
          image: "/images/products/product-4.jpg",
          title: "Leather Loafers",
          price: 145000,
          currency: "ARS",
          variant: "minimal",
          productUrl: "/producto/4",
          showWishlist: false,
          imageZoom: true,
        },
      },
    ],
    // Productos Essentials
    "min-grid-2:products": [
      {
        type: "ProductCard",
        props: {
          id: "min-card-5",
          image: "/images/products/product-5.jpg",
          title: "Cotton T-Shirt",
          price: 35000,
          currency: "ARS",
          variant: "minimal",
          productUrl: "/producto/5",
          showWishlist: false,
          imageZoom: true,
        },
      },
      {
        type: "ProductCard",
        props: {
          id: "min-card-6",
          image: "/images/products/product-6.jpg",
          title: "Linen Trousers",
          price: 85000,
          currency: "ARS",
          variant: "minimal",
          productUrl: "/producto/6",
          showWishlist: false,
          imageZoom: true,
        },
      },
      {
        type: "ProductCard",
        props: {
          id: "min-card-7",
          image: "/images/products/product-1.jpg",
          title: "Merino Cardigan",
          price: 115000,
          currency: "ARS",
          variant: "minimal",
          productUrl: "/producto/7",
          showWishlist: false,
          imageZoom: true,
        },
      },
      {
        type: "ProductCard",
        props: {
          id: "min-card-8",
          image: "/images/products/product-2.jpg",
          title: "Canvas Tote",
          price: 65000,
          currency: "ARS",
          variant: "minimal",
          productUrl: "/producto/8",
          showWishlist: false,
          imageZoom: true,
        },
      },
    ],
  },
};
