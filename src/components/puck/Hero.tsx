"use client";

import { cn } from "@/lib/utils/cn";
import { Badge } from "./Badge";
import { CountdownTimer } from "./CountdownTimer";
import { useThemeStrategy } from "@/hooks/useThemeStrategy";
import { TRUST_BADGE_ICONS } from "./constants/icons";
import type { TrustBadge } from "./types";

interface Props {
  // Variante
  variant?: "simple" | "dual-cta" | "with-badge" | "with-timer" | "full" | "video";

  // Contenido
  title?: string;
  subtitle?: string;
  backgroundImage?: string;

  // Video de fondo (variant: video)
  backgroundVideo?: string;
  videoAutoplay?: boolean;
  videoLoop?: boolean;
  videoMuted?: boolean;

  // Botón principal
  ctaText?: string;
  ctaLink?: string;

  // Botón secundario (dual-cta, full)
  secondaryCtaText?: string;
  secondaryCtaLink?: string;

  // Badge (with-badge, full)
  badgeText?: string;
  badgeType?: "discount" | "new" | "hot" | "limited" | "flash" | "bestseller" | "custom";
  badgeAnimation?: "none" | "pulse" | "bounce" | "shake";

  // Timer (with-timer, full)
  timerEndDate?: string;
  timerVariant?: "minimal" | "standard" | "aggressive";

  // Estilos
  height?: "small" | "medium" | "large" | "full";
  textAlign?: "left" | "center" | "right";
  showOverlay?: boolean;
  overlayGradient?: "default" | "dark" | "light" | "brand" | "none";

  // Animaciones
  textAnimation?: "none" | "fade-in" | "slide-up" | "slide-down";

  // Navegación
  showBreadcrumbs?: boolean;
  breadcrumbItems?: { label: string; link: string }[];

  // Trust badges
  showTrustBadges?: boolean;
  trustBadges?: TrustBadge[];
}

const heightClasses = {
  small: "h-[200px] md:h-[250px]",
  medium: "h-[300px] md:h-[400px]",
  large: "h-[400px] md:h-[500px] lg:h-[600px]",
  full: "h-screen",
};

const textAlignClasses = {
  left: "text-left items-start",
  center: "text-center items-center",
  right: "text-right items-end",
};

const textAlignContent = {
  left: "items-start",
  center: "items-center",
  right: "items-end",
};

// Custom overlay gradient styles
const overlayGradientStyles = {
  default: "", // Use preset default
  dark: "bg-black/60",
  light: "bg-black/20",
  brand: "bg-gradient-to-b from-transparent to-[var(--theme-primary)]/40",
  none: "",
};

// Text animation classes
const textAnimationClasses = {
  none: "",
  "fade-in": "animate-[fadeIn_0.8s_ease-out_forwards]",
  "slide-up": "animate-[slideUp_0.6s_ease-out_forwards]",
  "slide-down": "animate-[slideDown_0.6s_ease-out_forwards]",
};

export function Hero({
  variant = "simple",
  title = "Bienvenido",
  subtitle = "Descubre los mejores productos",
  backgroundImage = "/images/heroes/hero-1.jpg",
  backgroundVideo,
  videoAutoplay = true,
  videoLoop = true,
  videoMuted = true,
  ctaText = "Ver productos",
  ctaLink = "/catalogo",
  secondaryCtaText = "Ofertas",
  secondaryCtaLink = "/catalogo",
  badgeText = "OFERTA ESPECIAL",
  badgeType = "flash",
  badgeAnimation = "pulse",
  timerEndDate = "",
  timerVariant = "standard",
  height = "large",
  textAlign = "center",
  showOverlay = true,
  overlayGradient = "default",
  textAnimation = "none",
  showBreadcrumbs = false,
  breadcrumbItems = [],
  showTrustBadges = false,
  trustBadges = [],
}: Props) {
  // ✅ Strategy Pattern: usar estrategia en lugar de presetButtonStyles
  const strategy = useThemeStrategy();
  const themePreset = strategy.name;
  const heroStyles = strategy.getHeroStyles();

  const showSecondaryButton = variant === "dual-cta" || variant === "full";
  const showBadge = variant === "with-badge" || variant === "full";
  const showTimer = (variant === "with-timer" || variant === "full") && timerEndDate;
  const isVideoVariant = variant === "video" && backgroundVideo;

  const overlayStyle = overlayGradient === "default"
    ? heroStyles.overlay
    : overlayGradientStyles[overlayGradient];
  const animationStyle = textAnimationClasses[textAnimation];

  return (
    <div
      className={cn(
        "relative w-full flex items-center justify-center overflow-hidden",
        heightClasses[height]
      )}
      style={!isVideoVariant ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      } : undefined}
    >
      {/* Video Background */}
      {isVideoVariant && (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay={videoAutoplay}
          loop={videoLoop}
          muted={videoMuted}
          playsInline
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      )}

      {/* Overlay */}
      {showOverlay && overlayGradient !== "none" && (
        <div className={cn("absolute inset-0", overlayStyle)} />
      )}

      {/* Breadcrumbs */}
      {showBreadcrumbs && breadcrumbItems && breadcrumbItems.length > 0 && (
        <nav className="absolute top-4 left-4 z-20">
          <ol className="flex items-center gap-2 text-sm text-white/80">
            <li>
              <a href="/" className="hover:text-white transition-colors">Inicio</a>
            </li>
            {breadcrumbItems.map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <span>/</span>
                <a href={item.link} className="hover:text-white transition-colors">
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      )}

      {/* Content */}
      <div
        className={cn(
          "relative z-10 text-white px-4 w-full max-w-4xl flex flex-col",
          textAlignClasses[textAlign],
          textAlignContent[textAlign],
          animationStyle
        )}
      >
        {/* Badge */}
        {showBadge && badgeText && (
          <div className="mb-4">
            <Badge
              text={badgeText}
              type={badgeType}
              size="lg"
              animation={badgeAnimation}
              position="inline"
            />
          </div>
        )}

        {/* Title */}
        <h1 className={cn(
          "text-3xl md:text-4xl lg:text-5xl mb-4",
          heroStyles.title
        )}>
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className={cn(
            "text-lg md:text-xl mb-6 max-w-2xl opacity-90",
            themePreset === "zara" && "font-light tracking-wide"
          )}>
            {subtitle}
          </p>
        )}

        {/* Timer */}
        {showTimer && (
          <div className="mb-6">
            <CountdownTimer
              endDate={timerEndDate}
              variant={timerVariant}
              size="lg"
              showDays={true}
              showSeconds={true}
            />
          </div>
        )}

        {/* Buttons */}
        <div className={cn(
          "flex gap-4 flex-wrap",
          textAlign === "center" ? "justify-center" : "",
          textAlign === "left" ? "justify-start" : "",
          textAlign === "right" ? "justify-end" : ""
        )}>
          {/* Primary Button */}
          {ctaText && ctaLink && (
            <a
              href={ctaLink}
              className={cn("hero-cta inline-block px-8 py-3", heroStyles.button.primary)}
            >
              {ctaText}
            </a>
          )}

          {/* Secondary Button */}
          {showSecondaryButton && secondaryCtaText && secondaryCtaLink && (
            <a
              href={secondaryCtaLink}
              className={cn("inline-block px-8 py-3", heroStyles.button.secondary)}
            >
              {secondaryCtaText}
            </a>
          )}
        </div>

        {/* Trust Badges */}
        {showTrustBadges && trustBadges && trustBadges.length > 0 && (
          <div className={cn(
            "mt-8 flex gap-6 flex-wrap",
            textAlign === "center" ? "justify-center" : "",
            textAlign === "left" ? "justify-start" : "",
            textAlign === "right" ? "justify-end" : ""
          )}>
            {trustBadges.map((badge, index) => (
              <div
                key={index}
                className={cn(
                  "flex items-center gap-2 text-sm text-white/90",
                  themePreset === "carey" && "bg-white/10 px-3 py-1.5 rounded-lg"
                )}
              >
                <span className="text-lg">{TRUST_BADGE_ICONS[badge.icon]}</span>
                <span>{badge.text}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
