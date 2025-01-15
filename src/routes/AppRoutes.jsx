import React from 'react'
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom'
import Layout from '../layouts/Layout'
import Homepage from '../pages/Homepage'
import Product from '../pages/Product'
import EditUserAdmin from '../pages/admin/EditUserAdmin'
import Manage from '../pages/admin/Manage'
import EditResume from '../pages/user/EditResume'
import Login from '../pages/auth/Login'
import Register from '../pages/auth/Register'
import Dashboard from '../pages/admin/Dashboard'
import AdminLayout from '../layouts/AdminLayout'
import UserLayout from '../layouts/UserLayout'
import ProtectAdminRoutes from '../routes/ProtectAdminRoutes'
import ProtectUserRoutes from '../routes/ProtectUserRoutes'
import HomeUser from '../pages/user/HomeUser'
import Contact from '../pages/Contact'
import Setting from '../components/user/Setting'
import CreateResume from '../components/user/CreateResume'
import UserResume from '../pages/user/UserResume'
import PrintResume from '../components/user/PrintResume'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "resume", element: <Product /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "contact", element: <Contact /> },
    ]
  },
  {
    path: "/admin",
    element: <ProtectAdminRoutes element={<AdminLayout />} />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "manage", element: <Manage /> },
      { path: "edit/:id", element: <EditUserAdmin /> },
    ]
  },
  {
    path: "/user",
    element: <ProtectUserRoutes element={<UserLayout />} />,
    children: [
      { index: true, element: <HomeUser /> },
      { path: "edit/:id", element: <EditResume /> },
      { path: "setting", element: <Setting /> },
      { path: "createResume", element: <CreateResume /> },
      { path: "userResume/:id", element: <UserResume /> },
      // { path: "userResume/:id", element: <PrintResume />}
    ]
  }
])

const AppRoutes = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default AppRoutes