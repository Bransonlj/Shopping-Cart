import React, { useEffect, useState } from 'react'
import ErrorMessage from '.././ErrorMessage/ErrorMessage';
import ProductImage from '../ProductImage/ProductImage';

export default function CartProduct({ error, product, count, increment, decrement, remove }) {

  if (error) {
    return (
      <div>
        <ErrorMessage message={error}></ErrorMessage>
      </div>
    )
  }


  return (
    <div>
      <ProductImage src={product.image} />
      <h2>{product.title}</h2>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
      <button onClick={remove}>delete</button>
    </div>
  )
}
