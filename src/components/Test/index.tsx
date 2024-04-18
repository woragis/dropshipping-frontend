import { FormEvent } from 'react'

export const TestBody = () => {
  const testBody = {
    name: 'Jezreel',
    age: 20,
    sex: 'man',
    likes: 'Angeline',
  }

  const Login = async (event: FormEvent<HTMLFormElement>) => {
    console.log('Trying to test')
    event.preventDefault()
    try {
      const backendUrl = 'http://localhost:5000/'
      const response = await fetch(backendUrl, {
        method: 'POST',
        body: JSON.stringify(testBody),
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
      })
      const responseData = await response.json()
      console.log(responseData)
    } catch (err) {
      console.error('Registering error \n' + err)
    }
  }

  return (
    <form onSubmit={Login}>
      <button>Test Body</button>
    </form>
  )
}
