"use client";

import { use, useState, useEffect } from "react";
import { Puck, type Data } from "@puckeditor/core";
import "@puckeditor/core/puck.css";
import { puckConfig } from "@/config/puck.config";
import { loadTemplate, saveTemplate, type PageType } from "@/lib/storage";
import { validateTemplate } from "@/lib/validators";
import {
  DEFAULT_LANDING_TEMPLATE,
  DEFAULT_CATALOG_TEMPLATE,
  DEFAULT_PRODUCT_TEMPLATE,
} from "@/lib/demo-data";
import { getTemplateSet, applyPresetToTemplate } from "@/lib/templates";
import type { ThemePreset } from "@/components/puck/ThemeContext";
import Link from "next/link";

const DEFAULT_TEMPLATES: Record<PageType, Data> = {
  landing: DEFAULT_LANDING_TEMPLATE,
  catalogo: DEFAULT_CATALOG_TEMPLATE,
  producto: DEFAULT_PRODUCT_TEMPLATE,
};

const PAGE_LABELS: Record<PageType, string> = {
  landing: "Landing Page",
  catalogo: "Catalogo",
  producto: "Detalle de Producto",
};

const PREVIEW_URLS: Record<PageType, string> = {
  landing: "/",
  catalogo: "/catalogo",
  producto: "/producto/1",
};

export default function DynamicEditorPage({
  params,
}: {
  params: Promise<{ pageType: string }>;
}) {
  const resolvedParams = use(params);
  const pageType = resolvedParams.pageType as PageType;
  const [data, setData] = useState<Data | null>(null);

  // Validar que sea un tipo de pagina valido
  const isValidPageType = ["landing", "catalogo", "producto"].includes(pageType);

  useEffect(() => {
    if (!isValidPageType) return;

    const saved = loadTemplate(pageType);
    setData(saved || DEFAULT_TEMPLATES[pageType]);
  }, [pageType, isValidPageType]);

  // Detectar cambio de preset y cargar estructura nueva automáticamente
  const handleChange = (newData: Data) => {
    const oldPreset = (data?.root?.props as Record<string, unknown>)?.themePreset as ThemePreset | undefined;
    const newPreset = (newData?.root?.props as Record<string, unknown>)?.themePreset as ThemePreset | undefined;

    // Si cambió el preset, cargar estructura nueva automáticamente
    if (oldPreset !== newPreset && newPreset) {
      const templates = getTemplateSet(newPreset);
      const templateMap: Record<PageType, Data> = {
        landing: templates.landing,
        catalogo: templates.catalog,
        producto: templates.product,
      };
      const newTemplate = templateMap[pageType];
      if (newTemplate) {
        const applied = applyPresetToTemplate(newTemplate, newPreset);
        setData(applied);
        saveTemplate(pageType, applied);
        return; // No setear newData, ya cargamos el template nuevo
      }
    }

    setData(newData);
  };

  const handlePublish = (publishData: Data) => {
    const validation = validateTemplate(publishData, pageType);

    if (!validation.valid) {
      alert(`❌ ${validation.error}`);
      return;
    }

    saveTemplate(pageType, publishData);
    alert(`✅ ${PAGE_LABELS[pageType]} guardada correctamente`);
  };

  if (!isValidPageType) {
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Tipo de pagina no valido</h1>
        <Link href="/editor" className="text-blue-600 hover:underline">
          Volver al selector
        </Link>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col">
      {/* Header con navegacion */}
      <div className="bg-gray-900 text-white px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/editor" className="hover:text-gray-300">
            ← Volver
          </Link>
          <span className="text-gray-400">|</span>
          <span className="font-medium">{PAGE_LABELS[pageType]}</span>
        </div>
        <Link
          href={PREVIEW_URLS[pageType]}
          target="_blank"
          className="text-sm bg-white text-black px-3 py-1 rounded hover:bg-gray-200"
        >
          Ver Preview
        </Link>
      </div>

      {/* Puck Editor */}
      <div className="flex-1">
        <Puck
          config={puckConfig}
          data={data}
          onPublish={handlePublish}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
