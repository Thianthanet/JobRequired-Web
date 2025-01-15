import React, { useEffect, useState } from 'react'
import useAuth from '../useAuth/useAuth'
import { currentAdmin } from '../api/auth'
import LoadingToRedirect from './LoadingToRedirect'

const ProtectAdminRoutes = ({ element }) => {
    const [ok, setOk] = useState(false)
    const user = useAuth((state) => state.user)
    const token = useAuth((state) => state.token)

    useEffect(() => {
      if (user && token) {
        currentAdmin(token)
        .then((res) => {
          setOk(true)
        })
        .catch((err) => {
          console.log(err)
        })
      }
    }, [])

    return ok ? element : <LoadingToRedirect />
}

export default ProtectAdminRoutes