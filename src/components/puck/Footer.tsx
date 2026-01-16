"use client";

import { useState } from "react";
import { cn } from "@/lib/utils/cn";
import { useThemeStrategy } from "@/hooks/useThemeStrategy";
import { TRUST_BADGE_ICONS, PAYMENT_METHOD_ICONS } from "./constants/icons";
import type { FooterColumn, TrustBadge } from "./types";

interface Props {
  text?: string;
  showSocial?: boolean;
  // Variant
  variant?: "simple" | "with-columns" | "full";
  // Columns
  columns?: FooterColumn[];
  // Newsletter
  showNewsletter?: boolean;
  newsletterTitle?: string;
  newsletterPlaceholder?: string;
  // Contact
  showContact?: boolean;
  address?: string;
  phone?: string;
  email?: string;
  // Payment methods
  showPaymentMethods?: boolean;
  // Trust badges
  showTrustBadges?: boolean;
  trustBadges?: TrustBadge[];
  // Logo
  showLogo?: boolean;
  logoText?: string;
}

export function Footer({
  text = "© 2024 Mi Tienda",
  showSocial = true,
  variant = "simple",
  columns = [],
  showNewsletter = false,
  newsletterTitle = "Suscribite a nuestro newsletter",
  newsletterPlaceholder = "Tu email",
  showContact = false,
  address,
  phone,
  email,
  showPaymentMethods = false,
  showTrustBadges = false,
  trustBadges = [],
  showLogo = false,
  logoText = "Mi Tienda",
}: Props) {
  // ✅ Strategy Pattern: usar estrategia en lugar de presetFooterStyles
  const strategy = useThemeStrategy();
  const themePreset = strategy.name;
  const styles = strategy.getFooterStyles();
  const [newsletterEmail, setNewsletterEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Suscrito: ${newsletterEmail}`);
    setNewsletterEmail("");
  };

  // Simple variant
  if (variant === "simple") {
    return (
      <footer className={cn("py-8 md:py-12", styles.bg)}>
        <div className="max-w-6xl mx-auto px-4">
          <div className={cn(
            "flex flex-col md:flex-row items-center justify-between gap-4",
            themePreset === "zara" && "flex-col gap-6"
          )}>
            <p className={styles.text}>{text}</p>
            {showSocial && <SocialLinks styles={styles} themePreset={themePreset} />}
          </div>
        </div>
      </footer>
    );
  }

  // With columns or full variant
  return (
    <footer className={cn("py-12 md:py-16", styles.bg)}>
      <div className="max-w-6xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className={cn(
          "grid gap-8 mb-8",
          columns.length > 0 ? `md:grid-cols-${Math.min(columns.length + 1, 5)}` : "md:grid-cols-3"
        )}>
          {/* Logo/Brand Column */}
          <div className="space-y-4">
            {showLogo && (
              <h3 className={cn(
                "text-lg font-bold",
                themePreset === "carey" ? "text-[#1a1a1a]" : themePreset === "zara" ? "text-black uppercase tracking-wide font-light" : "text-white"
              )}>
                {logoText}
              </h3>
            )}

            {showContact && (
              <div className={cn("space-y-2", styles.text)}>
                {address && <p>{address}</p>}
                {phone && <p>Tel: {phone}</p>}
                {email && <p>{email}</p>}
              </div>
            )}

            {showSocial && <SocialLinks styles={styles} themePreset={themePreset} />}
          </div>

          {/* Link Columns */}
          {columns.map((column, idx) => (
            <div key={idx} className="space-y-4">
              <h4 className={cn(
                "font-semibold",
                themePreset === "carey" ? "text-[#1a1a1a]" : themePreset === "zara" ? "text-black uppercase text-xs tracking-wide" : "text-white"
              )}>
                {column.title}
              </h4>
              <ul className="space-y-2">
                {column.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a href={link.url} className={cn("transition-colors", styles.link)}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter Column */}
          {showNewsletter && (
            <div className="space-y-4">
              <h4 className={cn(
                "font-semibold",
                themePreset === "carey" ? "text-[#1a1a1a]" : themePreset === "zara" ? "text-black uppercase text-xs tracking-wide" : "text-white"
              )}>
                {newsletterTitle}
              </h4>
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder={newsletterPlaceholder}
                  className={cn(
                    "flex-1 px-3 py-2 rounded-lg text-sm",
                    themePreset === "carey"
                      ? "border border-gray-200 focus:border-[#0097aa] focus:outline-none"
                      : "border border-gray-300 focus:outline-none focus:ring-2 focus:ring-white/20"
                  )}
                  required
                />
                <button
                  type="submit"
                  className={cn(
                    "px-4 py-2 rounded-lg font-medium transition-colors",
                    themePreset === "carey"
                      ? "bg-[#0097aa] text-white hover:bg-[#007a8a]"
                      : themePreset === "temu"
                        ? "bg-white text-orange-600 hover:bg-orange-50"
                        : "bg-white text-gray-900 hover:bg-gray-100"
                  )}
                >
                  OK
                </button>
              </form>
            </div>
          )}
        </div>

        {/* Trust Badges */}
        {showTrustBadges && trustBadges.length > 0 && (
          <div className={cn(
            "flex flex-wrap justify-center gap-6 py-6 border-t",
            themePreset === "carey" ? "border-gray-200" : "border-white/10"
          )}>
            {trustBadges.map((badge, idx) => (
              <div key={idx} className={cn("flex items-center gap-2", styles.text)}>
                <span>{TRUST_BADGE_ICONS[badge.icon]}</span>
                <span>{badge.text}</span>
              </div>
            ))}
          </div>
        )}

        {/* Payment Methods */}
        {showPaymentMethods && (
          <div className={cn(
            "flex flex-wrap justify-center gap-4 py-6 border-t",
            themePreset === "carey" ? "border-gray-200" : "border-white/10"
          )}>
            {PAYMENT_METHOD_ICONS.map((method, idx) => (
              <span key={idx} className={cn(styles.text, "text-xs")}>
                {method}
              </span>
            ))}
          </div>
        )}

        {/* Bottom Bar */}
        <div className={cn(
          "pt-6 border-t flex flex-col md:flex-row items-center justify-between gap-4",
          themePreset === "carey" ? "border-gray-200" : "border-white/10"
        )}>
          <p className={styles.text}>{text}</p>
          {variant === "full" && showSocial && <SocialLinks styles={styles} themePreset={themePreset} />}
        </div>
      </div>
    </footer>
  );
}

// Social Links Component
function SocialLinks({ styles, themePreset }: { styles: { link: string }; themePreset: string }) {
  return (
    <div className={cn("flex gap-4", themePreset === "zara" && "gap-6")}>
      <a href="#" className={cn("transition-colors", styles.link)} aria-label="Twitter">
        <svg className={cn("w-6 h-6", themePreset === "zara" && "w-5 h-5")} fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
        </svg>
      </a>
      <a href="#" className={cn("transition-colors", styles.link)} aria-label="Instagram">
        <svg className={cn("w-6 h-6", themePreset === "zara" && "w-5 h-5")} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      </a>
    </div>
  );
}
