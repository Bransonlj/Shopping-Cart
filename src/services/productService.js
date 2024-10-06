
/**
 * Fetches a list of products from the Fakestore API.
 *
 * @returns {Promise<Object>} A promise that resolves to an object containing either:
 * - `{ data: Array }` where `data` is an array of products.
 * - `{ error: string }` if there was an error during the request.
 * 
 */
export async function getProducts() {
  try {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    if (!res.ok) {
      throw Error(data.error);
    }
    return { data }; 
  } catch (error) {
    console.error(error.message);
    return { error: error.message }
  }
}

/**
 * Fetches a single product by its ID from the Fakestore API.
 *
 * @param {number|string} id - The ID of the product to fetch.
 * @returns {Promise<Object>} A promise that resolves to an object containing either:
 * - `{ data: Object }` where `data` is the product object.
 * - `{ error: string }` if there was an error during the request.
 */
export async function getProduct(id) {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await res.json();
    if (!res.ok) {
      throw Error(data.error);
    }
    return { data }; 
  } catch (error) {
    console.error(error.message);
    return { error: error.message }
  }
}