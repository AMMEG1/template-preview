/**
 * Template: Minimalista - Producto
 * Estilo galería de arte funcional - limpio pero completo
 * Inspiración: Aesop, COS, galerías de arte contemporáneo
 */

import type { Data } from "@puckeditor/core";

export const minimalistaProductTemplate: Data = {
  content: [
    // Sin PromoBar - entrada limpia
    {
      type: "Spacer",
      props: { id: "min-prod-spacer-top", height: "large" },
    },
    // Imagen principal prominente
    {
      type: "Container",
      props: {
        id: "min-prod-image",
        maxWidth: "md",
        padding: "medium",
      },
    },
    {
      type: "Spacer",
      props: { id: "min-prod-spacer-1", height: "medium" },
    },
    // Info minimal pero completa
    {
      type: "Container",
      props: {
        id: "min-prod-info",
        maxWidth: "sm",
        padding: "medium",
      },
    },
    {
      type: "Spacer",
      props: { id: "min-prod-spacer-2", height: "large" },
    },
    // Galería stack con más imágenes
    {
      type: "Container",
      props: {
        id: "min-prod-gallery",
        maxWidth: "md",
        padding: "medium",
      },
    },
    {
      type: "Spacer",
      props: { id: "min-prod-spacer-3", height: "large" },
    },
    // Footer minimal
    {
      type: "Footer",
      props: {
        id: "min-prod-footer",
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
    // Imagen principal - tamaño medium visible
    "min-prod-image:content": [
      {
        type: "ProductImage",
        props: {
          id: "product-main-image",
          src: "/images/products/product-1.jpg",
          alt: "Producto",
          size: "large",
        },
      },
    ],
    // Info centrada y minimal
    "min-prod-info:content": [
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
        props: { id: "min-prod-spacer-title", height: "small" },
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
        props: { id: "min-prod-spacer-price", height: "medium" },
      },
      {
        type: "Text",
        props: {
          id: "product-description",
          content: "Diseño contemporáneo. Materiales premium.",
          align: "center",
        },
      },
      {
        type: "Spacer",
        props: { id: "min-prod-spacer-desc", height: "medium" },
      },
      {
        type: "BuyButton",
        props: {
          id: "min-prod-buy",
          text: "Agregar",
          variant: "outline",
        },
      },
    ],
    // Galería stack vertical
    "min-prod-gallery:content": [
      {
        type: "ImageGallery",
        props: {
          id: "min-prod-gallery-images",
          images: [
            { url: "/images/products/product-2.jpg", alt: "Vista 2" },
            { url: "/images/products/product-3.jpg", alt: "Vista 3" },
            { url: "/images/products/product-4.jpg", alt: "Vista 4" },
          ],
          variant: "stack",
          thumbnailSize: "lg",
          showZoom: false,
          aspectRatio: "square",
        },
      },
    ],
  },
};
