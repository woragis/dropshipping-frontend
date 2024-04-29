import { ChangeEvent, FormEvent, useState } from 'react'
import { backendUriPrefix } from '../../config'
import { RegisterButton, StyledRegisterComponent } from './style'
import { RegisterDataInterface } from '../../types/Forms'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/authActions'
import { LoginResponseInterface } from '../../types/Responses'

export const Register = () => {
  const [registerData, setRegisterData] = useState<RegisterDataInterface>(
    {} as RegisterDataInterface
  )
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const register = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      const backendUri = backendUriPrefix + 'auth/register'
      const response = await fetch(backendUri, {
        method: 'POST',
        body: JSON.stringify(registerData),
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
      })
      const responseData: LoginResponseInterface = await response.json()
      if (response.ok) {
        const { token, username, role } = responseData
        dispatch(login(token, username, role === 'admin' ? true : false))
        navigate('/')
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
      <label htmlFor="username">Username</label>
      <input
        name="username"
        id="username"
        type={'text'}
        placeholder="Username"
        value={registerData.username}
        onChange={handleRegisterChange}
      />
      <label htmlFor="email">Email</label>
      <input
        name="email"
        id="email"
        type={'email'}
        placeholder="Email"
        value={registerData.email}
        onChange={handleRegisterChange}
      />
      <label htmlFor="password">Password</label>
      <input
        name="password"
        id="password"
        type={'password'}
        placeholder="Password"
        value={registerData.password}
        onChange={handleRegisterChange}
      />
      <RegisterButton>Enviar</RegisterButton>
    </StyledRegisterComponent>
  )
}
