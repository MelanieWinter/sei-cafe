const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {currency: 'USD', style: 'currency' })

export function formatCurrency(pennies) {
    const dollars = pennies / 100; // Convert pennies to dollars
    return CURRENCY_FORMATTER.format(dollars);
}