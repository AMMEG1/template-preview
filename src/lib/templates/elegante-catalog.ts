/**
 * Template: Elegante - Catálogo
 * MORFOLOGÍA: MasonryGrid + espacio blanco + sin títulos llamativos
 */

import type { Data } from "@puckeditor/core";
import { DEMO_PRODUCTS } from "../demo-data";

export const eleganteCatalogTemplate: Data = {
  content: [
    {
      type: "PromoBar",
      props: {
        id: "elegante-cat-promo",
        variant: "with-icon",
        text: "Envío gratis en compras +$30.000",
        backgroundColor: "#7CB69D",
        textColor: "#ffffff",
        icon: "gift",
      },
    },
    {
      type: "Spacer",
      props: { id: "elegante-cat-spacer-1", height: "large" },
    },
    {
      type: "Container",
      props: {
        id: "elegante-cat-main",
        maxWidth: "xl",
        padding: "large",
      },
    },
    {
      type: "Spacer",
      props: { id: "elegante-cat-spacer-2", height: "large" },
    },
    {
      type: "Footer",
      props: {
        id: "elegante-cat-footer",
        text: "© 2024 Elegante Store",
        showSocial: true,
      },
    },
  ],
  root: {
    props: {
      themePreset: "elegante",
    } as Record<string, unknown>,
  },
  zones: {
    "elegante-cat-main:content": [
      {
        type: "SectionHeader",
        props: {
          id: "elegante-cat-header",
          variant: "simple",
          title: "Colección",
          align: "center",
        },
      },
      {
        type: "Spacer",
        props: { id: "elegante-cat-spacer-3", height: "large" },
      },
      // DIFERENCIA MORFOLÓGICA: MasonryGrid en lugar de ProductGrid
      {
        type: "MasonryGrid",
        props: {
          id: "elegante-cat-masonry",
          items: DEMO_PRODUCTS.map((p, i) => ({
            imageUrl: p.image,
            title: p.title,
            href: `/producto/${p.id}`,
            height: i % 3 === 0 ? "lg" : i % 2 === 0 ? "xl" : "md",
          })),
          columns: 3,
          gap: "lg",
          overlayStyle: "gradient",
        },
      },
    ],
  },
};
