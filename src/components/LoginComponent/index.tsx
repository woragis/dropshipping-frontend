import { ChangeEvent, FormEvent, useState } from 'react'

const LoginComponent = () => {
  interface LoginDataInterface {
    email: string
    password: string
  }

  const [loginData, setLoginData] = useState<LoginDataInterface>(
    {} as LoginDataInterface
  )

  const Login = async (event: FormEvent<HTMLFormElement>) => {
    console.log('Trying to login')
    event.preventDefault()
    try {
      const backendUrl = 'http://localhost:5000/auth/login'
      const response = await fetch(backendUrl, {
        method: 'POST',
        body: JSON.stringify(loginData),
        credentials: 'include',
      })
      const responseData = await response.json()
      console.log(responseData)
    } catch (err) {
      console.error(err)
    }
  }

  const handleLoginChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, [event.target.id]: event.target.value })
    console.log(loginData)
  }

  return (
    <form onSubmit={Login}>
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

export default LoginComponent
