/**
 * Template: Urbano - Producto
 * Estilo streetwear bold - imagen grande + texto minimal
 * Inspiración: Supreme, Off-White, streetwear brands
 */

import type { Data } from "@puckeditor/core";

export const urbanoProductTemplate: Data = {
  content: [
    // Sin PromoBar - entrada directa
    // Galería de imágenes grande
    {
      type: "Container",
      props: {
        id: "urbano-prod-gallery",
        maxWidth: "xl",
        padding: "none",
      },
    },
    {
      type: "Spacer",
      props: { id: "urbano-prod-spacer-1", height: "medium" },
    },
    // Info bold y centrada
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
    // Relacionados
    {
      type: "Container",
      props: {
        id: "urbano-prod-related",
        maxWidth: "xl",
        padding: "medium",
      },
    },
    {
      type: "Spacer",
      props: { id: "urbano-prod-spacer-3", height: "medium" },
    },
    {
      type: "Footer",
      props: {
        id: "urbano-prod-footer",
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
    // Galería con carrusel
    "urbano-prod-gallery:content": [
      {
        type: "ImageCarousel",
        props: {
          id: "product-main-image",
          images: [
            { url: "/images/products/product-1.jpg", alt: "Look 1" },
            { url: "/images/products/product-2.jpg", alt: "Look 2" },
            { url: "/images/products/product-3.jpg", alt: "Look 3" },
          ],
          autoplay: true,
          autoplayInterval: 4000,
          showArrows: true,
          showDots: true,
          aspectRatio: "wide",
        },
      },
    ],
    // Info bold y minimal
    "urbano-prod-info:content": [
      {
        type: "Heading",
        props: {
          id: "product-title",
          text: "PRODUCT NAME",
          level: "h1",
          align: "center",
          style: "clean",
        },
      },
      {
        type: "Spacer",
        props: { id: "urbano-prod-spacer-title", height: "small" },
      },
      {
        type: "Price",
        props: {
          id: "product-price",
          amount: 15000,
          currency: "ARS",
          showCompare: true,
          compareAmount: 20000,
        },
      },
      {
        type: "Spacer",
        props: { id: "urbano-prod-spacer-price", height: "medium" },
      },
      {
        type: "Text",
        props: {
          id: "product-description",
          content: "Streetwear premium. Edición limitada.",
          align: "center",
        },
      },
      {
        type: "Spacer",
        props: { id: "urbano-prod-spacer-desc", height: "medium" },
      },
      {
        type: "BuyButton",
        props: {
          id: "urbano-prod-buy",
          text: "ADD TO CART",
          variant: "primary",
        },
      },
    ],
    // Relacionados
    "urbano-prod-related:content": [
      {
        type: "Heading",
        props: {
          id: "urbano-prod-related-title",
          text: "COMPLETE THE LOOK",
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
          gap: "sm",
        },
      },
    ],
    "urbano-prod-grid:products": [],
  },
};
