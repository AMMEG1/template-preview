/**
 * Template: Urbano - Catálogo
 * MORFOLOGÍA: SIN PromoBar + fondo oscuro + grid 3 cols sin gaps
 */

import type { Data } from "@puckeditor/core";
import { DEMO_PRODUCTS } from "../demo-data";

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
      props: { id: "urbano-cat-spacer-2", height: "large" },
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
          text: "PRODUCTS",
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
    "urbano-cat-grid:products": DEMO_PRODUCTS.map((p) => ({
      type: "ProductCard",
      props: {
        id: `urbano-cat-card-${p.id}`,
        image: p.image,
        title: p.title.toUpperCase(),
        price: p.price,
        currency: p.currency,
        variant: "minimal",
        productUrl: `/producto/${p.id}`,
        showWishlist: false,
      },
    })),
  },
};
