/**
 * Template: Promocional - Catálogo
 * MORFOLOGÍA: PromoBar scrolling + CategoryCircles pills + grid 5 cols denso + TrustBadges
 */

import type { Data } from "@puckeditor/core";
import { DEMO_PRODUCTS } from "../demo-data";

export const promocionalCatalogTemplate: Data = {
  content: [
    // DIFERENCIA: PromoBar scrolling rojo
    {
      type: "PromoBar",
      props: {
        id: "promo-cat-bar",
        variant: "scrolling",
        text: "🔥 OFERTAS IMPERDIBLES 🔥 ENVÍO GRATIS 🔥 HASTA 50% OFF 🔥",
        backgroundColor: "#DC2626",
        textColor: "#ffffff",
        scrollSpeed: "fast",
      },
    },
    {
      type: "Container",
      props: {
        id: "promo-cat-categories",
        maxWidth: "xl",
        padding: "medium",
      },
    },
    {
      type: "Spacer",
      props: { id: "promo-cat-spacer-1", height: "small" },
    },
    {
      type: "Container",
      props: {
        id: "promo-cat-main",
        maxWidth: "xl",
        padding: "small",
      },
    },
    {
      type: "Spacer",
      props: { id: "promo-cat-spacer-2", height: "medium" },
    },
    // DIFERENCIA: TrustBadgesGrid
    {
      type: "Container",
      props: {
        id: "promo-cat-trust",
        maxWidth: "xl",
        padding: "medium",
      },
    },
    {
      type: "Footer",
      props: {
        id: "promo-cat-footer",
        text: "© 2024 Promocional Store | Pagos seguros",
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
    // DIFERENCIA MORFOLÓGICA: CategoryCircles con shape pill
    "promo-cat-categories:content": [
      {
        type: "Heading",
        props: {
          id: "promo-cat-title",
          text: "🔥 TODAS LAS OFERTAS 🔥",
          level: "h1",
          align: "center",
          style: "highlight",
          highlightColor: "yellow",
        },
      },
      {
        type: "Spacer",
        props: { id: "promo-cat-spacer-cat", height: "small" },
      },
      {
        type: "CategoryCircles",
        props: {
          id: "promo-cat-circles",
          title: "",
          size: "md",
          shape: "pill",
          showTitle: true,
          gap: "sm",
        },
      },
    ],
    "promo-cat-main:content": [
      {
        type: "SectionHeader",
        props: {
          id: "promo-cat-header",
          variant: "with-count",
          title: "⚡ FLASH SALE ⚡",
          align: "left",
          itemCount: DEMO_PRODUCTS.length,
        },
      },
      // DIFERENCIA MORFOLÓGICA: Grid 5 columnas ultra denso
      {
        type: "ProductGrid",
        props: {
          id: "promo-cat-grid",
          preset: "promocional",
          columnsDesktop: 5,
          columnsTablet: 3,
          columnsMobile: 2,
          gap: "xs",
        },
      },
    ],
    "promo-cat-grid:products": DEMO_PRODUCTS.map((p) => ({
      type: "ProductCard",
      props: {
        id: `promo-cat-card-${p.id}`,
        image: p.image,
        title: p.title,
        price: p.price,
        comparePrice: p.comparePrice || Math.round(p.price * 1.5),
        currency: p.currency,
        variant: "aggressive",
        productUrl: `/producto/${p.id}`,
        showRating: true,
        rating: p.rating,
        reviewCount: p.reviewCount,
        showStock: true,
        stockLevel: p.stockLevel,
        stockCount: p.stockCount,
        badges: [
          { text: `-${Math.round(Math.random() * 30 + 20)}%`, type: "discount" },
        ],
      },
    })),
    // DIFERENCIA: TrustBadgesGrid visible
    "promo-cat-trust:content": [
      {
        type: "TrustBadgesGrid",
        props: {
          id: "promo-cat-badges",
          badges: [
            {
              icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" /></svg>`,
              title: "Envío Gratis",
              description: "En compras +$20.000",
            },
            {
              icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>`,
              title: "Compra Segura",
              description: "Datos encriptados",
            },
            {
              icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" /></svg>`,
              title: "Devolución Fácil",
              description: "30 días",
            },
            {
              icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" /></svg>`,
              title: "12 Cuotas",
              description: "Sin interés",
            },
          ],
          columns: 4,
          variant: "card",
          iconSize: "md",
          alignment: "center",
        },
      },
    ],
  },
};
