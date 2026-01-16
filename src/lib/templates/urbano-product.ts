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
        maxWidth: "md",
        padding: "large",
      },
    },
    {
      type: "Spacer",
      props: { id: "urbano-prod-spacer-2", height: "medium" },
    },
    // Detalles del producto
    {
      type: "Container",
      props: {
        id: "urbano-prod-details",
        maxWidth: "md",
        padding: "medium",
      },
    },
    {
      type: "Spacer",
      props: { id: "urbano-prod-spacer-3", height: "medium" },
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
      props: { id: "urbano-prod-spacer-4", height: "medium" },
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
          text: "OVERSIZED HOODIE",
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
        type: "Text",
        props: {
          id: "product-subtitle",
          content: "DROP 001 — LIMITED EDITION",
          align: "center",
        },
      },
      {
        type: "Spacer",
        props: { id: "urbano-prod-spacer-subtitle", height: "medium" },
      },
      {
        type: "Price",
        props: {
          id: "product-price",
          amount: 45000,
          currency: "ARS",
          showCompare: true,
          compareAmount: 55000,
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
          content: "Streetwear premium. Oversize fit. 100% algodón heavy weight. Bordado exclusivo en pecho y espalda.",
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
    // Detalles del producto
    "urbano-prod-details:content": [
      {
        type: "Heading",
        props: {
          id: "urbano-prod-details-title",
          text: "THE DETAILS",
          level: "h3",
          align: "center",
          style: "clean",
        },
      },
      {
        type: "Spacer",
        props: { id: "urbano-prod-details-spacer", height: "small" },
      },
      {
        type: "Text",
        props: {
          id: "urbano-prod-details-text",
          content: "Material: 100% Algodón Heavy Weight (400gsm)\nFit: Oversize / Boxy\nColor: Negro\nCuidado: Lavar al revés, agua fría",
          align: "center",
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
    "urbano-prod-grid:products": [
      {
        type: "ProductCard",
        props: {
          id: "urbano-related-1",
          image: "/images/products/product-2.jpg",
          title: "CARGO PANTS",
          price: 52000,
          currency: "ARS",
          variant: "minimal",
          productUrl: "/producto/2",
          showWishlist: false,
        },
      },
      {
        type: "ProductCard",
        props: {
          id: "urbano-related-2",
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
          id: "urbano-related-3",
          image: "/images/products/product-4.jpg",
          title: "CHAIN NECKLACE",
          price: 18000,
          currency: "ARS",
          variant: "minimal",
          productUrl: "/producto/4",
          showWishlist: false,
        },
      },
      {
        type: "ProductCard",
        props: {
          id: "urbano-related-4",
          image: "/images/products/product-1.jpg",
          title: "BUCKET HAT",
          price: 15000,
          currency: "ARS",
          variant: "minimal",
          productUrl: "/producto/5",
          showWishlist: false,
        },
      },
    ],
  },
};
