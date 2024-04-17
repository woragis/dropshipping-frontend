import { FormEvent, FormEventHandler } from 'react'

const LoginComponent = () => {
  function Login(event: SubmitEvent) {
    event.preventDefault()
    try {
      const backendUrl = 'http://localhost:5000/auth/login'
      fetch(backendUrl, {})
    } catch (err) {
      console.error(err)
    }
  }
  return (
    <form onSubmit={(e) => Login(e)}>
      <label htmlFor="email">Email</label>
      <input name="email" id="email" type={'email'} placeholder="email" />
      <label htmlFor="password">Password</label>
      <input
        name="password"
        id="password"
        type={'password'}
        placeholder="password"
      />
      <button>Enviar</button>
    </form>
  )
}

export default LoginComponent
