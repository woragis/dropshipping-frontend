import { ChangeEvent, useEffect, useState } from 'react'
import { backendUriPrefix } from '../../config'
import { EditProductProps, ProductComponentProps } from '../../types/Products'
import {
  ProductDescription,
  ProductInfo,
  ProductPicture,
  ProductPrice,
  ProductTitle,
  StyledProductComponent,
} from './style'

export const Product = ({
  title,
  price,
  description,
}: ProductComponentProps) => {
  return (
    <StyledProductComponent>
      <ProductPicture />
      <ProductInfo>
        <ProductTitle>{title}</ProductTitle>
        <ProductPrice>R$ {price}</ProductPrice>
        <ProductDescription>
          <p>{description}</p>
        </ProductDescription>
      </ProductInfo>
    </StyledProductComponent>
  )
}

export const AdminProduct = ({
  _id,
  title,
  price,
  description,
}: EditProductProps) => {
  const [productData, setProductData] = useState<EditProductProps>(
    {} as EditProductProps
  )
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setProductData({ ...productData, [event.target.id]: event.target.value })
  }
  const getProduct = () => {
    try {
      const backendUri = backendUriPrefix + 'products/'
      fetch(backendUri, {
        method: 'POST',
        body: JSON.stringify({ _id: _id }),
      })
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    getProduct()
  }, [])
  const editProduct = () => {
    try {
      const token = localStorage.getItem('token')
      const backendUri = backendUriPrefix + 'products/edit'
      fetch(backendUri, {
        method: 'PUT',
        body: JSON.stringify(productData),
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${token}`,
        },
      })
    } catch (err) {
      console.log(err)
    }
  }
  const deleteProduct = () => {
    try {
      const token = localStorage.getItem('token')
      const backendUri = backendUriPrefix + 'products/delete'
      fetch(backendUri, {
        method: 'DELETE',
        body: JSON.stringify({ _id: _id }),
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${token}`,
        },
      })
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <StyledProductComponent key={_id}>
      <ProductPicture />
      <ProductInfo>
        <ProductTitle>{title}</ProductTitle>
        <ProductPrice>R$ {price}</ProductPrice>
        <ProductDescription>
          <p>{description}</p>
        </ProductDescription>
        <input type="text" onChange={handleChange} />
        <button onClick={editProduct}>Edit</button>
        <button onClick={deleteProduct}>Delete</button>
      </ProductInfo>
    </StyledProductComponent>
  )
}
