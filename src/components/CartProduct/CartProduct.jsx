import React from 'react';
import Button from '../Button/Button';
import { formatPrice } from '../../utils/stringUtils';
import trashLogo from '../../assets/trash-white.svg'

/**
 * Renders a cart product item with the ability to increment, decrement, or remove the product from the cart.
 *
 * @param {Object} props - The props object.
 * @param {Object} props.product - The product object.
 * @param {number} props.count - The quantity of the product in the cart.
 * @param {function} props.increment - Function to handle incrementing the product quantity.
 * @param {function} props.decrement - Function to handle decrementing the product quantity.
 * @param {function} props.remove - Function to handle removing the product from the cart.
 */
export default function CartProduct({ product, count, increment, decrement, remove }) {

  return (
    <div className='flex items-center bg-white p-4 drop-shadow-md rounded-sm justify-between'>
      <img className='w-1/5 p-4 border-4 rounded-lg border-indigo-500' src={product.image} />
      <h2 className='w-1/5 font-semibold text-base'>{product.title}</h2>
      <h2 className='w-1/5 font-bold text-lg text-indigo-600' >{formatPrice(product.price)}</h2>
      <div className=' flex content-center border-solid border-2 border-indigo-700 rounded-lg w-fit'>
        <button
          className='font-bold px-2 hover:bg-slate-400 bg-slate-300 rounded-l-lg text-l'
          onClick={decrement}>-</button>
        <span className='px-2 text-l'>{count}</span>
        <button 
          className='font-bold px-2 hover:bg-slate-400 bg-slate-300 rounded-r-lg text-l'
          onClick={increment}>+</button>
      </div>
      <Button image={trashLogo} onClick={remove} label='Remove' />
    </div>
  )
}
