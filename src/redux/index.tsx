import { combineReducers, createStore } from 'redux'
// import { devToolsEnhancer } from 'redux-devtools-extension'
import authReducer from './auth'
import productReducer from './product/reducer'
import productsReducer from './products'
import wishlistReducer from './wishlist'

/* Create root reducer, containing all features of the application */
const rootReducer = combineReducers({
  auth: authReducer,
  products: productsReducer,
  wishlist: wishlistReducer,
  product: productReducer,
})

const store = createStore(rootReducer)

export default store

export type RootState = ReturnType<typeof rootReducer>
