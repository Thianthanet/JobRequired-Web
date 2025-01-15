import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { createResume } from '../../api/product'
import useAuth from '../../useAuth/useAuth'
import { useNavigate } from 'react-router-dom'


const CreateResume = () => {
  const token = useAuth((state) => state.token)
  const user = useAuth((state) => state.user)
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    title: "",
    phone: "",
    description: "",
    skill: "",
    experience: 0,
    address: "",
    userId: user.id
  })
  console.log(user)
  const handleOnChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: name === "experience" ? Number(value) : value
    })
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault()
    console.log(formData)
    try {
      const res = await createResume(token, formData)
      toast.success("Create Resume Successed!!")
      handleToBack()
      return res
    }
    catch (err) {
      console.log(err)
      toast.error("Create Resume Failed!")
    }
  }

  const handleToBack = () => {
    navigate(-1)
  }
  return (
    <div>
      <button onClick={handleToBack} className='btn bg-blue-500 px-5 py-2 mt-2 hover:bg-blue-700 rounded-md shadow-lg mx-2'>
      ⮜ Back
      </button>
      <div className='min-h-screen flex items-center justify-center px-2'>
        <div className='w-full shadow-lg bg-gray-100 p-8 max-w-md rounded-3xl'>
          <h1 className='font-bold text-2xl text-center my-4'>Create Resume</h1>
          <form className='mx-auto px-4 space-y-4' onSubmit={handleOnSubmit}>
            <input
              type="text"
              name="title"
              id="title"
              value={formData.title}
              onChange={handleOnChange}
              placeholder='Title'
              className={`border w-full px-3 py-2 rounded-md
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
            />
            <input
              type="text"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleOnChange}
              placeholder='Phone'
              className={`border w-full px-3 py-2 rounded-md
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
            />
            <textarea
              type="text"
              name="description"
              id="description"
              value={formData.description}
              onChange={handleOnChange}
              placeholder='Description'
              className={`border w-full px-3 py-2 rounded-md
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
            />
            <input
              type="text"
              name="skill"
              id="skill"
              value={formData.skill}
              onChange={handleOnChange}
              placeholder='Skill'
              className={`border w-full px-3 py-2 rounded-md
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
            />
            <input
              type="number"
              name="experience"
              id="experience"
              value={formData.experience}
              onChange={handleOnChange}
              placeholder='Experience'
              className={`border w-full px-3 py-2 rounded-md
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
            />

              <textarea
              type="text"
              name="address"
              id="address"
              value={formData.address}
              onChange={handleOnChange}
              placeholder='Address'
              className={`border w-full px-3 py-2 rounded-md
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
            />

            <div className='flex justify-center items-center'>
              <button className='bg-blue-500 w-full text-white rounded-md mt-5 px-2 py-2 hover:bg-blue-600 hover:translate-y-1 hover:duration-200'>Create</button>
            </div>
          </form>
        </div>
      </div>
      {/* <form>
            <input type="text" name="title" id="title" />
            <input type="text" name="phone" id="phone" />
            <textarea type="text" name="description" id="description" />
            <input type="text" name="skill" id="skill" />
            <input type="number" name="experience" id="experience" />
        </form> */}
    </div>
  )
}

export default CreateResume