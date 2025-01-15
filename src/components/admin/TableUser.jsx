import React, { useEffect, useState } from 'react'
import { changeUserRole, changeUserStatus, deleteUser, getUser } from '../../api/user'
import useAuth from '../../useAuth/useAuth'
import { Edit, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ShieldCheck } from 'lucide-react';


const TableUser = () => {
    const [userData, setUserData] = useState([])
    const token = useAuth((state) => state.token)
    const user = useAuth((state) => state.user)
    useEffect(() => {
        handleGetUser(token)
    }, [])

    const handleGetUser = async (token) => {
        try {
            const resUser = await getUser(token)
            setUserData(resUser.data)
        }
        catch (err) {
            console.log(err)
        }
    }

    const handleDelete = async (id) => {
        if (window.confirm('สิลบอิหลีเบาะ')) {
            try {
                const res = await deleteUser(token, id)
                toast.success('Delete User Successed!!')
                window.location.reload()
            }
            catch (err) {
                console.log(err)
                toast.error('Delete Failed!!')
            }
        }
    }

    const handleChangeUserRole = async (userId, userRole) => {
        console.log(userId, userRole)
        const value = {
            id: userId,
            role: userRole
        }

        changeUserRole(token, value)
            .then((res) => {
                console.log('res', res)
                toast.success("Change user role successed!!")
                window.location.reload()
            })
            .catch((err) => {
                console.log(err)
                toast.error("Change user role failed!!")
            })
    }

    const handleChangeUserStatus = async (userId, userStatus) => {
        const value = {
            id: userId,
            enabled: !userStatus
        }

        changeUserStatus(token, value)
            .then((res) => {
                console.log(res)
                toast.success("Change user status successed!!")
                window.location.reload()
            })
            .catch((err) => {
                console.log(err)
                toast.error("Change user status failed!!")
            })
    }

    const getStatusColor = (status) => {
        switch (status) {
            case "Active":
                return 'bg-green-200'
            case "Inactive":
                return 'bg-red-200'
        }
    }
    return (
        <div>
            <div className='overflow-x-auto'>
                <table className="min-w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className='bg-gray-100'>
                            <th className='border border-gray-300 px-6 py-3 text-center font-medium text-gray-900'>ID</th>
                            <th className='border border-gray-300 px-6 py-3 text-center font-medium text-gray-900'>Firstname</th>
                            <th className='border border-gray-300 px-6 py-3 text-center font-medium text-gray-900'>Lastname</th>
                            <th className='border border-gray-300 px-6 py-3 text-center font-medium text-gray-900'>Email</th>
                            <th className='border border-gray-300 px-6 py-3 text-center font-medium text-gray-900'>Role</th>
                            <th className='border border-gray-300 px-6 py-3 text-center font-medium text-gray-900'>Enabled</th>
                            <th className='border border-gray-300 px-6 py-3 text-center font-medium text-gray-900'>Management</th>
                        </tr>
                    </thead>
                    {
                        userData?.map((item, index) =>
                            <tbody>
                                <tr className='hover:bg-gray-50' key={index}>
                                    <td className='border border-gray-300 px-6 py-4 text-gray-700'>{item.id}</td>
                                    <td className='border border-gray-300 px-6 py-4 text-gray-700'>{item.firstname}</td>
                                    <td className='border border-gray-300 px-6 py-4 text-gray-700'>{item.lastname}</td>
                                    <td className='border border-gray-300 px-6 py-4 text-gray-700'>{item.email}</td>
                                    <td className='border border-gray-300 px-6 py-4 text-gray-700'>
                                        <select value={item.role}
                                            onChange={(e) => handleChangeUserRole(item.id, e.target.value)}
                                        >
                                            <option>user</option>
                                            <option>admin</option>
                                        </select>
                                    </td>
                                    <td className={`${getStatusColor(item.enabled ? "Active" : "Inactive")} text-center border border-gray-300 px-6 py-4 text-gray-700`}>
                                        {item.enabled ? "Active" : "Inactive"}
                                    </td>
                                    <td className='border border-gray-300 px-6 py-4 text-gray-700'>
                                        <div className='flex justify-center items-center gap-4 mx-1'>
                                            <button className={item.enabled ? "text-green-500" : "text-red-500"}
                                                onClick={() => handleChangeUserStatus(item.id, item.enabled)}
                                            >
                                               <div className='flex flex-col justify-center items-center'>
                                               <ShieldCheck />
                                               {item.enabled ? "Enable" : "Disable"}
                                               </div>
                                            </button>
                                            <Link to={`/admin/edit/${item.id}`} className='text-blue-500'>
                                                <div className='flex flex-col justify-center items-center'>
                                                    <Edit />
                                                    Edit
                                                </div>
                                            </Link>
                                            <button className='text-red-500 hover:text-red-700'
                                                onClick={() => handleDelete(item.id)}
                                            >
                                                <div className='flex flex-col justify-center items-center'>
                                                    <Trash2 />
                                                    Delete
                                                </div>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        )
                    }
                </table>
            </div>
        </div>
    )
}

export default TableUser