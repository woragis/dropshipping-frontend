import React from 'react'
import InsertProductComponent from '../../components/InsertProductComponent'
import LoginComponent from '../../components/LoginComponent'
import ProductComponent from '../../components/Product'
import RegisterComponent from '../../components/RegisterComponent'

export const Home: React.FC = () => {
  return (
    <div>
      <ProductComponent
        Title={'Fone de Ouvido Bluetooth 5.0 tws'}
        Price={59.9}
        Description={'oi'}
      />
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
    </div>
  )
}
