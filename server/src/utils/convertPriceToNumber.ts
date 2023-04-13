/**
 * Converts a price string to a number.
 *
 * @param priceString - The price string to convert.
 * @returns The numeric representation of the price, or NaN if the input is not a valid price string.
 */

export function convertPriceToNumber (priceString: string): number {
  const strippedPriceString = priceString.replace(/\s/g, '').replace('R$', '');
  const numericPriceString = strippedPriceString.replace(',', '.');
  return parseFloat(numericPriceString);
}
