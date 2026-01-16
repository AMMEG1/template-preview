/**
 * Template: Promocional
 * ESTÉTICA: Marketplace agresivo, ofertas flash, urgencia máxima
 *
 * VISIÓN: Una experiencia visual que evoca Temu, AliExpress, Wish -
 * colores vibrantes, banners animados, timers, badges por todos lados,
 * descuentos prominentes, ratings y stock bajo.
 * Inspirado en: Temu, Shein, AliExpress, Wish
 *
 * MORFOLOGÍA ÚNICA:
 * - PromoBar scrolling rojo con urgencia
 * - Hero con timer countdown agresivo
 * - CategoryCircles en formato pill
 * - TrustBadgesGrid prominente
 * - Grid 5 columnas ultra denso
 * - Cards con ratings, stock, badges múltiples
 * - Múltiples secciones de ofertas
 */

import type { Data } from "@puckeditor/core";

export const promocionalTemplate: Data = {
  content: [
    // PROMOBAR: Scrolling rojo con urgencia máxima
    {
      type: "PromoBar",
      props: {
        id: "promo-bar",
        variant: "scrolling",
        text: "🔥 MEGA SALE -70% 🔥 ENVÍO GRATIS HOY 🔥 ÚLTIMAS HORAS 🔥 CÓDIGO: FLASH50 🔥",
        backgroundColor: "#DC2626",
        textColor: "#ffffff",
        scrollSpeed: "fast",
      },
    },
    // HERO: Con timer y múltiples elementos de urgencia
    {
      type: "Hero",
      props: {
        id: "promo-hero",
        variant: "with-timer",
        title: "🎉 MEGA SALE 🎉",
        subtitle: "Hasta 70% OFF en TODA la tienda",
        backgroundImage: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200",
        ctaText: "¡COMPRAR AHORA!",
        ctaLink: "/catalogo",
        height: "large",
        textAlign: "center",
        showOverlay: true,
        timerEndDate: "2025-12-31",
        timerVariant: "aggressive",
      },
    },
    // CATEGORÍAS: Circles en formato pill
    {
      type: "Container",
      props: {
        id: "promo-categories",
        maxWidth: "xl",
        padding: "medium",
      },
    },
    {
      type: "Spacer",
      props: { id: "promo-spacer-1", height: "small" },
    },
    // FLASH SALE: Grid ultra denso
    {
      type: "Container",
      props: {
        id: "promo-flash-sale",
        maxWidth: "xl",
        padding: "medium",
      },
    },
    {
      type: "Spacer",
      props: { id: "promo-spacer-2", height: "medium" },
    },
    // TRUST BADGES: Confianza del comprador
    {
      type: "Container",
      props: {
        id: "promo-trust",
        maxWidth: "xl",
        padding: "large",
      },
    },
    {
      type: "Spacer",
      props: { id: "promo-spacer-3", height: "medium" },
    },
    // OFERTAS ESPECIALES: Segunda sección de productos
    {
      type: "Container",
      props: {
        id: "promo-especiales",
        maxWidth: "xl",
        padding: "medium",
      },
    },
    {
      type: "Spacer",
      props: { id: "promo-spacer-4", height: "medium" },
    },
    // MÁS VENDIDOS
    {
      type: "Container",
      props: {
        id: "promo-bestsellers",
        maxWidth: "xl",
        padding: "medium",
      },
    },
    {
      type: "Footer",
      props: {
        id: "promo-footer",
        text: "© 2024 Promocional Store · Pagos seguros · Devolución gratuita",
        showSocial: true,
      },
    },
  ],
  root: {
    props: {
      themePreset: "promocional",
    } as Record<string, unknown>,
  },
  zones: {
    // CategoryCircles en pills
    "promo-categories:content": [
      {
        type: "Heading",
        props: {
          id: "promo-cat-title",
          text: "🔥 CATEGORÍAS EN OFERTA 🔥",
          level: "h2",
          align: "center",
          style: "highlight",
          highlightColor: "yellow",
        },
      },
      {
        type: "Spacer",
        props: { id: "promo-cat-spacer", height: "small" },
      },
      {
        type: "CategoryCircles",
        props: {
          id: "promo-circles",
          title: "",
          size: "lg",
          shape: "pill",
          showTitle: true,
          gap: "md",
        },
      },
    ],
    // Flash Sale grid
    "promo-flash-sale:content": [
      {
        type: "SectionHeader",
        props: {
          id: "promo-flash-header",
          variant: "with-count",
          title: "⚡ FLASH SALE ⚡",
          align: "left",
          viewAllLink: "/catalogo",
          viewAllText: "Ver todo",
          itemCount: 156,
        },
      },
      {
        type: "ProductGrid",
        props: {
          id: "promo-grid",
          preset: "promocional",
          columnsDesktop: 5,
          columnsTablet: 3,
          columnsMobile: 2,
          gap: "xs",
        },
      },
    ],
    // Trust badges
    "promo-trust:content": [
      {
        type: "TrustBadgesGrid",
        props: {
          id: "promo-trust-badges",
          badges: [
            {
              icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" /></svg>`,
              title: "Envío Gratis",
              description: "En compras +$15.000",
            },
            {
              icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>`,
              title: "Compra 100% Segura",
              description: "Datos encriptados SSL",
            },
            {
              icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" /></svg>`,
              title: "Devolución Fácil",
              description: "30 días sin preguntas",
            },
            {
              icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" /></svg>`,
              title: "Hasta 12 Cuotas",
              description: "Sin interés con todas las tarjetas",
            },
          ],
          columns: 4,
          variant: "card",
          iconSize: "md",
          alignment: "center",
        },
      },
    ],
    // Ofertas especiales
    "promo-especiales:content": [
      {
        type: "Heading",
        props: {
          id: "promo-esp-title",
          text: "🎁 OFERTAS IMPERDIBLES 🎁",
          level: "h2",
          align: "center",
          style: "highlight",
          highlightColor: "yellow",
        },
      },
      {
        type: "Spacer",
        props: { id: "promo-esp-spacer", height: "medium" },
      },
      {
        type: "ProductGrid",
        props: {
          id: "promo-grid-2",
          preset: "promocional",
          columnsDesktop: 5,
          columnsTablet: 3,
          columnsMobile: 2,
          gap: "xs",
        },
      },
    ],
    // Bestsellers
    "promo-bestsellers:content": [
      {
        type: "SectionHeader",
        props: {
          id: "promo-best-header",
          variant: "with-count",
          title: "⭐ MÁS VENDIDOS ⭐",
          align: "left",
          viewAllLink: "/catalogo",
          viewAllText: "Ver todos",
          itemCount: 89,
        },
      },
      {
        type: "ProductGrid",
        props: {
          id: "promo-grid-3",
          preset: "promocional",
          columnsDesktop: 5,
          columnsTablet: 3,
          columnsMobile: 2,
          gap: "xs",
        },
      },
    ],
    // Productos Flash Sale
    "promo-grid:products": [
      {
        type: "ProductCard",
        props: {
          id: "promo-card-1",
          image: "/images/products/product-1.jpg",
          title: "Remera Algodón Premium",
          price: 4990,
          comparePrice: 12990,
          currency: "ARS",
          variant: "aggressive",
          productUrl: "/producto/1",
          showRating: true,
          rating: 4.8,
          reviewCount: 1234,
          showStock: true,
          stockLevel: "low_stock",
          stockCount: 3,
          badges: [
            { text: "-62%", type: "discount" },
            { text: "🔥 HOT", type: "hot" },
          ],
        },
      },
      {
        type: "ProductCard",
        props: {
          id: "promo-card-2",
          image: "/images/products/product-2.jpg",
          title: "Auriculares Bluetooth",
          price: 8990,
          comparePrice: 24990,
          currency: "ARS",
          variant: "aggressive",
          productUrl: "/producto/2",
          showRating: true,
          rating: 4.5,
          reviewCount: 567,
          showStock: true,
          stockLevel: "very_low",
          stockCount: 1,
          badges: [
            { text: "-64%", type: "discount" },
            { text: "⚡ FLASH", type: "flash" },
          ],
        },
      },
      {
        type: "ProductCard",
        props: {
          id: "promo-card-3",
          image: "/images/products/product-3.jpg",
          title: "Zapatillas Running",
          price: 12990,
          comparePrice: 35990,
          currency: "ARS",
          variant: "aggressive",
          productUrl: "/producto/3",
          showRating: true,
          rating: 4.9,
          reviewCount: 2341,
          badges: [
            { text: "-64%", type: "discount" },
            { text: "★ TOP", type: "bestseller" },
          ],
        },
      },
      {
        type: "ProductCard",
        props: {
          id: "promo-card-4",
          image: "/images/products/product-4.jpg",
          title: "Reloj Smart Watch",
          price: 15990,
          comparePrice: 45990,
          currency: "ARS",
          variant: "aggressive",
          productUrl: "/producto/4",
          showRating: true,
          rating: 4.7,
          reviewCount: 892,
          showStock: true,
          stockLevel: "low_stock",
          stockCount: 5,
          badges: [
            { text: "-65%", type: "discount" },
          ],
        },
      },
      {
        type: "ProductCard",
        props: {
          id: "promo-card-5",
          image: "/images/products/product-5.jpg",
          title: "Mochila Impermeable",
          price: 6990,
          comparePrice: 18990,
          currency: "ARS",
          variant: "aggressive",
          productUrl: "/producto/5",
          showRating: true,
          rating: 4.6,
          reviewCount: 445,
          badges: [
            { text: "-63%", type: "discount" },
            { text: "NUEVO", type: "new" },
          ],
        },
      },
    ],
    // Productos ofertas especiales
    "promo-grid-2:products": [
      {
        type: "ProductCard",
        props: {
          id: "promo-card-6",
          image: "/images/products/product-6.jpg",
          title: "Campera Puffer",
          price: 19990,
          comparePrice: 54990,
          currency: "ARS",
          variant: "aggressive",
          productUrl: "/producto/6",
          showRating: true,
          rating: 4.8,
          reviewCount: 678,
          badges: [
            { text: "-64%", type: "discount" },
          ],
        },
      },
      {
        type: "ProductCard",
        props: {
          id: "promo-card-7",
          image: "/images/products/product-1.jpg",
          title: "Jean Slim Fit",
          price: 11990,
          comparePrice: 29990,
          currency: "ARS",
          variant: "aggressive",
          productUrl: "/producto/7",
          showRating: true,
          rating: 4.4,
          reviewCount: 334,
          showStock: true,
          stockLevel: "low_stock",
          stockCount: 4,
          badges: [
            { text: "-60%", type: "discount" },
          ],
        },
      },
      {
        type: "ProductCard",
        props: {
          id: "promo-card-8",
          image: "/images/products/product-2.jpg",
          title: "Cartera Cuero Eco",
          price: 7990,
          comparePrice: 19990,
          currency: "ARS",
          variant: "aggressive",
          productUrl: "/producto/8",
          showRating: true,
          rating: 4.6,
          reviewCount: 223,
          badges: [
            { text: "-60%", type: "discount" },
            { text: "2X1", type: "custom" },
          ],
        },
      },
      {
        type: "ProductCard",
        props: {
          id: "promo-card-9",
          image: "/images/products/product-3.jpg",
          title: "Lentes de Sol UV400",
          price: 3990,
          comparePrice: 11990,
          currency: "ARS",
          variant: "aggressive",
          productUrl: "/producto/9",
          showRating: true,
          rating: 4.3,
          reviewCount: 556,
          showStock: true,
          stockLevel: "very_low",
          stockCount: 2,
          badges: [
            { text: "-67%", type: "discount" },
          ],
        },
      },
      {
        type: "ProductCard",
        props: {
          id: "promo-card-10",
          image: "/images/products/product-4.jpg",
          title: "Cinturón Reversible",
          price: 2990,
          comparePrice: 8990,
          currency: "ARS",
          variant: "aggressive",
          productUrl: "/producto/10",
          showRating: true,
          rating: 4.5,
          reviewCount: 189,
          badges: [
            { text: "-67%", type: "discount" },
            { text: "⭐ BEST", type: "bestseller" },
          ],
        },
      },
    ],
    // Bestsellers
    "promo-grid-3:products": [
      {
        type: "ProductCard",
        props: {
          id: "promo-card-11",
          image: "/images/products/product-5.jpg",
          title: "Parlante Bluetooth",
          price: 9990,
          comparePrice: 24990,
          currency: "ARS",
          variant: "aggressive",
          productUrl: "/producto/11",
          showRating: true,
          rating: 4.9,
          reviewCount: 3421,
          badges: [
            { text: "-60%", type: "discount" },
            { text: "#1 VENTAS", type: "bestseller" },
          ],
        },
      },
      {
        type: "ProductCard",
        props: {
          id: "promo-card-12",
          image: "/images/products/product-6.jpg",
          title: "Power Bank 20000mAh",
          price: 8990,
          comparePrice: 22990,
          currency: "ARS",
          variant: "aggressive",
          productUrl: "/producto/12",
          showRating: true,
          rating: 4.8,
          reviewCount: 2876,
          badges: [
            { text: "-61%", type: "discount" },
          ],
        },
      },
      {
        type: "ProductCard",
        props: {
          id: "promo-card-13",
          image: "/images/products/product-1.jpg",
          title: "Cargador Rápido USB-C",
          price: 4990,
          comparePrice: 12990,
          currency: "ARS",
          variant: "aggressive",
          productUrl: "/producto/13",
          showRating: true,
          rating: 4.7,
          reviewCount: 1567,
          badges: [
            { text: "-62%", type: "discount" },
          ],
        },
      },
      {
        type: "ProductCard",
        props: {
          id: "promo-card-14",
          image: "/images/products/product-2.jpg",
          title: "Mouse Gamer RGB",
          price: 6990,
          comparePrice: 17990,
          currency: "ARS",
          variant: "aggressive",
          productUrl: "/producto/14",
          showRating: true,
          rating: 4.6,
          reviewCount: 987,
          showStock: true,
          stockLevel: "low_stock",
          stockCount: 6,
          badges: [
            { text: "-61%", type: "discount" },
            { text: "🔥 HOT", type: "hot" },
          ],
        },
      },
      {
        type: "ProductCard",
        props: {
          id: "promo-card-15",
          image: "/images/products/product-3.jpg",
          title: "Teclado Mecánico",
          price: 14990,
          comparePrice: 39990,
          currency: "ARS",
          variant: "aggressive",
          productUrl: "/producto/15",
          showRating: true,
          rating: 4.8,
          reviewCount: 2134,
          badges: [
            { text: "-63%", type: "discount" },
          ],
        },
      },
    ],
  },
};
