import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

/**
 * Provides the CartContext allowing access to cartContents and manipulation methods.
 * It manages the cart state and syncs the cart with local storage.
 */
export function CartContextProvider({ children }) {
  const [cartContents, setCartContents] = useState(new Map());
  const [isInitialized, setIsInitialized] = useState(false);

  const saveCart = () => {
    console.log('cart saved!');
    localStorage.setItem('cart',  JSON.stringify(Array.from(cartContents.entries())));
  }

  /**
   * Adds one of the specified product to the cart.
   *
   * @param {number|string} productId - The ID of the product to add.
   * @returns {void}
   */
  const addOneToCart = (productId) => {
    if (cartContents.get(productId)) {
      // increment
      setCartContents(new Map(cartContents).set(productId, cartContents.get(productId) + 1));
    } else {
      // add to map with count = 1
      setCartContents(new Map(cartContents).set(productId, 1));
    }
  }

  /**
   * Removes one of the specified product from the cart.
   * If the cart contains more than one of the product, it decrements it.
   * If only one, it removes the product entirely.
   *
   * @param {number|string} productId - The ID of the product to remove.
   * @returns {void}
   */
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

  /**
   * Removes all of the specified product from the cart.
   *
   * @param {number|string} productId - The ID of the product to remove completely.
   * @returns {void}
   */
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
    // Load the cartContents from local storage if exists
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