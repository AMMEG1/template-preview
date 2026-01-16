"use client";

import { createContext, useContext } from "react";

export interface ProductGridContextType {
  preset: "zara" | "temu" | "tiendanube" | "carey" | "custom";
  suggestedCardVariant: "minimal" | "standard" | "detailed" | "aggressive" | "carey";
  cardClass: string;
}

export const ProductGridContext = createContext<ProductGridContextType | null>(null);

export function useProductGridContext() {
  return useContext(ProductGridContext);
}
