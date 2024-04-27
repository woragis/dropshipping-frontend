import { FC, useEffect, useState } from 'react'
import { RowComponent } from '../RowComponent'
import { CartProduct } from '../Product'
import { backendUriPrefix } from '../../config'
import { CartProductProps } from '../../types/Products'

export const Cart = () => {
  const [cartData, setCartData] = useState<any>(undefined)
  const [cartComponent, setCartComponent] = useState<any>(undefined)
  const fetchCart = async () => {
    try {
      const backendUri = backendUriPrefix + 'product/'
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
      const cartItems = cartData.map(
        ({ _id, title, price, quantity }: CartProductProps) => {
          return (
            <CartProduct
              _id={_id}
              title={title}
              price={price}
              quantity={quantity}
            />
          )
        }
      )
      setCartComponent(cartItems)
    }
  }, [cartData])
  const CartComponent: FC = () => {
    return <>{cartComponent}</>
  }
  return <RowComponent children={<CartComponent />} />
}
