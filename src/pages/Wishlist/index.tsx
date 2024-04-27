import { useEffect, useState } from 'react'
import { StoreProduct } from '../../components/Product'
import { backendUriPrefix } from '../../config'
import { WishlistResponseInterface } from '../../types/Responses'

export const Wishlist = () => {
  const [wishlistData, setWishlistData] = useState<
    WishlistResponseInterface[] | undefined
  >(undefined)
  const [componentBitch, setComponentBitch] = useState<any>(undefined)
  const fetchWishlist = async () => {
    try {
      const token = localStorage.getItem('token')
      const backendUri = backendUriPrefix + 'wishlist'
      const response = await fetch(backendUri, {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${token}`,
        },
      })
      const responseData: WishlistResponseInterface[] = await response.json()
      if (response.ok) {
        setWishlistData(responseData)
      } else {
        console.log('Not good response')
      }
    } catch (err) {
      console.error(err)
    }
  }
  useEffect(() => {
    fetchWishlist()
  }, [])
  useEffect(() => {
    if (wishlistData) {
      const wishlistProducts = wishlistData.map(
        ({ _id, title, price, description }: WishlistResponseInterface) => {
          return (
            <StoreProduct
              _id={_id}
              title={title}
              price={price}
              description={description}
            />
          )
        }
      )
      setComponentBitch(wishlistProducts)
    }
  }, [wishlistData])
  if (wishlistData && wishlistData.length < 1) {
    return (
      <>
        <h1>No items found in your wishlist</h1>
      </>
    )
  }
  return <>{componentBitch}</>
}
