import React from 'react'
import MainNav from '../components/MainNav'
import { Outlet } from 'react-router-dom'

const UserLayout = () => {
  return (
    <div>
      <MainNav />
      <main >
        <Outlet />
      </main>
    </div>
  )
}

export default UserLayout