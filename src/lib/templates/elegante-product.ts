/**
 * Template: Elegante - Producto
 * MORFOLOGÍA RADICAL: Imagen pequeña centrada como pieza de arte + tipografía elegante + mucho texto
 * Inspiración: Catálogos de joyería de lujo, editorial de moda
 */

import type { Data } from "@puckeditor/core";

export const eleganteProductTemplate: Data = {
  content: [
    // Sin PromoBar - entrada limpia y sofisticada
    {
      type: "Spacer",
      props: { id: "elegante-prod-spacer-top", height: "large" },
    },
    {
      type: "Spacer",
      props: { id: "elegante-prod-spacer-top-2", height: "large" },
    },
    // DIFERENCIA RADICAL: Imagen PEQUEÑA centrada como pieza de arte
    {
      type: "Container",
      props: {
        id: "elegante-prod-image",
        maxWidth: "sm",
        padding: "none",
      },
    },
    {
      type: "Spacer",
      props: { id: "elegante-prod-spacer-1", height: "large" },
    },
    {
      type: "Spacer",
      props: { id: "elegante-prod-spacer-1b", height: "large" },
    },
    // Info centrada, elegante
    {
      type: "Container",
      props: {
        id: "elegante-prod-info",
        maxWidth: "md",
        padding: "large",
      },
    },
    {
      type: "Spacer",
      props: { id: "elegante-prod-spacer-2", height: "large" },
    },
    // Descripción larga como en un catálogo de lujo
    {
      type: "Container",
      props: {
        id: "elegante-prod-story",
        maxWidth: "sm",
        padding: "large",
      },
    },
    {
      type: "Spacer",
      props: { id: "elegante-prod-spacer-3", height: "large" },
    },
    {
      type: "Spacer",
      props: { id: "elegante-prod-spacer-3b", height: "large" },
    },
    // Accordion para detalles
    {
      type: "Container",
      props: {
        id: "elegante-prod-accordion",
        maxWidth: "sm",
        padding: "medium",
      },
    },
    {
      type: "Spacer",
      props: { id: "elegante-prod-spacer-4", height: "large" },
    },
    {
      type: "Spacer",
      props: { id: "elegante-prod-spacer-4b", height: "large" },
    },
    // Relacionados con mucho espacio
    {
      type: "Container",
      props: {
        id: "elegante-prod-related",
        maxWidth: "lg",
        padding: "large",
      },
    },
    {
      type: "Spacer",
      props: { id: "elegante-prod-spacer-5", height: "large" },
    },
    {
      type: "Footer",
      props: {
        id: "elegante-prod-footer",
        text: "ELEGANTE",
        showSocial: false,
      },
    },
  ],
  root: {
    props: {
      themePreset: "elegante",
    } as Record<string, unknown>,
  },
  zones: {
    // DIFERENCIA RADICAL: Imagen PEQUEÑA (thumbnail size) centrada
    "elegante-prod-image:content": [
      {
        type: "ProductImage",
        props: {
          id: "product-main-image",
          src: "/images/products/product-1.jpg",
          alt: "Producto",
          size: "small",
        },
      },
    ],
    // Info minimalista centrada
    "elegante-prod-info:content": [
      {
        type: "Heading",
        props: {
          id: "product-title",
          text: "Nombre del Producto",
          level: "h1",
          align: "center",
          style: "clean",
        },
      },
      {
        type: "Spacer",
        props: { id: "elegante-prod-spacer-title", height: "medium" },
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
        props: { id: "elegante-prod-spacer-price", height: "large" },
      },
      {
        type: "BuyButton",
        props: {
          id: "elegante-prod-buy",
          text: "Agregar",
          variant: "outline",
        },
      },
    ],
    // Historia/descripción prominente como en catálogos de lujo
    "elegante-prod-story:content": [
      {
        type: "Text",
        props: {
          id: "product-description",
          content:
            "Una pieza única que representa la esencia del diseño contemporáneo. Cada detalle ha sido cuidadosamente pensado para crear una experiencia sensorial única. Materiales seleccionados de los mejores proveedores, acabados artesanales que garantizan exclusividad.",
          align: "center",
        },
      },
    ],
    // Accordion minimal
    "elegante-prod-accordion:content": [
      {
        type: "AccordionSection",
        props: {
          id: "elegante-prod-accordion-section",
          items: [
            {
              title: "Materiales",
              content: "Materiales premium seleccionados. Acabados artesanales.",
            },
            {
              title: "Cuidado",
              content: "Guardar en lugar seco. Evitar contacto con químicos.",
            },
            {
              title: "Envío",
              content: "Envío gratis. Entrega en 3-5 días hábiles.",
            },
          ],
          allowMultiple: false,
          variant: "minimal",
        },
      },
    ],
    // Relacionados: pocos productos, mucho espacio
    "elegante-prod-related:content": [
      {
        type: "Heading",
        props: {
          id: "elegante-prod-related-title",
          text: "Colección",
          level: "h3",
          align: "center",
          style: "clean",
        },
      },
      {
        type: "Spacer",
        props: { id: "elegante-prod-spacer-related", height: "large" },
      },
      {
        type: "ProductGrid",
        props: {
          id: "elegante-prod-grid",
          preset: "elegante",
          columnsDesktop: 3,
          columnsTablet: 3,
          columnsMobile: 1,
          gap: "xl",
        },
      },
    ],
    "elegante-prod-grid:products": [],
  },
};
