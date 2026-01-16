"use client";

import { Render, type Data } from "@puckeditor/core";
import { puckConfig } from "@/config/puck.config";
import { useState, useEffect } from "react";
import Link from "next/link";
import { loadTemplate } from "@/lib/storage";
import { DEFAULT_CATALOG_TEMPLATE } from "@/lib/demo-data";

export default function CatalogoPage() {
  const [data, setData] = useState<Data | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const saved = loadTemplate("catalogo");
    setData(saved || DEFAULT_CATALOG_TEMPLATE);
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
      {/* Header con navegacion */}
      <div className="bg-black text-white py-2 px-4 text-sm flex justify-between items-center">
        <Link href="/" className="hover:underline">
          ← Volver al inicio
        </Link>
        <Link href="/editor/catalogo" className="hover:underline">
          ✏️ Editar Catalogo
        </Link>
      </div>

      {/* Contenido renderizado */}
      {data && <Render config={puckConfig} data={data} />}
    </div>
  );
}
