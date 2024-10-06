import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import { Outlet } from 'react-router-dom'

/**
 * Layout page with the navigation bar above the app contents
 */
export default function Layout() {
  return (
    <div className='flex flex-col items-stretch w-full h-full'>
      <NavBar />
      <div className='my-8'>
        <Outlet></Outlet>
      </div>
    </div>
  )
}
