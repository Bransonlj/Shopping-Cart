import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function NavBar() {
  return (
    <div>
      <NavLink to='/products'>Products</NavLink>
      <NavLink to='/cart'>Cart</NavLink>
      <Outlet></Outlet>
    </div>
  )
}
