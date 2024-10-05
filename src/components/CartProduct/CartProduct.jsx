import React from 'react';
import Button from '../Button/Button';
import { formatPrice } from '../../utils/stringUtils';
import trashLogo from '../../assets/trash-white.svg'

export default function CartProduct({ product, count, increment, decrement, remove }) {

  return (
    <div class='flex items-center bg-white p-4 drop-shadow-md rounded-sm justify-between'>
      <img class='w-1/5 p-4 border-4 rounded-lg border-indigo-500' src={product.image} />
      <h2 class='w-1/5 font-semibold text-base'>{product.title}</h2>
      <h2 class='w-1/5 font-bold text-lg text-indigo-600' >{formatPrice(product.price)}</h2>
      <div class=' flex content-center border-solid border-2 border-indigo-700 rounded-lg w-fit'>
        <button
          class='font-bold px-2 hover:bg-slate-400 bg-slate-300 rounded-l-lg text-l'
          onClick={decrement}>-</button>
        <span class='px-2 text-l'>{count}</span>
        <button 
          class='font-bold px-2 hover:bg-slate-400 bg-slate-300 rounded-r-lg text-l'
          onClick={increment}>+</button>
      </div>
      <Button image={trashLogo} onClick={remove} label='Remove' />
    </div>
  )
}
