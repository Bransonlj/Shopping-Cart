import React from 'react'
import { useState } from 'react'
import { getProducts } from '../../services/productService';
import { useEffect } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';

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
          <ProductCard product={product} key={product.id}></ProductCard>
        ))
      }
    </div>
  )
}
