import { InsertProduct } from '../../components/InsertProduct'
import { Login } from '../../components/Login'
import { Register } from '../../components/Register'
import { TestBody } from '../../components/Test'

export const Home: React.FC = () => {
  return (
    <div>
      <h1>This are our products</h1>
      <br />
      <br />
      <h3>Login</h3>
      <Login />
      <br />
      <br />
      <hr />
      <h3>Register</h3>
      <Register />
      <br />
      <br />
      <hr />
      <h3>Create Product</h3>
      <InsertProduct />
      <br />
      <br />
      <hr />
      <h3>Test body</h3>
      <TestBody />
    </div>
  )
}
