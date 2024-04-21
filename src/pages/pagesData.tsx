import { Pages } from '../types/Pages'
import { About } from './About'
import { Admin } from './Admin'
import { Home } from './Home'
import { Product } from './Product'
import { Products } from './Products'
import { Profile } from './Profile'

export const pagesData: Pages[] = [
  { title: 'about', path: '/about', element: <About /> },
  { title: 'admin', path: '/admin', element: <Admin /> },
  { title: 'home', path: '/', element: <Home /> },
  { title: 'product', path: '/product/:id', element: <Product /> },
  { title: 'products', path: '/products', element: <Products /> },
  { title: 'profile', path: '/profile', element: <Profile /> },
]

export const navPages: Pages[] = [
  pagesData[2],
  pagesData[4],
  pagesData[1],
  pagesData[0],
  pagesData[5],
]
