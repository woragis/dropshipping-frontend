import { ProductComponentProps, CartProductProps } from '../types/Products'

// actions
export const SAVE_PRODUCTS = 'SAVE_PRODUCTS'

export const SAVE_WISHLIST = 'SAVE_WISHLIST'

export const SAVE_CART = ' SAVE_CART'

// actions interfaces
interface SaveProductsAction {
  type: typeof SAVE_PRODUCTS
  payload: ProductComponentProps[]
}

interface SaveCartAction {
  type: typeof SAVE_CART
  payload: CartProductProps[]
}

interface SaveWishlistAction {
  type: typeof SAVE_WISHLIST
  payload: ProductComponentProps[]
}

// actions creators
export const saveProducts = (
  storeProducts: ProductComponentProps[]
): SaveProductsAction => ({
  type: SAVE_PRODUCTS,
  payload: storeProducts,
})

export const saveCart = (cartProducts: CartProductProps[]): SaveCartAction => ({
  type: SAVE_CART,
  payload: cartProducts,
})

export const saveWishlist = (
  wishlistProducts: ProductComponentProps[]
): SaveWishlistAction => ({
  type: SAVE_WISHLIST,
  payload: wishlistProducts,
})
