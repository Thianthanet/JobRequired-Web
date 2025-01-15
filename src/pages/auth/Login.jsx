import React, { useState } from 'react'
import axios from 'axios'
import useAuth from '../../useAuth/useAuth'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Login = () => {
  const actionLogin = useAuth((state) => state.actionLogin)
  const user = useAuth((state) => state.user)
  console.log('user from zustand', user)
  const navigate = useNavigate()

  const [form, setForm] = useState({
    username: "",
    password: "",
  })

  const handleOnchange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('form', form)
    try {
      const res = await actionLogin(form)
      toast.success('Login Success!!')
      console.log('res', res)
      const role = res.data.payload.role
      navigate('/')
      if (role) {
        console.log('role', role)
        roleRedirect(role)
      }

    }
    catch (err) {
      console.log(err)
      const errMsg = err.response?.data?.message
      toast.error(errMsg)
    }
  }

  const roleRedirect = (role) => {
    if (role === 'admin') {
      navigate('/admin')
    } else {
      navigate('/')
    }
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100 px-2'>
      <div className='w-full shadow-lg bg-white p-8 max-w-md rounded-3xl'>
        <h1 className='font-bold text-2xl text-center my-4'>Login</h1>
        <form className='mx-auto px-4 space-y-4' onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            id="username"
            placeholder='Username'
            className={`border w-full px-3 py-2 rounded-md
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
            onChange={handleOnchange}
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder='Password'
            className={`border w-full px-3 py-2 rounded-md
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
            onChange={handleOnchange}
          />

          <div className='flex justify-center items-center'>
            <button className='bg-blue-500 w-full text-white rounded-md mt-5 px-2 py-2 hover:bg-blue-600 hover:translate-y-1 hover:duration-200'>Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login