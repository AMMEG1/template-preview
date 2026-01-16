/**
 * Template: Urbano - Producto
 * MORFOLOGÍA RADICAL: Banner horizontal cinematográfico + texto bold enorme + minimal
 * Inspiración: Streetwear brands, Supreme, Off-White
 */

import type { Data } from "@puckeditor/core";

export const urbanoProductTemplate: Data = {
  content: [
    // SIN PromoBar - entrada directa brutal
    // DIFERENCIA RADICAL: Imagen como banner horizontal (cinematográfico)
    {
      type: "ImageCarousel",
      props: {
        id: "urbano-prod-banner",
        images: [
          { url: "/images/products/product-1.jpg", alt: "Look 1" },
          { url: "/images/products/product-2.jpg", alt: "Look 2" },
        ],
        autoplay: true,
        autoplayInterval: 5000,
        showArrows: false,
        showDots: true,
        aspectRatio: "ultrawide",
      },
    },
    {
      type: "Spacer",
      props: { id: "urbano-prod-spacer-1", height: "medium" },
    },
    // Info BOLD y centrada
    {
      type: "Container",
      props: {
        id: "urbano-prod-info",
        maxWidth: "lg",
        padding: "large",
      },
    },
    {
      type: "Spacer",
      props: { id: "urbano-prod-spacer-2", height: "large" },
    },
    {
      type: "Spacer",
      props: { id: "urbano-prod-spacer-2b", height: "large" },
    },
    // Segunda imagen full width
    {
      type: "ProductImage",
      props: {
        id: "urbano-prod-detail",
        src: "/images/products/product-3.jpg",
        alt: "Detail",
        size: "full",
      },
    },
    {
      type: "Spacer",
      props: { id: "urbano-prod-spacer-3", height: "large" },
    },
    // Relacionados edge-to-edge
    {
      type: "Container",
      props: {
        id: "urbano-prod-related",
        maxWidth: "full",
        padding: "none",
      },
    },
    {
      type: "Footer",
      props: {
        id: "urbano-prod-footer",
        text: "URBANO",
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
    // Info BOLD y minimal
    "urbano-prod-info:content": [
      {
        type: "Heading",
        props: {
          id: "product-title",
          text: "PRODUCT",
          level: "h1",
          align: "center",
          style: "clean",
        },
      },
      {
        type: "Spacer",
        props: { id: "urbano-prod-spacer-title", height: "medium" },
      },
      {
        type: "Price",
        props: {
          id: "product-price",
          amount: 15000,
          currency: "ARS",
          showCompare: false,
        },
      },
      {
        type: "Spacer",
        props: { id: "urbano-prod-spacer-price", height: "large" },
      },
      {
        type: "BuyButton",
        props: {
          id: "urbano-prod-buy",
          text: "BUY",
          variant: "primary",
        },
      },
    ],
    // Relacionados: edge-to-edge, sin gaps
    "urbano-prod-related:content": [
      {
        type: "Heading",
        props: {
          id: "urbano-prod-related-title",
          text: "MORE",
          level: "h2",
          align: "center",
          style: "clean",
        },
      },
      {
        type: "Spacer",
        props: { id: "urbano-prod-spacer-related", height: "medium" },
      },
      {
        type: "ProductGrid",
        props: {
          id: "urbano-prod-grid",
          preset: "urbano",
          columnsDesktop: 4,
          columnsTablet: 2,
          columnsMobile: 2,
          gap: "none",
        },
      },
    ],
    "urbano-prod-grid:products": [],
  },
};
