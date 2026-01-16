import type { Data } from "@puckeditor/core";

export type PageType = "landing" | "catalogo" | "producto";

const STORAGE_PREFIX = "puck-template-";

export function getTemplateKey(pageType: PageType): string {
  return `${STORAGE_PREFIX}${pageType}`;
}

export function loadTemplate(pageType: PageType): Data | null {
  if (typeof window === "undefined") return null;

  const saved = localStorage.getItem(getTemplateKey(pageType));
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch (e) {
      console.error(`Error loading ${pageType} template:`, e);
    }
  }
  return null;
}

export function saveTemplate(pageType: PageType, data: Data): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(getTemplateKey(pageType), JSON.stringify(data));
}

export function clearTemplate(pageType: PageType): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(getTemplateKey(pageType));
}

export function clearAllTemplates(): void {
  if (typeof window === "undefined") return;
  const pageTypes: PageType[] = ["landing", "catalogo", "producto"];
  pageTypes.forEach((type) => clearTemplate(type));
}
