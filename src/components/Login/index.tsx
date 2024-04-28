import { ChangeEvent, FormEvent, useState } from 'react'
import { backendUriPrefix } from '../../config'
import { LoginButton, StyledLoginComponent } from './style'
import { LoginDataInterface } from '../../types/Forms'
import { LoginResponseInterface } from '../../types/Responses'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/authActions'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
  const [loginData, setLoginData] = useState<LoginDataInterface>(
    {} as LoginDataInterface
  )
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const submitLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      const backendUrl = backendUriPrefix + 'auth/login'
      const response = await fetch(backendUrl, {
        method: 'POST',
        body: JSON.stringify(loginData),
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
      console.error('Registering error \n' + err)
    }
  }

  const handleLoginChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, [event.target.id]: event.target.value })
  }

  return (
    <StyledLoginComponent onSubmit={submitLogin}>
      <h3>Login</h3>
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
      <LoginButton>Enviar</LoginButton>
    </StyledLoginComponent>
  )
}
