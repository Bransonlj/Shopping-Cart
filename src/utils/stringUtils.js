
/**
 * Formats the price into a string with 2 dp and '$' sign.
 * @param {number} price 
 */
export function formatPrice(price) {
  return`$${price.toFixed(2)}`;
}