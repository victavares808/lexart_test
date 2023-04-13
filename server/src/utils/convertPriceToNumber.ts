export function convertPriceToNumber (priceString: string): number {
  const strippedPriceString = priceString.replace(/\s/g, '').replace('R$', '');
  const numericPriceString = strippedPriceString.replace(',', '.');
  return parseFloat(numericPriceString);
}
