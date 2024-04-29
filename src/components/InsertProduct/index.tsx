import { ChangeEvent, FormEvent, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { backendUriPrefix } from '../../config'
import { RootState } from '../../redux'
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
  const navigate = useNavigate()
  const { token, admin } = useSelector((state: RootState) => state.auth)
  const insertProduct = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!admin) {
      return navigate('/')
    }
    try {
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
      navigate('/products/product/' + responseData._id)
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
