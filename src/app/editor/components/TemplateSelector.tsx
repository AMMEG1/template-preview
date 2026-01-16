"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { TEMPLATE_INFO, getTemplateSet, type TemplateInfo } from "@/lib/templates";
import { saveTemplate, clearAllTemplates } from "@/lib/storage";
import type { ThemePreset } from "@/components/puck/ThemeContext";

interface Props {
  onSelect?: (preset: ThemePreset) => void;
  showBackLink?: boolean;
}

export function TemplateSelector({ onSelect, showBackLink = true }: Props) {
  const [selectedTemplate, setSelectedTemplate] = useState<ThemePreset | null>(null);
  const [currentTemplate, setCurrentTemplate] = useState<string | null>(null);

  useEffect(() => {
    // Cargar template actual de localStorage
    const saved = localStorage.getItem("selected-template-preset");
    if (saved) {
      setCurrentTemplate(saved);
    }
  }, []);

  const handleSelect = (templateId: ThemePreset) => {
    setSelectedTemplate(templateId);

    // Limpiar templates anteriores
    clearAllTemplates();

    // Guardar nuevos templates con las claves correctas
    const templates = getTemplateSet(templateId);
    saveTemplate("landing", templates.landing);
    saveTemplate("catalogo", templates.catalog);
    saveTemplate("producto", templates.product);

    // Guardar preset seleccionado
    localStorage.setItem("selected-template-preset", templateId);

    if (onSelect) {
      onSelect(templateId);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {showBackLink && (
          <Link
            href="/editor"
            className="inline-flex items-center text-gray-600 hover:text-black mb-8"
          >
            ← Volver al editor
          </Link>
        )}

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Elige tu Estilo</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Selecciona el estilo que mejor represente tu marca. Cada template tiene
            una estructura y diseño únicos.
          </p>
        </div>

        {currentTemplate && !selectedTemplate && (
          <div className="mb-8 p-4 bg-blue-50 border border-blue-200 rounded-lg text-center">
            <p className="text-blue-800">
              Template actual: <strong>{TEMPLATE_INFO.find(t => t.id === currentTemplate)?.name || currentTemplate}</strong>
            </p>
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {TEMPLATE_INFO.map((template) => (
            <TemplateCard
              key={template.id}
              template={template}
              isSelected={selectedTemplate === template.id}
              isCurrent={currentTemplate === template.id && !selectedTemplate}
              onSelect={() => handleSelect(template.id)}
            />
          ))}
        </div>

        {selectedTemplate && (
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg p-4">
            <div className="max-w-6xl mx-auto flex items-center justify-between">
              <div>
                <p className="font-semibold">
                  Template seleccionado:{" "}
                  <span className="text-blue-600">
                    {TEMPLATE_INFO.find((t) => t.id === selectedTemplate)?.name}
                  </span>
                </p>
                <p className="text-sm text-gray-500">
                  Se aplicará a las 3 páginas (Landing, Catálogo, Producto)
                </p>
              </div>
              <div className="flex gap-3">
                <Link
                  href="/"
                  className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Ver Preview
                </Link>
                <Link
                  href="/editor/landing"
                  className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Ir al Editor
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

interface TemplateCardProps {
  template: TemplateInfo;
  isSelected: boolean;
  isCurrent?: boolean;
  onSelect: () => void;
}

function TemplateCard({ template, isSelected, isCurrent = false, onSelect }: TemplateCardProps) {
  return (
    <button
      onClick={onSelect}
      className={`
        w-full text-left rounded-2xl overflow-hidden transition-all duration-200
        ${isSelected
          ? "ring-4 ring-blue-500 ring-offset-2 shadow-xl scale-[1.02]"
          : isCurrent
            ? "ring-2 ring-green-500 ring-offset-2 shadow-lg"
            : "shadow-md hover:shadow-lg hover:scale-[1.01]"
        }
      `}
    >
      {/* Preview Color Bar */}
      <div
        className="h-32 flex items-center justify-center"
        style={{ backgroundColor: template.previewColor }}
      >
        <span
          className={`
            text-2xl font-bold tracking-wide
            ${template.id === "urbano" || template.id === "minimalista"
              ? "text-white"
              : template.previewColor === "#0A0A0A"
                ? "text-white"
                : "text-white"
            }
          `}
        >
          {template.name.toUpperCase()}
        </span>
      </div>

      {/* Content */}
      <div className="p-6 bg-white">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold">{template.name}</h3>
          {isSelected ? (
            <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
              Seleccionado
            </span>
          ) : isCurrent ? (
            <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
              Actual
            </span>
          ) : null}
        </div>
        <p className="text-gray-600 mb-2">{template.description}</p>
        <p className="text-sm text-gray-400">{template.vibe}</p>
      </div>
    </button>
  );
}
