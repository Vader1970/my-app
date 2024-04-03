// Import and initialize a currency formatter using Intl.NumberFormat for formatting currency amounts
const CURRENCY_FORMATTER = new Intl.NumberFormat("en-us", {
  currency: "USD", // Specify currency as USD
  style: "currency", // Specify formatting style as currency
  minimumFractionDigits: 0, // Specify the minimum number of fractional digits
});

// Function to format currency amounts using the initialized currency formatter
export function formatCurrency(amount: number) {
  return CURRENCY_FORMATTER.format(amount); // Returns the formatted currency amount
}

// Initialize a number formatter using Intl.NumberFormat for formatting numeric values
const NUMBER_FORMATTER = new Intl.NumberFormat("en-US");

// Function to format numeric values using the initialized number formatter
export function formatNumber(number: number) {
  return NUMBER_FORMATTER.format(number); // Returns the formatted numeric value
}
