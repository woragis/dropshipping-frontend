import { ProductComponentProps, CartProductProps } from '../../types/Products'

// actions
export const SAVE_PRODUCTS = 'SAVE_PRODUCTS'
export const GET_PRODUCTS = 'GET_PRODUCTS'
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS'

export const SAVE_WISHLIST = 'SAVE_WISHLIST'

export const SAVE_CART = 'SAVE_CART'

export const GET_WISHLIST = 'GET_WISHLIST'

export const GET_CART = 'GET_CART'

// actions interfaces
interface SaveProductsAction {
  type: typeof SAVE_PRODUCTS
  payload: ProductComponentProps[]
}
interface GetProductsAction {
  type: typeof GET_PRODUCTS
}
interface FetchProductPayload {
  skip: number
  limit: number
}
interface FetchProductsAction {
  type: typeof FETCH_PRODUCTS
  payload: FetchProductPayload
}

export const saveProducts = (
  storeProducts: ProductComponentProps[]
): SaveProductsAction => ({
  type: SAVE_PRODUCTS,
  payload: storeProducts,
})

export const getProducts = (): GetProductsAction => ({
  type: GET_PRODUCTS,
})

export const fetchProduct = (
  skip: FetchProductPayload['skip'],
  limit: FetchProductPayload['limit']
): FetchProductsAction => ({
  type: FETCH_PRODUCTS,
  payload: {
    skip,
    limit,
  },
})

interface SaveCartAction {
  type: typeof SAVE_CART
  payload: CartProductProps[]
}

interface SaveWishlistAction {
  type: typeof SAVE_WISHLIST
  payload: ProductComponentProps[]
}
interface GetWishlistAction {
  type: typeof GET_WISHLIST
}
interface GetCartAction {
  type: typeof GET_CART
}

// actions creators

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

export const getWishlist = (): GetWishlistAction => ({
  type: GET_WISHLIST,
})
export const getCart = (): GetCartAction => ({
  type: GET_CART,
})
