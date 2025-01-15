import axios from "axios";

export const userData = async (token, id) => await axios.get('http://localhost:5555/api/userData/' + id,
    {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
)

export const userResume = async (token, id) => await axios.get('http://localhost:5555/api/getResume/' + id,
    {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
)

export const resumeId = async (token, id) => await axios.get('http://localhost:5555/api/resumeID/' + id, 
    {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
)

export const getUser = async (token) => await axios.get('http://localhost:5555/api/userAll',
    {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
)

export const deleteUser = async (token, id) => await axios.delete('http://localhost:5555/api/deleteUser/' + id,
    {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
)

export const changeUserRole = async (token, value) => await axios.put('http://localhost:5555/api/changRole', value,
    {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
)

export const changeUserStatus = async (token, value) => await axios.put('http://localhost:5555/api/changStatus', value,
    {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
)

export const editUser = async (token, id, form) => await axios.put('http://localhost:5555/api//updateUser/' + id, form,
    {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
)

export const getUserId = async (token, id) => await axios.get('http://localhost:5555/api/userId/' + id,
    {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
)

export const countUser = async (token) => await axios.get('http://localhost:5555/api/count',
    {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
)