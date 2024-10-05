import React from 'react'
import { useState } from 'react'
import { getProducts } from '../../services/productService';
import { useEffect } from 'react';
import ProductSummaryCard from '../../components/ProductSummaryCard/ProductSummaryCard';
import LoadingIndicator from '../../components/LoadingIndicator/LoadingIndicator';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import { useNavigate } from 'react-router-dom';

export default function ProductsListPage() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  async function loadProducts() {
    setIsLoading(true);
    const { data, error } = await getProducts();
    if (data) {
      setProducts(data);
    } else if (error) {
      setError(error);
    }
    setIsLoading(false);
  }

  function handleClick(id) {
    navigate(`/products/${id}`);
  }

  useEffect(() => {
    loadProducts();
  }, [])

  if (isLoading) {
    return <LoadingIndicator></LoadingIndicator>
  }

  if (error) {
    return <ErrorMessage message={error}></ErrorMessage>
  }

  return (
    <div>
      {
        products.map(product => (
          <ProductSummaryCard onClick={() => handleClick(product.id)} product={product} key={product.id}></ProductSummaryCard>
        ))
      }
    </div>
  )
}
