"use client";

import Image from "next/image";
import { cn } from "@/lib/utils/cn";
import { formatPrice } from "@/lib/utils/formatPrice";
import { Badge } from "./Badge";
import { Rating } from "./Rating";
import { StockIndicator } from "./StockIndicator";
import { CountdownTimer } from "./CountdownTimer";
import { useProductGridContext } from "./ProductGridContext";
import type { BadgeItem, Installment } from "./types";

interface Props {
  // Core
  image?: string;
  title?: string;
  description?: string;
  price?: number;
  comparePrice?: number;
  currency?: "ARS" | "USD" | "EUR";

  // Variante de diseño
  variant?: "minimal" | "standard" | "detailed" | "aggressive" | "carey";

  // Imagen
  imageAspect?: "square" | "portrait" | "landscape" | "3:4";
  imageZoom?: boolean;
  secondaryImage?: string; // Imagen secundaria para hover

  // Video preview
  videoUrl?: string;
  showVideoOnHover?: boolean;

  // Badges
  badges?: BadgeItem[];

  // Tags (categories/attributes)
  tags?: string[];
  showTags?: boolean;

  // Rating
  showRating?: boolean;
  rating?: number;
  reviewCount?: number;

  // Stock/Urgencia
  showStock?: boolean;
  stockLevel?: "in_stock" | "low_stock" | "very_low" | "out_of_stock";
  stockCount?: number;

  // Timer
  showTimer?: boolean;
  timerEndDate?: string;

  // Installments (cuotas)
  showInstallments?: boolean;
  installments?: Installment;

  // Shipping
  showFreeShipping?: boolean;
  freeShippingThreshold?: number;

  // Quick View
  enableQuickView?: boolean;

  // Acciones
  showWishlist?: boolean;
  productUrl?: string;

  // Estilos
  borderRadius?: "none" | "sm" | "md" | "lg" | "xl";
  shadow?: "none" | "sm" | "md" | "lg";
  hoverEffect?: "none" | "lift" | "glow" | "scale" | "carey";
}

const aspectRatioClasses = {
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  "3:4": "aspect-[3/4]",
};

const borderRadiusClasses = {
  none: "rounded-none",
  sm: "rounded",
  md: "rounded-lg",
  lg: "rounded-xl",
  xl: "rounded-2xl",
};

const shadowClasses = {
  none: "",
  sm: "shadow-sm",
  md: "shadow-md",
  lg: "shadow-lg",
};

const hoverEffectClasses = {
  none: "",
  lift: "hover:-translate-y-1 hover:shadow-lg",
  glow: "hover:shadow-[0_0_20px_rgba(0,0,0,0.1)]",
  scale: "hover:scale-[1.02]",
  carey: "hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,151,170,0.15)] hover:border-[#0097aa]",
};

export function ProductCard({
  image = "/images/products/product-1.jpg",
  title = "Producto",
  description,
  price = 15000,
  comparePrice,
  currency = "ARS",
  variant,
  imageAspect = "square",
  imageZoom = true,
  secondaryImage,
  videoUrl,
  showVideoOnHover = false,
  badges = [],
  tags = [],
  showTags = false,
  showRating = false,
  rating = 0,
  reviewCount = 0,
  showStock = false,
  stockLevel = "in_stock",
  stockCount,
  showTimer = false,
  timerEndDate,
  showInstallments = false,
  installments,
  showFreeShipping = false,
  freeShippingThreshold = 50000,
  enableQuickView = false,
  showWishlist = false,
  productUrl = "#",
  borderRadius = "md",
  shadow = "sm",
  hoverEffect = "lift",
}: Props) {
  // Obtener contexto del ProductGrid padre (si existe)
  const gridContext = useProductGridContext();

  // Usar variante del prop, o la sugerida por el grid, o "standard" por defecto
  const effectiveVariant = variant || gridContext?.suggestedCardVariant || "standard";

  // Clases del grid preset (tienen prioridad sobre las props del card)
  const gridCardClass = gridContext?.cardClass || "";
  const hasGridStyles = gridCardClass.length > 0;

  // Si hay estilos del grid, usarlos; si no, usar los props del card
  const cardStyleClasses = hasGridStyles
    ? gridCardClass
    : cn(
        borderRadiusClasses[borderRadius],
        shadowClasses[shadow],
        hoverEffectClasses[hoverEffect]
      );

  const hasDiscount = comparePrice && comparePrice > price;
  const discountPercent = hasDiscount
    ? Math.round(((comparePrice - price) / comparePrice) * 100)
    : 0;

  // MINIMAL VARIANT (Zara style)
  if (effectiveVariant === "minimal") {
    return (
      <a
        href={productUrl}
        className={cn(
          "product-card group block bg-white overflow-hidden transition-all duration-300",
          cardStyleClasses
        )}
      >
        <div className={cn("relative overflow-hidden", aspectRatioClasses[imageAspect])}>
          <Image
            src={image}
            alt={title}
            fill
            className={cn(
              "object-cover transition-transform duration-500",
              imageZoom && "group-hover:scale-110"
            )}
            sizes="(max-width: 768px) 50vw, 25vw"
          />
        </div>
        <div className="p-3">
          <p className="text-lg font-semibold text-gray-900">
            {formatPrice(price, currency)}
          </p>
        </div>
      </a>
    );
  }

  // STANDARD VARIANT (Tiendanube style)
  if (effectiveVariant === "standard") {
    return (
      <a
        href={productUrl}
        className={cn(
          "product-card group block bg-white overflow-hidden transition-all duration-300",
          cardStyleClasses
        )}
      >
        <div className={cn("relative overflow-hidden", aspectRatioClasses[imageAspect])}>
          <Image
            src={image}
            alt={title}
            fill
            className={cn(
              "object-cover transition-transform duration-500",
              imageZoom && "group-hover:scale-110"
            )}
            sizes="(max-width: 768px) 50vw, 25vw"
          />
          {badges.length > 0 && (
            <Badge
              text={badges[0].text}
              type={badges[0].type}
              position="top-left"
              size="sm"
            />
          )}
          {showWishlist && (
            <button
              className="absolute top-2 right-2 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors"
              onClick={(e) => { e.preventDefault(); alert("Agregado a favoritos"); }}
            >
              <span className="text-gray-600 hover:text-red-500">♡</span>
            </button>
          )}
        </div>
        <div className="p-4">
          <h3 className="font-medium text-gray-900 line-clamp-2 mb-2">{title}</h3>
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-gray-900">
              {formatPrice(price, currency)}
            </span>
            {hasDiscount && (
              <span className="text-sm text-gray-500 line-through">
                {formatPrice(comparePrice, currency)}
              </span>
            )}
          </div>
        </div>
      </a>
    );
  }

  // DETAILED VARIANT
  if (effectiveVariant === "detailed") {
    return (
      <a
        href={productUrl}
        className={cn(
          "product-card group block bg-white overflow-hidden transition-all duration-300",
          cardStyleClasses
        )}
      >
        <div className={cn("relative overflow-hidden", aspectRatioClasses[imageAspect])}>
          <Image
            src={image}
            alt={title}
            fill
            className={cn(
              "object-cover transition-transform duration-500",
              imageZoom && "group-hover:scale-110"
            )}
            sizes="(max-width: 768px) 50vw, 25vw"
          />
          {badges.length > 0 && (
            <div className="absolute top-2 left-2 flex flex-col gap-1">
              {badges.slice(0, 2).map((badge, i) => (
                <Badge
                  key={i}
                  text={badge.text}
                  type={badge.type}
                  position="inline"
                  size="sm"
                />
              ))}
            </div>
          )}
          {showWishlist && (
            <button
              className="absolute top-2 right-2 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors"
              onClick={(e) => { e.preventDefault(); alert("Agregado a favoritos"); }}
            >
              <span className="text-gray-600 hover:text-red-500">♡</span>
            </button>
          )}
        </div>
        <div className="p-4 space-y-2">
          <h3 className="font-medium text-gray-900 line-clamp-2">{title}</h3>

          {showRating && rating > 0 && (
            <Rating rating={rating} reviewCount={reviewCount} size="sm" />
          )}

          {description && (
            <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
          )}

          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-gray-900">
              {formatPrice(price, currency)}
            </span>
            {hasDiscount && (
              <>
                <span className="text-sm text-gray-500 line-through">
                  {formatPrice(comparePrice, currency)}
                </span>
                <span className="text-sm font-medium text-red-600">
                  -{discountPercent}%
                </span>
              </>
            )}
          </div>

          {showStock && (
            <StockIndicator
              level={stockLevel}
              quantity={stockCount}
              variant="standard"
              showProgressBar={stockLevel !== "in_stock"}
            />
          )}
        </div>
      </a>
    );
  }

  // CAREY VARIANT (Modern, trust-building, cyan accents)
  if (effectiveVariant === "carey") {
    // Carey tiene estilos propios específicos, pero respeta grid cuando está disponible
    const careyStyles = hasGridStyles
      ? gridCardClass
      : cn(
          "rounded-2xl",
          shadowClasses[shadow],
          "hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,151,170,0.15)] hover:border-[#0097aa]"
        );
    return (
      <a
        href={productUrl}
        className={cn(
          "product-card group block bg-white overflow-hidden transition-all duration-200 border border-gray-100",
          careyStyles
        )}
      >
        <div className={cn("relative overflow-hidden", aspectRatioClasses[imageAspect])}>
          {/* Main Image */}
          <Image
            src={image}
            alt={title}
            fill
            className={cn(
              "object-cover transition-all duration-300",
              imageZoom && "group-hover:scale-105",
              secondaryImage && "group-hover:opacity-0"
            )}
            sizes="(max-width: 768px) 50vw, 25vw"
          />
          {/* Secondary Image (hover) */}
          {secondaryImage && (
            <Image
              src={secondaryImage}
              alt={`${title} - alternate`}
              fill
              className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          )}
          {/* Video on hover */}
          {showVideoOnHover && videoUrl && (
            <video
              className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              muted
              loop
              playsInline
              onMouseEnter={(e) => (e.target as HTMLVideoElement).play()}
              onMouseLeave={(e) => (e.target as HTMLVideoElement).pause()}
            >
              <source src={videoUrl} type="video/mp4" />
            </video>
          )}
          {/* Badges */}
          {badges.length > 0 && (
            <div className="absolute top-3 left-3 flex flex-col gap-1">
              {badges.slice(0, 2).map((badge, i) => (
                <span
                  key={i}
                  className={cn(
                    "px-2 py-1 text-xs font-bold rounded-lg",
                    badge.type === "discount" || badge.type === "flash"
                      ? "bg-[#d4f769] text-[#1a1a1a]"
                      : "bg-[#0097aa] text-white"
                  )}
                >
                  {badge.text}
                </span>
              ))}
            </div>
          )}
          {/* Wishlist */}
          {showWishlist && (
            <button
              className="absolute top-3 right-3 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md hover:scale-110 transition-all"
              onClick={(e) => { e.preventDefault(); alert("Agregado a favoritos"); }}
            >
              <span className="text-gray-500 hover:text-[#d63384] text-lg">♡</span>
            </button>
          )}
          {/* Quick View Button */}
          {enableQuickView && (
            <button
              className="absolute bottom-3 left-1/2 -translate-x-1/2 px-4 py-2 bg-white/95 text-sm font-medium text-[#0097aa] rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
              onClick={(e) => { e.preventDefault(); alert("Quick view"); }}
            >
              Vista rápida
            </button>
          )}
        </div>
        <div className="p-4 space-y-2">
          {/* Tags */}
          {showTags && tags.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {tags.slice(0, 3).map((tag, i) => (
                <span key={i} className="text-xs text-[#666666] bg-gray-100 px-2 py-0.5 rounded">
                  {tag}
                </span>
              ))}
            </div>
          )}

          <h3 className="font-medium text-[#1a1a1a] line-clamp-2">{title}</h3>

          {showRating && rating > 0 && (
            <Rating rating={rating} reviewCount={reviewCount} size="sm" />
          )}

          {description && (
            <p className="text-sm text-[#666666] line-clamp-2">{description}</p>
          )}

          {/* Price Section */}
          <div className="space-y-1">
            <div className="flex items-baseline gap-2">
              <span className={cn(
                "text-xl font-semibold",
                hasDiscount ? "text-[#d63384]" : "text-[#1a1a1a]"
              )}>
                {formatPrice(price, currency)}
              </span>
              {hasDiscount && (
                <>
                  <span className="text-sm text-[#666666] line-through">
                    {formatPrice(comparePrice, currency)}
                  </span>
                  <span className="text-xs font-bold bg-[#d4f769] text-[#1a1a1a] px-1.5 py-0.5 rounded">
                    -{discountPercent}%
                  </span>
                </>
              )}
            </div>

            {/* Installments */}
            {showInstallments && installments && (
              <p className="text-sm text-[#666666]">
                <span className={installments.interestFree ? "text-[#0097aa] font-medium" : ""}>
                  {installments.count}x {formatPrice(installments.amount, currency)}
                </span>
                {installments.interestFree && " sin interés"}
              </p>
            )}

            {/* Free Shipping */}
            {showFreeShipping && price >= freeShippingThreshold && (
              <p className="text-xs text-[#0097aa] font-medium flex items-center gap-1">
                <span>🚚</span> Envío gratis
              </p>
            )}
          </div>

          {showStock && (
            <StockIndicator
              level={stockLevel}
              quantity={stockCount}
              variant="standard"
              showProgressBar={stockLevel !== "in_stock"}
            />
          )}
        </div>
      </a>
    );
  }

  // AGGRESSIVE VARIANT (Temu/Shein style)
  return (
    <a
      href={productUrl}
      className={cn(
        "product-card group block bg-white overflow-hidden transition-all duration-300 border border-gray-100",
        cardStyleClasses
      )}
    >
      <div className={cn("relative overflow-hidden", aspectRatioClasses[imageAspect])}>
        <Image
          src={image}
          alt={title}
          fill
          className={cn(
            "object-cover transition-transform duration-500",
            imageZoom && "group-hover:scale-110"
          )}
          sizes="(max-width: 768px) 50vw, 25vw"
        />

        {/* Multiple badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {hasDiscount && (
            <Badge
              text={`-${discountPercent}%`}
              type="discount"
              position="inline"
              size="md"
              animation="pulse"
            />
          )}
          {badges.map((badge, i) => (
            <Badge
              key={i}
              text={badge.text}
              type={badge.type}
              position="inline"
              size="sm"
              animation={badge.type === "flash" ? "pulse" : "none"}
            />
          ))}
        </div>

        {showWishlist && (
          <button
            className="absolute top-2 right-2 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform"
            onClick={(e) => { e.preventDefault(); alert("Agregado a favoritos"); }}
          >
            <span className="text-lg text-gray-600 hover:text-red-500">♡</span>
          </button>
        )}

        {/* Urgency overlay */}
        {showStock && stockLevel === "very_low" && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-red-600/90 to-transparent py-2 px-3">
            <p className="text-white text-xs font-bold animate-pulse">
              🔥 ¡Solo quedan {stockCount || 2}!
            </p>
          </div>
        )}
      </div>

      <div className="p-3 space-y-2">
        <h3 className="font-medium text-gray-900 line-clamp-2 text-sm">{title}</h3>

        {showRating && rating > 0 && (
          <Rating rating={rating} reviewCount={reviewCount} size="sm" variant="compact" />
        )}

        {/* Price section - aggressive style */}
        <div className="space-y-1">
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-bold text-red-600">
              {formatPrice(price, currency)}
            </span>
            {hasDiscount && (
              <span className="text-xs text-gray-400 line-through">
                {formatPrice(comparePrice, currency)}
              </span>
            )}
          </div>

          {hasDiscount && (
            <p className="text-xs text-green-600 font-medium">
              Ahorrás {formatPrice(comparePrice - price, currency)}
            </p>
          )}
        </div>

        {/* Timer */}
        {showTimer && (
          <CountdownTimer
            endDate={timerEndDate}
            variant="aggressive"
            size="sm"
            showDays={false}
          />
        )}

        {/* Stock indicator */}
        {showStock && stockLevel !== "very_low" && (
          <StockIndicator
            level={stockLevel}
            quantity={stockCount}
            variant="urgent"
            animation="pulse"
            showProgressBar
          />
        )}

        {/* Social proof */}
        {reviewCount > 100 && (
          <p className="text-xs text-gray-500">
            👥 {reviewCount.toLocaleString()} personas lo compraron
          </p>
        )}
      </div>
    </a>
  );
}
