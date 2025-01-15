import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import useAuth from '../../useAuth/useAuth'
import { userData, userResume } from '../../api/user'
import { Edit, Eye, Trash2 } from 'lucide-react';
import { deleteResume } from '../../api/product';
import { toast } from 'react-toastify';


const Resume = () => {
  const user = useAuth((state) => state.user)
  const token = useAuth((state) => state.token)
  const [resume, setResume] = useState([])
  const [usersData, setUsersData] = useState([])

  useEffect(() => {
    handleGetResume(token)
    handleGetUser(token)
  }, [])

  const handleGetResume = async (token) => {
    try {
      const resumes = await userResume(token, user.id)
      setResume(resumes.data)
    }
    catch (err) {
      console.log(err)
    }
  }

  const handleGetUser = async (token) => {
    try {
      const getUser = await userData(token, user.id)
      setUsersData(getUser.data)
    }
    catch (err) {
      console.log(err)
    }
  }

  const handleDelete = async (id) => {
    if (window.confirm('จะลบจริงๆ หรอ')) {
      console.log(id)
      try {
        const res = await deleteResume(token, id)
        toast.success("Delete Successed!!")
        window.location.reload()
      }
      catch (err) {
        console.log(err)
        toast.error("Delete Failed!!")
      }
    }

  }

  console.log('resumeII', resume)
  console.log('userData', usersData)

  return (
    <div className='space-y-3'>
      <div className='flex justify-between'>
        <div className='flex gap-2 items-center'>
          <img src="/src/assets/resume.png" className='w-14 h-14' />
          <h1 className='font-bold text-4xl'>Resume 👨‍🎓👩‍🎓</h1>
        </div>
        <button className='btn bg-blue-500 hover:bg-blue-700 rounded-lg shadow-lg text-white font-semibold px-2 py-2'>
          <Link to={'/user/createResume'}>
            Create Resume
          </Link>
        </button>
      </div>
      <div className='overflow-x-auto'>
        <div>
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className='bg-gray-100'>
                <th className='border border-gray-300 px-6 py-3 text-center font-medium text-gray-900'>No.</th>
                <th className='border border-gray-300 px-6 py-3 text-center font-medium text-gray-900'>Title</th>
                <th className='border border-gray-300 px-6 py-3 text-center font-medium text-gray-900'>Phone</th>
                <th className='border border-gray-300 px-6 py-3 text-center font-medium text-gray-900'>Description</th>
                <th className='border border-gray-300 px-6 py-3 text-center font-medium text-gray-900'>Skill</th>
                <th className='border border-gray-300 px-6 py-3 text-center font-medium text-gray-900'>Experience</th>
                <th className='border border-gray-300 px-6 py-3 text-center font-medium text-gray-900'>Management</th>
              </tr>
            </thead>
            <tbody>
              {
                resume?.map((item, index) =>

                  <tr className='hover:bg-gray-50' key={index}>
                    <td className='border border-gray-300 px-6 py-4 text-gray-700'>{index + 1}</td>
                    <td className='border border-gray-300 px-6 py-4 text-gray-700'>{item.title}</td>
                    <td className='border border-gray-300 px-6 py-4 text-gray-700'>{item.phone}</td>
                    <td className='border border-gray-300 px-6 py-4 text-gray-700'>{item.description}</td>
                    <td className='border border-gray-300 px-6 py-4 text-gray-700'>{item.skill}</td>
                    <td className='border border-gray-300 px-6 py-4 text-gray-700'>{item.experience}</td>
                    <td className='border border-gray-300 px-6 py-4 text-gray-700'>
                      <div className='flex justify-center items-center gap-4 mx-1'>
                        <Link to={`/user/userResume/${item.id}`} className='text-green-500'>
                          <div className='flex flex-col justify-center items-center'>
                            <Eye />
                            View
                          </div>
                        </Link>
                        <Link to={`/user/edit/${item.id}`} className='text-blue-500'>
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
                )
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Resume