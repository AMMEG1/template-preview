/**
 * Template System - Index
 *
 * Centraliza todos los templates de landing page para los diferentes presets.
 * Cada template tiene una estructura de página RADICALMENTE diferente.
 */

import type { Data } from "@puckeditor/core";
import type { ThemePreset } from "@/components/puck/ThemeContext";
// Landing templates
import { eleganteTemplate } from "./elegante";
import { urbanoTemplate } from "./urbano";
import { promocionalTemplate } from "./promocional";
import { minimalistaTemplate } from "./minimalista";
import { modernoTemplate } from "./moderno";
// Catalog templates
import { eleganteCatalogTemplate } from "./elegante-catalog";
import { urbanoCatalogTemplate } from "./urbano-catalog";
import { promocionalCatalogTemplate } from "./promocional-catalog";
import { minimalistaCatalogTemplate } from "./minimalista-catalog";
import { modernoCatalogTemplate } from "./moderno-catalog";
// Product templates
import { eleganteProductTemplate } from "./elegante-product";
import { urbanoProductTemplate } from "./urbano-product";
import { promocionalProductTemplate } from "./promocional-product";
import { minimalistaProductTemplate } from "./minimalista-product";
import { modernoProductTemplate } from "./moderno-product";
// Defaults
import { DEFAULT_LANDING_TEMPLATE, DEFAULT_CATALOG_TEMPLATE, DEFAULT_PRODUCT_TEMPLATE } from "../demo-data";

// Tipo para templates
export interface TemplateSet {
  landing: Data;
  catalog: Data;
  product: Data;
}

// Información de template para UI
export interface TemplateInfo {
  id: ThemePreset;
  name: string;
  description: string;
  vibe: string;
  previewColor: string;
}

// Info de templates para el selector
export const TEMPLATE_INFO: TemplateInfo[] = [
  {
    id: "elegante",
    name: "Elegante",
    description: "Lifestyle, femenino, orgánico",
    vibe: "Joyería, moda femenina, productos premium",
    previewColor: "#7CB69D",
  },
  {
    id: "urbano",
    name: "Urbano",
    description: "Oscuro, edgy, bold",
    vibe: "Streetwear, ropa urbana, Gen-Z",
    previewColor: "#0A0A0A",
  },
  {
    id: "promocional",
    name: "Promocional",
    description: "Colorido, urgente, ofertas",
    vibe: "Marketplace, ofertas flash, descuentos",
    previewColor: "#FF4D00",
  },
  {
    id: "minimalista",
    name: "Minimalista",
    description: "Editorial, silencioso, premium",
    vibe: "Moda de lujo, arte, diseño",
    previewColor: "#000000",
  },
  {
    id: "moderno",
    name: "Moderno",
    description: "Tecnológico, confiable, cyan",
    vibe: "Electrónica, tech, gadgets",
    previewColor: "#0097AA",
  },
];

// Registry de templates por preset - cada preset tiene templates MORFOLÓGICAMENTE diferentes
const templateRegistry: Partial<Record<ThemePreset, TemplateSet>> = {
  elegante: {
    landing: eleganteTemplate,
    catalog: eleganteCatalogTemplate,
    product: eleganteProductTemplate,
  },
  urbano: {
    landing: urbanoTemplate,
    catalog: urbanoCatalogTemplate,
    product: urbanoProductTemplate,
  },
  promocional: {
    landing: promocionalTemplate,
    catalog: promocionalCatalogTemplate,
    product: promocionalProductTemplate,
  },
  minimalista: {
    landing: minimalistaTemplate,
    catalog: minimalistaCatalogTemplate,
    product: minimalistaProductTemplate,
  },
  moderno: {
    landing: modernoTemplate,
    catalog: modernoCatalogTemplate,
    product: modernoProductTemplate,
  },
};

// Default template set (Tiendanube)
const defaultTemplateSet: TemplateSet = {
  landing: DEFAULT_LANDING_TEMPLATE,
  catalog: DEFAULT_CATALOG_TEMPLATE,
  product: DEFAULT_PRODUCT_TEMPLATE,
};

/**
 * Obtiene el set de templates para un preset
 */
export function getTemplateSet(preset: ThemePreset): TemplateSet {
  return templateRegistry[preset] || defaultTemplateSet;
}

/**
 * Obtiene un template específico para un preset y tipo de página
 */
export function getTemplate(preset: ThemePreset, pageType: "landing" | "catalog" | "product"): Data {
  const templateSet = getTemplateSet(preset);
  return templateSet[pageType];
}

/**
 * Aplica el preset a la raíz del template
 */
export function applyPresetToTemplate(template: Data, preset: ThemePreset): Data {
  return {
    ...template,
    root: {
      ...template.root,
      props: {
        ...template.root?.props,
        themePreset: preset,
      } as Record<string, unknown>,
    },
  };
}
