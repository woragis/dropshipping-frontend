import { useEffect, useState } from 'react'
import { Cart as CartComponent } from '../../components/Cart'

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
        <h3>Username: {profileData.username}</h3>
        <p>
          <strong>Email: </strong>
          {profileData.email}
        </p>
        <p>
          <strong>Password: </strong>
          {profileData.password}
        </p>
        <div>
          <h4>Cart</h4>
          <CartComponent />
        </div>
        <div>
          <h4>Wishlist</h4>
        </div>
      </>
    )
  }

  useEffect(() => {
    fetchProfile()
  }, [])

  return (
    <main>
      {profileData.email && profileData.email.length >= 5 && <UserInfo />}
    </main>
  )
}
