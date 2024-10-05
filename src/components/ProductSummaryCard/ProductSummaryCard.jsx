import React from 'react'
import CategoryBadge from '../CategoryBadge/CategoryBadge'
import { formatPrice } from '../../utils/stringUtils'

export default function ProductSummaryCard({ product, onClick }) {
  return (
    <div onClick={onClick} 
      class='flex flex-col w-64 bg-white p-4 hover:cursor-pointer drop-shadow-sm hover:drop-shadow-lg rounded-sm'>
      <img class='size-64 p-4' src={product.image} />
      <h2 class='font-bold line-clamp-2 grow mb-2'>{product.title}</h2>
      <h2 class='font-bold text-2xl text-indigo-600'>{formatPrice(product.price)}</h2>
      <CategoryBadge label={product.category}></CategoryBadge>
    </div>
  )
}
