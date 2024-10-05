import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import cartLogo from '../../assets/shopping-cart-white.svg'

export default function NavBar() {

  const { cartContents } = useContext(CartContext);

  return (
    <div className='flex justify-between bg-indigo-800'>
      <NavLink className='pl-8 p-4 text-yellow-400 font-bold' to='/'>Shopping Cart App</NavLink>
      <NavLink className='p-4 font-bold text-gray-200 hover:bg-indigo-700' to='/products'>Products</NavLink>
      <NavLink to='/cart' className='flex items-center py-2 px-8 hover:bg-indigo-700'>
        <img src={cartLogo} width='50' height='50' />
        <span className='text-white font-bold text-2xl'>{cartContents.size}</span>
      </NavLink>
    </div>
  )
}
