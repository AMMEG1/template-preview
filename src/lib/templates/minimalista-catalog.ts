/**
 * Template: Minimalista - Catálogo
 * MORFOLOGÍA: SIN PromoBar + 2 columnas grandes + gap xxl + mucho espacio blanco
 */

import type { Data } from "@puckeditor/core";
import { DEMO_PRODUCTS } from "../demo-data";

export const minimalistaCatalogTemplate: Data = {
  content: [
    // DIFERENCIA MORFOLÓGICA: SIN PromoBar - silencio total
    {
      type: "Spacer",
      props: { id: "min-cat-spacer-1", height: "large" },
    },
    {
      type: "Spacer",
      props: { id: "min-cat-spacer-1b", height: "large" },
    },
    {
      type: "Container",
      props: {
        id: "min-cat-main",
        maxWidth: "lg",
        padding: "large",
      },
    },
    {
      type: "Spacer",
      props: { id: "min-cat-spacer-2", height: "large" },
    },
    {
      type: "Spacer",
      props: { id: "min-cat-spacer-2b", height: "large" },
    },
    {
      type: "Footer",
      props: {
        id: "min-cat-footer",
        text: "MINIMALISTA",
        showSocial: false,
      },
    },
  ],
  root: {
    props: {
      themePreset: "minimalista",
    } as Record<string, unknown>,
  },
  zones: {
    "min-cat-main:content": [
      {
        type: "Heading",
        props: {
          id: "min-cat-title",
          text: "CATALOG",
          level: "h1",
          align: "center",
          style: "clean",
        },
      },
      {
        type: "Spacer",
        props: { id: "min-cat-spacer-3", height: "large" },
      },
      // DIFERENCIA MORFOLÓGICA: Solo 2 columnas con gap XXL
      {
        type: "ProductGrid",
        props: {
          id: "min-cat-grid",
          preset: "minimalista",
          columnsDesktop: 2,
          columnsTablet: 2,
          columnsMobile: 1,
          gap: "xl",
        },
      },
    ],
    // DIFERENCIA: Cards ultra minimalistas - sin título, solo imagen y precio
    "min-cat-grid:products": DEMO_PRODUCTS.map((p) => ({
      type: "ProductCard",
      props: {
        id: `min-cat-card-${p.id}`,
        image: p.image,
        title: "",
        price: p.price,
        currency: p.currency,
        variant: "minimal",
        productUrl: `/producto/${p.id}`,
        showWishlist: false,
        imageZoom: true,
        imageAspect: "portrait",
      },
    })),
  },
};
