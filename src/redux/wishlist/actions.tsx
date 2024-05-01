export const ADD_TO_WISHLIST = 'ADD_TO_WISHLIST'

export const REMOVE_FROM_WISHLIST = 'REMOVE_FROM_WISHLIST'

export const GET_WISHLIST = 'GET_WISHLIST'

interface WishlistProduct {
  _id: string
  title: string
  price: number
  description: string
}

interface AddToWishlistAction {
  type: typeof ADD_TO_WISHLIST
  payload: WishlistProduct
}

interface RemoveFromWishlistAction {
  type: typeof REMOVE_FROM_WISHLIST
  payload: WishlistProduct
}

interface GetWishlistAction {
  type: typeof GET_WISHLIST
}

export const addToWishlist = (
  product: WishlistProduct
): AddToWishlistAction => ({
  type: ADD_TO_WISHLIST,
  payload: product,
})

export const removeFromWishlist = (
  product: WishlistProduct
): RemoveFromWishlistAction => ({
  type: REMOVE_FROM_WISHLIST,
  payload: product,
})

export const getWishlist = (): GetWishlistAction => ({
  type: GET_WISHLIST,
})
