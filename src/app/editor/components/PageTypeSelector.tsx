"use client";

import Link from "next/link";

interface PageTypeOption {
  id: string;
  label: string;
  description: string;
  icon: string;
  href: string;
  previewHref: string;
}

const PAGE_TYPES: PageTypeOption[] = [
  {
    id: "landing",
    label: "Landing Page",
    description: "Pagina principal con hero y productos destacados",
    icon: "🏠",
    href: "/editor/landing",
    previewHref: "/",
  },
  {
    id: "catalogo",
    label: "Catalogo",
    description: "Grilla de productos con todos los items",
    icon: "📦",
    href: "/editor/catalogo",
    previewHref: "/catalogo",
  },
  {
    id: "producto",
    label: "Detalle de Producto",
    description: "Template para paginas individuales de producto",
    icon: "🛍️",
    href: "/editor/producto",
    previewHref: "/producto/1",
  },
];

export function PageTypeSelector() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-2">Editor de Tienda</h1>
        <p className="text-gray-600 text-center mb-8">
          Selecciona el tipo de pagina que deseas editar
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {PAGE_TYPES.map((type) => (
            <div
              key={type.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border-2 border-transparent hover:border-black overflow-hidden"
            >
              <Link href={type.href} className="block p-6">
                <div className="text-4xl mb-4">{type.icon}</div>
                <h2 className="text-xl font-semibold mb-2">{type.label}</h2>
                <p className="text-gray-600 text-sm">{type.description}</p>
              </Link>
              <div className="border-t px-6 py-3 bg-gray-50">
                <Link
                  href={type.previewHref}
                  className="text-sm text-gray-500 hover:text-black"
                >
                  Ver preview →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/editor/templates"
              className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-colors"
            >
              🎨 Cambiar Estilo de Tienda
            </Link>
            <Link
              href="/"
              className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Ver tienda en vivo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
