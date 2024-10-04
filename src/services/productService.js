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