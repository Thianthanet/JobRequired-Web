import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useAuth from '../../useAuth/useAuth'
import { updateResume } from '../../api/product'
import { resumeId } from '../../api/user'
import { toast } from 'react-toastify'

const initialState = {
  title: "",
  phone: "",
  description: "",
  skill: "",
  experience: 0,
  address: ""
}

const EditResumeUser = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const token = useAuth((state) => state.token)
  const [resume, setResume] = useState(initialState)
  const [form, setForm] = useState(initialState)

  const handleToBack = () => {
    navigate(-1)
  }

  useEffect(() => {
    handleGetResume(token)
  }, [])

  const handleGetResume = async (token) => {
    try {
      const res = await resumeId(token, id)
      setResume(res.data)
      setForm(res.data)
    }
    catch (err) {
      console.log(err)
    }
  }

  const handleEditResume = async (e) => {
    e.preventDefault()
    try {
      const res = await updateResume(token, id, form)
      console.log('res', res)
      toast.success("Update Resume Successed!!")
      handleToBack()
    }
    catch (err) {
      console.log(err)
      toast.error('Update Resume Failed!!')
    }
  }

  const handleOnChange = (e) => {
    e.preventDefault()
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value
    })
  }

  return (
    <div>
      <button onClick={handleToBack} className='btn bg-blue-500 px-5 py-2 mt-2 hover:bg-blue-700 rounded-md shadow-lg mx-2'>
        ⮜ Back
      </button>
      <div>
        <div className='text-center mb-3'>
          <h1 className='font-bold text-2xl'>😝Edit Resume😎</h1>
        </div>
        <div className='border text-center px-3 py-3 rounded-lg shadow-lg'>
          <form className='flex flex-col space-y-4' onSubmit={handleEditResume}>
          <input
              type="text"
              name="id"
              id="id"
              placeholder='ID'
              className='border border-black rounded-lg shadow-lg px-2 py-2'
              value={form.id}
              onChange={handleOnChange}
            />

            <input
              type="text"
              name="title"
              id="title"
              placeholder='Title'
              className='border border-black rounded-lg shadow-lg px-2 py-2'
              value={form.title}
              onChange={handleOnChange}
            />

            <input
              type="text"
              name="phone"
              id="phone"
              placeholder='Phone'
              className='border border-black rounded-lg shadow-lg px-2 py-2'
              value={form.phone}
              onChange={handleOnChange}
            />

            <textarea
              type="text"
              name="description"
              id="description"
              placeholder='Description'
              className='border border-black rounded-lg shadow-lg px-2 py-8'
              value={form.description}
              onChange={handleOnChange}
            />

            <input
              type="number"
              name="experience"
              id="experience"
              placeholder='Experience'
              className='border border-black rounded-lg shadow-lg px-2 py-2'
              value={form.experience}
              onChange={handleOnChange}
            />

            <textarea
              type="text"
              name="address"
              id="address"
              placeholder='Address'
              className='border border-black rounded-lg shadow-lg px-2 py-5'
              value={form.address}
              onChange={handleOnChange}
            />

            <button className='text-white bg-blue-500 rounded-lg px-2 py-2 shadow-lg hover:bg-blue-700'>
              Edit
            </button>
          </form>

        </div>
      </div>
    </div>
  )
}

export default EditResumeUser