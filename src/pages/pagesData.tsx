import { Home } from './Home'
import { About } from './About'
import { AdminPage } from './AdminPage'

import { Pages } from '../types/Pages'

export const pagesData: Pages[] = [
  { title: 'home', path: '/', element: <Home /> },
  { title: 'about', path: '/about', element: <About /> },
  { title: 'admin', path: '/admin', element: <AdminPage /> },
]
