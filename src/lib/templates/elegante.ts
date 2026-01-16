/**
 * Template: Elegante
 * ESTÉTICA: Galería de joyería artesanal, orgánico, femenino
 *
 * VISIÓN: Una experiencia visual que evoca boutiques de joyería parisinas,
 * con tonos sage y crema, tipografía ligera, y mucho espacio para respirar.
 * Inspirado en: Acero Blanco, Mejuri, Catbird
 *
 * MORFOLOGÍA ÚNICA:
 * - SplitLayout hero con imagen de lifestyle a la izquierda
 * - MasonryGrid para colecciones (no circles)
 * - Espaciado generoso, bordes redondeados suaves
 * - Productos con wishlist y zoom sutil
 */

import type { Data } from "@puckeditor/core";

export const eleganteTemplate: Data = {
  content: [
    // Barra sutil con mensaje de marca
    {
      type: "PromoBar",
      props: {
        id: "elegante-promo",
        variant: "with-icon",
        text: "Joyería artesanal · Envío gratis en compras +$30.000",
        backgroundColor: "#7CB69D",
        textColor: "#ffffff",
        icon: "sparkles",
      },
    },
    // HERO: SplitLayout - imagen lifestyle izquierda, contenido derecha
    {
      type: "SplitLayout",
      props: {
        id: "elegante-split-hero",
        imageUrl: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800",
        imageAlt: "Mujer con joyería elegante",
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
    // COLECCIONES: MasonryGrid con alturas variadas
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
    // DESTACADOS: Grid de productos con wishlist
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
    // SEGUNDA SECCIÓN: Nuevos Ingresos
    {
      type: "Container",
      props: {
        id: "elegante-new-arrivals",
        maxWidth: "xl",
        padding: "medium",
      },
    },
    {
      type: "Spacer",
      props: { id: "elegante-spacer-4", height: "large" },
    },
    {
      type: "Footer",
      props: {
        id: "elegante-footer",
        text: "© 2024 Elegante · Joyería con alma",
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
    // Hero SplitLayout content
    "elegante-split-hero:content": [
      {
        type: "Text",
        props: {
          id: "elegante-hero-tagline",
          content: "Nueva Colección Primavera",
          align: "left",
        },
      },
      {
        type: "Heading",
        props: {
          id: "elegante-hero-title",
          text: "Piezas que cuentan historias",
          level: "h1",
          align: "left",
          style: "clean",
        },
      },
      {
        type: "Text",
        props: {
          id: "elegante-hero-text",
          content: "Cada joya es una obra de arte, creada a mano con materiales nobles y amor por el detalle. Descubre piezas únicas que se convertirán en tus favoritas.",
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
          href: "/catalogo",
        },
      },
    ],
    // MasonryGrid de colecciones
    "elegante-masonry-section:content": [
      {
        type: "SectionHeader",
        props: {
          id: "elegante-cat-header",
          variant: "simple",
          title: "Nuestras Colecciones",
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
              href: "/catalogo",
              height: "lg",
            },
            {
              imageUrl: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600",
              title: "Aretes",
              href: "/catalogo",
              height: "md",
            },
            {
              imageUrl: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600",
              title: "Pulseras",
              href: "/catalogo",
              height: "xl",
            },
            {
              imageUrl: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600",
              title: "Anillos",
              href: "/catalogo",
              height: "md",
            },
            {
              imageUrl: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600",
              title: "Sets",
              href: "/catalogo",
              height: "lg",
            },
          ],
          columns: 3,
          gap: "md",
          overlayStyle: "gradient",
        },
      },
    ],
    // Productos destacados
    "elegante-featured:content": [
      {
        type: "SectionHeader",
        props: {
          id: "elegante-feat-header",
          variant: "with-link",
          title: "Piezas Destacadas",
          align: "left",
          viewAllLink: "/catalogo",
          viewAllText: "Ver colección completa",
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
          columnsDesktop: 4,
          columnsTablet: 2,
          columnsMobile: 2,
          gap: "lg",
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
          badges: [{ text: "-23%", type: "discount" }],
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
          badges: [{ text: "Nuevo", type: "new" }],
        },
      },
    ],
    // Nuevos ingresos
    "elegante-new-arrivals:content": [
      {
        type: "SectionHeader",
        props: {
          id: "elegante-new-header",
          variant: "simple",
          title: "Recién Llegados",
          align: "center",
        },
      },
      {
        type: "Spacer",
        props: { id: "elegante-new-spacer", height: "medium" },
      },
      {
        type: "ProductGrid",
        props: {
          id: "elegante-grid-2",
          preset: "elegante",
          columnsDesktop: 4,
          columnsTablet: 2,
          columnsMobile: 2,
          gap: "lg",
        },
      },
    ],
    "elegante-grid-2:products": [
      {
        type: "ProductCard",
        props: {
          id: "elegante-card-5",
          image: "/images/products/product-5.jpg",
          title: "Tobillera Perlas",
          price: 15000,
          currency: "ARS",
          variant: "minimal",
          productUrl: "/producto/5",
          showWishlist: true,
          imageZoom: true,
          badges: [{ text: "Nuevo", type: "new" }],
        },
      },
      {
        type: "ProductCard",
        props: {
          id: "elegante-card-6",
          image: "/images/products/product-6.jpg",
          title: "Aros Argolla Oro",
          price: 19500,
          currency: "ARS",
          variant: "minimal",
          productUrl: "/producto/6",
          showWishlist: true,
          imageZoom: true,
        },
      },
      {
        type: "ProductCard",
        props: {
          id: "elegante-card-7",
          image: "/images/products/product-1.jpg",
          title: "Dije Corazón",
          price: 12000,
          currency: "ARS",
          variant: "minimal",
          productUrl: "/producto/7",
          showWishlist: true,
          imageZoom: true,
        },
      },
      {
        type: "ProductCard",
        props: {
          id: "elegante-card-8",
          image: "/images/products/product-2.jpg",
          title: "Set Novia Completo",
          price: 65000,
          currency: "ARS",
          variant: "minimal",
          productUrl: "/producto/8",
          showWishlist: true,
          imageZoom: true,
          badges: [{ text: "Exclusivo", type: "limited" }],
        },
      },
    ],
  },
};
