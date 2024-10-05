import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div class='flex flex-col items-stretch w-full h-full'>
      <NavBar />
      <div class='my-8'>
        <Outlet></Outlet>
      </div>
    </div>
  )
}
