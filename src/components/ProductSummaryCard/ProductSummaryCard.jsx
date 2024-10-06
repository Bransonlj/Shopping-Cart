import React from 'react'
import CategoryBadge from '../CategoryBadge/CategoryBadge'
import { formatPrice } from '../../utils/stringUtils'

/**
 * Renders a clickable card displaying a summary of the product's details.
 *
 * @param {Object} props - The props object.
 * @param {Object} props.product - The product object containing information for the card.
 * @param {string} props.product.image - The URL of the product image.
 * @param {string} props.product.title - The title or name of the product.
 * @param {number} props.product.price - The price of the product.
 * @param {string} props.product.category - The category of the product.
 * @param {function} props.onClick - The function to execute when the card is clicked.
 */
export default function ProductSummaryCard({ product, onClick }) {
  return (
    <div onClick={onClick} 
      className='flex flex-col w-64 bg-white p-4 hover:cursor-pointer drop-shadow-sm hover:drop-shadow-lg rounded-sm'
    >
      <img className='size-64 p-4' src={product.image} />
      <h2 className='font-bold line-clamp-2 grow mb-2'>{product.title}</h2>
      <h2 className='font-bold text-2xl text-indigo-600'>{formatPrice(product.price)}</h2>
      <CategoryBadge label={product.category}></CategoryBadge>
    </div>
  )
}
