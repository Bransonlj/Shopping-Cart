import { useEffect, useState } from "react";
import { getProduct } from "../services/productService";

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