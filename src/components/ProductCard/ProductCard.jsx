import React from 'react'
import CategoryBadge from '../CategoryBadge/CategoryBadge'

export default function ProductCard({ product }) {
  return (
    <div>
      <img width={100} src={product.image}></img>
      <h2>{product.title} {product.price}</h2>
      <CategoryBadge category={product.category}></CategoryBadge>
    </div>
  )
}
