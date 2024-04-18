import React from 'react'
import InsertProductComponent from '../../components/InsertProductComponent'
import LoginComponent from '../../components/LoginComponent'
import RegisterComponent from '../../components/RegisterComponent'
import TestBody from '../../components/Test'
import ProductsPage from '../ProductPage'

export const Home: React.FC = () => {
  return (
    <div>
      <h1>This are our products</h1>
      <ProductsPage />
      <br />
      <br />
      <h3>Login</h3>
      <LoginComponent />
      <br />
      <br />
      <hr />
      <h3>Register</h3>
      <RegisterComponent />
      <br />
      <br />
      <hr />
      <h3>Create Product</h3>
      <InsertProductComponent />
      <br />
      <br />
      <hr />
      <h3>Test body</h3>
      <TestBody />
    </div>
  )
}
