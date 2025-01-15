import React, { useState, useEffect } from 'react'
import useAuth from '../useAuth/useAuth'
import { currentUser } from '../api/auth'
import LoadingToRedirect from './LoadingToRedirect'

const ProtectUserRoutes = ({ element }) => {
  const [ok, setOk] = useState(false)
  const user = useAuth((state) => state.user)
  const token = useAuth((state) => state.token)

  useEffect(() => {
    if (user && token) {
      currentUser(token)
      .then((res) => {
        setOk(true)
      })
      .catch((err) => {
        console.log(err)
      })
    }
  }, [])

  return ok ? element: <LoadingToRedirect />
}

export default ProtectUserRoutes