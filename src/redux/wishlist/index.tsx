import { backendUriPrefix } from '../../config'
import { ProductComponentProps } from '../../types/Products'
import { getLoginCookie } from '../auth'
import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST, GET_WISHLIST } from './actions'

const saveWishlist = (wishlist: Array<{}>) => {
  localStorage.setItem('wishlist', JSON.stringify(wishlist))
  console.log('Saving wishlist to local storage')
}

const fetchWishlist = (): ProductComponentProps[] => {
  const { token } = getLoginCookie()
  try {
    const backendUri = backendUriPrefix + 'wishlist'
    fetch(backendUri, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      if (response.ok) {
        response.json().then((data: ProductComponentProps[]) => {
          console.log('fetching wishlist on server')
          console.log('now saving wishlist on local storage')
          saveWishlist(data)
          return data
        })
        return []
      }
    })
    return []
  } catch (err) {
    console.error(err)
    return []
  }
}

const getWishlist = (): ProductComponentProps[] => {
  const wishlist = localStorage.getItem('wishlist')
  if (wishlist) {
    return JSON.parse(wishlist)
  }
  return []
}

const addWishlistProduct = (product: ProductComponentProps) => {
  const wishlist = getWishlist()
  if (wishlist.length > 0) {
    wishlist.push(product)
    saveWishlist(wishlist)
  }
}

const removeWishlistProduct = (product: ProductComponentProps) => {
  const wishlist = getWishlist()
  if (wishlist.length > 0) {
    let newWishlist = wishlist.filter(
      (item: ProductComponentProps) => item._id !== product._id
    )
    saveWishlist(newWishlist)
  }
}

const initialState: ProductComponentProps[] = []

interface WishlistPayload {
  type:
    | typeof ADD_TO_WISHLIST
    | typeof REMOVE_FROM_WISHLIST
    | typeof GET_WISHLIST
  payload: ProductComponentProps
}

const wishlistReducer = (
  state: ProductComponentProps[] = initialState,
  action: WishlistPayload = {} as WishlistPayload
): ProductComponentProps[] => {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      addWishlistProduct(action.payload)
      return [...state, action.payload]
    case REMOVE_FROM_WISHLIST:
      removeWishlistProduct(action.payload)
      return state.filter((item) => item._id !== action.payload._id)
    case GET_WISHLIST:
      console.log('Getting local storage wishlist')
      const storedWishlist = getWishlist()
      if (storedWishlist.length === 0) {
        console.log('Fetching server wishlist')
        const serverWishlist = fetchWishlist()
        return [...state, ...serverWishlist]
      } else {
        return [...state, ...storedWishlist]
      }

    default:
      return state
  }
}

export default wishlistReducer
