import { useEffect, useState } from 'react'
import { AdminProduct, StoreProduct } from '../../components/Product'
import { ProductComponentProps } from '../../types/Products'
import { ProductResponseInterface } from '../../types/Responses'
import { StyledProducts } from './style'

export const Products = () => {
  const [responseData, setResponseData] = useState<
    ProductResponseInterface[] | undefined
  >(undefined)
  const [componentBitch, setComponentBitch] = useState<any>(undefined)

  const ProductsData = async (skip: number = 0, limit: number = 10) => {
    try {
      const backendUri = 'http://localhost:5000/products'
      const response = await fetch(backendUri, {
        method: 'POST',
        body: JSON.stringify({ skip, limit }),
        headers: { 'Content-Type': 'application/json' },
      })
      const products: ProductResponseInterface[] = await response.json()
      if (response.ok) {
        setResponseData(products)
      } else {
        console.log('Error while getting products')
        return undefined
      }
    } catch (err) {
      console.error(err)
      return undefined
    }
  }
  useEffect(() => {
    ProductsData()
  }, [])
  useEffect(() => {
    if (responseData) {
      const component = responseData.map(
        ({ _id, title, price, description }: ProductComponentProps) => {
          return (
            <StoreProduct
              key={_id}
              _id={_id}
              title={title}
              price={price}
              description={description}
            />
          )
        }
      )
      setComponentBitch(component)
    }
  }, [responseData])
  return <StyledProducts>{componentBitch}</StyledProducts>
}

export const AdminProducts = () => {
  const [responseData, setResponseData] = useState<
    ProductResponseInterface[] | undefined
  >(undefined)
  const [componentBitch, setComponentBitch] = useState<any>(undefined)

  const ProductsData = async (skip: number = 0, limit: number = 10) => {
    try {
      const backendUri = 'http://localhost:5000/products'
      const response = await fetch(backendUri, {
        method: 'POST',
        body: JSON.stringify({ skip, limit }),
        headers: { 'Content-Type': 'application/json' },
      })
      const products: ProductResponseInterface[] = await response.json()
      if (response.ok) {
        // setProductsDataComponent(products)
        setResponseData(products)
      } else {
        console.log('Error while getting products')
        return undefined
      }
    } catch (err) {
      console.error(err)
      return undefined
    }
  }
  useEffect(() => {
    ProductsData()
  }, [])
  useEffect(() => {
    if (responseData) {
      const component = responseData.map(
        ({ _id, title, price, description }: ProductComponentProps) => {
          return (
            <AdminProduct
              key={_id}
              _id={_id}
              title={title}
              price={price}
              description={description}
            />
          )
        }
      )
      setComponentBitch(component)
    }
  }, [responseData])
  return <StyledProducts>{componentBitch}</StyledProducts>
}
