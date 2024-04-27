import { FC, useEffect, useState } from 'react'
import { CartProduct } from '../../components/Product'
import { StyledCartPage } from './style'

export const Cart: FC = () => {
  const [cartData, setCartData] = useState<any>(undefined)
  const [cartComponent, setCartComponent] = useState<any>(undefined)
  const fetchCart = async () => {
    try {
      const backendUri = 'http://localhost:5000/' + 'cart'
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
        const responseData = await response.json()
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
      const cartItems = cartData.map((data: any) => {
        return (
          <CartProduct
            _id={data.product._id}
            title={data.product.title}
            price={data.product.price}
            quantity={data.quantity}
          />
        )
      })
      setCartComponent(cartItems)
    }
  }, [cartData])
  if (cartData && cartData.length < 1) {
    return (
      <StyledCartPage>
        <h1>No items found in your cart</h1>
      </StyledCartPage>
    )
  }
  return (
    <StyledCartPage>
      <div>{cartComponent}</div>
    </StyledCartPage>
  )
}
