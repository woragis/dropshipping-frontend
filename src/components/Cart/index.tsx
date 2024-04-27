import { useEffect, useState } from 'react'
import { CartProduct } from '../Product'
import { backendUriPrefix } from '../../config'
// import { CartProductProps } from '../../types/Products'
import { StyledRowComponent } from '../RowComponent/style'
import { CartResponseInterface } from '../../types/Responses'

export const Cart = () => {
  const [cartData, setCartData] = useState<CartResponseInterface[] | undefined>(
    undefined
  )
  const [cartComponent, setCartComponent] = useState<any>(undefined)
  const fetchCart = async () => {
    try {
      const backendUri = backendUriPrefix + 'cart/'
      const token = localStorage.getItem('token')
      const response = await fetch(backendUri, {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${token}`,
        },
      })
      if (response.ok) {
        const responseData: CartResponseInterface[] = await response.json()
        setCartData(responseData)
      } else {
        console.log('Error fetching cart')
      }
    } catch (err) {
      console.log('Error getting user cart: ' + err)
    }
  }
  useEffect(() => {
    fetchCart()
  }, [])
  useEffect(() => {
    if (cartData) {
      const cartItems = cartData.map(
        ({ product, quantity }: CartResponseInterface) => {
          return (
            <CartProduct
              _id={product._id}
              title={product.title}
              price={product.price}
              description={product.description}
              quantity={quantity}
            />
          )
        }
      )
      setCartComponent(cartItems)
    }
  }, [cartData])
  return <StyledRowComponent>{cartComponent}</StyledRowComponent>
}
