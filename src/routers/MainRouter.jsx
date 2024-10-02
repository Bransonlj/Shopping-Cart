import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import MainProducts from '../pages/MainProducts/mainProducts'

export default function MainRouter() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainProducts/>}>

      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}
