import React from 'react'
import { useState } from 'react'
import { getProducts } from '../../services/productService';
import { useEffect } from 'react';

export default function MainProducts() {
  const [products, setProducts] = useState([]);

  async function loadProducts() {
    const res = await getProducts();
    setProducts(res);
  }

  useEffect(() => {
    loadProducts();
  }, [])

  return (
    <div>
      {
        products.map(product => (
          <div key={product.id}>
            <h2>{product.title} {product.price}</h2>
          </div>
        ))
      }
    </div>
  )
}
