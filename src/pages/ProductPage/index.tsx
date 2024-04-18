import { useEffect, useState } from 'react'
import ProductComponent from '../../components/Product'
import { ProductsColumn } from './style'

const ProductsPage = () => {
  interface Product {
    title: string
    price: number
    description: string
  }
  type Response = Product[] | undefined
  // const [productsComponent, setProductsComponent] = useState()
  // const [productsDataComponent, setProductsDataComponent] = useState<Product[]>()
  const [responseData, setResponseData] = useState<any>(undefined)
  const [componentBitch, setComponentBitch] = useState<any>(undefined)

  const ProductsData = async (skip: number = 0, limit: number = 10) => {
    try {
      const backendUri = 'http://localhost:5000/products'
      const response = await fetch(backendUri, {
        method: 'POST',
        body: JSON.stringify({ skip, limit }),
        headers: { 'Content-Type': 'application/json' },
      })
      const products: Response = await response.json()
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
        ({ title, price, description }: Product) => {
          return (
            <ProductComponent
              Title={title}
              Price={price}
              Description={description}
            />
          )
        }
      )
      setComponentBitch(component)
    }
  }, [responseData])
  return (
    <ProductsColumn>
      <button onClick={() => ProductsData()}>Try</button>
      {componentBitch}
    </ProductsColumn>
  )
}
export default ProductsPage
