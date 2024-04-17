import { ChangeEvent, FormEvent, useState } from 'react'

const RegisterComponent = () => {
  interface RegisterDataInterface {
    email: string
    password: string
  }

  const [registerData, setRegisterData] = useState<RegisterDataInterface>(
    {} as RegisterDataInterface
  )

  const register = async (event: FormEvent<HTMLFormElement>) => {
    console.log('Trying to register')
    event.preventDefault()
    try {
      const backendUrl = 'http://localhost:5000/auth/register'
      const response = await fetch(backendUrl, {
        method: 'POST',
        body: JSON.stringify(registerData),
        credentials: 'include',
      })
      const responseData = await response.json()
      console.log(responseData)
    } catch (err) {
      console.error(err)
    }
  }

  const handleRegisterChange = (event: ChangeEvent<HTMLInputElement>) => {
    setRegisterData({ ...registerData, [event.target.id]: event.target.value })
    console.log(registerData)
  }

  return (
    <form onSubmit={register}>
      <label htmlFor="email">Email</label>
      <input
        name="email"
        id="email"
        type={'email'}
        placeholder="email"
        onChange={handleRegisterChange}
      />
      <label htmlFor="password">Password</label>
      <input
        name="password"
        id="password"
        type={'password'}
        placeholder="password"
        onChange={handleRegisterChange}
      />
      <button>Enviar</button>
    </form>
  )
}

export default RegisterComponent
