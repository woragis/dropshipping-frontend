import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { backendUriPrefix } from '../../config'

export const Product = () => {
  const { id } = useParams()
  console.log('id: ', id)
  // interface ProductData {
  // _id: string
  // title: string
  // price: number
  // description: string
  // }
  const [productData, setProductData] = useState<any>(undefined)
  const [productComponent, setProductComponent] = useState<any>(undefined)
  const getProduct = async () => {
    const backendUri = backendUriPrefix + 'products/product'
    const response = await fetch(backendUri, {
      method: 'POST',
      body: JSON.stringify({ _id: id }),
      headers: { 'Content-Type': 'application/json' },
    })
    const responseData = await response.json()
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
  }, productData)
  return <h1>Product, {productComponent}</h1>
}
