import React from 'react'
import { NavLink } from 'react-router-dom'
import { Gauge } from 'lucide-react';
import { UserRoundPen } from 'lucide-react';
import { LogOut } from 'lucide-react';
import useAuth from '../../useAuth/useAuth';

const SidebarAdmin = () => {
    const logout = useAuth((state) => state.logout)
    return (
        <div className='bg-gray-800 w-64 text-gray-100 flex flex-col h-screen'>
            <div className='h-20 bg-gray-900 flex items-center justify-center text-2xl font-bold'>
                Admin Panel
            </div>
            <nav className='flex-1 px-4 py-4 space-y-2'>
                <NavLink to={'/admin'} end
                    className={({ isActive }) =>
                        isActive
                            ? "bg-gray-900 rounded-md text-white px-4 py-2 flex items-center"
                            : "text-gray-300 px-4 py-2 hover:bg-gray-700 hover:text-white rounded flex items-center"
                    }>
                    <Gauge className='mr-2' />
                    Dashboard
                </NavLink>
                <NavLink to={'manage'} end
                    className={({ isActive }) =>
                        isActive
                            ? "bg-gray-900 rounded-md text-white px-4 py-2 flex items-center"
                            : "text-gray-300 px-4 py-2 hover:bg-gray-700 hover:text-white rounded flex items-center"
                    }>
                    <UserRoundPen className='mr-2' />
                    Manage
                </NavLink>
                <hr />
                <NavLink to={'/'}
                    onClick={() => logout()}
                    className={({ isActive }) =>
                        isActive
                            ? "bg-gray-900 rounded-md text-white px-4 py-2 flex items-center"
                            : "text-gray-300 px-4 py-2 hover:bg-gray-700 hover:text-white rounded flex items-center"
                    }>
                    <LogOut className='mr-2' />
                    Logout
                </NavLink>
            </nav>
        </div>
    )
}

export default SidebarAdmin