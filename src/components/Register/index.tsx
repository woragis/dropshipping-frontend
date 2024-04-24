import { ChangeEvent, FormEvent, useState } from 'react'
import { backendUriPrefix } from '../../config'
import { RegisterButton, StyledRegisterComponent } from './style'

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
      const backendUri = backendUriPrefix + 'auth/register'
      const response = await fetch(backendUri, {
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
    <StyledRegisterComponent onSubmit={register}>
      <h3>Register</h3>
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
      <RegisterButton>Enviar</RegisterButton>
    </StyledRegisterComponent>
  )
}
