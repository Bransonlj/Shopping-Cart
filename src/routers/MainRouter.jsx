import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider } from 'react-router-dom'
import ProductsListPage from '../pages/ProductsListPage/ProductsListPage'
import ProductPage from '../pages/ProductPage/ProductPage'
import CartPage from '../pages/CartPage/CartPage'
import Layout from '../pages/Layout/Layout'

export default function MainRouter() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route index element={<Navigate replace to='/products' />}></Route>
        <Route path='products'>
          <Route index element={<ProductsListPage />} />
          <Route path=':id' element={<ProductPage/>} />
        </Route>
        <Route path='cart'>
          <Route index element={<CartPage />} />
        </Route>
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}
