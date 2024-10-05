import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import CartProduct from '../../components/CartProduct/CartProduct';
import { useFetchCart } from '../../hooks/useFetchCart';
import LoadingIndicator from '../../components/LoadingIndicator/LoadingIndicator';

export default function CartPage() {
  const { 
    cartContents,
    addOneToCart,
    removeOneFromCart,
    removeAllFromCart,
  } = useContext(CartContext);

  const { products, totalCost, isLoading, errors } = useFetchCart(cartContents);

  return (
    <div>
      <h2>Cart</h2>
      {
        isLoading && <LoadingIndicator />
      }
      {
       products.map(product => (
            <CartProduct 
              product={product} 
              count={cartContents.get(product.id)} 
              increment={() => addOneToCart(product.id)} 
              decrement={() => removeOneFromCart(product.id)} 
              remove={() => removeAllFromCart(product.id)} 
            />

        ))
      } {
        errors.map(error => (
          <CartProduct error={error} />
        ))
      }
      <span>total: {totalCost}</span>
    </div>
  )
}
