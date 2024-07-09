
// This function will be foramting money (which is in cents)  to have the 2 decimals.

export function formatCurrency(priceCents) {
    return (priceCents / 100).toFixed(2);
} // This helps us prevent doing this always independently in different files
