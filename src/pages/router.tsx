import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FooterComponent } from '../components/Footer'
import { Navbar } from '../components/Navbar'

import { pagesData } from './pagesData'

import { Pages } from '../types/Pages'

const AppRouter = () => {
  const routes = pagesData.map(({ title, path, element }: Pages) => {
    return <Route key={title} path={path} element={element} />
  })
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>{routes}</Routes>
      <FooterComponent />
    </BrowserRouter>
  )
}

export default AppRouter
