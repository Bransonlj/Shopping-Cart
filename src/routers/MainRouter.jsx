import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider } from 'react-router-dom'
import ProductsListPage from '../pages/ProductsListPage/ProductsListPage'
import ProductPage from '../pages/ProductPage/ProductPage'

export default function MainRouter() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/'>
        <Route index element={<Navigate replace to='/products' />}></Route>
        <Route path='products'>
          <Route index element={<ProductsListPage />} />
          <Route path=':id' element={<ProductPage/>} />
        </Route>
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}
