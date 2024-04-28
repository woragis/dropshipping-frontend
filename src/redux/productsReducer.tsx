import { CartProductProps, ProductComponentProps } from '../types/Products'
import { SAVE_PRODUCTS, SAVE_CART, SAVE_WISHLIST } from './productsActions'

// export const getStoreProducts = () => { }
// export const roducts = () => { }
// export const getStoreProducts = () => { }

interface ProductState {
  _id: string
  title: string
  price: number
  quantity?: number
  description: string
}

const initialState = {
  _id: '',
  title: '',
  price: 0,
  quantity: 0,
  description: '',
}

interface ProductsPayload {
  type: typeof SAVE_PRODUCTS | typeof SAVE_CART | typeof SAVE_WISHLIST
  payload: ProductComponentProps[] | CartProductProps[]
}

const productsReducer = (
  state: ProductState = initialState,
  action: ProductsPayload = {} as ProductsPayload
) => {
  switch (action.type) {
    case SAVE_PRODUCTS:
      return state
    case SAVE_CART:
      return state
    case SAVE_WISHLIST:
      return state
    default:
      return state
  }
}

export default productsReducer
