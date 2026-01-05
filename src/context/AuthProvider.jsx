import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
  const [userData, setUserData] = useState(null)

  useEffect(() => {
    setLocalStorage();
    const { employees, admin } = getLocalStorage()
    setUserData({ employees, admin })   // दोनों values रख सकते हो
  }, [])

  return (
    <AuthContext.Provider value={{ userData, setUserData }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
