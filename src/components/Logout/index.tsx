import React from 'react'

export const Logout = () => {
  const logout = async () => {
    localStorage.removeItem('token')
  }
  return <button onClick={logout}>Logout</button>
}
