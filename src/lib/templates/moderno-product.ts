/**
 * Template: Moderno - Producto
 * MORFOLOGÍA RADICAL: Strip horizontal de thumbnails pequeños + info técnica densa + Tabs + Accordion
 * Inspiración: Apple Store, tech products, gadgets
 */

import type { Data } from "@puckeditor/core";

export const modernoProductTemplate: Data = {
  content: [
    {
      type: "PromoBar",
      props: {
        id: "mod-prod-promo",
        variant: "with-icon",
        text: "Envío gratis + Garantía 2 años + Soporte técnico 24/7",
        backgroundColor: "#0097AA",
        textColor: "#ffffff",
        icon: "truck",
      },
    },
    // DIFERENCIA RADICAL: Strip horizontal de 4 thumbnails pequeños
    {
      type: "Container",
      props: {
        id: "mod-prod-thumbs",
        maxWidth: "lg",
        padding: "medium",
      },
    },
    {
      type: "Spacer",
      props: { id: "mod-prod-spacer-1", height: "small" },
    },
    // Info técnica organizada
    {
      type: "Container",
      props: {
        id: "mod-prod-info",
        maxWidth: "lg",
        padding: "medium",
      },
    },
    {
      type: "Spacer",
      props: { id: "mod-prod-spacer-2", height: "medium" },
    },
    // Trust badges
    {
      type: "Container",
      props: {
        id: "mod-prod-trust",
        maxWidth: "lg",
        padding: "medium",
      },
    },
    {
      type: "Spacer",
      props: { id: "mod-prod-spacer-3", height: "medium" },
    },
    // Tabs con especificaciones técnicas
    {
      type: "Container",
      props: {
        id: "mod-prod-tabs",
        maxWidth: "lg",
        padding: "medium",
      },
    },
    {
      type: "Spacer",
      props: { id: "mod-prod-spacer-4", height: "medium" },
    },
    // Accordion FAQ
    {
      type: "Container",
      props: {
        id: "mod-prod-faq",
        maxWidth: "lg",
        padding: "medium",
      },
    },
    {
      type: "Spacer",
      props: { id: "mod-prod-spacer-5", height: "large" },
    },
    // Relacionados
    {
      type: "Container",
      props: {
        id: "mod-prod-related",
        maxWidth: "xl",
        padding: "medium",
      },
    },
    {
      type: "Spacer",
      props: { id: "mod-prod-spacer-6", height: "medium" },
    },
    {
      type: "Footer",
      props: {
        id: "mod-prod-footer",
        text: "© 2024 Moderno Tech | Pago seguro | Garantía oficial | Soporte técnico",
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
    // DIFERENCIA RADICAL: Gallery con thumbnails pequeños
    "mod-prod-thumbs:content": [
      {
        type: "ImageGallery",
        props: {
          id: "mod-prod-gallery",
          images: [
            { url: "/images/products/product-1.jpg", alt: "Vista frontal" },
            { url: "/images/products/product-2.jpg", alt: "Vista lateral" },
            { url: "/images/products/product-3.jpg", alt: "Detalle" },
            { url: "/images/products/product-4.jpg", alt: "En uso" },
          ],
          variant: "thumbnails-bottom",
          thumbnailSize: "sm",
          showZoom: true,
          aspectRatio: "wide",
        },
      },
    ],
    // Info técnica organizada
    "mod-prod-info:content": [
      {
        type: "Rating",
        props: {
          id: "product-rating",
          rating: 4.7,
          reviewCount: 342,
          showCount: true,
          size: "lg",
        },
      },
      {
        type: "Spacer",
        props: { id: "mod-prod-spacer-rating", height: "small" },
      },
      {
        type: "Heading",
        props: {
          id: "product-title",
          text: "Nombre del Producto",
          level: "h1",
          align: "left",
        },
      },
      {
        type: "Text",
        props: {
          id: "mod-prod-sku",
          content: "SKU: MOD-2024-001 | Categoría: Tecnología",
          align: "left",
        },
      },
      {
        type: "Spacer",
        props: { id: "mod-prod-spacer-sku", height: "small" },
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
        type: "Text",
        props: {
          id: "mod-prod-cuotas",
          content: "12 cuotas sin interés de $1.250 | Ahorrás $5.000 (25% OFF)",
          align: "left",
        },
      },
      {
        type: "Spacer",
        props: { id: "mod-prod-spacer-price", height: "small" },
      },
      {
        type: "StockIndicator",
        props: {
          id: "product-stock",
          level: "in_stock",
          quantity: 15,
          showQuantity: true,
          showProgressBar: true,
          variant: "standard",
        },
      },
      {
        type: "Spacer",
        props: { id: "mod-prod-spacer-stock", height: "medium" },
      },
      {
        type: "BuyButton",
        props: {
          id: "mod-prod-buy",
          text: "Agregar al Carrito",
          variant: "primary",
        },
      },
    ],
    // Trust badges
    "mod-prod-trust:content": [
      {
        type: "TrustBadgesGrid",
        props: {
          id: "mod-prod-trust-grid",
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
              icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" /></svg>`,
              title: "Devolución",
              description: "30 días",
            },
          ],
          columns: 3,
          variant: "compact",
          iconSize: "sm",
          alignment: "center",
        },
      },
    ],
    // Tabs técnicos
    "mod-prod-tabs:content": [
      {
        type: "ProductTabs",
        props: {
          id: "mod-prod-tabs-section",
          tabs: [
            {
              label: "Descripción",
              content: "Producto de última generación con tecnología avanzada. Diseño premium y materiales de alta calidad.",
            },
            {
              label: "Especificaciones",
              content: "Modelo: PRO-2024\nConectividad: Bluetooth 5.0, WiFi 6\nBatería: 5000mAh\nPantalla: AMOLED 6.5\"\nProcesador: Octa-core 2.8GHz\nMemoria: 8GB RAM\nAlmacenamiento: 256GB",
            },
            {
              label: "Reviews (342)",
              content: "⭐⭐⭐⭐⭐ Excelente producto, superó mis expectativas.\n⭐⭐⭐⭐⭐ Calidad premium, lo recomiendo.\n⭐⭐⭐⭐ Muy bueno, envío rápido.",
            },
          ],
          variant: "underline",
        },
      },
    ],
    // FAQ Accordion
    "mod-prod-faq:content": [
      {
        type: "Heading",
        props: {
          id: "mod-prod-faq-title",
          text: "Preguntas Frecuentes",
          level: "h3",
          align: "left",
        },
      },
      {
        type: "Spacer",
        props: { id: "mod-prod-faq-spacer", height: "small" },
      },
      {
        type: "AccordionSection",
        props: {
          id: "mod-prod-accordion",
          items: [
            {
              title: "¿Cómo funciona la garantía?",
              content: "La garantía cubre defectos de fabricación por 2 años. Contacta soporte técnico para iniciar un reclamo.",
            },
            {
              title: "¿Cuánto tarda el envío?",
              content: "Envío express 24-48hs. Envío estándar 3-5 días hábiles.",
            },
            {
              title: "¿Puedo devolver el producto?",
              content: "Sí, 30 días de devolución sin preguntas. Reembolso en 5-7 días hábiles.",
            },
          ],
          allowMultiple: true,
          variant: "bordered",
        },
      },
    ],
    // Relacionados
    "mod-prod-related:content": [
      {
        type: "SectionHeader",
        props: {
          id: "mod-prod-related-header",
          variant: "with-link",
          title: "Productos Relacionados",
          align: "left",
          viewAllLink: "/catalogo",
          viewAllText: "Ver más",
        },
      },
      {
        type: "Spacer",
        props: { id: "mod-prod-spacer-related", height: "medium" },
      },
      {
        type: "ProductGrid",
        props: {
          id: "mod-prod-grid",
          preset: "moderno",
          columnsDesktop: 4,
          columnsTablet: 3,
          columnsMobile: 2,
          gap: "md",
        },
      },
    ],
    "mod-prod-grid:products": [],
  },
};
