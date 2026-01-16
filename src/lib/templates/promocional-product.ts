/**
 * Template: Promocional - Producto
 * MORFOLOGÍA RADICAL: Strip horizontal de 4 thumbnails + info DENSA + badges everywhere
 * Inspiración: MercadoLibre, Amazon, Marketplace urgente
 */

import type { Data } from "@puckeditor/core";

export const promocionalProductTemplate: Data = {
  content: [
    {
      type: "PromoBar",
      props: {
        id: "promo-prod-bar",
        variant: "scrolling",
        text: "🔥 OFERTA FLASH 🔥 ÚLTIMAS UNIDADES 🔥 ENVÍO GRATIS 🔥 50% OFF 🔥",
        backgroundColor: "#DC2626",
        textColor: "#ffffff",
        scrollSpeed: "fast",
      },
    },
    // DIFERENCIA RADICAL: Strip horizontal de 4 thumbnails pequeños
    {
      type: "Container",
      props: {
        id: "promo-prod-thumbs",
        maxWidth: "xl",
        padding: "small",
      },
    },
    {
      type: "Spacer",
      props: { id: "promo-prod-spacer-0", height: "small" },
    },
    // Info DENSA con todo: precio, stock, rating, badges
    {
      type: "Container",
      props: {
        id: "promo-prod-info",
        maxWidth: "xl",
        padding: "medium",
      },
    },
    {
      type: "Spacer",
      props: { id: "promo-prod-spacer-1", height: "small" },
    },
    // Trust badges row
    {
      type: "Container",
      props: {
        id: "promo-prod-trust",
        maxWidth: "xl",
        padding: "medium",
      },
    },
    {
      type: "Spacer",
      props: { id: "promo-prod-spacer-2", height: "small" },
    },
    // Tabs con toda la info
    {
      type: "Container",
      props: {
        id: "promo-prod-tabs",
        maxWidth: "xl",
        padding: "medium",
      },
    },
    {
      type: "Spacer",
      props: { id: "promo-prod-spacer-3", height: "medium" },
    },
    // Muchos relacionados (5 cols)
    {
      type: "Container",
      props: {
        id: "promo-prod-related",
        maxWidth: "xl",
        padding: "small",
      },
    },
    {
      type: "Footer",
      props: {
        id: "promo-prod-footer",
        text: "© 2024 Ofertas | Pagos seguros | Garantía",
        showSocial: true,
      },
    },
  ],
  root: {
    props: {
      themePreset: "promocional",
    } as Record<string, unknown>,
  },
  zones: {
    // DIFERENCIA RADICAL: 4 thumbnails horizontales pequeños
    "promo-prod-thumbs:content": [
      {
        type: "ImageGallery",
        props: {
          id: "promo-prod-gallery",
          images: [
            { url: "/images/products/product-1.jpg", alt: "Vista 1" },
            { url: "/images/products/product-2.jpg", alt: "Vista 2" },
            { url: "/images/products/product-3.jpg", alt: "Vista 3" },
            { url: "/images/products/product-4.jpg", alt: "Vista 4" },
          ],
          variant: "dots",
          thumbnailSize: "sm",
          showZoom: false,
          aspectRatio: "wide",
        },
      },
    ],
    // Info ULTRA DENSA
    "promo-prod-info:content": [
      {
        type: "Heading",
        props: {
          id: "product-title",
          text: "🔥 PRODUCTO EN OFERTA - ÚLTIMAS UNIDADES",
          level: "h1",
          align: "left",
          style: "highlight",
          highlightColor: "yellow",
        },
      },
      {
        type: "Rating",
        props: {
          id: "product-rating",
          rating: 4.8,
          reviewCount: 256,
          showCount: true,
          size: "lg",
        },
      },
      {
        type: "Spacer",
        props: { id: "promo-prod-spacer-rating", height: "small" },
      },
      {
        type: "Price",
        props: {
          id: "product-price",
          amount: 15000,
          currency: "ARS",
          showCompare: true,
          compareAmount: 30000,
        },
      },
      {
        type: "Text",
        props: {
          id: "promo-cuotas",
          content: "💳 12 cuotas sin interés de $1.250 | 💰 15% OFF con transferencia",
          align: "left",
        },
      },
      {
        type: "Spacer",
        props: { id: "promo-prod-spacer-price", height: "small" },
      },
      {
        type: "StockIndicator",
        props: {
          id: "product-stock",
          level: "very_low",
          quantity: 3,
          showQuantity: true,
          showProgressBar: true,
          variant: "urgent",
        },
      },
      {
        type: "Spacer",
        props: { id: "promo-prod-spacer-stock", height: "small" },
      },
      {
        type: "BuyButton",
        props: {
          id: "promo-prod-buy",
          text: "¡COMPRAR AHORA! - SOLO QUEDAN 3",
          variant: "primary",
        },
      },
    ],
    // Trust badges row
    "promo-prod-trust:content": [
      {
        type: "TrustBadgesGrid",
        props: {
          id: "promo-prod-trust-grid",
          badges: [
            {
              icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" /></svg>`,
              title: "Envío GRATIS",
              description: "A todo el país",
            },
            {
              icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>`,
              title: "Garantía 1 Año",
              description: "Devolución gratis",
            },
            {
              icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" /></svg>`,
              title: "Pago Seguro",
              description: "Todas las tarjetas",
            },
            {
              icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" /></svg>`,
              title: "Devolución",
              description: "30 días gratis",
            },
          ],
          columns: 4,
          variant: "compact",
          iconSize: "sm",
          alignment: "center",
        },
      },
    ],
    // Tabs con toda la info
    "promo-prod-tabs:content": [
      {
        type: "ProductTabs",
        props: {
          id: "promo-prod-tabs-section",
          tabs: [
            {
              label: "📝 Descripción",
              content: "Producto de alta calidad con garantía de satisfacción. Envío rápido y seguro a todo el país.",
            },
            {
              label: "📋 Especificaciones",
              content: "Material: Premium\nDimensiones: 10x20x5 cm\nPeso: 500g\nGarantía: 1 año\nOrigen: Importado",
            },
            {
              label: "⭐ Reviews (256)",
              content: "⭐⭐⭐⭐⭐ Excelente producto, llegó rápido!\n⭐⭐⭐⭐⭐ Muy buena calidad, lo recomiendo.\n⭐⭐⭐⭐ Cumple con lo prometido.",
            },
          ],
          variant: "pills",
        },
      },
    ],
    // Muchos relacionados
    "promo-prod-related:content": [
      {
        type: "Heading",
        props: {
          id: "promo-prod-related-title",
          text: "🎁 OFERTAS QUE TE PUEDEN INTERESAR",
          level: "h2",
          align: "center",
          style: "highlight",
          highlightColor: "yellow",
        },
      },
      {
        type: "Spacer",
        props: { id: "promo-prod-spacer-related", height: "small" },
      },
      {
        type: "ProductGrid",
        props: {
          id: "promo-prod-grid",
          preset: "promocional",
          columnsDesktop: 5,
          columnsTablet: 3,
          columnsMobile: 2,
          gap: "xs",
        },
      },
    ],
    "promo-prod-grid:products": [],
  },
};
