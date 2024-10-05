import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export function CartContextProvider({ children }) {
  const [cartContents, setCartContents] = useState(new Map());
  const [isInitialized, setIsInitialized] = useState(false);

  const saveCart = () => {
    console.log('cart saved!');
    localStorage.setItem('cart',  JSON.stringify(Array.from(cartContents.entries())));
  }

  const addOneToCart = (productId) => {
    if (cartContents.get(productId)) {
      // increment
      setCartContents(new Map(cartContents).set(productId, cartContents.get(productId) + 1));
    } else {
      // add to map with count = 1
      setCartContents(new Map(cartContents).set(productId, 1));
    }
  }

  const removeOneFromCart = (productId) => {
    const count = cartContents.get(productId);
    if (count) {
      if (count > 1) {
        // decrement
        setCartContents(new Map(cartContents).set(productId, cartContents.get(productId) - 1));
      } else {
        // remove
        const newMap = new Map(cartContents);
        newMap.delete(productId);
        setCartContents(newMap);
      }
    }
  }

  const removeAllFromCart = (productId) => {
    const newMap = new Map(cartContents);
    newMap.delete(productId);
    setCartContents(newMap);
  }

  const value = {
    cartContents,
    addOneToCart,
    removeOneFromCart,
    removeAllFromCart,
  }

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCartContents(new Map(JSON.parse(storedCart)));
    }

    setIsInitialized(true);
  }, [])

  useEffect(() => {
    if (isInitialized) {
      saveCart();
    }
  }, [cartContents, isInitialized])

  return (
    <CartContext.Provider value={ value }>
      { children }
    </CartContext.Provider>
  )
} 