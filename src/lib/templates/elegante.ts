/**
 * Template: Elegante
 * MORFOLOGÍA: SplitLayout Hero + MasonryGrid categorías
 *
 * Diferenciación estructural:
 * - Hero con SplitLayout (imagen izquierda, texto derecha)
 * - Categorías en MasonryGrid (no circles)
 * - Footer simple
 */

import type { Data } from "@puckeditor/core";

export const eleganteTemplate: Data = {
  content: [
    {
      type: "PromoBar",
      props: {
        id: "elegante-promo",
        variant: "with-icon",
        text: "3 cuotas sin interés | Envío gratis en compras +$30.000",
        backgroundColor: "#7CB69D",
        textColor: "#ffffff",
        icon: "gift",
      },
    },
    // DIFERENCIA MORFOLÓGICA: SplitLayout en lugar de Hero centrado
    {
      type: "SplitLayout",
      props: {
        id: "elegante-split-hero",
        imageUrl: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800",
        imageAlt: "Joyería elegante",
        imagePosition: "left",
        imageFit: "cover",
        backgroundColor: "#FDF8F3",
        verticalAlign: "center",
        splitRatio: "50-50",
        minHeight: "half",
        padding: "xl",
      },
    },
    {
      type: "Spacer",
      props: { id: "elegante-spacer-1", height: "large" },
    },
    // DIFERENCIA MORFOLÓGICA: MasonryGrid para categorías
    {
      type: "Container",
      props: {
        id: "elegante-masonry-section",
        maxWidth: "xl",
        padding: "medium",
      },
    },
    {
      type: "Spacer",
      props: { id: "elegante-spacer-2", height: "large" },
    },
    {
      type: "Container",
      props: {
        id: "elegante-featured",
        maxWidth: "xl",
        padding: "medium",
      },
    },
    {
      type: "Spacer",
      props: { id: "elegante-spacer-3", height: "large" },
    },
    {
      type: "Footer",
      props: {
        id: "elegante-footer",
        text: "© 2024 Elegante Store. Todos los derechos reservados.",
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
    // Contenido del SplitLayout Hero
    "elegante-split-hero:content": [
      {
        type: "Heading",
        props: {
          id: "elegante-hero-title",
          text: "Nueva Colección",
          level: "h1",
          align: "left",
          style: "clean",
        },
      },
      {
        type: "Text",
        props: {
          id: "elegante-hero-text",
          content: "Piezas únicas diseñadas para momentos especiales. Joyería artesanal con alma.",
          align: "left",
        },
      },
      {
        type: "Spacer",
        props: { id: "elegante-hero-spacer", height: "medium" },
      },
      {
        type: "BuyButton",
        props: {
          id: "elegante-hero-cta",
          text: "Explorar Colección",
          variant: "primary",
        },
      },
    ],
    // MORFOLOGÍA DIFERENTE: MasonryGrid en lugar de CategoryCircles
    "elegante-masonry-section:content": [
      {
        type: "SectionHeader",
        props: {
          id: "elegante-cat-header",
          variant: "simple",
          title: "Colecciones",
          align: "center",
        },
      },
      {
        type: "Spacer",
        props: { id: "elegante-cat-spacer", height: "medium" },
      },
      {
        type: "MasonryGrid",
        props: {
          id: "elegante-masonry",
          items: [
            {
              imageUrl: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600",
              title: "Collares",
              href: "/categoria/collares",
              height: "lg",
            },
            {
              imageUrl: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600",
              title: "Aretes",
              href: "/categoria/aretes",
              height: "md",
            },
            {
              imageUrl: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600",
              title: "Pulseras",
              href: "/categoria/pulseras",
              height: "xl",
            },
            {
              imageUrl: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600",
              title: "Anillos",
              href: "/categoria/anillos",
              height: "md",
            },
          ],
          columns: 3,
          gap: "md",
          overlayStyle: "gradient",
        },
      },
    ],
    "elegante-featured:content": [
      {
        type: "SectionHeader",
        props: {
          id: "elegante-feat-header",
          variant: "with-link",
          title: "Destacados",
          align: "left",
          viewAllLink: "/catalogo",
          viewAllText: "Ver colección",
        },
      },
      {
        type: "Spacer",
        props: { id: "elegante-feat-spacer", height: "medium" },
      },
      {
        type: "ProductGrid",
        props: {
          id: "elegante-grid",
          preset: "elegante",
        },
      },
    ],
    "elegante-grid:products": [
      {
        type: "ProductCard",
        props: {
          id: "elegante-card-1",
          image: "/images/products/product-1.jpg",
          title: "Collar Hoja Dorada",
          price: 28000,
          currency: "ARS",
          variant: "minimal",
          productUrl: "/producto/1",
          showWishlist: true,
          imageZoom: true,
        },
      },
      {
        type: "ProductCard",
        props: {
          id: "elegante-card-2",
          image: "/images/products/product-2.jpg",
          title: "Aretes Flor de Loto",
          price: 18500,
          comparePrice: 24000,
          currency: "ARS",
          variant: "minimal",
          productUrl: "/producto/2",
          showWishlist: true,
          imageZoom: true,
        },
      },
      {
        type: "ProductCard",
        props: {
          id: "elegante-card-3",
          image: "/images/products/product-3.jpg",
          title: "Pulsera Cadena Fina",
          price: 22000,
          currency: "ARS",
          variant: "minimal",
          productUrl: "/producto/3",
          showWishlist: true,
          imageZoom: true,
        },
      },
      {
        type: "ProductCard",
        props: {
          id: "elegante-card-4",
          image: "/images/products/product-4.jpg",
          title: "Anillo Piedra Luna",
          price: 35000,
          comparePrice: 42000,
          currency: "ARS",
          variant: "minimal",
          productUrl: "/producto/4",
          showWishlist: true,
          imageZoom: true,
        },
      },
    ],
  },
};
