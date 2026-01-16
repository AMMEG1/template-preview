"use client";

import { useState } from "react";
import type { ComponentConfig } from "@puckeditor/core";

export interface ProductTabsProps {
  tabs: { label: string; content: string }[];
  variant?: "default" | "pills" | "underline" | "minimal";
  defaultTab?: number;
}

export function ProductTabs({
  tabs = [],
  variant = "default",
  defaultTab = 0,
}: ProductTabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab);

  if (!tabs || tabs.length === 0) {
    return (
      <div className="p-8 text-center text-gray-400">
        Add tabs to display content
      </div>
    );
  }

  const variantStyles = {
    default: {
      container: "border-b border-gray-200",
      tab: (isActive: boolean) =>
        `px-6 py-3 font-medium transition-colors ${
          isActive
            ? "border-b-2 border-black text-black"
            : "text-gray-500 hover:text-black"
        }`,
      content: "py-6",
    },
    pills: {
      container: "bg-gray-100 p-1 rounded-lg inline-flex gap-1",
      tab: (isActive: boolean) =>
        `px-4 py-2 rounded-md font-medium transition-all ${
          isActive
            ? "bg-white text-black shadow-sm"
            : "text-gray-600 hover:text-black"
        }`,
      content: "py-6",
    },
    underline: {
      container: "border-b border-gray-100",
      tab: (isActive: boolean) =>
        `px-6 py-4 font-medium transition-all relative ${
          isActive
            ? "text-black after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-black"
            : "text-gray-400 hover:text-gray-600"
        }`,
      content: "py-8",
    },
    minimal: {
      container: "flex gap-8",
      tab: (isActive: boolean) =>
        `pb-2 font-light tracking-wide uppercase text-sm transition-opacity ${
          isActive ? "opacity-100" : "opacity-40 hover:opacity-70"
        }`,
      content: "py-8",
    },
  };

  const styles = variantStyles[variant];

  return (
    <div className="w-full">
      <div className={styles.container}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={styles.tab(index === activeTab)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className={styles.content}>
        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: tabs[activeTab]?.content || "" }}
        />
      </div>
    </div>
  );
}

export const ProductTabsConfig: ComponentConfig<ProductTabsProps> = {
  label: "Product Tabs",
  fields: {
    tabs: {
      type: "array",
      label: "Tabs",
      arrayFields: {
        label: { type: "text", label: "Tab Label" },
        content: { type: "textarea", label: "Tab Content (HTML)" },
      },
      defaultItemProps: {
        label: "New Tab",
        content: "<p>Tab content goes here...</p>",
      },
    },
    variant: {
      type: "select",
      label: "Style Variant",
      options: [
        { label: "Default", value: "default" },
        { label: "Pills", value: "pills" },
        { label: "Underline", value: "underline" },
        { label: "Minimal", value: "minimal" },
      ],
    },
    defaultTab: {
      type: "number",
      label: "Default Active Tab (0-indexed)",
    },
  },
  defaultProps: {
    tabs: [
      {
        label: "Description",
        content: "<p>Product description goes here. This is where you can add detailed information about the product, its features, and benefits.</p>",
      },
      {
        label: "Specifications",
        content: "<ul><li>Material: Premium cotton</li><li>Weight: 200g</li><li>Dimensions: 30x40cm</li></ul>",
      },
      {
        label: "Reviews",
        content: "<p>Customer reviews will be displayed here.</p>",
      },
    ],
    variant: "default",
    defaultTab: 0,
  },
  render: (props) => <ProductTabs {...props} />,
};
