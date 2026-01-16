import type { Data } from "@puckeditor/core";
import type { ValidationResult } from "@/types/puck";
import type { PageType } from "./storage";

// Componentes requeridos por tipo de pagina
const REQUIRED_BY_PAGE_TYPE: Record<PageType, string[]> = {
  landing: ["Hero"], // Landing necesita al menos un hero
  catalogo: ["ProductGrid"], // Catalogo necesita una grilla
  producto: ["ProductImage", "Price", "BuyButton"], // Producto mantiene requerimientos originales
};

const COMPONENT_LABELS: Record<string, string> = {
  Hero: "Hero Banner",
  ProductGrid: "Grilla de Productos",
  ProductImage: "Imagen de producto",
  Price: "Precio",
  BuyButton: "Boton de compra",
};

export function validateTemplate(data: Data, pageType: PageType = "producto"): ValidationResult {
  const componentTypes = new Set<string>();

  // Recolectar de content
  data.content.forEach((c) => componentTypes.add(c.type));

  // Recolectar de zones
  if (data.zones) {
    Object.values(data.zones).forEach((zone) => {
      zone.forEach((c) => componentTypes.add(c.type));
    });
  }

  const required = REQUIRED_BY_PAGE_TYPE[pageType];
  const missing: string[] = [];

  for (const req of required) {
    if (!componentTypes.has(req)) {
      missing.push(COMPONENT_LABELS[req] || req);
    }
  }

  if (missing.length > 0) {
    return {
      valid: false,
      error: `Faltan componentes obligatorios: ${missing.join(", ")}`,
    };
  }

  return { valid: true };
}
