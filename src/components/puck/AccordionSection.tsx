"use client";

import { useState } from "react";
import type { ComponentConfig } from "@puckeditor/core";

export interface AccordionSectionProps {
  items: { title: string; content: string }[];
  allowMultiple?: boolean;
  variant?: "default" | "minimal" | "bordered" | "filled";
  iconPosition?: "left" | "right";
  defaultOpen?: number[];
}

export function AccordionSection({
  items = [],
  allowMultiple = false,
  variant = "default",
  iconPosition = "right",
  defaultOpen = [],
}: AccordionSectionProps) {
  const [openItems, setOpenItems] = useState<number[]>(defaultOpen);

  const toggleItem = (index: number) => {
    if (allowMultiple) {
      setOpenItems((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index]
      );
    } else {
      setOpenItems((prev) =>
        prev.includes(index) ? [] : [index]
      );
    }
  };

  if (!items || items.length === 0) {
    return (
      <div className="p-8 text-center text-gray-400">
        Add accordion items
      </div>
    );
  }

  const variantStyles = {
    default: {
      container: "divide-y divide-gray-200",
      item: "",
      header: (isOpen: boolean) =>
        `w-full flex items-center justify-between py-4 text-left font-medium hover:text-gray-600 transition-colors ${
          isOpen ? "text-black" : "text-gray-800"
        }`,
      content: "pb-4 text-gray-600",
    },
    minimal: {
      container: "space-y-2",
      item: "",
      header: (isOpen: boolean) =>
        `w-full flex items-center justify-between py-3 text-left font-light tracking-wide uppercase text-sm transition-opacity ${
          isOpen ? "opacity-100" : "opacity-60"
        }`,
      content: "pb-4 text-gray-500 text-sm",
    },
    bordered: {
      container: "space-y-3",
      item: "border border-gray-200 rounded-lg overflow-hidden",
      header: (isOpen: boolean) =>
        `w-full flex items-center justify-between p-4 text-left font-medium transition-colors ${
          isOpen ? "bg-gray-50" : "bg-white hover:bg-gray-50"
        }`,
      content: "px-4 pb-4 text-gray-600",
    },
    filled: {
      container: "space-y-2",
      item: "rounded-lg overflow-hidden",
      header: (isOpen: boolean) =>
        `w-full flex items-center justify-between p-4 text-left font-medium transition-colors ${
          isOpen ? "bg-black text-white" : "bg-gray-100 hover:bg-gray-200"
        }`,
      content: "p-4 bg-gray-50 text-gray-600",
    },
  };

  const styles = variantStyles[variant];

  const ChevronIcon = ({ isOpen }: { isOpen: boolean }) => (
    <svg
      className={`w-5 h-5 transition-transform duration-200 ${
        isOpen ? "rotate-180" : ""
      }`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 9l-7 7-7-7"
      />
    </svg>
  );

  return (
    <div className={styles.container}>
      {items.map((item, index) => {
        const isOpen = openItems.includes(index);
        return (
          <div key={index} className={styles.item}>
            <button
              onClick={() => toggleItem(index)}
              className={styles.header(isOpen)}
            >
              {iconPosition === "left" && <ChevronIcon isOpen={isOpen} />}
              <span className={iconPosition === "left" ? "ml-3" : ""}>{item.title}</span>
              {iconPosition === "right" && <ChevronIcon isOpen={isOpen} />}
            </button>
            <div
              className={`overflow-hidden transition-all duration-200 ${
                isOpen ? "max-h-96" : "max-h-0"
              }`}
            >
              <div
                className={styles.content}
                dangerouslySetInnerHTML={{ __html: item.content }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export const AccordionSectionConfig: ComponentConfig<AccordionSectionProps> = {
  label: "Accordion Section",
  fields: {
    items: {
      type: "array",
      label: "Accordion Items",
      arrayFields: {
        title: { type: "text", label: "Title" },
        content: { type: "textarea", label: "Content (HTML)" },
      },
      defaultItemProps: {
        title: "New Section",
        content: "<p>Content goes here...</p>",
      },
    },
    allowMultiple: {
      type: "radio",
      label: "Allow Multiple Open",
      options: [
        { label: "Yes", value: true },
        { label: "No", value: false },
      ],
    },
    variant: {
      type: "select",
      label: "Style Variant",
      options: [
        { label: "Default", value: "default" },
        { label: "Minimal", value: "minimal" },
        { label: "Bordered", value: "bordered" },
        { label: "Filled", value: "filled" },
      ],
    },
    iconPosition: {
      type: "radio",
      label: "Icon Position",
      options: [
        { label: "Left", value: "left" },
        { label: "Right", value: "right" },
      ],
    },
  },
  defaultProps: {
    items: [
      {
        title: "Materials & Care",
        content: "<p>Made from premium materials. Hand wash recommended.</p>",
      },
      {
        title: "Shipping & Returns",
        content: "<p>Free shipping on orders over $50. 30-day return policy.</p>",
      },
      {
        title: "Size Guide",
        content: "<p>Please refer to our size chart for accurate measurements.</p>",
      },
    ],
    allowMultiple: false,
    variant: "default",
    iconPosition: "right",
    defaultOpen: [],
  },
  render: (props) => <AccordionSection {...props} />,
};
