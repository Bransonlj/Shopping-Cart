import React from 'react'
import CategoryBadge from '../CategoryBadge/CategoryBadge'

export default function ProductSummaryCard({ product, onClick }) {
  return (
    <div onClick={onClick}>
      <img width={100} src={product.image}></img>
      <h2>{product.title} {product.price}</h2>
      <CategoryBadge category={product.category}></CategoryBadge>
    </div>
  )
}
