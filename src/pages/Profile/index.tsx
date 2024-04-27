import { useEffect, useState } from 'react'
import { Cart as CartComponent } from '../../components/Cart'
import { UserData } from '../../types/Responses'

export const Profile = () => {
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

  const [editMode, setEditMode] = useState<boolean>(false)
  const UserInfo = () => {
    return (
      <>
        <div>
          {!editMode && (
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
              <button onClick={() => setEditMode((prevState) => !prevState)}>
                Edit
              </button>
            </>
          )}
          {editMode && (
            <>
              <form>
                <label htmlFor="username">Username</label>
                <input
                  name="username"
                  id="username"
                  type={'text'}
                  placeholder="Username"
                />
                <label htmlFor="email">Email</label>
                <input
                  name="email"
                  id="email"
                  type={'email'}
                  placeholder="Email"
                />
                <label htmlFor="password">Password</label>
                <input
                  name="password"
                  id="password"
                  type={'password'}
                  placeholder="Password"
                />
              </form>
            </>
          )}
        </div>
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
