import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import zxcvbn from 'zxcvbn'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'


const Register = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    password: ""
  })

  const handleOnChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post('http://localhost:5555/api/register', formData, {
        headers: {
          "Content-Type" : "application/json"
        }
      })
      toast.success("Register Successed!!")
      navigate('/login')
    }
    catch (err) {
      console.log(err)
      toast.error('Register Failed!')
    }
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100 px-2'>
      <div className='w-full shadow-lg bg-white p-8 max-w-md rounded-3xl'>
        <h1 className='font-bold text-2xl text-center my-4'>Register</h1>
        <form className='mx-auto px-4 space-y-4' onSubmit={handleOnSubmit}>
          <input
            type="text"
            name="username"
            id="username"
            value={formData.username}
            onChange={handleOnChange}
            placeholder='Username'
            className={`border w-full px-3 py-2 rounded-md
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
          />
          <input
            type="text"
            name="firstname"
            id="firstname"
            value={formData.firstname}
            onChange={handleOnChange}
            placeholder='Firstname'
            className={`border w-full px-3 py-2 rounded-md
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
          />
          <input
            type="text"
            name="lastname"
            id="lastname"
            value={formData.lastname}
            onChange={handleOnChange}
            placeholder='Lastname'
            className={`border w-full px-3 py-2 rounded-md
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
          />
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleOnChange}
            placeholder='Email'
            className={`border w-full px-3 py-2 rounded-md
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
          />
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleOnChange}
            placeholder='Password'
            className={`border w-full px-3 py-2 rounded-md
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
          />
          
           <div className='flex justify-center items-center'>
            <button className='bg-blue-500 w-full text-white rounded-md mt-5 px-2 py-2 hover:bg-blue-600 hover:translate-y-1 hover:duration-200'>Register</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register