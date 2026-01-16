// Tipos para componentes de Puck

// Componentes obligatorios
export interface ProductImageProps {
  src: string;
  alt: string;
  size: "small" | "medium" | "large";
}

export interface PriceProps {
  amount: number;
  currency: string;
  showCompare: boolean;
  compareAmount?: number;
}

export interface BuyButtonProps {
  text: string;
  variant: "primary" | "secondary" | "outline";
}

// Componentes opcionales
export interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  ctaText: string;
  ctaLink: string;
}

export interface HeadingProps {
  text: string;
  level: "h1" | "h2" | "h3" | "h4";
  align: "left" | "center" | "right";
}

export interface TextProps {
  content: string;
  align: "left" | "center" | "right";
}

export interface SpacerProps {
  height: "small" | "medium" | "large";
}

export interface ContainerProps {
  maxWidth: "sm" | "md" | "lg" | "xl" | "full";
  padding: "none" | "small" | "medium" | "large";
}

export interface ProductCardProps {
  image: string;
  title: string;
  price: number;
  comparePrice?: number;
}

export interface ProductGridProps {
  columns: 2 | 3 | 4;
}

export interface FooterProps {
  text: string;
  showSocial: boolean;
}

// Tipos de componentes disponibles
export type PuckComponents = {
  ProductImage: ProductImageProps;
  Price: PriceProps;
  BuyButton: BuyButtonProps;
  Hero: HeroProps;
  Heading: HeadingProps;
  Text: TextProps;
  Spacer: SpacerProps;
  Container: ContainerProps;
  ProductCard: ProductCardProps;
  ProductGrid: ProductGridProps;
  Footer: FooterProps;
};

// Validación
export interface ValidationResult {
  valid: boolean;
  error?: string;
}
