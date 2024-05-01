import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { StoreProduct } from '../../components/Product'
import { RootState } from '../../redux'
import { getWishlist } from '../../redux/products/actions'
import { WishlistResponseInterface } from '../../types/Responses'

export const Wishlist = () => {
  const wishlist = useSelector((state: RootState) => state.wishlist)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getWishlist())
  }, [])
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
  if (wishlist.length === 0) {
    return (
      <>
        <h1>No items found in your wishlist</h1>
      </>
    )
  }
  return <>{wishlistProducts}</>
}
