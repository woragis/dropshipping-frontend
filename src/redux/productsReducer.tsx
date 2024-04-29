import { CartProductProps, ProductComponentProps } from '../types/Products'
import { SAVE_PRODUCTS, SAVE_CART, SAVE_WISHLIST } from './productsActions'

export const getStoreProducts = () => {
  const products = localStorage.getItem('products')
  if (products) {
    return JSON.parse(products)
  }
}

export const saveStoreProducts = (products: ProductState[]) => {
  localStorage.setItem('products', JSON.stringify(products))
}

interface ProductState {
  _id: string
  title: string
  price: number
  quantity?: number
  description: string
  favorite?: boolean
}

const initialState: ProductState[] = []

interface ProductsPayload {
  type: typeof SAVE_PRODUCTS | typeof SAVE_CART | typeof SAVE_WISHLIST
  payload: ProductComponentProps[] | CartProductProps[]
}

const productsReducer = (
  state: ProductState[] = initialState,
  action: ProductsPayload = {} as ProductsPayload
): ProductState[] => {
  switch (action.type) {
    case SAVE_PRODUCTS:
      saveStoreProducts(action.payload)
      return [...state, ...action.payload]
    case SAVE_CART:
      return [...state, ...action.payload]
    case SAVE_WISHLIST:
      return state
    default:
      return state
  }
}

export default productsReducer

/*
Salvar Produtos da loja:
produto: {_id, title, price, description}

Salvar Produtos do carrinho:
produto: {_id, quantity}
  adicionar produto ao carrinho:
    carrinho.push(products.find(_id))
    carrinho[item].quantity += 1
  remover do carrinho
    carrinho[item].quantity -=1
    if (0) {
      carrinho[item].remove()
    }
Salvar Produtos da wishlist:
produto: {_id}
  adicionar produto ao wishlist:
    wishlist.push(produtos.find(_id))
  remover produto da wishlist:
    wishlist.remove(produtos._id)
*/
