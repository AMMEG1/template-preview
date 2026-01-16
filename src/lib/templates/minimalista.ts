/**
 * Template: Minimalista - Landing
 * Estilo galería de arte - limpio, elegante, funcional
 * Inspiración: COS, Aesop, galerías de arte contemporáneo
 */

import type { Data } from "@puckeditor/core";

export const minimalistaTemplate: Data = {
  content: [
    // Sin PromoBar - entrada limpia
    {
      type: "Hero",
      props: {
        id: "min-hero",
        variant: "simple",
        title: "COLLECTION",
        subtitle: "New Season",
        backgroundImage: "/images/heroes/hero-1.jpg",
        ctaText: "EXPLORE",
        ctaLink: "/catalogo",
        height: "large",
        textAlign: "center",
        showOverlay: true,
      },
    },
    {
      type: "Spacer",
      props: { id: "min-spacer-1", height: "large" },
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
      type: "Footer",
      props: {
        id: "min-footer",
        text: "MINIMALISTA © 2024",
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
        props: { id: "min-h1-spacer", height: "medium" },
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
        props: { id: "min-h2-spacer", height: "medium" },
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
    "min-grid-1:products": [
      {
        type: "ProductCard",
        props: {
          id: "min-card-1",
          image: "/images/products/product-1.jpg",
          title: "Essential Tee",
          price: 15000,
          currency: "ARS",
          variant: "standard",
          productUrl: "/producto/1",
          showWishlist: false,
        },
      },
      {
        type: "ProductCard",
        props: {
          id: "min-card-2",
          image: "/images/products/product-2.jpg",
          title: "Classic Headphones",
          price: 45000,
          currency: "ARS",
          variant: "standard",
          productUrl: "/producto/2",
          showWishlist: false,
        },
      },
    ],
    "min-grid-2:products": [
      {
        type: "ProductCard",
        props: {
          id: "min-card-3",
          image: "/images/products/product-3.jpg",
          title: "Smart Watch",
          price: 85000,
          currency: "ARS",
          variant: "standard",
          productUrl: "/producto/3",
          showWishlist: false,
        },
      },
      {
        type: "ProductCard",
        props: {
          id: "min-card-4",
          image: "/images/products/product-4.jpg",
          title: "Running Shoes",
          price: 55000,
          currency: "ARS",
          variant: "standard",
          productUrl: "/producto/4",
          showWishlist: false,
        },
      },
    ],
  },
};
