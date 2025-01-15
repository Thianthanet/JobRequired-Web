import axios from "axios";

export const createResume = async (token, form) => await axios.post('http://localhost:5555/api/create',
    form, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
)

export const updateResume = async (token, id, form) => await axios.put('http://localhost:5555/api/update/' + id, form,
    {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
)

export const deleteResume = async (token, id) => await axios.delete('http://localhost:5555/api/delete/' + id, 
    {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
)

export const countProducts = async (token) => await axios.get('http://localhost:5555/api/countProduct',
    {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
)