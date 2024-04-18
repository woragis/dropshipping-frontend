import { ChangeEvent, FormEvent, useState } from 'react'

export const Login = () => {
  interface LoginDataInterface {
    email: string
    password: string
  }

  const [loginData, setLoginData] = useState<LoginDataInterface>(
    {} as LoginDataInterface
  )

  const submitLogin = async (event: FormEvent<HTMLFormElement>) => {
    console.log('Trying to login')
    event.preventDefault()
    try {
      const backendUrl = 'http://localhost:5000/auth/login'
      const response = await fetch(backendUrl, {
        method: 'POST',
        body: JSON.stringify(loginData),
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
      })
      const responseData = await response.json()
      if (response.ok) {
        const { token } = responseData
        localStorage.setItem('token', token)
        console.log(responseData)
      } else {
        console.log('Error when receiving request')
        console.error(responseData)
      }
    } catch (err) {
      console.error('Registering error \n' + err)
    }
  }

  const handleLoginChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, [event.target.id]: event.target.value })
    console.log(loginData)
  }

  return (
    <form onSubmit={submitLogin}>
      <label htmlFor="email">Email</label>
      <input
        name="email"
        id="email"
        type={'email'}
        placeholder="email"
        onChange={handleLoginChange}
      />
      <label htmlFor="password">Password</label>
      <input
        name="password"
        id="password"
        type={'password'}
        placeholder="password"
        onChange={handleLoginChange}
      />
      <button>Enviar</button>
    </form>
  )
}
