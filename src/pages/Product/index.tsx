import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { backendUriPrefix } from '../../config'
import { ProductResponseInterface } from '../../types/Responses'

export const Product = () => {
  const { id } = useParams()
  const [productData, setProductData] = useState<
    ProductResponseInterface | undefined
  >(undefined)
  const [productComponent, setProductComponent] = useState<any>(undefined)
  const getProduct = async () => {
    const backendUri = backendUriPrefix + 'products/product'
    const response = await fetch(backendUri, {
      method: 'POST',
      body: JSON.stringify({ _id: id }),
      headers: { 'Content-Type': 'application/json' },
    })
    const responseData: ProductResponseInterface = await response.json()
    if (response.ok) {
      setProductData(responseData)
    } else {
      console.log('error getting product')
    }
  }
  useEffect(() => {
    getProduct()
  }, [])
  useEffect(() => {
    if (productData) {
      const newComponent = () => {
        return (
          <div>
            <small>{productData._id}</small>
            <br />
            <h4>{productData.title}</h4>
            <p>{productData.price}</p>
            <p>{productData.description}</p>
          </div>
        )
      }
      setProductComponent(newComponent)
    }
  }, productData as undefined)
  return <h1>Product, {productComponent}</h1>
}
