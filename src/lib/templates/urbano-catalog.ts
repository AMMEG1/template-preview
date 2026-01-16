/**
 * Template: Urbano - Catálogo
 * MORFOLOGÍA: SIN PromoBar + fondo oscuro + grid 3 cols sin gaps
 */

import type { Data } from "@puckeditor/core";

export const urbanoCatalogTemplate: Data = {
  content: [
    // DIFERENCIA MORFOLÓGICA: SIN PromoBar
    {
      type: "Spacer",
      props: { id: "urbano-cat-spacer-1", height: "medium" },
    },
    {
      type: "Container",
      props: {
        id: "urbano-cat-main",
        maxWidth: "full",
        padding: "none",
      },
    },
    {
      type: "Spacer",
      props: { id: "urbano-cat-spacer-2", height: "medium" },
    },
    {
      type: "Footer",
      props: {
        id: "urbano-cat-footer",
        text: "URBANO 2024",
        showSocial: false,
      },
    },
  ],
  root: {
    props: {
      themePreset: "urbano",
    } as Record<string, unknown>,
  },
  zones: {
    "urbano-cat-main:content": [
      {
        type: "Heading",
        props: {
          id: "urbano-cat-title",
          text: "ALL PRODUCTS",
          level: "h1",
          align: "center",
          style: "clean",
        },
      },
      {
        type: "Spacer",
        props: { id: "urbano-cat-spacer-3", height: "medium" },
      },
      // DIFERENCIA MORFOLÓGICA: Grid 3 cols sin gap (edge-to-edge)
      {
        type: "ProductGrid",
        props: {
          id: "urbano-cat-grid",
          preset: "urbano",
          columnsDesktop: 3,
          columnsTablet: 2,
          columnsMobile: 1,
          gap: "none",
        },
      },
    ],
    "urbano-cat-grid:products": [
      {
        type: "ProductCard",
        props: {
          id: "urbano-cat-card-1",
          image: "/images/products/product-1.jpg",
          title: "OVERSIZED HOODIE",
          price: 45000,
          currency: "ARS",
          variant: "minimal",
          productUrl: "/producto/1",
          showWishlist: false,
        },
      },
      {
        type: "ProductCard",
        props: {
          id: "urbano-cat-card-2",
          image: "/images/products/product-2.jpg",
          title: "CARGO PANTS",
          price: 52000,
          currency: "ARS",
          variant: "minimal",
          productUrl: "/producto/2",
          showWishlist: false,
          badges: [{ text: "NEW", type: "new" }],
        },
      },
      {
        type: "ProductCard",
        props: {
          id: "urbano-cat-card-3",
          image: "/images/products/product-3.jpg",
          title: "PLATFORM SNEAKERS",
          price: 68000,
          currency: "ARS",
          variant: "minimal",
          productUrl: "/producto/3",
          showWishlist: false,
        },
      },
      {
        type: "ProductCard",
        props: {
          id: "urbano-cat-card-4",
          image: "/images/products/product-4.jpg",
          title: "GRAPHIC TEE",
          price: 28000,
          currency: "ARS",
          variant: "minimal",
          productUrl: "/producto/4",
          showWishlist: false,
          badges: [{ text: "HOT", type: "hot" }],
        },
      },
      {
        type: "ProductCard",
        props: {
          id: "urbano-cat-card-5",
          image: "/images/products/product-1.jpg",
          title: "BOMBER JACKET",
          price: 78000,
          currency: "ARS",
          variant: "minimal",
          productUrl: "/producto/5",
          showWishlist: false,
        },
      },
      {
        type: "ProductCard",
        props: {
          id: "urbano-cat-card-6",
          image: "/images/products/product-2.jpg",
          title: "WIDE LEG JEANS",
          price: 48000,
          currency: "ARS",
          variant: "minimal",
          productUrl: "/producto/6",
          showWishlist: false,
        },
      },
      {
        type: "ProductCard",
        props: {
          id: "urbano-cat-card-7",
          image: "/images/products/product-3.jpg",
          title: "CHAIN NECKLACE",
          price: 18000,
          currency: "ARS",
          variant: "minimal",
          productUrl: "/producto/7",
          showWishlist: false,
        },
      },
      {
        type: "ProductCard",
        props: {
          id: "urbano-cat-card-8",
          image: "/images/products/product-4.jpg",
          title: "BUCKET HAT",
          price: 15000,
          currency: "ARS",
          variant: "minimal",
          productUrl: "/producto/8",
          showWishlist: false,
          badges: [{ text: "LIMITED", type: "limited" }],
        },
      },
      {
        type: "ProductCard",
        props: {
          id: "urbano-cat-card-9",
          image: "/images/products/product-1.jpg",
          title: "CROSSBODY BAG",
          price: 32000,
          currency: "ARS",
          variant: "minimal",
          productUrl: "/producto/9",
          showWishlist: false,
        },
      },
    ],
  },
};
