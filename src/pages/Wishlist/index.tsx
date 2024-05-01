import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { StoreProduct } from '../../components/Product'
import { RootState } from '../../redux'
import { getWishlist } from '../../redux/products/actions'
import { WishlistResponseInterface } from '../../types/Responses'

export const Wishlist = () => {
  const wishlist = useSelector((state: RootState) => state.wishlist)
  const [componentBitch, setComponentBitch] = useState<any>(undefined)
  const dispatch = useDispatch()
  useEffect(() => {
    console.log('Redux started, fetching wishlist')
    dispatch(getWishlist())
  }, [])
  useEffect(() => {
    const wishlistProducts = wishlist.map(
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
  }, [])
  if (wishlist.length === 0) {
    return (
      <>
        <h1>No items found in your wishlist</h1>
      </>
    )
  }
  return <>{componentBitch}</>
}
