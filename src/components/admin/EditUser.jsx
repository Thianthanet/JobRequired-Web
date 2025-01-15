import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useAuth from '../../useAuth/useAuth'
import { editUser, getUserId } from '../../api/user'
import { toast } from 'react-toastify'

const initialState = {
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    password: ""
}

const EditUser = () => {
    const { id } = useParams()
    const navigete = useNavigate()
    const token = useAuth((state) => state.token)
    const [user, setUser] = useState(initialState)
    const [form, setForm] = useState(initialState)

    const handleToBack = () => {
        navigete(-1)
    }

    useEffect(() => {
        handleGetUser(token)
    }, [])

    const handleGetUser = async (token) => {
        try {
            const res = await getUserId(token, id)
            setUser(res.data)
            setForm(res.data)
        }
        catch (err) {
            console.log(err)
        }
    }

    const handleEditUser = async (e) => {
        e.preventDefault()
        try {
            const response = await editUser(token, id, form)
            toast.success("Edit User Successed!!")
            window.location.reload()
        }
        catch (err) {
            console.log(err)
            toast.error("Edit User Failed!!")
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
                    <h1 className='font-bold text-2xl'>😝Edit User😎</h1>
                </div>
                <div className='border text-center px-3 py-3 rounded-lg'>
                    <form className='flex flex-col space-y-4' onSubmit={handleEditUser}>
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
                            name="username"
                            id="username"
                            placeholder='Username'
                            className='border border-black rounded-lg shadow-lg px-2 py-2'
                            value={form.username}
                            onChange={handleOnChange}
                        />

                        <input
                            type="text"
                            name="firstname"
                            id="firstname"
                            placeholder='Firstname'
                            className='border border-black rounded-lg shadow-lg px-2 py-2'
                            value={form.firstname}
                            onChange={handleOnChange}
                        />

                        <input
                            type="text"
                            name="lastname"
                            id="lastname"
                            placeholder='Lastname'
                            className='border border-black rounded-lg shadow-lg px-2 py-2'
                            value={form.lastname}
                            onChange={handleOnChange}
                        />

                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder='Email'
                            className='border border-black rounded-lg shadow-lg px-2 py-2'
                            value={form.email}
                            onChange={handleOnChange}
                        />

                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder='Password'
                            className='border border-black rounded-lg shadow-lg px-2 py-2'
                            value={form.password}
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

export default EditUser