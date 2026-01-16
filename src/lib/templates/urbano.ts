/**
 * Template: Urbano
 * MORFOLOGÍA: SIN PromoBar + Hero full + ImageCarousel de looks
 *
 * Diferenciación estructural:
 * - SIN PromoBar (silencio arriba)
 * - Hero full-screen oscuro
 * - ImageCarousel horizontal de "looks"
 * - Grid 3 cols con gap mínimo
 * - Footer mínimo
 */

import type { Data } from "@puckeditor/core";

export const urbanoTemplate: Data = {
  content: [
    // DIFERENCIA MORFOLÓGICA: SIN PromoBar - entrada directa al Hero
    {
      type: "Hero",
      props: {
        id: "urbano-hero",
        variant: "simple",
        title: "GET THE LOOK",
        subtitle: "STREETWEAR COLLECTION 2024",
        backgroundImage: "/images/heroes/hero-2.jpg",
        ctaText: "SHOP NOW",
        ctaLink: "/catalogo",
        height: "full",
        textAlign: "center",
        showOverlay: true,
      },
    },
    {
      type: "Spacer",
      props: { id: "urbano-spacer-0", height: "medium" },
    },
    // DIFERENCIA MORFOLÓGICA: ImageCarousel de looks completos
    {
      type: "Container",
      props: {
        id: "urbano-looks-section",
        maxWidth: "full",
        padding: "medium",
      },
    },
    {
      type: "Spacer",
      props: { id: "urbano-spacer-1", height: "large" },
    },
    {
      type: "Container",
      props: {
        id: "urbano-products",
        maxWidth: "xl",
        padding: "none",
      },
    },
    {
      type: "Spacer",
      props: { id: "urbano-spacer-2", height: "large" },
    },
    // DIFERENCIA: Footer mínimo de 1 línea
    {
      type: "Footer",
      props: {
        id: "urbano-footer",
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
    // DIFERENCIA MORFOLÓGICA: ImageCarousel en lugar de CategoryCircles
    "urbano-looks-section:content": [
      {
        type: "Heading",
        props: {
          id: "urbano-looks-title",
          text: "LOOKS",
          level: "h2",
          align: "left",
          style: "clean",
        },
      },
      {
        type: "Spacer",
        props: { id: "urbano-looks-spacer", height: "small" },
      },
      {
        type: "ImageCarousel",
        props: {
          id: "urbano-carousel",
          images: [
            { url: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800", alt: "Look 1 - Streetwear" },
            { url: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=800", alt: "Look 2 - Urban" },
            { url: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=800", alt: "Look 3 - Casual" },
            { url: "https://images.unsplash.com/photo-1544441893-675973e31985?w=800", alt: "Look 4 - Bold" },
          ],
          autoplay: true,
          autoplayInterval: 4000,
          showArrows: true,
          showDots: true,
          aspectRatio: "wide",
        },
      },
    ],
    "urbano-products:content": [
      {
        type: "Heading",
        props: {
          id: "urbano-prod-title",
          text: "NUEVOS",
          level: "h2",
          align: "left",
          style: "clean",
        },
      },
      {
        type: "Spacer",
        props: { id: "urbano-prod-spacer", height: "medium" },
      },
      // DIFERENCIA: Grid con 3 columnas y gap mínimo (edge-to-edge)
      {
        type: "ProductGrid",
        props: {
          id: "urbano-grid",
          preset: "urbano",
          columnsDesktop: 3,
          gap: "xs",
        },
      },
    ],
    "urbano-grid:products": [
      {
        type: "ProductCard",
        props: {
          id: "urbano-card-1",
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
          id: "urbano-card-2",
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
          id: "urbano-card-3",
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
          id: "urbano-card-4",
          image: "/images/products/product-4.jpg",
          title: "GRAPHIC TEE",
          price: 28000,
          currency: "ARS",
          variant: "minimal",
          productUrl: "/producto/4",
          showWishlist: false,
        },
      },
      {
        type: "ProductCard",
        props: {
          id: "urbano-card-5",
          image: "/images/products/product-5.jpg",
          title: "CHAIN NECKLACE",
          price: 18000,
          currency: "ARS",
          variant: "minimal",
          productUrl: "/producto/5",
          showWishlist: false,
        },
      },
      {
        type: "ProductCard",
        props: {
          id: "urbano-card-6",
          image: "/images/products/product-6.jpg",
          title: "BUCKET HAT",
          price: 15000,
          currency: "ARS",
          variant: "minimal",
          productUrl: "/producto/6",
          showWishlist: false,
        },
      },
    ],
  },
};
