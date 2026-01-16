/**
 * Template: Moderno
 * MORFOLOGÍA: TrustBadges prominentes + múltiples secciones de trust
 *
 * Diferenciación estructural:
 * - PromoBar cyan con iconos
 * - Hero con dual CTA
 * - TrustBadgesGrid grande visible al inicio
 * - Cards con toda la info (rating, stock, cuotas)
 * - Sección "Por qué elegirnos" con trust badges
 * - Footer FULL completo
 */

import type { Data } from "@puckeditor/core";

export const modernoTemplate: Data = {
  content: [
    // DIFERENCIA: PromoBar cyan tech
    {
      type: "PromoBar",
      props: {
        id: "mod-promo",
        variant: "with-icon",
        text: "Envío gratis + Garantía extendida + Soporte 24/7",
        backgroundColor: "#0097AA",
        textColor: "#ffffff",
        icon: "truck",
      },
    },
    {
      type: "Hero",
      props: {
        id: "mod-hero",
        variant: "dual-cta",
        title: "Tecnología que Inspira",
        subtitle: "Los mejores productos tech con garantía y soporte premium",
        backgroundImage: "/images/heroes/hero-1.jpg",
        ctaText: "Ver Productos",
        ctaLink: "/catalogo",
        secondaryCtaText: "Ofertas",
        secondaryCtaLink: "/ofertas",
        height: "large",
        textAlign: "center",
        showOverlay: true,
      },
    },
    // DIFERENCIA MORFOLÓGICA: TrustBadgesGrid prominente al inicio
    {
      type: "Container",
      props: {
        id: "mod-trust-section",
        maxWidth: "xl",
        padding: "large",
      },
    },
    {
      type: "Spacer",
      props: { id: "mod-spacer-1", height: "medium" },
    },
    {
      type: "Container",
      props: {
        id: "mod-featured",
        maxWidth: "xl",
        padding: "medium",
      },
    },
    {
      type: "Spacer",
      props: { id: "mod-spacer-2", height: "large" },
    },
    // DIFERENCIA: Sección "Por qué elegirnos" con iconos grandes
    {
      type: "Container",
      props: {
        id: "mod-why-us",
        maxWidth: "xl",
        padding: "large",
      },
    },
    {
      type: "Spacer",
      props: { id: "mod-spacer-3", height: "large" },
    },
    {
      type: "Container",
      props: {
        id: "mod-offers",
        maxWidth: "xl",
        padding: "medium",
      },
    },
    {
      type: "Spacer",
      props: { id: "mod-spacer-4", height: "large" },
    },
    // DIFERENCIA: Footer FULL completo
    {
      type: "Footer",
      props: {
        id: "mod-footer",
        text: "© 2024 Moderno Tech - Todos los derechos reservados | Pago seguro | Garantía oficial",
        showSocial: true,
      },
    },
  ],
  root: {
    props: {
      themePreset: "moderno",
    } as Record<string, unknown>,
  },
  zones: {
    // DIFERENCIA MORFOLÓGICA: TrustBadgesGrid al inicio
    "mod-trust-section:content": [
      {
        type: "TrustBadgesGrid",
        props: {
          id: "mod-trust-badges",
          badges: [
            {
              icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" /></svg>`,
              title: "Envío Express",
              description: "Recibe en 24-48hs",
            },
            {
              icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>`,
              title: "Garantía 2 Años",
              description: "Servicio técnico oficial",
            },
            {
              icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" /></svg>`,
              title: "12 Cuotas Sin Interés",
              description: "Con todas las tarjetas",
            },
            {
              icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" /></svg>`,
              title: "Soporte 24/7",
              description: "Chat, email y teléfono",
            },
          ],
          columns: 4,
          variant: "card",
          iconSize: "lg",
          alignment: "center",
        },
      },
    ],
    "mod-featured:content": [
      {
        type: "SectionHeader",
        props: {
          id: "mod-feat-header",
          variant: "with-link",
          title: "Más Vendidos",
          align: "left",
          viewAllLink: "/catalogo",
          viewAllText: "Ver catálogo",
        },
      },
      {
        type: "Spacer",
        props: { id: "mod-feat-spacer", height: "medium" },
      },
      // DIFERENCIA: Cards con toda la información
      {
        type: "ProductGrid",
        props: {
          id: "mod-grid",
          preset: "moderno",
          columnsDesktop: 4,
          gap: "md",
        },
      },
    ],
    // DIFERENCIA: Sección "Por qué elegirnos" con otro TrustBadgesGrid
    "mod-why-us:content": [
      {
        type: "Heading",
        props: {
          id: "mod-why-title",
          text: "Por qué elegirnos",
          level: "h2",
          align: "center",
          style: "with-subtitle",
          subtitle: "Más de 10.000 clientes satisfechos",
        },
      },
      {
        type: "Spacer",
        props: { id: "mod-why-spacer", height: "medium" },
      },
      {
        type: "TrustBadgesGrid",
        props: {
          id: "mod-features",
          badges: [
            {
              icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>`,
              title: "Calidad Premium",
              description: "Solo productos originales y certificados",
            },
            {
              icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`,
              title: "Entrega Rápida",
              description: "Despacho en el día para compras antes de las 14hs",
            },
            {
              icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" /></svg>`,
              title: "Asesoramiento",
              description: "Expertos disponibles para ayudarte",
            },
          ],
          columns: 3,
          variant: "default",
          iconSize: "lg",
          alignment: "center",
        },
      },
    ],
    "mod-offers:content": [
      {
        type: "SectionHeader",
        props: {
          id: "mod-offers-header",
          variant: "with-count",
          title: "Ofertas Destacadas",
          align: "left",
          viewAllLink: "/ofertas",
          viewAllText: "Ver todas",
          itemCount: 24,
        },
      },
      {
        type: "Spacer",
        props: { id: "mod-offers-spacer", height: "medium" },
      },
      {
        type: "ProductGrid",
        props: {
          id: "mod-grid-2",
          preset: "moderno",
          columnsDesktop: 4,
          gap: "md",
        },
      },
    ],
    // DIFERENCIA: Cards detalladas con rating, stock, cuotas
    "mod-grid:products": [
      {
        type: "ProductCard",
        props: {
          id: "mod-card-1",
          image: "/images/products/product-1.jpg",
          title: "Smart Watch Pro",
          price: 89000,
          currency: "ARS",
          variant: "detailed",
          productUrl: "/producto/1",
          showRating: true,
          rating: 4.8,
          reviewCount: 324,
          showStock: true,
          stockLevel: "in_stock",
          stockCount: 15,
          showWishlist: true,
        },
      },
      {
        type: "ProductCard",
        props: {
          id: "mod-card-2",
          image: "/images/products/product-2.jpg",
          title: "Auriculares Bluetooth",
          price: 45000,
          comparePrice: 65000,
          currency: "ARS",
          variant: "detailed",
          productUrl: "/producto/2",
          showRating: true,
          rating: 4.6,
          reviewCount: 189,
          showStock: true,
          stockLevel: "low_stock",
          stockCount: 5,
          showWishlist: true,
        },
      },
      {
        type: "ProductCard",
        props: {
          id: "mod-card-3",
          image: "/images/products/product-3.jpg",
          title: "Tablet Ultra HD",
          price: 185000,
          currency: "ARS",
          variant: "detailed",
          productUrl: "/producto/3",
          showRating: true,
          rating: 4.9,
          reviewCount: 456,
          showStock: true,
          stockLevel: "in_stock",
          stockCount: 8,
          showWishlist: true,
        },
      },
      {
        type: "ProductCard",
        props: {
          id: "mod-card-4",
          image: "/images/products/product-4.jpg",
          title: "Cargador Inalámbrico",
          price: 25000,
          currency: "ARS",
          variant: "detailed",
          productUrl: "/producto/4",
          showRating: true,
          rating: 4.5,
          reviewCount: 87,
          showStock: true,
          stockLevel: "in_stock",
          stockCount: 22,
          showWishlist: true,
        },
      },
    ],
    "mod-grid-2:products": [
      {
        type: "ProductCard",
        props: {
          id: "mod-card-5",
          image: "/images/products/product-5.jpg",
          title: "Parlante Portátil",
          price: 35000,
          comparePrice: 50000,
          currency: "ARS",
          variant: "detailed",
          productUrl: "/producto/5",
          showRating: true,
          rating: 4.7,
          reviewCount: 234,
          showWishlist: true,
        },
      },
      {
        type: "ProductCard",
        props: {
          id: "mod-card-6",
          image: "/images/products/product-6.jpg",
          title: "Power Bank 20000mAh",
          price: 28000,
          comparePrice: 38000,
          currency: "ARS",
          variant: "detailed",
          productUrl: "/producto/6",
          showRating: true,
          rating: 4.4,
          reviewCount: 156,
          showWishlist: true,
        },
      },
      {
        type: "ProductCard",
        props: {
          id: "mod-card-7",
          image: "/images/products/product-1.jpg",
          title: "Mouse Gaming RGB",
          price: 22000,
          comparePrice: 32000,
          currency: "ARS",
          variant: "detailed",
          productUrl: "/producto/7",
          showRating: true,
          rating: 4.8,
          reviewCount: 312,
          showWishlist: true,
        },
      },
      {
        type: "ProductCard",
        props: {
          id: "mod-card-8",
          image: "/images/products/product-2.jpg",
          title: "Teclado Mecánico",
          price: 55000,
          comparePrice: 75000,
          currency: "ARS",
          variant: "detailed",
          productUrl: "/producto/8",
          showRating: true,
          rating: 4.6,
          reviewCount: 198,
          showWishlist: true,
        },
      },
    ],
  },
};
