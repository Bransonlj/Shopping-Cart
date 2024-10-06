import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import CartProduct from '../../components/CartProduct/CartProduct';
import { useFetchCart } from '../../hooks/useFetchCart';
import LoadingIndicator from '../../components/LoadingIndicator/LoadingIndicator';
import { formatPrice } from '../../utils/stringUtils';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

/**
 * Renders the shopping cart page with the contents of the cart and its details.
 */
export default function CartPage() {
  const { 
    cartContents,
    addOneToCart,
    removeOneFromCart,
    removeAllFromCart,
  } = useContext(CartContext);

  const { products, totalCost, isLoading, errors } = useFetchCart(cartContents);

  return (
    <div className='flex flex-col items-stretch px-16 gap-4'>
      <h2 className='font-bold text-2xl text-indigo-700 bg-white drop-shadow-md rounded-sm p-4'>Shopping Cart</h2>
      {
        isLoading && <LoadingIndicator label="Loading cart... Please wait" />
      }
      {
       products.map(product => (
            <CartProduct
              key={product.id} 
              product={product} 
              count={cartContents.get(product.id)} 
              increment={() => addOneToCart(product.id)} 
              decrement={() => removeOneFromCart(product.id)} 
              remove={() => removeAllFromCart(product.id)} 
            />

        ))
      } {
        errors.map((error, index) => (
          <ErrorMessage key={index} message={error} />
        ))
      }
      <div className='bg-white drop-shadow-md rounded-sm p-4 flex justify-center'>
       <span className='font-semibold text-lg'>Total: <span class='font-bold text-2xl text-indigo-700'>{formatPrice(totalCost)}</span></span>
      </div>
    </div>
  )
}
