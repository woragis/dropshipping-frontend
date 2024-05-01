import {
  ADD_WISHLIST_PRODUCT,
  REMOVE_WISHLIST_PRODUCT,
  ADD_CART_PRODUCT,
  REMOVE_CART_PRODUCT,
} from './actions'

interface ProductState {
  _id: string
  title: string
  price: number
  quantity?: number
  description: string
  wishlist?: boolean
}

const initialState = {} as ProductState

interface ProductPayload {
  type:
  | typeof ADD_WISHLIST_PRODUCT
  | typeof REMOVE_WISHLIST_PRODUCT
  | typeof ADD_CART_PRODUCT
  | typeof REMOVE_CART_PRODUCT
  payload: ProductState
}

const productReducer = (
  state: ProductState = initialState,
  action: ProductPayload = {} as ProductPayload
): ProductState => {
  switch (action.type) {
    case ADD_WISHLIST_PRODUCT:
      return state
    default:
      return state
  }
}

export default productReducer
