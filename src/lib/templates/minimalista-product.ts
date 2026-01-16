/**
 * Template: Minimalista - Producto
 * MORFOLOGÍA RADICAL: Imagen DIMINUTA centrada + ENORME espacio blanco + casi nada de texto
 * Inspiración: Galería de arte, museos, Aesop, COS
 */

import type { Data } from "@puckeditor/core";

export const minimalistaProductTemplate: Data = {
  content: [
    // SIN PromoBar - silencio total
    {
      type: "Spacer",
      props: { id: "min-prod-spacer-1", height: "large" },
    },
    {
      type: "Spacer",
      props: { id: "min-prod-spacer-1b", height: "large" },
    },
    {
      type: "Spacer",
      props: { id: "min-prod-spacer-1c", height: "large" },
    },
    // DIFERENCIA RADICAL: Imagen MUY PEQUEÑA centrada como pieza de museo
    {
      type: "Container",
      props: {
        id: "min-prod-image",
        maxWidth: "xs",
        padding: "none",
      },
    },
    {
      type: "Spacer",
      props: { id: "min-prod-spacer-2", height: "large" },
    },
    {
      type: "Spacer",
      props: { id: "min-prod-spacer-2b", height: "large" },
    },
    // Info MÍNIMA centrada
    {
      type: "Container",
      props: {
        id: "min-prod-info",
        maxWidth: "sm",
        padding: "large",
      },
    },
    {
      type: "Spacer",
      props: { id: "min-prod-spacer-3", height: "large" },
    },
    {
      type: "Spacer",
      props: { id: "min-prod-spacer-3b", height: "large" },
    },
    {
      type: "Spacer",
      props: { id: "min-prod-spacer-3c", height: "large" },
    },
    {
      type: "Spacer",
      props: { id: "min-prod-spacer-3d", height: "large" },
    },
    // Footer mínimo
    {
      type: "Footer",
      props: {
        id: "min-prod-footer",
        text: "—",
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
    // DIFERENCIA RADICAL: Imagen DIMINUTA (xs container)
    "min-prod-image:content": [
      {
        type: "ProductImage",
        props: {
          id: "product-main-image",
          src: "/images/products/product-1.jpg",
          alt: "Product",
          size: "small",
        },
      },
    ],
    // Info ULTRA MÍNIMA - solo nombre y precio
    "min-prod-info:content": [
      {
        type: "Heading",
        props: {
          id: "product-title",
          text: "Product",
          level: "h2",
          align: "center",
          style: "clean",
        },
      },
      {
        type: "Spacer",
        props: { id: "min-prod-spacer-title", height: "medium" },
      },
      {
        type: "Price",
        props: {
          id: "product-price",
          amount: 15000,
          currency: "ARS",
          showCompare: false,
        },
      },
      {
        type: "Spacer",
        props: { id: "min-prod-spacer-price", height: "large" },
      },
      {
        type: "BuyButton",
        props: {
          id: "min-prod-buy",
          text: "Add",
          variant: "outline",
        },
      },
    ],
    // SIN productos relacionados - espacio vacío intencional
  },
};
