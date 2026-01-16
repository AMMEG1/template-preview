"use client";

import type { ComponentConfig } from "@puckeditor/core";

export interface TrustBadgesGridProps {
  badges: { icon: string; title: string; description?: string }[];
  columns?: 2 | 3 | 4;
  variant?: "default" | "compact" | "card" | "icon-only";
  iconSize?: "sm" | "md" | "lg";
  alignment?: "left" | "center";
}

const defaultIcons = {
  shipping: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" /></svg>`,
  guarantee: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>`,
  payment: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" /></svg>`,
  returns: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" /></svg>`,
};

export function TrustBadgesGrid({
  badges = [],
  columns = 4,
  variant = "default",
  iconSize = "md",
  alignment = "center",
}: TrustBadgesGridProps) {
  const columnClasses = {
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-2 md:grid-cols-4",
  };

  const iconSizeClasses = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  };

  const alignmentClasses = {
    left: "items-start text-left",
    center: "items-center text-center",
  };

  if (!badges || badges.length === 0) {
    return (
      <div className="p-8 text-center text-gray-400">
        Add trust badges
      </div>
    );
  }

  const renderIcon = (iconSvg: string) => {
    return (
      <div
        className={iconSizeClasses[iconSize]}
        dangerouslySetInnerHTML={{ __html: iconSvg }}
      />
    );
  };

  if (variant === "icon-only") {
    return (
      <div className={`flex flex-wrap justify-center gap-6`}>
        {badges.map((badge, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-2"
            title={badge.title}
          >
            {renderIcon(badge.icon)}
            <span className="text-xs text-gray-500">{badge.title}</span>
          </div>
        ))}
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
        {badges.map((badge, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="text-gray-600">{renderIcon(badge.icon)}</div>
            <span className="text-sm font-medium">{badge.title}</span>
          </div>
        ))}
      </div>
    );
  }

  if (variant === "card") {
    return (
      <div className={`grid ${columnClasses[columns]} gap-4`}>
        {badges.map((badge, index) => (
          <div
            key={index}
            className={`flex flex-col ${alignmentClasses[alignment]} gap-3 p-6 bg-gray-50 rounded-xl`}
          >
            <div className="text-gray-700">{renderIcon(badge.icon)}</div>
            <div>
              <h4 className="font-semibold text-sm">{badge.title}</h4>
              {badge.description && (
                <p className="text-xs text-gray-500 mt-1">{badge.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Default variant
  return (
    <div className={`grid ${columnClasses[columns]} gap-6`}>
      {badges.map((badge, index) => (
        <div
          key={index}
          className={`flex flex-col ${alignmentClasses[alignment]} gap-3`}
        >
          <div className="text-gray-700">{renderIcon(badge.icon)}</div>
          <div>
            <h4 className="font-semibold">{badge.title}</h4>
            {badge.description && (
              <p className="text-sm text-gray-500 mt-1">{badge.description}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export const TrustBadgesGridConfig: ComponentConfig<TrustBadgesGridProps> = {
  label: "Trust Badges Grid",
  fields: {
    badges: {
      type: "array",
      label: "Badges",
      arrayFields: {
        icon: { type: "textarea", label: "Icon (SVG)" },
        title: { type: "text", label: "Title" },
        description: { type: "text", label: "Description (optional)" },
      },
      defaultItemProps: {
        icon: defaultIcons.shipping,
        title: "New Badge",
        description: "",
      },
    },
    columns: {
      type: "select",
      label: "Columns",
      options: [
        { label: "2 Columns", value: 2 },
        { label: "3 Columns", value: 3 },
        { label: "4 Columns", value: 4 },
      ],
    },
    variant: {
      type: "select",
      label: "Variant",
      options: [
        { label: "Default", value: "default" },
        { label: "Compact", value: "compact" },
        { label: "Card", value: "card" },
        { label: "Icon Only", value: "icon-only" },
      ],
    },
    iconSize: {
      type: "select",
      label: "Icon Size",
      options: [
        { label: "Small", value: "sm" },
        { label: "Medium", value: "md" },
        { label: "Large", value: "lg" },
      ],
    },
    alignment: {
      type: "radio",
      label: "Alignment",
      options: [
        { label: "Left", value: "left" },
        { label: "Center", value: "center" },
      ],
    },
  },
  defaultProps: {
    badges: [
      {
        icon: defaultIcons.shipping,
        title: "Free Shipping",
        description: "On orders over $50",
      },
      {
        icon: defaultIcons.guarantee,
        title: "Secure Payment",
        description: "100% protected",
      },
      {
        icon: defaultIcons.returns,
        title: "Easy Returns",
        description: "30-day policy",
      },
      {
        icon: defaultIcons.payment,
        title: "Multiple Payment",
        description: "Cards & more",
      },
    ],
    columns: 4,
    variant: "default",
    iconSize: "md",
    alignment: "center",
  },
  render: (props) => <TrustBadgesGrid {...props} />,
};
