import { useEffect, useState } from 'react'
import { StoreProduct } from '../../components/Product'
import { backendUriPrefix } from '../../config'
export const Wishlist = () => {
  const [wishlistData, setWishlistData] = useState<any>(undefined)
  const [componentBitch, setComponentBitch] = useState<any>(undefined)
  interface WishlistData {
    title: string
    price: number
  }
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
      const responseData: WishlistData[] = await response.json()
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
      if (wishlistData.length > 1) {
        const wishlistProducts = '<h1>No product in your wishlist</h1>'
        setComponentBitch(wishlistProducts)
      }
      const wishlistProducts = wishlistData.map(
        ({ title, price }: WishlistData) => {
          return (
            <StoreProduct _id="" title={title} price={price} description="" />
          )
        }
      )
      setComponentBitch(wishlistProducts)
    }
  }, [wishlistData])
  return <>{componentBitch}</>
}
