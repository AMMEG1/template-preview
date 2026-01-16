/**
 * Shared types for Puck components
 * Centralizes common interfaces to avoid duplication
 */

// ============================================
// Payment & Pricing Types
// ============================================

export interface Installment {
  count: number;
  amount: number;
  interestFree?: boolean;
}

export interface PriceRange {
  min: number;
  max: number;
}

// ============================================
// Badge Types
// ============================================

export type BadgeType = "discount" | "new" | "hot" | "limited" | "flash" | "bestseller" | "custom";

export interface BadgeItem {
  text: string;
  type: BadgeType;
  color?: string;
}

// ============================================
// Trust & Social Proof Types
// ============================================

export type TrustBadgeIcon = "shield" | "lock" | "truck" | "refresh" | "check" | "heart" | "star";

export interface TrustBadge {
  icon: TrustBadgeIcon;
  text: string;
}

// ============================================
// Stock & Inventory Types
// ============================================

export type StockLevel = "in_stock" | "low_stock" | "very_low" | "out_of_stock";

// ============================================
// Size Types
// ============================================

export type Size = "xs" | "sm" | "md" | "lg" | "xl";

// ============================================
// Footer Types
// ============================================

export interface FooterLink {
  label: string;
  url: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

// ============================================
// Navigation Types
// ============================================

export interface BreadcrumbItem {
  label: string;
  link: string;
}

// ============================================
// Filter & Sort Types
// ============================================

export interface SortOption {
  label: string;
  value: string;
}

export interface FilterOption {
  label: string;
  value: string;
}
