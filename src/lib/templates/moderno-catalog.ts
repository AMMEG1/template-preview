/**
 * Template: Moderno - Catálogo
 * MORFOLOGÍA: PromoBar cyan + TrustBadges al inicio + grid 4 cols detallado + footer full
 */

import type { Data } from "@puckeditor/core";
import { DEMO_PRODUCTS } from "../demo-data";

export const modernoCatalogTemplate: Data = {
  content: [
    {
      type: "PromoBar",
      props: {
        id: "mod-cat-promo",
        variant: "with-icon",
        text: "Envío gratis + Garantía extendida + Soporte 24/7",
        backgroundColor: "#0097AA",
        textColor: "#ffffff",
        icon: "truck",
      },
    },
    // DIFERENCIA MORFOLÓGICA: TrustBadges al inicio
    {
      type: "Container",
      props: {
        id: "mod-cat-trust",
        maxWidth: "xl",
        padding: "medium",
      },
    },
    {
      type: "Container",
      props: {
        id: "mod-cat-main",
        maxWidth: "xl",
        padding: "medium",
      },
    },
    {
      type: "Spacer",
      props: { id: "mod-cat-spacer-1", height: "large" },
    },
    {
      type: "Footer",
      props: {
        id: "mod-cat-footer",
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
    // DIFERENCIA: TrustBadgesGrid compact al inicio
    "mod-cat-trust:content": [
      {
        type: "TrustBadgesGrid",
        props: {
          id: "mod-cat-badges",
          badges: [
            {
              icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" /></svg>`,
              title: "Envío Express",
              description: "24-48hs",
            },
            {
              icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>`,
              title: "Garantía 2 Años",
              description: "Oficial",
            },
            {
              icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" /></svg>`,
              title: "12 Cuotas",
              description: "Sin interés",
            },
            {
              icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" /></svg>`,
              title: "Soporte 24/7",
              description: "Chat y teléfono",
            },
          ],
          columns: 4,
          variant: "compact",
          iconSize: "sm",
          alignment: "center",
        },
      },
    ],
    "mod-cat-main:content": [
      {
        type: "SectionHeader",
        props: {
          id: "mod-cat-header",
          variant: "with-count",
          title: "Catálogo de Productos",
          align: "left",
          itemCount: DEMO_PRODUCTS.length,
        },
      },
      {
        type: "Spacer",
        props: { id: "mod-cat-spacer-2", height: "medium" },
      },
      // DIFERENCIA: Grid 4 cols con cards detalladas
      {
        type: "ProductGrid",
        props: {
          id: "mod-cat-grid",
          preset: "moderno",
          columnsDesktop: 4,
          columnsTablet: 3,
          columnsMobile: 2,
          gap: "md",
        },
      },
    ],
    // DIFERENCIA: Cards con toda la información
    "mod-cat-grid:products": DEMO_PRODUCTS.map((p) => ({
      type: "ProductCard",
      props: {
        id: `mod-cat-card-${p.id}`,
        image: p.image,
        title: p.title,
        price: p.price,
        comparePrice: p.comparePrice,
        currency: p.currency,
        variant: "detailed",
        productUrl: `/producto/${p.id}`,
        showRating: true,
        rating: p.rating,
        reviewCount: p.reviewCount,
        showStock: true,
        stockLevel: p.stockLevel,
        stockCount: p.stockCount,
        showWishlist: true,
      },
    })),
  },
};
