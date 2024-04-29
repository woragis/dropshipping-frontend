import { CartProductProps, ProductComponentProps } from '../../types/Products'

// actions
export const ADD_WISHLIST_PRODUCT = 'ADD_WISHLIST_PRODUCT'

export const REMOVE_WISHLIST_PRODUCT = 'REMOVE_WISHLIST_PRODUCT'

export const ADD_CART_PRODUCT = 'ADD_CART_PRODUCT'

export const REMOVE_CART_PRODUCT = 'REMOVE_CART_PRODUCT'

// actions interfaces
interface AddWishlistProductAction {
  type: typeof ADD_WISHLIST_PRODUCT
  payload: ProductComponentProps
}
interface RemoveWishlistProductAction {
  type: typeof REMOVE_WISHLIST_PRODUCT
  payload: ProductComponentProps
}
interface AddCartProductAction {
  type: typeof ADD_CART_PRODUCT
  payload: CartProductProps
}
interface RemoveCartProductAction {
  type: typeof REMOVE_CART_PRODUCT
  payload: CartProductProps
}

// action creators
export const addWishlistProduct = (
  wishlistProduct: ProductComponentProps
): AddWishlistProductAction => ({
  type: ADD_WISHLIST_PRODUCT,
  payload: wishlistProduct,
})

export const removeWishlistProduct = (
  wishlistProduct: ProductComponentProps
): RemoveWishlistProductAction => ({
  type: REMOVE_WISHLIST_PRODUCT,
  payload: wishlistProduct,
})

export const addcartProduct = (
  cartProduct: CartProductProps
): AddCartProductAction => ({
  type: ADD_CART_PRODUCT,
  payload: cartProduct,
})

export const removecartProduct = (
  cartProduct: CartProductProps
): RemoveCartProductAction => ({
  type: REMOVE_CART_PRODUCT,
  payload: cartProduct,
})
