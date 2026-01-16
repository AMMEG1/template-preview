/**
 * Template: Elegante - Producto
 * Estilo editorial sofisticado con galería de imágenes y tipografía elegante
 * Inspiración: Catálogos de joyería de lujo, editorial de moda
 */

import type { Data } from "@puckeditor/core";

export const eleganteProductTemplate: Data = {
  content: [
    {
      type: "PromoBar",
      props: {
        id: "elegante-prod-promo",
        variant: "with-icon",
        text: "Envío gratis en compras +$30.000 | 3 cuotas sin interés",
        backgroundColor: "#7CB69D",
        textColor: "#ffffff",
        icon: "gift",
      },
    },
    {
      type: "Spacer",
      props: { id: "elegante-prod-spacer-top", height: "medium" },
    },
    // Galería de imágenes prominente
    {
      type: "Container",
      props: {
        id: "elegante-prod-gallery",
        maxWidth: "lg",
        padding: "medium",
      },
    },
    {
      type: "Spacer",
      props: { id: "elegante-prod-spacer-1", height: "medium" },
    },
    // Info del producto
    {
      type: "Container",
      props: {
        id: "elegante-prod-info",
        maxWidth: "lg",
        padding: "medium",
      },
    },
    {
      type: "Spacer",
      props: { id: "elegante-prod-spacer-2", height: "large" },
    },
    // Accordion con detalles
    {
      type: "Container",
      props: {
        id: "elegante-prod-accordion",
        maxWidth: "lg",
        padding: "medium",
      },
    },
    {
      type: "Spacer",
      props: { id: "elegante-prod-spacer-3", height: "large" },
    },
    // Productos relacionados
    {
      type: "Container",
      props: {
        id: "elegante-prod-related",
        maxWidth: "xl",
        padding: "medium",
      },
    },
    {
      type: "Spacer",
      props: { id: "elegante-prod-spacer-4", height: "large" },
    },
    {
      type: "Footer",
      props: {
        id: "elegante-prod-footer",
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
    // Galería con thumbnails laterales
    "elegante-prod-gallery:content": [
      {
        type: "ImageGallery",
        props: {
          id: "product-main-image",
          images: [
            { url: "/images/products/product-1.jpg", alt: "Producto vista 1" },
            { url: "/images/products/product-2.jpg", alt: "Producto vista 2" },
            { url: "/images/products/product-3.jpg", alt: "Producto vista 3" },
            { url: "/images/products/product-4.jpg", alt: "Producto vista 4" },
          ],
          variant: "thumbnails-left",
          thumbnailSize: "md",
          showZoom: true,
          aspectRatio: "square",
        },
      },
    ],
    // Info elegante y balanceada
    "elegante-prod-info:content": [
      {
        type: "Heading",
        props: {
          id: "product-title",
          text: "Nombre del Producto",
          level: "h1",
          align: "left",
          style: "clean",
        },
      },
      {
        type: "Spacer",
        props: { id: "elegante-prod-spacer-title", height: "small" },
      },
      {
        type: "Price",
        props: {
          id: "product-price",
          amount: 15000,
          currency: "ARS",
          showCompare: true,
          compareAmount: 20000,
        },
      },
      {
        type: "Spacer",
        props: { id: "elegante-prod-spacer-price", height: "medium" },
      },
      {
        type: "Text",
        props: {
          id: "product-description",
          content:
            "Una pieza única diseñada con materiales premium. Acabados artesanales que garantizan exclusividad y durabilidad.",
          align: "left",
        },
      },
      {
        type: "Spacer",
        props: { id: "elegante-prod-spacer-desc", height: "medium" },
      },
      {
        type: "BuyButton",
        props: {
          id: "elegante-prod-buy",
          text: "Agregar al Carrito",
          variant: "outline",
        },
      },
    ],
    // Accordion con información adicional
    "elegante-prod-accordion:content": [
      {
        type: "AccordionSection",
        props: {
          id: "elegante-prod-accordion-section",
          items: [
            {
              title: "Materiales",
              content:
                "Fabricado con materiales de primera calidad. Acabados artesanales que garantizan durabilidad y elegancia.",
            },
            {
              title: "Cuidado",
              content:
                "Recomendamos guardar en lugar seco. Evitar contacto con perfumes y productos químicos.",
            },
            {
              title: "Envío",
              content:
                "Envío gratis en compras mayores a $30.000. Entrega en 3-5 días hábiles.",
            },
          ],
          allowMultiple: false,
          variant: "minimal",
        },
      },
    ],
    // Productos relacionados
    "elegante-prod-related:content": [
      {
        type: "SectionHeader",
        props: {
          id: "elegante-prod-related-header",
          variant: "with-link",
          title: "También te gustará",
          align: "left",
          viewAllLink: "/catalogo",
          viewAllText: "Ver colección",
        },
      },
      {
        type: "Spacer",
        props: { id: "elegante-prod-spacer-related", height: "medium" },
      },
      {
        type: "ProductGrid",
        props: {
          id: "elegante-prod-grid",
          preset: "elegante",
          columnsDesktop: 3,
          columnsTablet: 3,
          columnsMobile: 2,
          gap: "lg",
        },
      },
    ],
    "elegante-prod-grid:products": [],
  },
};
