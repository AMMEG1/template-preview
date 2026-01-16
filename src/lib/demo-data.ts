import type { Data } from "@puckeditor/core";

// Tipo de producto demo
export interface DemoProduct {
  id: string;
  title: string;
  description: string;
  price: number;
  comparePrice?: number;
  currency: "ARS" | "USD" | "EUR";
  image: string;
  rating: number;
  reviewCount: number;
  stockLevel: "in_stock" | "low_stock" | "very_low" | "out_of_stock";
  stockCount: number;
}

// Productos demo hardcodeados
export const DEMO_PRODUCTS: DemoProduct[] = [
  {
    id: "1",
    title: "Camiseta Premium Algodon",
    description: "Camiseta de algodon 100% premium con corte clasico. Perfecta para el uso diario, disponible en varios colores.",
    price: 15000,
    comparePrice: 20000,
    currency: "ARS",
    image: "/images/products/product-1.jpg",
    rating: 4.5,
    reviewCount: 128,
    stockLevel: "low_stock",
    stockCount: 5,
  },
  {
    id: "2",
    title: "Auriculares Bluetooth Pro",
    description: "Auriculares inalambricos con cancelacion activa de ruido. Bateria de 30 horas y sonido premium.",
    price: 45000,
    comparePrice: 60000,
    currency: "ARS",
    image: "/images/products/product-2.jpg",
    rating: 4.8,
    reviewCount: 256,
    stockLevel: "in_stock",
    stockCount: 20,
  },
  {
    id: "3",
    title: "Reloj Smartwatch Elite",
    description: "Smartwatch con monitor de salud, GPS integrado y resistencia al agua. Compatible con iOS y Android.",
    price: 85000,
    currency: "ARS",
    image: "/images/products/product-3.jpg",
    rating: 4.2,
    reviewCount: 89,
    stockLevel: "very_low",
    stockCount: 2,
  },
  {
    id: "4",
    title: "Zapatillas Running Air",
    description: "Zapatillas deportivas con tecnologia de amortiguacion avanzada. Ideales para corredores exigentes.",
    price: 55000,
    comparePrice: 70000,
    currency: "ARS",
    image: "/images/products/product-4.jpg",
    rating: 4.6,
    reviewCount: 312,
    stockLevel: "in_stock",
    stockCount: 15,
  },
];

// Obtener producto por ID
export function getProductById(id: string): DemoProduct | undefined {
  return DEMO_PRODUCTS.find((p) => p.id === id);
}

// Template por defecto para Landing Page
export const DEFAULT_LANDING_TEMPLATE: Data = {
  content: [
    {
      type: "PromoBar",
      props: {
        id: "promo-bar-1",
        variant: "with-icon",
        text: "Envio gratis en compras mayores a $50.000",
        backgroundColor: "#000000",
        textColor: "#ffffff",
        icon: "truck",
      },
    },
    {
      type: "Hero",
      props: {
        id: "hero-landing",
        variant: "with-badge",
        title: "Bienvenido a Nuestra Tienda",
        subtitle: "Descubre los mejores productos con ofertas exclusivas",
        backgroundImage: "/images/heroes/hero-1.jpg",
        ctaText: "Ver Catalogo",
        ctaLink: "/catalogo",
        height: "large",
        textAlign: "center",
        showOverlay: true,
        badgeText: "OFERTA ESPECIAL",
        badgeType: "flash",
        badgeAnimation: "pulse",
      },
    },
    {
      type: "Spacer",
      props: { id: "spacer-1", height: "large" },
    },
    {
      type: "Container",
      props: {
        id: "container-featured",
        maxWidth: "xl",
        padding: "medium",
      },
    },
    {
      type: "Spacer",
      props: { id: "spacer-3", height: "large" },
    },
    {
      type: "Footer",
      props: {
        id: "footer-1",
        text: "2024 Mi Tienda. Todos los derechos reservados.",
        showSocial: true,
      },
    },
  ],
  root: { props: {} },
  zones: {
    "container-featured:content": [
      {
        type: "SectionHeader",
        props: {
          id: "section-header-featured",
          variant: "with-link",
          title: "Productos Destacados",
          subtitle: "Los mas vendidos de la semana",
          align: "left",
          viewAllLink: "/catalogo",
          viewAllText: "Ver todo",
        },
      },
      {
        type: "Spacer",
        props: { id: "spacer-2", height: "medium" },
      },
      {
        type: "ProductGrid",
        props: {
          id: "grid-featured",
          preset: "tiendanube",
          columnsMobile: 2,
          columnsTablet: 3,
          columnsDesktop: 4,
          gap: "md",
        },
      },
    ],
    "grid-featured:products": [
      {
        type: "ProductCard",
        props: {
          id: "card-1",
          image: "/images/products/product-1.jpg",
          title: "Camiseta Premium",
          price: 15000,
          comparePrice: 20000,
          currency: "ARS",
          variant: "standard",
          productUrl: "/producto/1",
          showWishlist: true,
        },
      },
      {
        type: "ProductCard",
        props: {
          id: "card-2",
          image: "/images/products/product-2.jpg",
          title: "Auriculares Pro",
          price: 45000,
          comparePrice: 60000,
          currency: "ARS",
          variant: "standard",
          productUrl: "/producto/2",
          showWishlist: true,
        },
      },
      {
        type: "ProductCard",
        props: {
          id: "card-3",
          image: "/images/products/product-3.jpg",
          title: "Smartwatch Elite",
          price: 85000,
          currency: "ARS",
          variant: "standard",
          productUrl: "/producto/3",
          showWishlist: true,
        },
      },
      {
        type: "ProductCard",
        props: {
          id: "card-4",
          image: "/images/products/product-4.jpg",
          title: "Zapatillas Running",
          price: 55000,
          comparePrice: 70000,
          currency: "ARS",
          variant: "standard",
          productUrl: "/producto/4",
          showWishlist: true,
        },
      },
    ],
  },
};

// Template por defecto para Catalogo
export const DEFAULT_CATALOG_TEMPLATE: Data = {
  content: [
    {
      type: "PromoBar",
      props: {
        id: "promo-bar-catalog",
        variant: "scrolling",
        text: "OFERTAS DE TEMPORADA - Hasta 50% OFF en productos seleccionados",
        backgroundColor: "#dc2626",
        textColor: "#ffffff",
        scrollSpeed: "normal",
      },
    },
    {
      type: "Container",
      props: {
        id: "container-main",
        maxWidth: "xl",
        padding: "medium",
      },
    },
    {
      type: "Footer",
      props: {
        id: "footer-catalog",
        text: "2024 Mi Tienda",
        showSocial: true,
      },
    },
  ],
  root: { props: {} },
  zones: {
    "container-main:content": [
      {
        type: "Spacer",
        props: { id: "spacer-top", height: "medium" },
      },
      {
        type: "Heading",
        props: {
          id: "heading-catalog",
          text: "Nuestro Catalogo",
          level: "h1",
          align: "center",
          style: "underline",
        },
      },
      {
        type: "Text",
        props: {
          id: "text-catalog",
          content: "Explora nuestra seleccion de productos de alta calidad",
          align: "center",
        },
      },
      {
        type: "Spacer",
        props: { id: "spacer-mid", height: "large" },
      },
      {
        type: "SectionHeader",
        props: {
          id: "section-header-catalog",
          variant: "with-count",
          title: "Todos los productos",
          align: "left",
          itemCount: DEMO_PRODUCTS.length,
        },
      },
      {
        type: "Spacer",
        props: { id: "spacer-section", height: "small" },
      },
      {
        type: "ProductGrid",
        props: {
          id: "grid-catalog",
          preset: "tiendanube",
          columnsMobile: 2,
          columnsTablet: 3,
          columnsDesktop: 4,
          gap: "lg",
        },
      },
    ],
    "grid-catalog:products": DEMO_PRODUCTS.map((p) => ({
      type: "ProductCard",
      props: {
        id: `catalog-card-${p.id}`,
        image: p.image,
        title: p.title,
        description: p.description,
        price: p.price,
        comparePrice: p.comparePrice,
        currency: p.currency,
        variant: "detailed",
        showRating: true,
        rating: p.rating,
        reviewCount: p.reviewCount,
        showStock: true,
        stockLevel: p.stockLevel,
        stockCount: p.stockCount,
        productUrl: `/producto/${p.id}`,
        showWishlist: true,
      },
    })),
  },
};

// Template por defecto para Detalle de Producto
export const DEFAULT_PRODUCT_TEMPLATE: Data = {
  content: [
    {
      type: "Container",
      props: {
        id: "container-product",
        maxWidth: "lg",
        padding: "large",
      },
    },
    {
      type: "Spacer",
      props: { id: "spacer-related", height: "large" },
    },
    {
      type: "Container",
      props: {
        id: "container-related",
        maxWidth: "xl",
        padding: "medium",
      },
    },
    {
      type: "Spacer",
      props: { id: "spacer-footer", height: "large" },
    },
    {
      type: "Footer",
      props: {
        id: "footer-product",
        text: "2024 Mi Tienda",
        showSocial: true,
      },
    },
  ],
  root: { props: {} },
  zones: {
    "container-product:content": [
      {
        type: "Spacer",
        props: { id: "spacer-top-product", height: "small" },
      },
      {
        type: "ProductImage",
        props: {
          id: "product-main-image",
          src: "/images/products/product-1.jpg",
          alt: "Producto",
          size: "large",
        },
      },
      {
        type: "Spacer",
        props: { id: "spacer-img", height: "medium" },
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
        type: "Spacer",
        props: { id: "spacer-title", height: "small" },
      },
      {
        type: "Rating",
        props: {
          id: "product-rating",
          rating: 4.5,
          reviewCount: 128,
          showCount: true,
          size: "lg",
        },
      },
      {
        type: "Spacer",
        props: { id: "spacer-rating", height: "small" },
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
        props: { id: "spacer-price", height: "small" },
      },
      {
        type: "StockIndicator",
        props: {
          id: "product-stock",
          level: "low_stock",
          quantity: 5,
          showQuantity: true,
          showProgressBar: true,
          variant: "standard",
        },
      },
      {
        type: "Spacer",
        props: { id: "spacer-stock", height: "medium" },
      },
      {
        type: "Text",
        props: {
          id: "product-description",
          content: "Descripcion del producto aqui...",
          align: "left",
        },
      },
      {
        type: "Spacer",
        props: { id: "spacer-desc", height: "medium" },
      },
      {
        type: "BuyButton",
        props: {
          id: "product-buy",
          text: "Agregar al Carrito",
          variant: "primary",
        },
      },
    ],
    "container-related:content": [
      {
        type: "SectionHeader",
        props: {
          id: "section-related",
          variant: "with-link",
          title: "Productos Relacionados",
          align: "left",
          viewAllLink: "/catalogo",
          viewAllText: "Ver mas",
        },
      },
      {
        type: "Spacer",
        props: { id: "spacer-related-2", height: "medium" },
      },
      {
        type: "ProductGrid",
        props: {
          id: "grid-related",
          preset: "tiendanube",
          columnsMobile: 2,
          columnsTablet: 3,
          columnsDesktop: 3,
          gap: "md",
        },
      },
    ],
    "grid-related:products": [],
  },
};

// Helper para inyectar datos de producto en el template
export function injectProductData(template: Data, productId: string): Data {
  const product = getProductById(productId);
  if (!product) return template;

  // Deep clone para evitar mutaciones
  const injectedTemplate: Data = JSON.parse(JSON.stringify(template));

  // Funcion para actualizar props de componentes
  const updateProps = (items: Array<{ type: string; props: Record<string, unknown> }>) => {
    for (const item of items) {
      if (item.type === "ProductImage" && item.props.id === "product-main-image") {
        item.props.src = product.image;
        item.props.alt = product.title;
      }
      if (item.type === "Heading" && item.props.id === "product-title") {
        item.props.text = product.title;
      }
      if (item.type === "Price" && item.props.id === "product-price") {
        item.props.amount = product.price;
        item.props.compareAmount = product.comparePrice;
        item.props.currency = product.currency;
        item.props.showCompare = !!product.comparePrice;
      }
      if (item.type === "Rating" && item.props.id === "product-rating") {
        item.props.rating = product.rating;
        item.props.reviewCount = product.reviewCount;
      }
      if (item.type === "StockIndicator" && item.props.id === "product-stock") {
        item.props.level = product.stockLevel;
        item.props.quantity = product.stockCount;
      }
      if (item.type === "Text" && item.props.id === "product-description") {
        item.props.content = product.description;
      }
    }
  };

  // Actualizar content principal
  updateProps(injectedTemplate.content as Array<{ type: string; props: Record<string, unknown> }>);

  // Actualizar zones
  if (injectedTemplate.zones) {
    for (const zoneKey of Object.keys(injectedTemplate.zones)) {
      updateProps(injectedTemplate.zones[zoneKey] as Array<{ type: string; props: Record<string, unknown> }>);
    }
  }

  // Agregar productos relacionados (otros productos)
  // Buscar cualquier zone que termine en ":products" y contenga "grid" o "related"
  const relatedProducts = DEMO_PRODUCTS.filter((p) => p.id !== productId).slice(0, 3);
  if (injectedTemplate.zones) {
    for (const zoneKey of Object.keys(injectedTemplate.zones)) {
      // Buscar zones de productos relacionados (diferentes nombres según el template)
      if (zoneKey.endsWith(":products") && (zoneKey.includes("grid") || zoneKey.includes("related"))) {
        injectedTemplate.zones[zoneKey] = relatedProducts.map((p) => ({
          type: "ProductCard",
          props: {
            id: `related-${p.id}`,
            image: p.image,
            title: p.title,
            price: p.price,
            comparePrice: p.comparePrice,
            currency: p.currency,
            variant: "standard",
            productUrl: `/producto/${p.id}`,
            showWishlist: true,
          },
        }));
      }
    }
  }

  return injectedTemplate;
}
