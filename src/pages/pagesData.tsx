import { Pages } from '../types/Pages'
import { About } from './About'
import { Admin } from './Admin'
import { Home } from './Home'
import { Product } from './Product'
import { Products } from './Products'
import { Profile } from './Profile'
import { Register } from './Register'
import { Login } from './Login'
import { Cart } from './Cart'
import { Wishlist } from './Wishlist'

export const pagesData: Pages[] = [
  { title: 'about', path: '/about', element: <About /> }, // 0
  { title: 'admin', path: '/admin', element: <Admin /> }, // 1
  { title: 'home', path: '/', element: <Home /> }, // 2
  { title: 'product', path: '/product/:id', element: <Product /> }, // 3
  { title: 'products', path: '/products', element: <Products /> }, // 4
  { title: 'profile', path: '/profile', element: <Profile /> }, // 5
  { title: 'register', path: '/register', element: <Register /> }, // 6
  { title: 'login', path: '/login', element: <Login /> }, // 7
  { title: 'cart', path: '/cart', element: <Cart /> }, // 8
  { title: 'wishlist', path: '/wishlist', element: <Wishlist /> }, // 9
]

export const navPages: Pages[] = [pagesData[2], pagesData[0]]

export const unloggedUserPages: Pages[] = [pagesData[6], pagesData[7]]

export const loggedUserPages: Pages[] = [
  pagesData[5],
  pagesData[8],
  pagesData[9],
]

export const adminUserPages: Pages[] = [pagesData[1]]
