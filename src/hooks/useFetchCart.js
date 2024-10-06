import { useEffect, useState } from "react";
import { getProduct } from "../services/productService";

/**
 * Custom hook that fetches details of products from the given cartContents.
 *
 * @param {Map<number, number>} cartContents - A Map representing the contents of the cart where the keys are product IDs and the values are quantities.
 * @returns {Object} An object containing:
 * - `products`: Array of product objects fetched from the API.
 * - `totalCost`: The total cost of the items in the cart.
 * - `isLoading`: Boolean indicating whether the data is being fetched.
 * - `errors`: Array of error messages, if any occurred during the fetch process.
 */
export function useFetchCart(cartContents) {
  const [products, setProducts] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState([]);

  async function fetchCartContents(cartContents) {
    setIsLoading(true);
    const fetchPromises = Array.from(cartContents.keys()).map(id => getProduct(id));
    const results = await Promise.all(fetchPromises);
    // parse results
    const productArray = [];
    const errorsArray = [];
    let sum = 0;
    results.forEach(({data, error}) => {
      if (data) {
        productArray.push(data);
        sum += data.price * cartContents.get(data.id);
      } else if (error) {
        errorsArray.push(error);
      }
    });
    setTotalCost(sum);
    setProducts(productArray);
    setErrors(errorsArray);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchCartContents(cartContents);
  }, [cartContents]);

  return { products, totalCost, isLoading, errors };
}