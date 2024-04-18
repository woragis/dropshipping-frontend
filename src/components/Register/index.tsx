import { ChangeEvent, FormEvent, useState } from 'react'

export const Register = () => {
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
      console.error('Loging error \n' + err)
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
