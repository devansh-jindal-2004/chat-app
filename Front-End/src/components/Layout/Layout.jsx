import React from 'react'
import Home from '../../pages/home/Home'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <Home>
        <Outlet/>
      </Home>
     
    </>
  )
}

export default Layout