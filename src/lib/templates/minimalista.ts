/**
 * Template: Minimalista
 * MORFOLOGÍA: Hero 100vh + Solo 2 columnas + Mucho espacio
 *
 * Diferenciación estructural:
 * - SIN PromoBar (silencio total)
 * - Hero FULL SCREEN (100vh)
 * - Solo 2 columnas de productos (grandes)
 * - Gap XXL (muchísimo espacio blanco)
 * - Footer de 1 línea
 * - Sin badges, sin decoraciones
 */

import type { Data } from "@puckeditor/core";

export const minimalistaTemplate: Data = {
  content: [
    // DIFERENCIA: SIN PromoBar - silencio total arriba
    // DIFERENCIA: Hero FULL SCREEN
    {
      type: "Hero",
      props: {
        id: "min-hero",
        variant: "simple",
        title: "COLLECTION",
        subtitle: "",
        backgroundImage: "/images/heroes/hero-1.jpg",
        ctaText: "SHOP",
        ctaLink: "/catalogo",
        height: "full",
        textAlign: "center",
        showOverlay: true,
      },
    },
    // DIFERENCIA: Muchísimo espacio
    {
      type: "Spacer",
      props: { id: "min-spacer-1", height: "large" },
    },
    {
      type: "Spacer",
      props: { id: "min-spacer-1b", height: "large" },
    },
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
    // DIFERENCIA: Footer ultra mínimo
    {
      type: "Footer",
      props: {
        id: "min-footer",
        text: "MINIMALISTA",
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
    "min-section-1:content": [
      // DIFERENCIA: Heading ultra minimal
      {
        type: "Heading",
        props: {
          id: "min-heading-1",
          text: "NEW",
          level: "h2",
          align: "center",
          style: "clean",
        },
      },
      {
        type: "Spacer",
        props: { id: "min-h1-spacer", height: "large" },
      },
      // DIFERENCIA: Solo 2 columnas con gap enorme
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
    "min-section-2:content": [
      {
        type: "Heading",
        props: {
          id: "min-heading-2",
          text: "ESSENTIALS",
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
    // DIFERENCIA: Cards ultra minimalistas - solo imagen y precio
    "min-grid-1:products": [
      {
        type: "ProductCard",
        props: {
          id: "min-card-1",
          image: "/images/products/product-1.jpg",
          title: "",
          price: 89000,
          currency: "ARS",
          variant: "minimal",
          productUrl: "/producto/1",
          showWishlist: false,
          imageZoom: true,
          imageAspect: "portrait",
        },
      },
      {
        type: "ProductCard",
        props: {
          id: "min-card-2",
          image: "/images/products/product-2.jpg",
          title: "",
          price: 125000,
          currency: "ARS",
          variant: "minimal",
          productUrl: "/producto/2",
          showWishlist: false,
          imageZoom: true,
          imageAspect: "portrait",
        },
      },
    ],
    "min-grid-2:products": [
      {
        type: "ProductCard",
        props: {
          id: "min-card-3",
          image: "/images/products/product-3.jpg",
          title: "",
          price: 95000,
          currency: "ARS",
          variant: "minimal",
          productUrl: "/producto/3",
          showWishlist: false,
          imageZoom: true,
          imageAspect: "portrait",
        },
      },
      {
        type: "ProductCard",
        props: {
          id: "min-card-4",
          image: "/images/products/product-4.jpg",
          title: "",
          price: 145000,
          currency: "ARS",
          variant: "minimal",
          productUrl: "/producto/4",
          showWishlist: false,
          imageZoom: true,
          imageAspect: "portrait",
        },
      },
    ],
  },
};
