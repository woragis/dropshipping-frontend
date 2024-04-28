import { combineReducers, createStore } from 'redux'
// import { devToolsEnhancer } from 'redux-devtools-extension'
import authReducer from './authReducer'
import productsReducer from './productsReducer'

/* Create root reducer, containing all features of the application */
const rootReducer = combineReducers({
  auth: authReducer,
  products: productsReducer,
})

const store = createStore(rootReducer)

export default store

export type RootState = ReturnType<typeof rootReducer>
