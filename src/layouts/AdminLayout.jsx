import React from 'react'
import { Outlet } from 'react-router-dom'
import SidebarAdmin from '../components/admin/SidebarAdmin'
import HeaderAdmin from '../components/admin/HeaderAdmin'

const AdminLayout = () => {
  return (
    <div className='flex h-screen'>
      <SidebarAdmin />
      <div className='flex-1 flex flex-col'>
        <HeaderAdmin />
      <main className='flex-1 p-5 bg-white overflow-y-auto'>
        <Outlet />
      </main>
      </div>
    </div>
  )
}

export default AdminLayout