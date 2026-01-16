"use client";

import { Render, type Data } from "@puckeditor/core";
import { puckConfig } from "@/config/puck.config";
import { useState, useEffect } from "react";
import Link from "next/link";
import { loadTemplate } from "@/lib/storage";
import { DEFAULT_LANDING_TEMPLATE } from "@/lib/demo-data";

export default function LandingPage() {
  const [data, setData] = useState<Data | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentPreset, setCurrentPreset] = useState<string | null>(null);

  useEffect(() => {
    const saved = loadTemplate("landing");
    const template = saved || DEFAULT_LANDING_TEMPLATE;
    setData(template);

    // Obtener el preset actual del template
    const preset = (template.root?.props as Record<string, unknown>)?.themePreset as string;
    setCurrentPreset(preset || "tiendanube");

    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Banner de edicion */}
      <div className="bg-black text-white py-2 px-4 text-sm flex items-center justify-center gap-4">
        <Link href="/editor/landing" className="hover:underline">
          ✏️ Editar Landing
        </Link>
        <span className="text-gray-400">|</span>
        <Link href="/editor/templates" className="hover:underline">
          🎨 Cambiar Estilo
          {currentPreset && (
            <span className="ml-2 px-2 py-0.5 bg-white/20 rounded text-xs">
              {currentPreset}
            </span>
          )}
        </Link>
      </div>

      {/* Contenido renderizado */}
      {data && <Render config={puckConfig} data={data} />}
    </div>
  );
}
