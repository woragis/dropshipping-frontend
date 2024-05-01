import { backendUriPrefix } from '../../config'
import { ProductComponentProps } from '../../types/Products'
import { SAVE_PRODUCTS, GET_PRODUCTS, FETCH_PRODUCTS } from './actions'

export const saveStoreProducts = (products: ProductState[]) => {
  console.log('Saved Products through redux')
  localStorage.setItem('products', JSON.stringify(products))
}
export const getStoreProducts = (): ProductState[] => {
  const products = localStorage.getItem('products')
  if (products) {
    return JSON.parse(products)
  }
  return []
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
  type: typeof SAVE_PRODUCTS | typeof GET_PRODUCTS | typeof FETCH_PRODUCTS
  payload: any
}
const fetchProducts = (): ProductComponentProps[] => {
  console.log('Calling redux, to fetch products from server')
  try {
    const backendUri = backendUriPrefix + 'products'
    fetch(backendUri, {
      method: 'POST',
      body: JSON.stringify({ skip: 0, limit: 15 }),
      headers: { 'Content-Type': 'application/json' },
    }).then((response) => {
      if (response.ok) {
        response.json().then((data: ProductComponentProps[]) => {
          saveStoreProducts(data)
          return data
        })
      }
    })
    return []
  } catch (err) {
    console.log('Error getting products from server\n' + err)
    return []
  }
}

const productsReducer = (
  state: ProductState[] = initialState,
  action: ProductsPayload = {} as ProductsPayload
): ProductComponentProps[] => {
  switch (action.type) {
    case SAVE_PRODUCTS:
      console.log('Saving Products in Local Storage')
      saveStoreProducts(action.payload)
      return [...state, ...action.payload]
    case GET_PRODUCTS:
      console.log('Fetching Products in Local Storage')
      const storedProducts = getStoreProducts()
      if (storedProducts.length > 0) {
        console.log('Products Found in Local Storage: ', storedProducts)
        return [...state, ...storedProducts]
      } else {
        console.log('Product NOT Found in Local Storage')
        const serverProducts = fetchProducts()
        return [...state, ...serverProducts]
      }
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
*
*
*
* Novo planejamento:
* src/pages/Products
* useEffect(() => {
*   dispatch(getProducts())
*   // try to get localstorage
*   // if !localstorage => fetch
*   // save fetched resources
* })
*/
