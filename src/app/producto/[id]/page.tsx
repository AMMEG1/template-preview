"use client";

import { use, useState, useEffect } from "react";
import { Render, type Data } from "@puckeditor/core";
import { puckConfig } from "@/config/puck.config";
import Link from "next/link";
import { loadTemplate } from "@/lib/storage";
import {
  DEFAULT_PRODUCT_TEMPLATE,
  getProductById,
  injectProductData,
} from "@/lib/demo-data";

export default function ProductoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const productId = resolvedParams.id;
  const [data, setData] = useState<Data | null>(null);
  const [loading, setLoading] = useState(true);

  const product = getProductById(productId);

  useEffect(() => {
    const savedTemplate = loadTemplate("producto");
    const template = savedTemplate || DEFAULT_PRODUCT_TEMPLATE;
    const injected = injectProductData(template, productId);
    setData(injected);
    setLoading(false);
  }, [productId]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Producto no encontrado</h1>
        <p className="text-gray-600 mb-6">
          El producto que buscas no existe o fue eliminado.
        </p>
        <Link
          href="/catalogo"
          className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800"
        >
          Ver catalogo
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header con navegacion */}
      <div className="bg-black text-white py-2 px-4 text-sm flex justify-between items-center">
        <Link href="/catalogo" className="hover:underline">
          ← Volver al catalogo
        </Link>
        <Link href="/editor/producto" className="hover:underline">
          ✏️ Editar template de producto
        </Link>
      </div>

      {/* Contenido renderizado */}
      {data && <Render config={puckConfig} data={data} />}
    </div>
  );
}
