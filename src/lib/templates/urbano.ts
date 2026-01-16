/**
 * Template: Urbano
 * ESTÉTICA: Dark mode, streetwear, edgy, Gen-Z
 *
 * VISIÓN: Una experiencia visual que evoca tiendas de streetwear underground,
 * con fondo negro, tipografía bold uppercase, y actitud rebelde.
 * Inspirado en: Bershka, Supreme, Off-White, Palace
 *
 * MORFOLOGÍA ÚNICA:
 * - SIN PromoBar - entrada directa al contenido
 * - Hero fullscreen con overlay oscuro pesado
 * - ImageCarousel de "looks" completos
 * - Grid 3 columnas con gaps mínimos (edge-to-edge)
 * - Todo uppercase, tracking wide
 * - Footer mínimo de una línea
 */

import type { Data } from "@puckeditor/core";

export const urbanoTemplate: Data = {
  content: [
    // SIN PROMOBAR - silencio total, entrada directa
    // HERO: Fullscreen, impactante, oscuro
    {
      type: "Hero",
      props: {
        id: "urbano-hero",
        variant: "simple",
        title: "DROP 001",
        subtitle: "STREETWEAR COLLECTION",
        backgroundImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200",
        ctaText: "SHOP NOW",
        ctaLink: "/catalogo",
        height: "full",
        textAlign: "center",
        showOverlay: true,
        overlayGradient: "dark",
      },
    },
    {
      type: "Spacer",
      props: { id: "urbano-spacer-0", height: "medium" },
    },
    // LOOKS: Carrusel horizontal de outfits completos
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
      props: { id: "urbano-spacer-1", height: "medium" },
    },
    // PRODUCTOS: Grid denso 3 columnas
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
      props: { id: "urbano-spacer-2", height: "medium" },
    },
    // SEGUNDA SECCIÓN: Accesorios
    {
      type: "Container",
      props: {
        id: "urbano-accessories",
        maxWidth: "xl",
        padding: "none",
      },
    },
    {
      type: "Spacer",
      props: { id: "urbano-spacer-3", height: "medium" },
    },
    // FOOTER: Mínimo, una línea
    {
      type: "Footer",
      props: {
        id: "urbano-footer",
        text: "URBANO © 2024",
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
    // Carrusel de looks
    "urbano-looks-section:content": [
      {
        type: "Heading",
        props: {
          id: "urbano-looks-title",
          text: "GET THE LOOK",
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
    // Grid de productos principal
    "urbano-products:content": [
      {
        type: "Heading",
        props: {
          id: "urbano-prod-title",
          text: "NEW DROPS",
          level: "h2",
          align: "left",
          style: "clean",
        },
      },
      {
        type: "Spacer",
        props: { id: "urbano-prod-spacer", height: "medium" },
      },
      {
        type: "ProductGrid",
        props: {
          id: "urbano-grid",
          preset: "urbano",
          columnsDesktop: 3,
          columnsTablet: 2,
          columnsMobile: 2,
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
          badges: [{ text: "NEW", type: "new" }],
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
          badges: [{ text: "HOT", type: "hot" }],
        },
      },
      {
        type: "ProductCard",
        props: {
          id: "urbano-card-5",
          image: "/images/products/product-5.jpg",
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
          id: "urbano-card-6",
          image: "/images/products/product-6.jpg",
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
          id: "urbano-card-11",
          image: "/images/products/product-1.jpg",
          title: "TRACK JACKET",
          price: 62000,
          currency: "ARS",
          variant: "minimal",
          productUrl: "/producto/11",
          showWishlist: false,
          badges: [{ text: "NEW", type: "new" }],
        },
      },
      {
        type: "ProductCard",
        props: {
          id: "urbano-card-12",
          image: "/images/products/product-2.jpg",
          title: "UTILITY VEST",
          price: 54000,
          currency: "ARS",
          variant: "minimal",
          productUrl: "/producto/12",
          showWishlist: false,
        },
      },
      {
        type: "ProductCard",
        props: {
          id: "urbano-card-13",
          image: "/images/products/product-3.jpg",
          title: "DISTRESSED DENIM",
          price: 58000,
          currency: "ARS",
          variant: "minimal",
          productUrl: "/producto/13",
          showWishlist: false,
        },
      },
    ],
    // Accesorios
    "urbano-accessories:content": [
      {
        type: "Heading",
        props: {
          id: "urbano-acc-title",
          text: "ACCESSORIES",
          level: "h2",
          align: "left",
          style: "clean",
        },
      },
      {
        type: "Spacer",
        props: { id: "urbano-acc-spacer", height: "medium" },
      },
      {
        type: "ProductGrid",
        props: {
          id: "urbano-grid-2",
          preset: "urbano",
          columnsDesktop: 4,
          columnsTablet: 2,
          columnsMobile: 2,
          gap: "xs",
        },
      },
    ],
    "urbano-grid-2:products": [
      {
        type: "ProductCard",
        props: {
          id: "urbano-card-7",
          image: "/images/products/product-1.jpg",
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
          id: "urbano-card-8",
          image: "/images/products/product-2.jpg",
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
          id: "urbano-card-9",
          image: "/images/products/product-3.jpg",
          title: "CROSSBODY BAG",
          price: 32000,
          currency: "ARS",
          variant: "minimal",
          productUrl: "/producto/9",
          showWishlist: false,
        },
      },
      {
        type: "ProductCard",
        props: {
          id: "urbano-card-10",
          image: "/images/products/product-4.jpg",
          title: "BEANIE",
          price: 12000,
          currency: "ARS",
          variant: "minimal",
          productUrl: "/producto/10",
          showWishlist: false,
        },
      },
    ],
  },
};
