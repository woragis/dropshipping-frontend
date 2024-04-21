import React, { useEffect, useState } from 'react'

export const Profile = () => {
  interface UserData {
    username: string
    email: string
    password: string
  }
  const [profileData, setProfileData] = useState<UserData>({} as UserData)
  const fetchProfile = async () => {
    const token = localStorage.getItem('token')
    const backendUri = 'http://localhost:5000/profile'
    const response = await fetch(backendUri, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    })
    const responseData = await response.json()
    if (response.ok) {
      console.log(responseData)
      setProfileData(responseData[0])
    }
  }
  const UserInfo = () => {
    return (
      <>
        <h3>{profileData.email}</h3>
        <p>{profileData.password}</p>
      </>
    )
  }
  useEffect(() => {
    fetchProfile()
  }, [])
  return (
    <main>
      <h1>Hi</h1>
      {profileData.email && profileData.email.length >= 5 && <UserInfo />}
    </main>
  )
}
