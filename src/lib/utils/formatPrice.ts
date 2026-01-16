/**
 * Formats a number as a currency string
 *
 * @param value - The numeric value to format
 * @param currency - The currency code (e.g., "ARS", "USD", "EUR")
 * @param locale - The locale for formatting (defaults to currency-appropriate locale)
 * @returns Formatted currency string
 */
export function formatPrice(
  value: number,
  currency: string = "ARS",
  locale?: string
): string {
  // Default locales based on currency
  const currencyLocales: Record<string, string> = {
    ARS: "es-AR",
    USD: "en-US",
    EUR: "de-DE",
    BRL: "pt-BR",
    MXN: "es-MX",
    CLP: "es-CL",
    COP: "es-CO",
    PEN: "es-PE",
    UYU: "es-UY",
  };

  const effectiveLocale = locale || currencyLocales[currency] || "es-AR";

  return new Intl.NumberFormat(effectiveLocale, {
    style: "currency",
    currency: currency,
  }).format(value);
}
