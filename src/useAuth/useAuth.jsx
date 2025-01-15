import axios from 'axios'
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import _ from 'lodash'
import { userData, userResume } from '../api/user'


const useAuthStore = (set, get) => ({
    user: null,
    token: null,
    products: [],
    resumes: [],
    users: [],

    logout: () => {
        set({
            user: null,
            token: null,
            products: [],
            resumes: [],
        })
    },

    actionLogin: async (form) => {
        const res = await axios.post('http://localhost:5555/api/login', form)
        set({
            user: res.data.payload,
            token: res.data.token
        })
        return res
    },

    actionProduct: async (token) => {
        try {
            const res = await userResume(token, user.id)
            console.log('set resume', res)
            set({ resumes: res.data })
        }   
        catch (err) {
            console.log(err)
        }
    },

    actionUser: async () => {
        try {
            const res = await userData(user.id)
            set({ users: res.data })
        }
        catch (err) {
            console.log(err)
        }
    }

})

const usePersist = {
    name: "use-auth",
    storage: createJSONStorage(() => localStorage),
}

const useAuth = create(persist(useAuthStore, usePersist))

export default useAuth