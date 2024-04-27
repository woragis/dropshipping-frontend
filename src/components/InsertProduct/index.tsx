import { ChangeEvent, FormEvent, useState } from 'react'
import { backendUriPrefix } from '../../config'
import { ProductResponseInterface } from '../../types/Responses'
import {
  CreateProductButton,
  ProductDescription,
  StyledInsertProduct,
} from './style'

export const InsertProduct = () => {
  interface InsertProductDataInterface {
    title: string
    price: number
    description: string
  }

  const [newProductData, setNewProductData] = useState<
    InsertProductDataInterface
  >({} as InsertProductDataInterface)

  const insertProduct = async (event: FormEvent<HTMLFormElement>) => {
    console.log('Trying to insert product')
    event.preventDefault()
    try {
      const token = localStorage.getItem('token')
      const backendUrl = backendUriPrefix + 'products/new'
      const response = await fetch(backendUrl, {
        method: 'POST',
        body: JSON.stringify(newProductData),
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${token}`,
        },
      })
      const responseData: ProductResponseInterface = await response.json()
      console.log('Response:')
      console.log(responseData)
    } catch (err) {
      console.error('Error at function', err)
    }
  }

  const handleInsertProductChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setNewProductData({
      ...newProductData,
      [event.target.id]: event.target.value,
    })
  }

  return (
    <StyledInsertProduct onSubmit={insertProduct}>
      <label htmlFor="title">Title</label>
      <input
        name="title"
        id="title"
        type={'text'}
        placeholder="Product Title"
        onChange={handleInsertProductChange}
      />
      <label htmlFor="price">Price</label>
      <input
        name="price"
        id="price"
        type={'number'}
        placeholder="Product Price"
        onChange={handleInsertProductChange}
      />
      <label htmlFor="description">Description</label>
      <ProductDescription
        name="description"
        id="description"
        placeholder="Product Description"
        onChange={handleInsertProductChange}
      />
      <CreateProductButton>Criar produto</CreateProductButton>
    </StyledInsertProduct>
  )
}
