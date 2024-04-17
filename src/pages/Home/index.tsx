import React from 'react'
import ProductComponent from '../../components/Product'

export const Home: React.FC = () => {
  return (
    <div>
      <ProductComponent
        Title={'Fone de Ouvido Bluetooth 5.0 tws'}
        Price={59.9}
        Description={'oi'}
      />
    </div>
  )
}
